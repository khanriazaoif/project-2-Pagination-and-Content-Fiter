//showPage: This smaller function displays a "page" or a list of ten students based which "page number" the user selected.

//The showPage Function
//This function builds a list of ten students and displays it on the page. The students displayed depends on the page number passed to this function. The function should loop through all the students in the list and determine if each student is on this page. It will show all the students on this page and hide the rest. Here are some ideas for how this could work in code:


let allStudents = document.querySelectorAll('.student-item');


function showPage(pageNumber, allStudents) {
    const upperIndex = (pageNumber * 10) - 1;
    const lowerIndex = (pageNumber * 10) -10;
    // loop through all students in our student list argument
    for(let i = 0; i < allStudents.length; i++) {
    // hide all students on the page 
        allStudents[i].style.display = 'none';
        if( i >= lowerIndex && i <= upperIndex) {
            // show the student
            allStudents[i].style.display = 'block';
        }
  } 
    // if student should be on this page number
} 

 //console.log(hideList);
 console.log(allStudents);
 showPage(6, allStudents);
 

 function appendPageLinks(/* take a student list as an argument */) {
    // determine how many pages for this student list
    // create a page link section
    // "for" every page
    // add a page link to the page link section
    // remove the old page link section from the site
    // append our new page link section to the site
    // define what happens when you click a link (event listener)
    // Use showPage to display the page for the link clicked
    // mark that link as "active"
    
    }