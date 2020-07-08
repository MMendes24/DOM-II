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
    if (footerColor.style.background ==! "rebeccapurple"){
    footerColor.style.background = "rebeccapurple";
    } else if (footerColor.style.background === "rebeccapurple"){
        footerColor.style.background = "aliceblue";
        } else if (footerColor.style.background === "aliceblue"){
            footerColor.style.background = "rebeccapurple";
       }
       event.stopPropagation()
});

// event 4
//reloading functionality so I can clear my page of bad styling
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        location.reload();
    }
  });


// event 5
const imgSwitch = document.querySelectorAll('img')
    imgSwitch.forEach(function(img) {
        window.addEventListener('scroll', () => {
            img.src = "https://picsum.photos/350"
        });
    });

//event 6
const headerTest = document.querySelectorAll('h4')
headerTest.forEach(function(head){
    head.addEventListener('wheel', () => {
        if (head.style.color ==! "rebeccapurple"){
            head.style.color = "rebeccapurple";
            } else if (head.style.color === "rebeccapurple"){
                head.style.color = "seagreen";
                } else if (head.style.color === "seagreen"){
                    head.style.color = "rebeccapurple";
         }
    });
});

//event 7
const footerPara = document.querySelector('footer p')
footerPara.addEventListener('dblclick', () => {
    footerPara.style.color = "white";
    event.stopPropagation()
});

//event 8
const paraGeneral = document.querySelector('p')
    window.addEventListener('resize', () => {
        paraGeneral.style.color = "red";
});

// event 9
const selectText = document.querySelectorAll('p')
selectText.forEach((text) => {
    text.addEventListener('mouseup', () => {
        text.style.fontSize = "3rem"
    })
})

// event 10
const noContext = document.querySelectorAll('h2')
noContext.forEach(function(context){
    context.addEventListener('contextmenu', e => {
        e.preventDefault();
    });
});
