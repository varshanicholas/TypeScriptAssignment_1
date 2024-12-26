//I. Compute average of an array after mapping

function computeAverage<T>(arr: T[], mapFn: (value: T) => number): number {
    const mapped = arr.map(mapFn);
    return mapped.reduce((sum, value) => sum + value, 0) / mapped.length;
}
console.log(computeAverage([1, 2, 3], x => x * 2));

