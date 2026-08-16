# Duane Homelab

Duane is a Telegram-facing homelab assistant. The current phase establishes a live `/status` monitoring foundation using Prometheus and n8n.

## Current status

The `/status` command is complete and is running against live infrastructure data. It queries Prometheus through n8n and returns a formatted Telegram status message with:

- CPU usage and a per-metric health indicator
- Memory usage and a per-metric health indicator
- Disk usage and a per-metric health indicator
- Host uptime and a per-metric health indicator
- Docker containers running versus expected count
- An overall health state (`Healthy`, `Warning`, or `Critical`)
- A generated issue summary when a metric is unhealthy

The normal healthy output reports that all systems are healthy, alongside the live metric values and Docker status.

## Monitoring architecture

```text
Prometheus (+ exporters/cAdvisor)
        |
        v
     n8n /status workflow
        |
        v
   Telegram /status response
```

Prometheus is the source of truth for the CPU, memory, disk, uptime, and Docker data. n8n retrieves the metrics, evaluates their health, builds the overall status and issue text, then sends the result through Telegram.

## Docker service monitoring

Docker health monitoring now goes beyond a simple container count.

Prometheus' `container_last_seen` metric is queried by Docker Compose service label. The n8n workflow compares the services currently returned by Prometheus with the expected service list. A service which is absent from the query result is reported by name.

Current expected services:

- `kopia`
- `portainer`
- `uptime-kuma`
- `cadvisor`
- `node-exporter`
- `dozzle`
- `prometheus`
- `vaultwarden`
- `grafana`
- `homepage`
- `caddy`
- `n8n`

When healthy, the workflow reports `12/12` and confirms that all Docker containers are running. If, for example, `kopia` is missing, it reports `11/12` and identifies `kopia` as not running. Multiple missing services are listed individually.

The displayed running count is derived from the same missing-service list used for the health result, so the count and diagnostic stay consistent.

## Validation completed

The workflow's warning and critical health behaviour was tested with simulated metric values, then restored to live Prometheus data.

Docker failure identification was also tested safely by temporarily marking `kopia` as missing in the n8n Code node. The test confirmed that the Telegram status can name the missing service. That simulation has been removed; Docker detection is now live and only reports services absent from Prometheus data.

## Current stack

| Service | Current role |
| --- | --- |
| Kopia | Backups |
| Portainer | Container management |
| Uptime Kuma | Availability monitoring |
| cAdvisor | Container metrics for Prometheus |
| Node Exporter | Host metrics for Prometheus |
| Dozzle | Container log viewing |
| Prometheus | Metrics collection and query source |
| Vaultwarden | Password manager |
| Grafana | Metrics dashboards |
| Homepage | Homelab dashboard |
| Caddy | Reverse proxy |
| n8n | Workflow automation and Telegram command handling |

## Next phase

1. Add proactive monitoring and alerts so Duane sends a Telegram message when a container or monitored metric becomes unhealthy, rather than waiting for `/status`.
2. Define alert behaviour: thresholds, severity, repeated-alert suppression, and recovery notifications.
3. Expand Duane beyond monitoring with further Telegram commands and assistant functionality (for example help, reminders, and later AI-backed capabilities).

## Scope note

This README records completed work only. Proactive alerts and the broader Duane command/assistant features are planned next-phase work, not current functionality.

