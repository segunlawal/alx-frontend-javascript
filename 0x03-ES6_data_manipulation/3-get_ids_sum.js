export default function getStudentIdsSum(arr) {
  return studentsList.reduce((acc, { id }) => acc + id);
}
