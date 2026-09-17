/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function backspaceCompare(s: string, t: string): boolean {
  let sPointer = s.length - 1;
  let tPointer = t.length - 1;

  let sBackspaceCount = 0;
  let tBackspaceCount = 0;

  while (sPointer >= 0 || tPointer >= 0) {
    while (sPointer >= 0) {
      if (s[sPointer] === "#") {
        sBackspaceCount++;
        sPointer--;
      } else if (sBackspaceCount > 0) {
        sPointer--;
        sBackspaceCount--;
      } else {
        break;
      }
    }

    while (tPointer >= 0) {
      if (t[tPointer] === "#") {
        tBackspaceCount++;
        tPointer--;
      } else if (tBackspaceCount > 0) {
        tPointer--;
        tBackspaceCount--;
      } else {
        break;
      }
    }

    if (sPointer >= 0 && tPointer >= 0) {
      if (s[sPointer] !== t[tPointer]) {
        return false;
      }

      sPointer--;
      tPointer--;
    } else if (sPointer >= 0 || tPointer >= 0) {
      return false;
    }
  }

  return true;
}