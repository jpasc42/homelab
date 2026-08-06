# JPasc Homelab

Production-style self-hosted infrastructure built with Docker.

The purpose of this project is to build a reliable, documented and monitored platform that will eventually host **Duane** — my personal AI operating system.

---

## Project Structure

```text
docker/
├── caddy/
├── homepage/
├── portainer/
├── vaultwarden/
├── dozzle/
├── uptime-kuma/
├── kopia/
├── node-exporter/
├── prometheus/
├── cadvisor/
├── grafana/
└── duane/ (planned)
```

---

## Current Status

### ✅ Infrastructure v2.0

- Docker-based infrastructure
- Reverse proxy with Caddy
- Automatic HTTPS
- Domain & DNS configured
- Internal Docker networking
- Monitoring stack
- Encrypted off-site backups
- Password management
- Git version controlled
- Service documentation
- Standardised Docker structure

---

## Services

| Service | Purpose |
|----------|---------|
| Homepage | Central dashboard |
| Caddy | Reverse proxy & HTTPS |
| Portainer | Docker management |
| Vaultwarden | Password management |
| Uptime Kuma | Service monitoring |
| Dozzle | Docker log viewer |
| Kopia | Encrypted backups |
| Node Exporter | Host metrics |
| Prometheus | Metrics collection |
| cAdvisor | Docker metrics |
| Grafana | Dashboards & visualisation |

---

## Monitoring Stack

```text
Node Exporter ─┐
               │
cAdvisor ──────┼──► Prometheus ───► Grafana
```

---

## Development Principles

Every service follows the same structure:

```text
service/
├── compose.yml
├── README.md
├── .env.example
└── config/
```

Principles:

- One Docker Compose file per service
- Document every service
- Version control everything
- Reverse proxy where appropriate
- Homepage is the central dashboard
- Keep the stack simple and maintainable

---

## Roadmap

### Phase 1 — Core Infrastructure ✅

- [x] Docker
- [x] Homepage
- [x] Caddy
- [x] Portainer
- [x] Vaultwarden
- [x] Dozzle
- [x] Uptime Kuma
- [x] Kopia
- [x] Node Exporter
- [x] Prometheus
- [x] cAdvisor
- [x] Grafana
- [x] GitHub documentation

---

### Phase 2 — Automation

- [x] n8n
- [ ] PostgreSQL
- [ ] Telegram integration
- [ ] Workflow automation

---

### Phase 3 — Duane

- [ ] Duane backend
- [ ] AI chat
- [ ] Calendar integration
- [ ] Task management
- [ ] Knowledge base
- [ ] Infrastructure awareness
- [ ] Server automation

---

## Long-Term Goal

Build **Duane** — a personal AI operating system capable of managing:

- Projects
- Notes
- Calendar
- Tasks
- Server infrastructure
- Docker containers
- Monitoring
- Automations
- Daily workflow

The homelab is the platform.

Duane is the product.
