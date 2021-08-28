let comment = document.getElementById('textArea');

let submitComment = document.getElementById('submitComment');

function processingComments() {
    let userComment = getComments();
    let resultCorrectComment = checkSpam(userComment);
    setComments(resultCorrectComment);
}

function getComments() {
    let newComment = comment.value;
    return newComment;
}

function checkSpam(com) {
    let correctComment = com.replace(/viagra/g, '***').replace(/xxx/i, '***');
    return correctComment;
}

function setComments(comment){
    let divComment = document.getElementById('showComments');
    divComment.innerHTML += `<br/> ${comment}`;
 }



submitComment.addEventListener('click', processingComments);