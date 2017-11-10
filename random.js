// An implementation of Von Neumann's pseudorandom number generator using the middle square method.

let numDigits = x => {
  // return the number of digits in integer x
  return Math.floor(Math.log10(Math.abs(x)))+1
}

let middle = (x, n) => {
  // return the middle n digits of integer x
  // if the number of digits in x is odd, lops off an extra end digit
  // to simulate also lopping off a leading 0.
  if (numDigits(x) % 2 != 0) x = Math.floor(x/10);
  while (numDigits(x) > n) {
    x = x % 10**(numDigits(x)-1);
    x = Math.floor(x/10);
  }
  return x;
}

let Random = seed => {
  let n = numDigits(seed);
  return () => {
    seed = middle(seed*seed, n);
    return seed / 10**(n);
  }
}
