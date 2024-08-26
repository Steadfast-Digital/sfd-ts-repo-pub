import { isValidPackageName } from './utils';

describe('isValidPackageName', () => {
  it('should work', () => {
    const validTestNames = [
      'express',
      'react',
      '@angular/core',
      'lodash',
      'valid-package-name',
      'valid.package.name',
      'valid~package~name',
      '@my-org/my-package',
    ];
    validTestNames.forEach((name) => {
      expect(isValidPackageName(name)).toBe(true);
    });
    const invalidTestNames = [
      '@my-org/my_package',
      ';rm -rf *',
      'invalid package name',
      'invalid_package_name',
      'invalid/package/name',
      'invalid\\package\\name',
      'invalid:package:name',
      'invalid;package;name',
      'invalid package name!',
      'invalid-package-name!',
      'invalid_package_name!',
      'invalid.package.name!',
      'invalid~package~name!',
      'invalid/package/name!',
      'invalid\\package\\name!',
      'invalid:package:name!',
      'invalid;package;name!',
    ];
    invalidTestNames.forEach((name) => {
      expect(isValidPackageName(name)).toBe(false);
    });
  });
});
