# Nx Package Initialization Guide

Use this guide to initialize a package in your monorepo using the Nx Dev Tools.

## 📚 Table of Contents

- [Prerequisites](#prerequisites)
- [Steps to Initialize Package](#steps-to-initialize-package)
- [Command Explanation](#command-explanation)

## Prerequisites

1. **Nx CLI** - Ensure you have Nx CLI installed. If not, install it using:
```bash
pnpm install -g nx
```

## Steps to Initialize Package

1. **Nx CLI** - Open your terminal and navigate to your monorepo's root directory. Execute the following command:
```bash
pnpx nx generate @nx/js:library --name=playground --unitTestRunner=jest --importPath=@sfd/playground --publishable=true --projectNameAndRootFormat=derived --no-interactive
npx nx generate @nrwl/js:library connector-bitcoin --publishable --importPath=@sfd/connector-bitcoin --unitTestRunner=jest --projectNameAndRootFormat=derived
```

## Command Explanation

- `@nx/js:library`: Indicates that we're generating a JavaScript library.
- `--name=playground`: Specifies the name of the library as "playground".
- `--unitTestRunner=jest`: Selects Jest as the unit test runner.
- `--importPath=@sfd/playground`: Defines the custom import path for the library.
- `--publishable=true`: Flags the library as publishable.
- `--projectNameAndRootFormat=derived`: The root directory and project name are derived based on other options.
- `--no-interactive`: Disables interactive prompts.
