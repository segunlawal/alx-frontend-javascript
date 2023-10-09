export default function cleanSet(set, startString) {
  if (!(set instanceof Set) || typeof startString !== 'string') {
    throw new Error('Invalid input');
  }

  const filteredValues = Array.from(set).filter((value) =>
    value.startsWith(startString),
  );
  const cleanedString = filteredValues
    .map((value) => value.slice(startString.length))
    .join('-');
  return cleanedString;
}
