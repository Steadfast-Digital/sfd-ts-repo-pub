import { EvmAbstraction } from './abstract-evm';
class EvmAbstractionExample extends EvmAbstraction {
  constructor(networkId: string) {
    super(networkId);
  }
}
describe('abstractEvm', () => {
  it('should work', () => {
    const evm = new EvmAbstractionExample('eth');
    expect(evm).toBeTruthy();
  });
});
