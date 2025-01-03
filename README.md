# Turborepo Monorepo

This repository is a monorepo managed with [pnpm](https://pnpm.io/) and [Turborepo](https://turborepo.org/). It contains multiple applications and packages for a comprehensive development setup.

## Project Structure

```
.
├── apps/
│   ├── web/                    # Dashboard Next.js
│   ├── operator-app/           # App Expo operatore
│   └── manager-app/            # App Expo gestore
├── packages/
│   ├── ui/                     # Componenti UI condivisi
│   ├── core/                   # Logica di business condivisa
│   ├── database/               # Schema e utilities database
│   ├── config/                 # Configurazioni condivise
│   └── types/                  # Type definitions condivise
├── services/
│   ├── auth/                   # Servizio autenticazione
│   └── api/                    # Edge functions e API
├── package.json
├── turbo.json
└── README.md
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [pnpm](https://pnpm.io/)

### Installation

1. Clone the repository:
```sh
  git clone https://github.com/salvatorelaspata/turborepo-smanetting.git
  cd turborepo-smanetting
```

2. Install dependencies:
```sh
  pnpm install
```

### Running the Applications

To run the applications, use the following commands:

- **Web Dashboard (Next.js)**
```sh
  pnpm --filter web dev
```

- **Operator App (Expo)**
```sh
  pnpm --filter operator-app start
```

- **Manager App (Expo)**
```sh
  pnpm --filter manager-app start
```

To run all applications at once, use the following command:

```sh
pnpm dev:all
```

### Building the Applications

To build the applications, use the following commands:

- **Web Dashboard (Next.js)**
```sh
  pnpm --filter web build
```

- **Operator App (Expo)**
```sh
  pnpm --filter operator-app build
```

- **Manager App (Expo)**
```sh
  pnpm --filter manager-app build
```

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.