import * as winston from 'winston';

const LEVELS = {
  error: 0,
  warn: 1,
  info: 2,
  debug: 3,
};

function level(level = undefined) {
  if (level && typeof level === 'string' && LEVELS[level] !== undefined) {
    return level;
  }
  const env = process.env['NODE_ENV'] || 'development';
  const isDevelopment = env === 'development';
  return isDevelopment ? 'debug' : 'info';
}

const COLORS = {
  error: 'red',
  warn: 'yellow',
  info: 'green',
  debug: 'blue',
};

winston.addColors(COLORS);

const FORMAT = winston.format.combine(
  winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
  winston.format.colorize({ all: true }),
  winston.format.printf(
    (info) => `${info['timestamp']} - ${info.level}: ${info.message}`,
  ),
);

const TRANSPORTS = [
  new winston.transports.Console(),
  new winston.transports.File({
    filename: 'logs/error.log',
    level: 'error',
  }),
  new winston.transports.File({ filename: 'logs/combined.log' }),
];

const LOGGER = winston.createLogger({
  level: level(),
  levels: LEVELS,
  format: FORMAT,
  transports: TRANSPORTS,
});

export default LOGGER;
