let displayBox = document.querySelector(".show-display");


//
// keys
let keys = document.querySelectorAll(".key");
keys.forEach(item => {
    item.addEventListener("click" , function(event){
        let x = event.target.innerText;
        if(displayBox.innerHTML == 0 ){
         return   displayBox.innerHTML = x ;
        }else{
            displayBox.innerHTML += x;
        }
    })
})
//
//AC : AllClear
document.querySelector(".Allclear").addEventListener("click" , item => {
    displayBox.innerHTML = 0 ;
})
//
//C : Clear

document.querySelector(".clear").addEventListener("click" , item => {
    let text = displayBox.innerText;
    if(text.length === 1 ){
        displayBox.innerHTML = 0 ;
    }else{
        displayBox.innerHTML = text.substring(0 , text.length - 1)
    }
})

//
// Calculate 


document.querySelector(".calculate").addEventListener("click" , item => {
    let cal = displayBox.innerText ;
    displayBox.innerHTML =  eval(cal)

});