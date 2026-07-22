export function analyseArray(arr) {
  const length = arr.length;
  const average = Number(
    (arr.reduce((sum, active) => sum + active, 0) / arr.length).toFixed(2),
  );
  const min = arr.reduce((acc, curr) => {
    if (curr < acc) {
      acc = curr;
    }

    return acc;
  });
  const max = arr.reduce((acc, curr) => {
    if (curr > acc) {
      acc = curr;
    }

    return acc;
  });

  const obj = {
    average: average,
    length: length,
    min: min,
    max: max,
  };

  return obj;
}
