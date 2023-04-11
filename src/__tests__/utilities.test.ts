import { HelloMyFirstPackage } from '../utilities';

it('Return a string', () => {
  const result = HelloMyFirstPackage('123');

  expect(result).toBe('Hello 123');
});
