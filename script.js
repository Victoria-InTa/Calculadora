let pantallaNumerica = document.querySelector('#pantalla_numerica')
let box_1 = document.querySelector('#box1')//division
let box_2 = document.querySelector('#box2')//7
let box_3 = document.querySelector('#box3')//8
let box_4 = document.querySelector('#box4')//9


let box_7 = document.querySelector('#box7')//4
let box_8 = document.querySelector('#box8')//5
let box_9 = document.querySelector('#box9')//6
let box_10 = document.querySelector('#box10')//multiplicacion

let box_11 = document.querySelector('#reset') //reset

let box_12 = document.querySelector('#box12')//1
let box_13 = document.querySelector('#box13')//2
let box_14 = document.querySelector('#box14')//3
let box_15 = document.querySelector('#box15')//menos

let box_17 = document.querySelector('#box17')//0
let box_18 = document.querySelector('#box18')//00
let box_20 = document.querySelector('#box20')//suma

let igual = document.querySelector('#igual')//igual


let operacionA,operacionB,resultado

box_1.addEventListener('click', ()=>{
    pantallaNumerica.textContent =  pantallaNumerica.textContent + "%"
})
box_2.addEventListener('click', ()=>{
    pantallaNumerica.textContent =  pantallaNumerica.textContent + "7"
})
box_3.addEventListener('click', ()=>{
    pantallaNumerica.textContent =  pantallaNumerica.textContent + "8"
})
box_4.addEventListener('click', ()=>{
    pantallaNumerica.textContent =  pantallaNumerica.textContent + "9"
})




box_7.addEventListener('click', ()=>{
    pantallaNumerica.textContent =  pantallaNumerica.textContent + "4"
})
box_8.addEventListener('click', ()=>{
    pantallaNumerica.textContent =  pantallaNumerica.textContent + "5"
})
box_9.addEventListener('click', ()=>{
    pantallaNumerica.textContent =  pantallaNumerica.textContent + "6"
})
box_10.addEventListener('click', ()=>{
    pantallaNumerica.textContent =  pantallaNumerica.textContent + "x"
})


box_12.addEventListener('click', ()=>{
    pantallaNumerica.textContent =  pantallaNumerica.textContent + "1"
})
box_13.addEventListener('click', ()=>{
    pantallaNumerica.textContent =  pantallaNumerica.textContent + "2"
})
box_14.addEventListener('click', ()=>{
    pantallaNumerica.textContent =  pantallaNumerica.textContent + "3"
})
box_15.addEventListener('click', ()=>{
    pantallaNumerica.textContent =  pantallaNumerica.textContent + "-"
})



box_17.addEventListener('click', ()=>{
    pantallaNumerica.textContent =  pantallaNumerica.textContent + "0"
})
box_18.addEventListener('click', ()=>{
    pantallaNumerica.textContent =  pantallaNumerica.textContent + "00"
})
box_20.addEventListener('click', ()=>{
    pantallaNumerica.textContent =  pantallaNumerica.textContent + "+"
})



reset.onclick = function(e){
    resetear();
}


igual.onclick = function(e){
    operacionB = pantallaNumerica.textContent;
    resolver();
}


box_20.onclick = function(e){
    operacionA = pantallaNumerica.textContent;
    resultado = "+";
   
}
box_15.onclick = function(e){
    operacionA = pantallaNumerica.textContent;
    resultado = "-";
    
}
box_10.onclick = function(e){
    operacionA = pantallaNumerica.textContent;
    resultado = "*";
    
}
box_1.onclick = function(e){
    operacionA = pantallaNumerica.textContent;
    resultado = "/";
   
}





  function resetear(){
    pantallaNumerica.textContent = "";
    operacionA = 0;
    operacionB = 0;
    resultado = "";
  }

  function resolver(){
    var res = 0;
    switch(resultado){
      case "+":
        res = parseFloat(operacionA) + parseFloat(operacionB);
        break;
      case "-":
          res = parseFloat(operacionA) - parseFloat(operacionB);
          break;
      case "*":
        res = parseFloat(operacionA) * parseFloat(operacionB);
        break;
      case "%":
        res = parseFloat(operacionA) % parseFloat(operacionB);
        break;
    }
    resetear();
    pantallaNumerica.textContent = res;
  }


