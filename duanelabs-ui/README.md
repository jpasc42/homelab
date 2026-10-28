# DuaneLabs UI (prototype)

Static, responsive dashboard frontend served by Nginx. It is intentionally separate from Homepage.

## Deploy

1. Ensure the external Docker network `web` exists.
2. Build and start:

   ```sh
   docker compose up -d --build
   ```

3. Ensure the Caddyfile contains:

   ```caddy
   labs.jpasc.uk {
       reverse_proxy duanelabs-ui:80
   }
   ```

4. Reload Caddy from the Caddy directory:

   ```sh
   docker compose exec caddy caddy reload --config /etc/caddy/Caddyfile
   ```

The UI currently uses placeholder dashboard statistics. “Configured” indicates a service is listed in the known setup; it is not a live health check. No camera feeds or credentials are connected.
