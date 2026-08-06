# Homepage

## Purpose

Homepage is the central dashboard for the JPasc Homelab. It provides quick access to self-hosted services, displays system information and acts as the primary landing page for the infrastructure.

## Access

https://home.jpasc.uk

## Docker

Image:
ghcr.io/gethomepage/homepage:latest

Container:
homepage

## Data

Persistent configuration:

- ./config
- ./images

## Dependencies

- Docker socket (container information)
- Caddy (reverse proxy)

## Deployment

```bash
docker compose up -d
```

## Updating

```bash
docker compose pull
docker compose up -d
```

## Notes

- Uses a custom JPasc favicon.
- Homepage is intended to remain lightweight; Grafana provides detailed monitoring.
