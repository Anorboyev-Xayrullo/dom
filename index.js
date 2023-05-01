let count = document.querySelector(".count")
let reset = document.querySelector(".reset")
let num = 0
count.onclick = () =>{
    num += 1
    count.innerHTML = num
    if (count.innerHTML == 100){
      count.innerHTML = 0;
      num=0;
    }else{
        console.log("xato");
    }
   
}

reset.onclick = () =>{
    num = 0 
    count.innerHTML = num
}


