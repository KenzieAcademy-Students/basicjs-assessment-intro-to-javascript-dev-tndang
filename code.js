// To run this assignment, right click on index.html in the Visual Studio Code file explorer to the left
// and select "Open with Live Server"

// You can access the story by using the pages array.
// You can find the pages array in story.js
// The first page is at index 0.

let endingPages = [4, 9, 13, 17, 19, 20];
let currentPage = 0;

// Your Code Here.
let endingCheck = function(pageNum) {
    let result;
    for (let i = 0; i < endingPages.length; i++) {
        if (pageNum === endingPages[i]) {
            result = true;
        }
    }
    return result;
}

let printStory = function () {
    let resultString = ``;
    if (currentPage !== 0) {
        resultString += `<p>You turned to page ${currentPage}.</p>`;
        resultString += `<p>${pages[currentPage]}</p>`;
    } else {
        resultString += `<p>${pages[currentPage]}</p>`;
    }
    return resultString;
}

while (currentPage !== null) {
    currentPage = parseInt(currentPage);
    console.log(pages[currentPage]);

    let finalStory = printStory();
    let endCheck = endingCheck(currentPage);

    if (endCheck === true) {
        currentPage = alert(pages[currentPage]);
        document.write(finalStory);
        document.write(`<h2>The End!</h2>`);
        document.write(`<h6>Press "F5" or refresh the page to play again!</h6>`);
        currentPage = null;
    } else { 
        currentPage = prompt(pages[currentPage]);
        document.write(finalStory);
    }
}


