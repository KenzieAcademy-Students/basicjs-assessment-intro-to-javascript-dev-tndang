// To run this assignment, right click on index.html in the Visual Studio Code file explorer to the left
// and select "Open with Live Server"

// You can access the story by using the pages array.
// You can find the pages array in story.js
// The first page is at index 0.

let endingPages = [4, 9, 13, 17, 19, 20];
let currentPage = 0;

// Your Code Here.
let endingCheck = function(pageNum) { // This function checks if the the current page is an ending page, if so returns True.
    let result;
    for (let i = 0; i <= endingPages.length; i++) {
        if (pageNum === endingPages[i]) {
            result = true;
        }
    }
    return result;
}

let printStory = function() { // This function prints the final story.
    let resultString = ``;
    if (currentPage !== 0) {
        resultString += `<p>You turned to page ${currentPage}.</p>`;
        resultString += `<p>${pages[currentPage]}</p>`;
    } else {
        resultString += `<p>${pages[currentPage]}</p>`;
    }
    return resultString;
}

let endType = function() { // This function prints a good end if the player reaches the last ending.
    let resultString = ``;
    if (currentPage == 20) {
        resultString += (`<h2>The End!</h2>`);
        resultString += (`<h6>Press "F5" or refresh the page to play again!</h6>`);
    } else {
        resultString += (`<h2>Game Over!</h2>`);
        resultString += (`<h6>Press "F5" or refresh the page to play again!</h6>`);
    }
    return resultString;
}

while (currentPage !== null) { // This while loop is the main game, ending when the current page is null upon exiting the prompt.
    currentPage = parseInt(currentPage);
    console.log(pages[currentPage]);

    let finalStory = printStory();
    let endingMessage = endType();
    let endCheck = endingCheck(currentPage);
    let nextPageMessage = `\n\n What page would you like to go to?`;

    if (endCheck === true) {
        currentPage = alert(pages[currentPage]);
        document.write(finalStory);
        document.write(endingMessage);
        currentPage = null;
    } else if (currentPage === 0) {
        currentPage = prompt(pages[currentPage]);
        document.write(finalStory);
    } else { 
        currentPage = prompt(pages[currentPage] + nextPageMessage);
        document.write(finalStory);
    }
}


