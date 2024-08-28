/* eslint-disable @typescript-eslint/no-var-requires */
import LOGGER from './logger';

describe('Winston Logger Configuration', () => {
  it('should export a logger instance', () => {
    expect(LOGGER).toBeDefined();
    expect(typeof LOGGER.info).toBe('function');
    expect(typeof LOGGER.error).toBe('function');
    expect(typeof LOGGER.warn).toBe('function');
    expect(typeof LOGGER.debug).toBe('function');
  });

  it('should have correct log levels', () => {
    expect(LOGGER.levels).toEqual({
      error: 0,
      warn: 1,
      info: 2,
      debug: 3,
    });
  });

  it('should set the correct log level based on NODE_ENV', () => {
    const originalEnv = process.env['NODE_ENV'];

    process.env['NODE_ENV'] = 'development';
    jest.resetModules();
    const devLogger = require('./logger').default;
    expect(devLogger.level).toBe('debug');

    process.env['NODE_ENV'] = 'production';
    jest.resetModules();
    const prodLogger = require('./logger').default;
    expect(prodLogger.level).toBe('info');

    process.env['NODE_ENV'] = originalEnv;
  });
});
