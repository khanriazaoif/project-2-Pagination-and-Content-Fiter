//showPage: This smaller function displays a "page" or a list of ten students based which "page number" the user selected.

//The showPage Function
//This function builds a list of ten students and displays it on the page. The students displayed depends on the page number passed to this function. The function should loop through all the students in the list and determine if each student is on this page. It will show all the students on this page and hide the rest. Here are some ideas for how this could work in code:

//Variable allStudents selects the list items with class .student-item
let allStudents = document.querySelectorAll('.student-item');

//function showPage with two arguments, pageNumber and allStudents. There are two variables upperIndex and lowerIndex that take the pageNumber argument and both times 10. Then on upperIndex - 1 and on the lowerIndex -10. For example if you pass the numberal 1 as the pageNumber argument, then upperIndex = (1*10) - 1 and lowerIndex = (1 * 10) -10 which output upperIndex = 9; lowerIndex = 0; This would output the first 10 students.
function showPage(pageNumber, allStudents) {
    const upperIndex = (pageNumber * 10) - 1;
    const lowerIndex = (pageNumber * 10) -10;
    //For loop that checks the length of the list items (amount of student list items) At first it makes allStudents display nothing so they are hidden and then the IF statement looks at whether the index is >= lowerIndex AND index is <= upperIndex. If so then show the list items. So in this case it is showing the first 10 students
    for(let i = 0; i < allStudents.length; i++) {
    allStudents[i].style.display = 'none';
        if( i >= lowerIndex && i <= upperIndex) {
            allStudents[i].style.display = 'block';
        }
  } 
 
} 
//Calling the showPage function, passing the arguments 1 for the pageNumber and allStudents is the document.querySelectorAll('.student-item'); student list items.
 showPage(1, allStudents);
 
//Function appendPageLinks with the argument allStudents which is the list of students
 function appendPageLinks(allStudents) {
    // Variable pages to determine how many pages for this student list
    let pages = Math.ceil(allStudents.length / 10);
    // Variable ul that selects the element ul at index 0
    let ul = document.getElementsByTagName('ul')[0];
    // Variable paginationDiv that is equal to the parentNode of the ul[0]
    let paginationDiv = ul.parentNode;
    // Var div creates a div element
    let div = document.createElement('div');
    // Apend the new div element with class name pagination to the Ul
    paginationDiv.appendChild(div).className = 'pagination';
    // Variable pagination that selects the class pagination that was previously created
    let pagination = document.getElementsByClassName('pagination')[0];
    console.log(pagination);
    // Variable createUl creates a ul element
    let createUl = document.createElement('ul');
    // Variable pagination and as a child node the ul created above
    pagination.appendChild(createUl);

    //For loop that loops over the number of students in your list divided by 10. Create an li element and then add to the Ul element.
    for(let i = 0; i <= allStudents.length/10; i++){
        let createLi = document.createElement('li');
        createUl.appendChild(createLi);
        console.log(createUl);
        let li = document.getElementsByTagName('li');
        console.log(li);
        let a = document.createElement('a');
        a.setAttribute('href','#');
        console.log(a);       
        createLi.appendChild(a);
        a.textContent = [i + 1];
        console.log(createLi);
    }
}
    // Function appendPageLinks with argument allStudents which is the entire list of students.
    appendPageLinks(allStudents);


//**********BELOW IS RANDOM INFORMATION IN NO SPECIFIC ORDER**********//

//**********WHAT THE PAGINATION LINKS SHOULD LOOK LIKE**********//

//     <div class="pagination">
//     <ul>
//       <li>
//         <a class="active" href="#">1</a>
//       </li>
//        <li>
//         <a href="#">2</a>
//       </li>
//        <li>
//         <a href="#">3</a>
//       </li>
//        <li>
//         <a href="#">4</a>
//       </li>
//        <li>
//         <a href="#">5</a>
//       </li>
//     </ul>
//   </div>


//****************

  //console.log(pages);
    // create a page link section
    // "for" every page
    // add a page link to the page link section
    // remove the old page link section from the site
    // append our new page link section to the site
    // define what happens when you click a link (event listener)
    // Use showPage to display the page for the link clicked
    // mark that link as "active"    

    // let divPaginationUl = document.createElement('ul');
    // console.log(divPaginationUl);
    // let paginationUl


      
    // listUl.addEventListener('click', (event) => {
    //     if (event.target.tagName == 'BUTTON') {
    //       let li = event.target.parentNode;
    //       let ul = li.parentNode;
    //       ul.removeChild(li);
    //     }

    //console.log(pages);


    