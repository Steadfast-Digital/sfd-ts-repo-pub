# sfd-ts-repo-pub

[![License](https://img.shields.io/github/license/Steadfast-Digital/sfd-ts-repo-pub)](LICENSE)
[![Issues](https://img.shields.io/github/issues/Steadfast-Digital/sfd-ts-repo-pub)](https://github.com/Steadfast-Digital/sfd-ts-repo-pub/issues)
[![Forks](https://img.shields.io/github/forks/Steadfast-Digital/sfd-ts-repo-pub)](https://github.com/Steadfast-Digital/sfd-ts-repo-pub/network/members)
[![Stars](https://img.shields.io/github/stars/Steadfast-Digital/sfd-ts-repo-pub)](https://github.com/Steadfast-Digital/sfd-ts-repo-pub/stargazers)

A public Nx monorepo maintained by Steadfast Digital, aiming to provide a unified framework for communicating with various blockchains.

## Table of Contents

- [About](#about)
- [Features](#features)
- [Monorepo Structure](#monorepo-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Example](#example)
- [Scripts](#scripts)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## About

This project is an **Nx monorepo** that provides a unified framework for interacting with multiple blockchains. The goal is to simplify blockchain integration by offering consistent APIs and tools, making it easier to build blockchain-enabled applications.

## Features

- **Unified Communication**: Standardized methods to interact with various blockchains.
- **Modular Libraries**: Separate packages for different blockchains and functionalities.
- **Extensible Framework**: Easily add support for new blockchains.
- **Example Applications**: Demonstrations on how to integrate and use the framework.

## Monorepo Structure

The repository is organized using Nx to manage multiple projects:

- **apps**: Contains application projects.
  - `example-nest`: An example NestJS application demonstrating how to initiate and use the framework.
  - `example-app`: An example NextJS application laveraging the API served by example-nest.
- **libs**: Contains reusable libraries.
  - `abstract-core`: Core functionalities and interfaces shared across blockchain implementations.
  - `abstract-evm`: Shared implementation of abstract-core for EVM compatible blockchains.
  - `connector-ethereum`: Ethereum blockchain communication package.
  - `connector-bitcoin`: Bitcoin blockchain communication package.
  - *WIP*

## Installation

To get started, clone the repository and install the dependencies:

```bash
# Clone the repository
git clone https://github.com/Steadfast-Digital/sfd-ts-repo-pub.git

# Navigate into the project directory
cd sfd-ts-repo-pub

# Install Nx CLI globally if you haven't already
npm install -g nx pnpm # If we use npx we don't need to install nx globaly

# Install project dependencies
pnpm install
```

## Usage

### Building the Libraries

Before running any applications, build the necessary libraries:

```bash
# Build all libraries in the project
nx run-many --target=build --all
```

### Running the Example Application

To serve the `example-nest` application to see the framework in action:

```bash
# Serve the example NestJS application
npx nx serve example-nest
```

The application should now be running on `http://localhost:3001/api`.

## Example

An example of how to initiate the framework within an application can be found in [`apps/example-nest/src/main.ts`](https://github.com/Steadfast-Digital/sfd-ts-repo-pub/blob/master/apps/example-nest/src/main.ts).

Here's a brief snippet:

```typescript
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { BlockchainFactory } from '@steadfastdigital/blockchain-factory';
import EthConnector from '@steadfastdigital/connector-ethereum';
import BscConnector from '@steadfastdigital/connector-bsc';
import { initNetworks } from '@steadfastdigital/crypto-assets';
import { config } from 'dotenv';

// Read api keys from .env file
config();
initNetworks();

// Register blockchain connectors
BlockchainFactory.registerConnector('eth', new EthConnector('eth'));
BlockchainFactory.registerConnector('bsc', new BscConnector('bsc'));

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Initialize the blockchain framework
  const blockchainService = app.get(BlockchainService);
  await blockchainService.initialize();

  await app.listen(3000);
}
bootstrap();
```

In this example:

- We import the `BlockchainFactory` from the `@steadfastdigital/blockchain-factory` library.
- We call `initNetworks()` to register api keys that are read from the .env file.
- We register the connectors for the blockchains we want to interact with.
- The service handles communication with the blockchains as defined in the `libs` packages.

## Scripts

The following Nx commands are available:

- **Build All Libraries and Applications**

  ```bash
  npx nx run-many --target=build --all
  ```

- **Serve the Example Application**

  ```bash
  npx nx serve example-nest
  ```

- **Test All Projects**

  ```bash
  npx nx run-many --target=test --all
  ```

- **Lint All Projects**

  ```bash
  npx nx run-many --target=lint --all
  ```

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. **Fork** the repository.
2. **Create a new branch**: `git checkout -b feature/YourFeature`.
3. **Commit your changes**: `git commit -m 'Add your feature'`.
4. **Push to the branch**: `git push origin feature/YourFeature`.
5. **Open a pull request** detailing your changes.

Please ensure your code follows the project's coding standards and include relevant tests.
See [CONTRIBUTING](CONTRIBUTING) [STYLE_GUIDE](STYLE_GUIDE) and [CODE_OF_CONDUCT](CODE_OF_CONDUCT) files for more information.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
