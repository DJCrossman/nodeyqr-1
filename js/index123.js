const students = ['Ben', 'Sully', 'Amit', 'Ryan', 'Amir', 'David', 'Sali', 'Saba']

for (var i = 0; i < students.length; i++) {
  if (i === 1 || i === 5) {
    console.log(students[i].toUpperCase())
  } else {
    console.log(students[i])
  }
}

console.log(`The students array has ${students.length} items`)