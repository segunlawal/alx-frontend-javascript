export default function updateStudentGradeByCity(arr, city, newGrades) {
  const filteredStudents = arr.filter((student) => student.city === city);
  for (const student of filteredStudents) {
    student.grade = 'N/A';
  }
  const updatedStudents = filteredStudents.map((student) => {
    const gradeObject = newGrades.find(
      (grade) => grade.studentId === student.studentId,
    );
    const grade = gradeObject ? gradeObject.grade : 'N/A';
    return { ...student, grade };
  });
  return updatedStudents;
}
