function kidsWithCandies(
  candies: number[],
  extraCandies: number
): boolean[] {
  let max = candies[0];
  const result: boolean[] = [];

  for (let i = 0; i < candies.length; i++) {
    if (max < candies[i]) {
      max = candies[i];
    }
  }

  for (let i = 0; i < candies.length; i++) {
    const total = candies[i] + extraCandies;
    result.push(total >= max);
  }

  return result;
}