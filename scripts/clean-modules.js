const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

function removeNodeModules(dir) {
  const nodeModulesPath = path.join(dir, 'node_modules');
  if (fs.existsSync(nodeModulesPath)) {
    console.log(`Removing ${nodeModulesPath}`);
    fs.rmSync(nodeModulesPath, { recursive: true, force: true });
  }
}

function removePnpmLockFile(dir) {
  const pnpmLockFilePath = path.join(dir, 'pnpm-lock.yaml');
  if (fs.existsSync(pnpmLockFilePath)) {
    console.log(`Removing ${pnpmLockFilePath}`);
    fs.unlinkSync(pnpmLockFilePath);
  }
}

function cleanDirectory(dir) {
  console.log(`Cleaning ${dir}`);

  // Remove node_modules and pnpm-lock.yaml in the current directory
  removeNodeModules(dir);
  removePnpmLockFile(dir);

  // Recursively clean node_modules in all subdirectories
  const subdirs = fs.readdirSync(dir).filter(subdir => {
    return fs.statSync(path.join(dir, subdir)).isDirectory();
  });

  subdirs.forEach(subdir => {
    cleanDirectory(path.join(dir, subdir));
  });
}

function cleanNxMonorepo(rootDir) {
  // Clean the root directory
  cleanDirectory(rootDir);

  // Clean the apps and libs directories
  const appsDir = path.join(rootDir, 'apps');
  const libsDir = path.join(rootDir, 'libs');

  if (fs.existsSync(appsDir)) {
    fs.readdirSync(appsDir).forEach(app => {
      cleanDirectory(path.join(appsDir, app));
    });
  }

  if (fs.existsSync(libsDir)) {
    fs.readdirSync(libsDir).forEach(lib => {
      cleanDirectory(path.join(libsDir, lib));
    });
  }

  console.log('Cleanup completed!');
}

const rootDir = path.resolve(__dirname, '..'); // Adjust the path as needed
cleanNxMonorepo(rootDir);
