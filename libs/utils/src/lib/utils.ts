export function isValidPackageName(packageName: string): boolean {
  // npm package names must be lowercase and can include dots, underscores, hyphens, and alphanumeric characters
  // Scoped packages can include a single slash between two non-empty terms: @myorg/mypackage
  const packageRegex = /^(?:@[a-z0-9-*~][a-z0-9-*._~]*\/)?[a-z0-9-*~][a-z0-9-.*~]*$/;

  return packageRegex.test(packageName);
}

export function isValidWebSocketUrl(url: string): boolean {
  const wsRegex = /^wss?:\/\//;

  return wsRegex.test(url);
}