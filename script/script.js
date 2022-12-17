const doge = document.querySelector("#doge");
const welcomingText = document.querySelector("#welcomingText");
const looking = document.querySelector("#looking");
const comment = document.querySelector("#comment")



doge.addEventListener('click', function(){
    doge.classList.add("turn")
})

welcomingText.addEventListener('click', function() {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    const color = "rgb(" + red + "," + green + "," + blue + ")"
    welcomingText.style.color = color
})

looking.addEventListener('click', function(){
    
    const comments = ["Go see them" +'<br>', "Go explore" +'<br>',"Why U still watching"+'<br>'] 
    const addcomment = Math.floor(Math.random() * comments.length);
    comment.innerHTML += comments[addcomment]
})

comment.addEventListener('click', function(){
    comment.innerHTML = '';
})
