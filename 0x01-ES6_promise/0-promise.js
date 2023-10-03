export default function getResponseFromAPI() {
  const b = 4;
  return new Promise((resolve, reject) => {
    if (b == 4) {
      resolve('Promise');
    } else {
      reject();
    }
  });
}
