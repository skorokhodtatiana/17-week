let comment = document.getElementById('textArea');
let submitComment = document.getElementById('submitComment');

function processingComments() {
    let userComment = getComments();
    let resultCorrectComment = checkSpam(userComment);
    let setShowComments = setComments(resultCorrectComment);
    cleanInput(setShowComments);
}

function getComments() {
    let newComment = comment.value;
    return newComment;
}

function checkSpam(com) {
    let correctComment = com.replace(/viagra/ig, '***').replace(/xxx/ig, '***');
    return correctComment;
}

function setComments(comment){
    let divComment = document.getElementById('showComments');
     divComment.innerHTML += `<br/> ${comment}`;
 }

 function cleanInput(){
     comment.value = "";
 }

submitComment.addEventListener('click', processingComments);