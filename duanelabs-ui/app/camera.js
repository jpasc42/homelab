(() => {
  const cameras = [
    {
      videoId: "backhouseVideo",
      startId: "startBackhouseBtn",
      stopId: "stopBackhouseBtn",
      statusId: "backhouseStatus",
      url: "https://labs.jpasc.uk:8443/backhouse/index.m3u8"
    },
    {
      videoId: "fronthouseVideo",
      startId: "startFronthouseBtn",
      stopId: "stopFronthouseBtn",
      statusId: "fronthouseStatus",
      url: "https://labs.jpasc.uk:8443/fronthouse/index.m3u8"
    }
  ];

  cameras.forEach((camera) => {
    const video = document.getElementById(camera.videoId);
    const startButton = document.getElementById(camera.startId);
    const stopButton = document.getElementById(camera.stopId);
    const status = document.getElementById(camera.statusId);

    if (!video || !startButton || !stopButton || !status) return;

    let hls = null;

    function setStatus(message) {
      status.textContent = message;
    }

    function stopStream(message = "Live view stopped.") {
      if (hls) {
        hls.destroy();
        hls = null;
      }

      video.onplaying = null;
      video.onerror = null;
      video.pause();
      video.removeAttribute("src");
      video.load();

      startButton.disabled = false;
      stopButton.disabled = true;
      setStatus(message);
    }

    async function startStream() {
      startButton.disabled = true;
      stopButton.disabled = false;
      setStatus("Connecting to the camera…");

      if (video.canPlayType("application/vnd.apple.mpegurl")) {
        video.src = camera.url;

        video.onplaying = () => setStatus("Live view playing.");
        video.onerror = () => {
          stopStream("Could not load the stream. Check the proxy route.");
        };

        try {
          await video.play();
        } catch {
          setStatus("Stream ready. Press Play on the video if needed.");
          startButton.disabled = false;
          stopButton.disabled = true;
        }

        return;
      }

      if (!window.Hls || !Hls.isSupported()) {
        stopStream("This browser does not support HLS playback.");
        return;
      }

      hls = new Hls({
        lowLatencyMode: false,
        xhrSetup: (xhr) => {
          xhr.withCredentials = true;
        }
      });

      hls.on(Hls.Events.ERROR, (_event, data) => {
        if (!data.fatal) return;
        stopStream("Stream unavailable. Check the proxy route and MediaMTX logs.");
      });

      hls.on(Hls.Events.MANIFEST_PARSED, async () => {
        try {
          await video.play();
          setStatus("Live view playing.");
        } catch {
          setStatus("Stream loaded. Press Play on the video to start.");
        }
      });

      hls.loadSource(camera.url);
      hls.attachMedia(video);
    }

    startButton.addEventListener("click", startStream);
    stopButton.addEventListener("click", () => stopStream());
  });
})();
