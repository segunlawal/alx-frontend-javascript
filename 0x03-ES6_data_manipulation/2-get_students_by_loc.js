import getListStudents from './0-get_list_students';

export default function getStudentsByLocation(getListStudents, city) {
  return getListStudents.filter(city);
}
