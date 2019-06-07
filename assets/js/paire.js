//Créer le tableau random
    // liste de 16 images = 2x8
let tab =[1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8]
    .map(p=> [p,Math.random()])
    .sort( (a,b)=> a[1]-b[1])
    .map(p=> p[0])

let pics = document.getElementsByTagName('img');
let checkScore = document.getElementById('score');
let checkTime = document.getElementById('time');
let score = 0;
let step = 1;
let p1, p2;
let timer = null;

for(let i=0; i<pics.length;i++){
    pics[i].src2 = "assets/img/carte" + tab[i] + ".jpg";
}


//Le jeu

document.addEventListener("click", function b(a){
    switch(step){
        case 1: // 1er click
            if(a.target.tagName=='IMG'){
                a.target.src = a.target.src2;
                p1 = a.target;
                step = 2;
            }
        break;
        case 2: // 2e click
            if(a.target.tagName=='IMG'){
                a.target.src = a.target.src2;
                p2 = a.target;
                step = 3;
            }
        break;
        timer = setTimeout(check, 2000);
        case 3: //click qui suit: compare
            check();
            
        break;
    }
});

function check() {
    if(p1.src2==p2.src2){
        p2.src = p1.src = 'assets/img/transp1.png';
        score = score + 50;
        alert("Bien joué, tu as trouvé une paire!");
        // desactiveCarte();
    }
    else{
        p2.src = p1.src = 'assets/img/carte.jpg';
        score = Math.max(0, score-20);
    }
    step = 1;
    checkScore.textContent = score;

    //fin du jeu
    for(let i=0; i<pics.length;i++){
        if(pics[i].src2 === 'assets/img/transp1.png' && pics[i].src1 === 'assets/img/transp1.png'){
       alert('Vous avez gagné la partie!')
    }
    console.log(pics[i].src2);
    }
}

// //Désactiver
// function desactiveCarte() {
//     p1.removeEventListener('click', b);
//     p2.removeEventListener('click', b);
    
//     reset();
//     }

//recommencer
function rejoue(){
    document.location.reload(true);
}

//timer

let seconds=90;


function secondPass(){
    let minutes = Math.round((seconds - 30)/60);
    let secondeRestante = seconds % 60;
    
    if(secondeRestante < 10){
        secondeRestante = "0" +secondeRestante;
    }

    document.getElementById('countdown').innerHTML = minutes + ":" + secondeRestante;
    
    if(seconds==0){
        clearInterval(countdownTimer);
        alert('STOP, tu as perdu!');
        
    }
    else{
        seconds--;
    }
}
let countdownTimer = setInterval('secondPass()',1000);
