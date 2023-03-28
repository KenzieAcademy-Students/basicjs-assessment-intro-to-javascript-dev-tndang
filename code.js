// To run this assignment, right click on index.html in the Visual Studio Code file explorer to the left
// and select "Open with Live Server"

// You can access the story by using the pages array.
// You can find the pages array in story.js
// The first page is at index 0.

let endingPages = [4, 9, 13, 17, 19, 20];
let currentPage = 0;

// Your Code Here.1
let endingCheck = function(pageNum) {
    for (let i = 0; i <= endingPages.length; i++) {
        return pageNum === endingPages[i];
    }
}

let printStory = function () {
    let resultString = ``;
    if (currentPage === 0) {
        resultString = `<p>${pages[currentPage]}</p>`;
        return resultString;
    } 
    else if (endingCheck() === true) {
            resultString += `<h2>The End</h2>`
    } else {
        resultString += `<p>You turned to page ${currentPage}.</p>`;
        resultString += `<p>${pages[currentPage]}</p>`;
    }
    return resultString;
}

while (currentPage !== null) {
    currentPage = parseInt(currentPage);
    console.log(pages[currentPage]);

    let finalStory = printStory();
    let endCheck = endingCheck(currentPage);

    if (currentPage !== null && endCheck !== true) {
        currentPage = prompt(pages[currentPage]);
        document.write(finalStory);
    } else if (endCheck === true) {
        currentPage = null;
        document.write(finalStory);
    } else {
        document.write(finalStory);
        break;
    }
}


