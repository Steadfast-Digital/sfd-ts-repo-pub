/**
 * Class representing an EVM abstraction error.
 * @class
 * @extends {Error}
 */
export class EvmAbstractionError extends Error {
  /**
   * Creates an instance of EvmAbstractionError.
   * @param {string} message - The error message.
   * @param {string|object|unknown} [details] - Additional details about the error (optional).
   */
  constructor(
    public override message: string,
    public details?: string | object | unknown,
  ) {
    super(message);
    this.name = 'EvmAbstractionError';
    this.details = details;
  }
}

/**
 * Class representing an EVM provider error.
 * @extends {Error}
 */
export class EvmProviderError extends Error {
  /**
   * Creates an instance of EvmProviderError.
   * @param {string} message - The error message.
   * @param {string|object|unknown} [details] - Additional details about the error (optional).
   */
  constructor(
    public override message: string,
    public details?: string | object | unknown,
  ) {
    super(message);
    this.name = 'EvmProviderError';
    this.details = details;
  }
}
