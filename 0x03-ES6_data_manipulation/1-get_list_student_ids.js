export default function getListStudentIds(objArr) {
  const newArr = [];
  if (!Array.isArray(objArr)) {
    return [];
  }
  objArr.map((obj) => {
    newArr.push(obj.id);
  });
  return newArr;
}
