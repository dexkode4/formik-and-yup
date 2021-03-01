/* eslint-disable react/react-in-jsx-scope */
import { encodePwd } from './utils';

test('Password encryption function works correctly', () => {
  const encoded = encodePwd("Errors in strategy cannot be correct through tactical manoeuvres");
  expect(encoded).toBe("Viilih rm hgizgvtb xzmmlg yv xliivxg gsilfts gzxgrxzo nzmlvfeivh");
  const encoded2 = encodePwd("acp");
  expect(encoded2).toBe("zxk");
});
