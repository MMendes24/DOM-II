// Your code goes here
// event 1
const imgBorder = document.querySelectorAll('img');
imgBorder.forEach(function(img) {
    img.addEventListener('mouseover', () => {
        img.style.border = "10px solid black"
    });
});

//event 2
imgBorder.forEach(function(img){
    img.addEventListener('mouseleave', () => {
        img.style.border = "none"
    });
});

// event 3
const footerColor = document.querySelector('footer')
footerColor.addEventListener('click', () => {
    if (footerColor.style.background ==! "red"){
    footerColor.style.background = "red";
    } else if (footerColor.style.background === "red"){
        footerColor.style.background = "blue";
    } else if (footerColor.style.background === "blue"){
        footerColor.style.background = "red";
    }
});

// event 4
const selectText = document.querySelectorAll('p')
selectText.forEach(function(text){
    text.addEventListener('mousemove', () => {
        text.style.fontSize = "2rem";
        text.style.color = "red";
    });
});

// event 5
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        location.reload();
    }
  });