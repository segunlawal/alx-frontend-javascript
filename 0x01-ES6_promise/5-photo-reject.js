export default function uploadPhoto(fileName) {
  return new Promise.reject(Error(`${fileName} cannot be processed`));
}
