const courses = ['HTML', 'CSS', 'JAVASCRIPT', 'REACT', 'POSTGRESQL'];

function addCourse(newCourse) {
	courses.push(newCourse);
}

addCourse('MYSQL');
console.log(courses);

// =============================

function removeCourse(name) {
	const courseIndex = courses.indexOf(name);

	courses.splice(courseIndex, 1);
}

removeCourse('JAVASCRIPT');
console.log(courses);

// =============================

function updateCourse(oldName, newName) {
	const courseIndex = courses.indexOf(oldName);

	courses[courseIndex] = newName;
}

updateCourse('MYSQL', 'JAVASCRIPT');
console.log(courses);
