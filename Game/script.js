let n = -100 ;
let nn = -60 ;
let m,p;
const enemies = [9,9]
const shot = new Audio();
const nature = new Audio();
const circus = new Audio();
const glitch = new Audio();
shot.src = "./shot.m4a";
shot.volume = 0.2;
nature.src = "./nature.m4a";
circus.src = "./circus.m4a";
glitch.src = "./Glitch.mp4";

window.onload = function(){
    glitch.play();
};

const enemiesmove = [
                        ["","m71","m72","m73","m74","m75","m76","m77","m78","m79"],
                        ["","m41","m42","m43","m44","m45","m46","m47","m48","m49"],
                        [""]
                    ]
    
const deadenemy = []

function next(x){
    glitch.play();
    y="b"+(x-1);
    x="b"+x;
    console.log(x);
    if(x=="b2"){
        var elementss = document.getElementsByClassName('st');
         for (var i = 0; i < elementss.length; i++) {
        elementss[i].style.display = "none";
    }
    }
    document.getElementById(y).style.display = "none";
    document.getElementById(x).style.display = "block";
    if(x=="b7"){   
        console.log('juegar b7');
        m = setInterval(function() {
            circus.play();
            n = n + 1;
            document.getElementById("timer7").innerHTML = n + "s";    
        }, 1000);
        p = setInterval(function(){playing(0, 7)}, 500);
    }
    if(x=="b4"){    
        console.log('juegar b3');
        m = setInterval(function() {
            nature.play();
            nn = nn + 1;
            document.getElementById("timer4").innerHTML = nn + "s";    
        }, 1000);
        p = setInterval(function(){playing(1, 4)}, 700);
    }
}



function playing(l, z){
    en = Math.floor(Math.random() * (enemies[l] - 1 + 1)) + 1;
    if(document.getElementById("e"+z+en).style.display!="inline"){
    document.getElementById("e"+z+en).style.animation = enemiesmove[l][en]+" 1s ease 0s 1 normal forwards";
    document.getElementById("e"+z+en).style.display = "inline";
    deadenemy[en] = setTimeout(function(){dead(z)}, 3000);
    }
    if(document.getElementById("timer"+z).innerHTML=="0s"){
        nature.pause();
        circus.pause();
        nature.currentTime = 0;
        circus.currentTime = 0;
        console.log(z);
        var elementsss = document.getElementsByClassName('enemy');
        for (var i = 0; i < elementsss.length; i++) {
            elementsss[i].style.display = "none";
            clearTimeout(deadenemy[i+1]);
        }
        next(z+1);
        clearTimeout(m);
        clearTimeout(p);
    }
}

function shoot(shooid){
    shot.pause();
    shot.currentTime = 0;
    document.getElementById(shooid).style.display = "none";
    shooid = shooid.substring(2);
    clearTimeout(deadenemy[shooid]);
    shot.play();
}

function dead(level){
    var elements = document.getElementsByClassName('enemy');
    for (var i = 0; i < elements.length; i++) {
    elements[i].style.display = "none";
    clearTimeout(deadenemy[i+1]);
    }


    document.getElementById("timer4").innerHTML = "-60s";
    document.getElementById("timer7").innerHTML = "-100s";
    n = -100;
    nn = -60;
    document.getElementById("b"+level).style.display = "none";
    document.getElementById("b0").style.display = "block";
    clearTimeout(m);
    clearTimeout(p);

    nature.pause();
    circus.pause();
    nature.currentTime = 0;
    circus.currentTime = 0;
}


function ChangeColor() {
    // Select all elements where the CSS variable is applied
    var elements = document.querySelectorAll('*');
  
    // Get the current values of the CSS variables
    var currentC1 = getComputedStyle(document.documentElement).getPropertyValue('--c1').trim();
    var currentC2 = getComputedStyle(document.documentElement).getPropertyValue('--c2').trim();
    var currentC3 = getComputedStyle(document.documentElement).getPropertyValue('--c3').trim();
    var currentC4 = getComputedStyle(document.documentElement).getPropertyValue('--c4').trim();
    var currentC5 = getComputedStyle(document.documentElement).getPropertyValue('--c5').trim();
    var currentC6 = getComputedStyle(document.documentElement).getPropertyValue('--c6').trim();
    
  
    // Define the new values for '--c5' and '--c6'
    var newC5 = currentC5 === 'rgba(255, 255, 255, 0.259)' ? 'rgba(0, 0, 0, 0.2)' : 'rgba(255, 255, 255, 0.259)';
    var newC6 = currentC6 === 'rgba(255, 255, 255, 0.323)' ? 'rgba(0, 0, 0, 0.19)' : 'rgba(255, 255, 255, 0.323)';
  
    // Loop through the NodeList
    elements.forEach(function(element) {
      // Swap the values of '--c1' and '--c2'
      element.style.setProperty('--c1', currentC2);
      element.style.setProperty('--c2', currentC1);
      
      // Swap the values of '--c3' and '--c4'
      element.style.setProperty('--c3', currentC4);
      element.style.setProperty('--c4', currentC3);
      
      // Toggle the values for '--c5' and '--c6'
      element.style.setProperty('--c5', newC5);
      element.style.setProperty('--c6', newC6);
    });
  }