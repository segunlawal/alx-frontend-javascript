export default function hasValuesFromArray(set, arr) {
  const newSet = Array.from(set);
  return arr.every((item) => newSet.includes(item));
}
