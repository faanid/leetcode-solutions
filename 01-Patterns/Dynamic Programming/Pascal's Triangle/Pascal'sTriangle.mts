function generate(numRows: number): number[][] {
  const result: number[][] = [];

  for (let i = 0; i < numRows; i++) {
    const row: number[] = [];

    row[0] = 1;
    row[i] = 1;

    if (i > 1) {
      const previousRow = result[i - 1];

      for (let j = 1; j < i; j++) {
        row[j] = previousRow[j - 1] + previousRow[j];
      }
    }

    result.push(row);
  }

  return result;
}