export class EvmAbstractionError extends Error {
  constructor(public override message: string, public details?: string | object | unknown) {
    super(message);
    this.name = 'EvmAbstractionError';
    this.details = details;
  }
}

export class EvmProviderError extends Error {
  constructor(public override message: string, public details?: string | object | unknown) {
    super(message);
    this.name = 'EvmProviderError';
    this.details = details;
  }
}