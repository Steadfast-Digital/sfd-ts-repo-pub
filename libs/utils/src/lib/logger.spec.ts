// tests/logger.test.ts
import Logger from './logger';
import * as winston from 'winston';

jest.mock('winston');

describe('Logger Configuration', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should create a logger with correct development settings', () => {
    process.env['NODE_ENV'] = 'development';
    require('../logger'); // Re-import to trigger the config

    expect(winston.createLogger).toBeCalledWith(expect.objectContaining({
      level: 'debug'
    }));
    expect(winston.transports.Console).toHaveBeenCalled();
    expect(winston.transports.File).toHaveBeenCalledTimes(2); // Because we add two File transports
  });

  it('should create a logger with correct production settings', () => {
    process.env['NODE_ENV'] = 'production';
    require('../logger'); // Re-import to trigger the config

    expect(winston.createLogger).toBeCalledWith(expect.objectContaining({
      level: 'warn'
    }));
  });

  it('checks if the logger methods are callable', () => {
    Logger.info("Test info");
    Logger.warn("Test warn");
    Logger.error("Test error");
    Logger.debug("Test debug");

    expect(Logger.info).toHaveBeenCalledWith("Test info");
    expect(Logger.warn).toHaveBeenCalledWith("Test warn");
    expect(Logger.error).toHaveBeenCalledWith("Test error");
    expect(Logger.debug).toHaveBeenCalledWith("Test debug");
  });
});
