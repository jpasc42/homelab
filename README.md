# JPASC Homelab

A self-hosted Docker environment running on an OVH VPS.

This repository contains all infrastructure required to deploy and manage my personal server and, eventually, my AI assistant **Duane**.

---

## Infrastructure

| Service | Purpose |
|----------|---------|
| Caddy | Reverse Proxy & Automatic HTTPS |
| Homepage | Dashboard |
| Portainer | Docker Management |
| Uptime Kuma | Monitoring & Alerts |
| Fail2Ban | SSH Protection |

---

## Domains

| Domain | Service |
|---------|---------|
| home.jpasc.uk | Homepage |
| portainer.jpasc.uk | Portainer |
| status.jpasc.uk | Uptime Kuma |

---

## Stack

- Ubuntu Server
- Docker
- Docker Compose
- Caddy
- Let's Encrypt
- GitHub
- Fail2Ban

---

## Project Structure

```
docker/
├── caddy/
├── homepage/
├── portainer/
├── uptime-kuma/
└── duane/ (planned)
```

---

## Current Status

### ✅ Infrastructure v1.0

- Docker configured
- Reverse proxy configured
- Automatic HTTPS
- Domain configured
- Internal Docker networking
- Monitoring
- Infrastructure stored in Git

---

## Roadmap

### Phase 1
- [x] Docker
- [x] Homepage
- [x] Portainer
- [x] Uptime Kuma
- [x] Caddy
- [x] Domain
- [x] SSL
- [x] GitHub Repository

### Phase 2
- [ ] Grafana
- [ ] Dozzle
- [ ] Vaultwarden
- [ ] File Browser

### Phase 3
- [ ] Duane Dashboard
- [ ] AI Chat
- [ ] Calendar Integration
- [ ] Task Management
- [ ] Server Automation

---

## Long Term Goal

Create **Duane**, a personal AI operating system capable of managing my server, projects, notes, calendar, reminders and daily workflow from a single interface.
