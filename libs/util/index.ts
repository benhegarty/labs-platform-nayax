export async function promisesBatch(items, limit, fn, outputFn = (batch, res) => res.push(...batch)) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const results: any[] = [];
  for (let start = 0; start < items.length; start += limit) {
    const end = start + limit > items.length ? items.length : start + limit;
    const slicedResults = await Promise.all(items.slice(start, end).map(fn));
    outputFn(slicedResults.flat(), results);
  }
  return results;
}

export function toCapitalCase(str: string): string {
  return str
    .toLowerCase()
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}