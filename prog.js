let pixel=document.querySelectorAll('.pixel');
let eraser=document.querySelector('.eraser');
let eraserColor=document.querySelector('.pixel').style.backgroundColor;
let chosenColor=document.querySelector('.choose-color');
let clearaAll=document.querySelector('.clear-button');

for (let pixels of pixel){
    
    pixels.onclick=function(){
        if(eraser.checked){
            pixels.style.backgroundColor=eraserColor;
        }
        else{
            pixels.style.backgroundColor=chosenColor.value;
        }
        
    }
}

clearaAll.onclick=function(){
    for(let pixels of pixel){
        pixels.style.backgroundColor=eraserColor;
    }
}