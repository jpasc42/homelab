# Grafana

## Purpose

Visualises metrics collected by Prometheus.

## Access

https://grafana.jpasc.uk

## Docker

Image:
grafana/grafana

Container:
grafana

## Data

- ./data

## Dependencies

- Prometheus

## Dashboards

- Node Exporter Full
- cAdvisor Dashboard

## Deployment

```bash
docker compose up -d
```

## Notes

Current dashboards:

- Host monitoring
- Docker monitoring

The cAdvisor dashboard variables were manually configured:

Host:
- Metric: container_cpu_usage_seconds_total
- Label: instance

Container:
- Metric: container_cpu_usage_seconds_total
- Label: name
