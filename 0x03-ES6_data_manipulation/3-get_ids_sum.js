export default function getStudentIdsSum(studentsList) {
  return studentsList.reduce((acc, { id }) => acc + id);
}
