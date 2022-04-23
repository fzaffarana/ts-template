import { hello } from '../src/index';

describe('index', () => {
  describe('.hello', () => {
    it('should say hello to the given name', () => {
      expect(hello('World')).toBe('Hello World');
    });
  });
});
