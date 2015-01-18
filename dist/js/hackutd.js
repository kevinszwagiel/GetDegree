/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//Header information
var major = document.querySelector('#major');
major.value = getMajorFromServer('abc123'); // -> major
var name = document.querySelector('#name');
name.value = getNameFromServer('abc123'); // -> name
var hoursTaken = document.querySelector('#hoursTaken');
hoursTaken = getHoursTakenFromServer('abc123'); // -> Courses Taken
var hoursNeeded = document.querySelector('#hoursRemaining');
hoursRemaining = getHoursRemainingFromServer('abc123'); // -> Courses Left

//Courses to take
var course = document.querySelector('#course');
course.value = getCourse('abc123'); // -> Course Name

