function to_a(c1 = 'A', c2 = '+') {
  a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_-=+'.split('');
  return (a.slice(a.indexOf(c1), a.indexOf(c2) + 1)); 
}

console.log('Symbols: ', to_a('A', '+'));

console.log('Array length: ', to_a('A', '+').length);

const pass_gen = (length) => {
  let pass = '';
  let a = to_a();
  for (let i = 0; i < length; i++) {
    pass += a[Math.floor(Math.random() * a.length)];
  }
  return pass;
}

console.log('Password 10: ', pass_gen(10));
console.log('Password 15: ', pass_gen(15));


console.log('Password 20: ', pass_gen(20));

let passLength = 10;

console.log('Password 10: ', pass_gen(passLength));

