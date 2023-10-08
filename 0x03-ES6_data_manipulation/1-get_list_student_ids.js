export default function getListStudentIds(objArr) {
  const newArr = [];
  if (!Array.isArray(objArr)) {
    return [];
  }

  return objArr.map((obj) => obj.id);
}
