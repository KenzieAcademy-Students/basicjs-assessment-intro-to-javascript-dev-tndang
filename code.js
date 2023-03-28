// To run this assignment, right click on index.html in the Visual Studio Code file explorer to the left
// and select "Open with Live Server"

// You can access the story by using the pages array.
// You can find the pages array in story.js
// The first page is at index 0.
console.log(pages[0]);

let endingPages = [4, 9, 13, 17, 19, 20];
let currentPage = 0;

// Your Code Here.
currentPage = prompt(pages[0]);

let endingCheck = function(pageNum) {
    for (let i = 0; i <= endingPages.length; i++) {
        return pageNum === endingPages[i];
    }
}

let printStory = function () {
    let theStory = `<p>${pages[currentPage]}</p>`;
    return theStory;
}

while (currentPage !== null) {
    let pageCheck = endingCheck(currentPage);
    console.log(pages[currentPage]);
    if (currentPage !== null && pageCheck !== true) {
        currentPage = prompt(pages[currentPage]);
        document.write(printStory());
    } 
    else if (currentPage === null && pageCheck !== false) {
        document.write = "The End";
    }
    else {
        currentPage = null;
    }
}


