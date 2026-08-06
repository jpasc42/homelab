# Caddy

## Purpose

Acts as the reverse proxy for all public services. Automatically manages HTTPS certificates using Let's Encrypt.

## Access

Public entry point for all services.

## Docker

Image:
caddy:latest

Container:
caddy

## Data

- ./Caddyfile
- ./data
- ./config

## Dependencies

- Docker
- DNS records

## Deployment

```bash
docker compose up -d
```

## Notes

All public services are routed through Caddy.
