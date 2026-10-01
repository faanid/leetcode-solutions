/**
 * @param {number} n
 * @return {boolean}
 */
function isHappy(n: number): boolean {
  const checkedNum = new Set<number>();

  while (n !== 1) {
    if (checkedNum.has(n)) {
      return false;
    }

    checkedNum.add(n);

    let sum = 0;
    let current = n;

    while (current > 0) {
      const digit = current % 10;
      sum += digit * digit;
      current = Math.floor(current / 10);
    }

    n = sum;
  }

  return true;
}