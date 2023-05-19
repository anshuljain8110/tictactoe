let a=document.querySelectorAll(".center div")
let b=document.querySelector(".turn")
let c=0
let d=document.querySelector("img")


function won(){
    document.querySelector(".center").style.display="none"
    b.innerHTML="Winner"
    b.classList.add("won")
    document.querySelector("button").style.display="inline"
}


function checkifwinner(){
    for(let j=0;j<3;j++){
        if(a[j].innerHTML=="X"&&a[j+3].innerHTML=="X"&&a[j+6].innerHTML=="X"||a[j].innerHTML=="O"&&a[j+3].innerHTML=="O"&&a[j+6].innerHTML=="O"){
           won()
           return 1;
        }
    }
    for(let j=0;j<9;j+=3){
        if(a[j].innerHTML=="X"&&a[j+1].innerHTML=="X"&&a[j+2].innerHTML=="X"||a[j].innerHTML=="O"&&a[j+1].innerHTML=="O"&&a[j+2].innerHTML=="O"){
            won()
            return 1;
        }
    }
    if(a[0].innerHTML=="X"&&a[4].innerHTML=="X"&&a[8].innerHTML=="X"||a[2].innerHTML=="X"&&a[4].innerHTML=="X"&&a[6].innerHTML=="X"||a[0].innerHTML=="O"&&a[4].innerHTML=="O"&&a[8].innerHTML=="O"||a[2].innerHTML=="O"&&a[4].innerHTML=="O"&&a[6].innerHTML=="O"){
        won()
        return 1;
    }
    return 0;
}


function xturn(i){
    d.setAttribute("src","https://24.media.tumblr.com/245f521ebb6f18153490587f70492f4d/tumblr_mmm85kOfvj1s8f329o1_250.gif")
    b.classList.remove("error")
    a[i].innerHTML="X"
    a[i].classList.add("xturn")
    b.innerHTML="It's O Turn Now"
    c++
    if(c==1){
        document.querySelector(".left p").innerHTML=""
    }
    if(c>4){
        checkifwinner()
    }
    if(c==9&&checkifwinner()==0){
        b.innerHTML="No One Won 😅"
        document.querySelector("button").style.display="inline"
    }
}
function oturn(i){
    d.setAttribute("src","https://24.media.tumblr.com/245f521ebb6f18153490587f70492f4d/tumblr_mmm85kOfvj1s8f329o1_250.gif")
    b.classList.remove("error")
    a[i].innerHTML="O"
    a[i].classList.add("oturn")
    b.innerHTML="It's X Turn Now"
    c++
    if(c>4){
        checkifwinner()
    }
}

function error(){
    b.innerHTML="Position Already Selected Try Another One 😒"
    b.classList.add("error")
    d.setAttribute("src","https://i.gifer.com/YaDi.gif")
}

function restart(){
    c=0
    document.querySelector("button").style.display="none"
    document.querySelector(".center").style.display="grid"
    b.classList.remove("won")
    for(let j=0;j<a.length;j++){
        a[j].innerHTML=(j+1).toString()
        a[j].classList=""
    }
}


for(let i=0;i<a.length;i++){
    a[i].addEventListener("click", function(){
        if(a[i].innerHTML=="X"||a[i].innerHTML=="O"){
            error()
        }
        else{
            if(c%2==0){
                xturn(i)
            }
            else{
                oturn(i)
            }
        }
    })
}