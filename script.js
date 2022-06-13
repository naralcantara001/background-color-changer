var orange = document.querySelector('.orange');
var black = document.querySelector('.black');
var pink = document.querySelector('.pink');
var clearBtn = document.querySelector('.clearBtn');

orange.addEventListener('click', function(){
    orange.style.backgroundColor = "orange";
    black.style.backgroundColor = "rgba(0, 0, 0, 0)";
    pink.style.backgroundColor = "rgba(0, 0, 0, 0)";
})
black.addEventListener('click', function(){
    black.style.backgroundColor = "black";
    orange.style.backgroundColor = "rgba(0, 0, 0, 0)";
    pink.style.backgroundColor = "rgba(0, 0, 0, 0)";

})
pink.addEventListener('click', function(){
    pink.style.backgroundColor = "pink";
    black.style.backgroundColor = "rgba(0, 0, 0, 0)";
    orange.style.backgroundColor = "rgba(0, 0, 0, 0)";
})
clearBtn.addEventListener('click', function(){
    orange.style.backgroundColor = "rgba(0, 0, 0, 0)";
    black.style.backgroundColor = "rgba(0, 0, 0, 0)";
    pink.style.backgroundColor = "rgba(0, 0, 0, 0)";
})