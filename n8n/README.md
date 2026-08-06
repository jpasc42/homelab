# n8n

n8n is the automation engine of the JPASC Homelab. It provides a low-code workflow platform that connects services together, enabling automation across the infrastructure. As the homelab evolves, n8n will act as the execution layer for **Duane**, allowing the assistant to trigger workflows, interact with external APIs, and automate day-to-day tasks.

---

## Service Information

| Property | Value |
|----------|-------|
| **Category** | Automation |
| **Status** | Production |
| **Container Image** | `docker.n8n.io/n8nio/n8n:latest` |
| **Container Name** | `n8n` |
| **Homepage** | Yes |
| **Reverse Proxy** | Yes (Caddy) |
| **Domain** | `automation.jpasc.uk` |
| **Docker Network** | `web` (External) |
| **Persistent Storage** | `./data` |
| **Configuration** | `.env` |
| **Managed By** | Docker Compose |

---

## Purpose

n8n is responsible for orchestrating automation throughout the homelab.

Rather than services communicating directly with one another, n8n provides a central workflow engine capable of responding to events, executing scheduled tasks, interacting with APIs, and controlling other services.

As development continues, n8n will become the automation layer that powers **Duane**, enabling the assistant to perform actions instead of simply responding with information.

---

## Why n8n?

n8n was chosen because it offers:

- Open-source workflow automation
- Self-hosted deployment
- Large library of integrations
- Support for custom JavaScript logic
- Webhook support
- Scheduling and event-driven workflows
- Docker-friendly deployment

It provides an excellent foundation for building a self-hosted personal automation platform without relying on third-party cloud services.

---

## Architecture

```
                Duane
                  │
                  ▼
                n8n
        ┌────────┼────────┐
        ▼        ▼        ▼
 Telegram    Google APIs   Docker
                 │
        Calendar • Gmail • Tasks
```

As the project grows, additional services and APIs will be connected to n8n, allowing Duane to coordinate tasks across the entire homelab.

---

## Docker Configuration

### Image

```
docker.n8n.io/n8nio/n8n:latest
```

### Docker Compose

n8n is deployed using Docker Compose and configured via an external `.env` file.

The deployment:

- Uses the official n8n image
- Stores workflows and credentials in a persistent data directory
- Connects to the external `web` Docker network
- Loads configuration from environment variables

---

## Environment Variables

Sensitive configuration is stored in `.env` and excluded from Git using `.gitignore`.

Key variables include:

- Hostname
- Authentication credentials
- Encryption key
- Timezone

An accompanying `.env.example` file documents the required variables without exposing secrets.

---

## Reverse Proxy

n8n is exposed through Caddy at:

```
https://automation.jpasc.uk
```

HTTPS certificates are automatically managed by Caddy using Let's Encrypt.

No additional ports are exposed publicly.

---

## Security

Authentication is enabled using n8n's built-in basic authentication.

Credentials are stored outside of version control, while the encryption key protects stored credentials and API tokens.

---

## Persistent Storage

Persistent data is stored within:

```
./data
```

This directory contains:

- Workflows
- Credentials
- Configuration
- SQLite database
- Encryption metadata

Persisting this directory ensures workflows survive container recreation and updates.

---

## Future Role

n8n forms the automation layer of the JPASC Homelab.

Planned integrations include:

- Telegram
- Google Calendar
- Gmail
- Google Tasks
- GitHub
- Docker
- AI services

These workflows will eventually be orchestrated by **Duane**, allowing the assistant to automate routine tasks, monitor infrastructure, and interact with external services.

---

## Updating

Pull the latest image:

```bash
docker compose pull
```

Restart the service:

```bash
docker compose up -d
```

Verify the container is running:

```bash
docker ps
```

---

## Troubleshooting

### Unable to access the web interface

Verify:

- The container is running.
- Caddy is correctly reverse proxying `automation.jpasc.uk`.
- DNS records point to the VPS.

### Permission errors

If n8n cannot write to the mounted data directory, ensure the directory ownership matches the container user:

```bash
sudo chown -R 1000:1000 data
```

### Workflow or credential loss

Ensure the `data` directory is persisted and included in backups.

---

## References

- https://n8n.io/
- https://docs.n8n.io/
- https://hub.docker.com/r/n8nio/n8n
