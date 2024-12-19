import { describe, expect, it } from 'vitest'

describe('suite name', () => {
  it('foo', () => {
    expect(1).toBe(1);
  })
})



describe('example test', () => {
  it('should handle promise rejection', async () => {
    try {
      await someAsyncFunction();
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
    }
  });
});

function someAsyncFunction() {
  throw new Error('Function not implemented.');
}
