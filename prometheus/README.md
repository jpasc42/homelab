# Prometheus

## Purpose

Collects and stores time-series metrics from the homelab.

## Access

https://prometheus.jpasc.uk

## Docker

Image:
prom/prometheus

Container:
prometheus

## Scrape Targets

- Node Exporter
- cAdvisor

## Data

- ./prometheus.yml

## Deployment

```bash
docker compose up -d
```

## Notes

Prometheus is the central metrics database used by Grafana.
