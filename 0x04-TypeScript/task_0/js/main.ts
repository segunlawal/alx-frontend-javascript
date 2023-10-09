interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Samuel',
  lastName: 'Adelabi',
  age: 28,
  location: 'Nigeria',
};

const student2: Student = {
  firstName: 'Sarah',
  lastName: 'Ngozi',
  age: 28,
  location: 'Nigeria',
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement('table');
table.innerHTML = `
<thead>
<tr>
<th>First_Name</th>
<th>Location</th>
</tr>
</thead>
<tbody id='tbody'>
</tbody>
`;
document.body.appendChild(table);
const tbody = document.getElementById('tbody');

studentsList.forEach((student) => {
  const tableRow = document.createElement('tr');
  tableRow.innerHTML = `
  <td>${student.firstName}</td>
  <td>${student.location}</td>
  `;
  tbody.appendChild(tableRow);
});
