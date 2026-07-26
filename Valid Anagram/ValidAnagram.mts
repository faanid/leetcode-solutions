/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isAnagram(s: string, t: string): boolean {
  const sorts = s.split("").sort().join("");
  const sortt = t.split("").sort().join("");

  if (sorts === sortt) {
    return true;
  }

  return false;
}