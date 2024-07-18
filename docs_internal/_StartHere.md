
# Nx Monorepo Setup Guide

This guide provides instructions for setting up an Nx monorepo for development, including installing dependencies and running services.

## Prerequisites

Ensure you have `nvm` installed and set up with Node.js version 20:

```bash
nvm use 20
```

## Installation Steps

1. **Install pnpm**:
Since `pnpm@9` is not yet supported in Nx, install the compatible version:

```bash
npm i -g pnpm@8.15.2
```

2. **Install Dependencies**:
With the correct version of `pnpm` installed, proceed to install the project dependencies:

```bash
pnpm i
```


3. **Build Documentation**:
Build documentation:

```bash
npx nx typedoc
```

## Additional Information

For further customization and configuration, refer to the official Nx documentation or the specific README files in each project directory.
