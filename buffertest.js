const buf = Buffer.from('hello world', 'utf8');
console.log(buf.toString('hex'));
  // prints: 68656c6c6f20776f726c64
console.log(buf.toString('base64'));
  // prints: aGVsbG8gd29ybGQ=
console.log(buf.toString('utf8'));
