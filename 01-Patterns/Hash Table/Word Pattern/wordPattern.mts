function wordPattern(pattern: string, s: string): boolean {
  const words = s.split(" ");

  if (pattern.length !== words.length) {
    return false;
  }

  const mapPattern = new Map<string, string>();
  const mapWord = new Map<string, string>();

  for (let i = 0; i < pattern.length; i++) {
    if (mapPattern.has(pattern[i])) {
      if (mapPattern.get(pattern[i]) !== words[i]) {
        return false;
      }
    }

    if (mapWord.has(words[i])) {
      if (mapWord.get(words[i]) !== pattern[i]) {
        return false;
      }
    }

    mapPattern.set(pattern[i], words[i]);
    mapWord.set(words[i], pattern[i]);
  }

  return true;
}