function isIsomorphic(s: string, t: string): boolean {
  const mapS = new Map<string, string>();
  const mapT = new Map<string, string>();

  for (let i = 0; i < s.length; i++) {
    if (mapS.has(s[i])) {
      if (mapS.get(s[i]) !== t[i]) {
        return false;
      }
    }

    if (mapT.has(t[i])) {
      if (mapT.get(t[i]) !== s[i]) {
        return false;
      }
    }

    mapS.set(s[i], t[i]);
    mapT.set(t[i], s[i]);
  }

  return true;
}