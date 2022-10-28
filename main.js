monCanvas = document.getElementById("monCanvas");

monCanvas.width = 500;
monCanvas.height = 500;
const MAX = 90;
const MIN = 20;

const ctx = monCanvas.getContext('2d');

ctx.clearRect(50, 50, monCanvas.width, monCanvas.height);

//*********************************  CREER COORDONEES ALEATOIRES *******************************
function aleatoire(MIN,MAX){
    return Math.floor(Math.random() * (MAX - MIN + 1)) * 5;
}
let aleatoireMickeyX = aleatoire(MIN,MAX);
let aleatoireMickeyY = aleatoire(MIN,MAX);
let aleatoireMechant1X = aleatoire(MIN,MAX);
let aleatoireMechant1Y = aleatoire(MIN,MAX);
let aleatoireMechant2X = aleatoire(MIN,MAX);
let aleatoireMechant2Y = aleatoire(MIN,MAX);


console.log(aleatoireMechant1X, aleatoireMechant1Y);
//********************************  CREER MECHANTS ***************************************
let mechant1 = new Image(20,20);
mechant1.src = "./images/mechant.gif"
mechant1.onload =() => {
    return ctx.drawImage(mechant1, aleatoireMechant1X, aleatoireMechant1Y)
}

let mechant2 = new Image(20,20);
mechant2.src = "./images/mechant.gif"
mechant2.onload =() => {
    return ctx.drawImage(mechant2, aleatoireMechant2X, aleatoireMechant2Y)
}

//******************************** CREER MICKEY ******************************************
let mickey = new Image(20,20);
mickey.src = "./images/mickey.png"
mickey.onload =() =>{
    return ctx.drawImage(mickey, aleatoireMickeyX, aleatoireMickeyY)
}

//********************************  CREER SARAH  *****************************************
let sarah1 = new Image(50, 50);
sarah1.src = "./images/Sarah1.gif";

let sarah2 = new Image(50, 50);
sarah2.src = "./images/Sarah2.gif";
sarah2.onload = () => {
    return ctx.drawImage(sarah2, 20, 20);
}

let affiche = false;
function sarah(){
    if(!affiche){
        affiche = true;
        return sarah1;
    } else {
        affiche = false;
        return sarah2;
    }
}

//*****************************************  CREER TROUVE  ***********************************************
function trouve(x,y,aleaX,aleaY){
    maxX = aleaX+20;
    maxY = aleaY+20;
    minX = aleaX-20;
    minY = aleaY-20;
    if((x>=minX && x<=maxX) && (y>=minY && y<=maxY)){
        return gagne();
    }
}
function gagne(){
    window.alert("Approche !");
    window.location.href="victoire.html";
}

//************************************* CREER PERDU  ******************************************************
function perdu(mechantX,mechantY,x,y){
    maxX = mechantX+15;
    maxY = mechantY+15;
    minX = mechantX-15;
    minY = mechantY-15;

    if((x>=minX && x<=maxX) && (y>=minY && y<=maxY)) {
        return loose();
    }
}
function loose(){
    window.alert("T'as perdu biatch !")
    window.location.href="toucher.html";
}

// MOUVEMENT
let x= 20;
let y = 20;

let valeurY =20;
let valeurX =20;

//********************************* DEPLACEMENT MECHANTS  *********************************************
let direction1;
let direction2
function choixDirection1(){
     return direction1 = (Math.floor(Math.random() * 4));
}
function choixDirection2(){
    return direction2 = (Math.floor(Math.random() * 4));
}


function deplacementMechant(){
    let valeurXMechant = aleatoireMechant1X;
    let valeurYMechant = aleatoireMechant1Y;

        switch(direction1){
            case 0 : ctx.clearRect(aleatoireMechant1X, aleatoireMechant1Y, 20,20);
                if (aleatoireMechant1X < 480) {
                    aleatoireMechant1X += 5;
                } else {
                    aleatoireMechant1X = 480;
                }
                aleatoireMechant1Y = valeurYMechant;
                ctx.drawImage(mechant1, aleatoireMechant1X, aleatoireMechant1Y);
                valeurYMechant = aleatoireMechant1Y;
                valeurXMechant = aleatoireMechant1X;
                perdu(aleatoireMechant1X,aleatoireMechant1Y,aleatoireMickeyX, aleatoireMickeyY);break;


            case 1 : ctx.clearRect(aleatoireMechant1X, aleatoireMechant1Y, 20,20);
                if (aleatoireMechant1X > 0) {
                    aleatoireMechant1X -= 5;
                } else {
                    aleatoireMechant1X = 0;
                }
                aleatoireMechant1Y = valeurYMechant;
                ctx.drawImage(mechant1, aleatoireMechant1X, aleatoireMechant1Y);
                valeurYMechant = aleatoireMechant1Y;
                valeurXMechant = aleatoireMechant1X;
                perdu(aleatoireMechant1X,aleatoireMechant1Y,aleatoireMickeyX, aleatoireMickeyY);break;

            case 2 : ctx.clearRect(aleatoireMechant1X, aleatoireMechant1Y, 20,20);
                if (aleatoireMechant1Y < 480) {
                    aleatoireMechant1Y += 5;
                } else {
                    aleatoireMechant1Y = 480;
                }
                aleatoireMechant1X = valeurXMechant;
                ctx.drawImage(mechant1, aleatoireMechant1X, aleatoireMechant1Y);
                valeurYMechant = aleatoireMechant1Y;
                valeurXMechant = aleatoireMechant1X;
                perdu(aleatoireMechant1X,aleatoireMechant1Y,aleatoireMickeyX, aleatoireMickeyY);break;

            case 3 : ctx.clearRect(aleatoireMechant1X, aleatoireMechant1Y, 20,20);
                if (aleatoireMechant1Y > 0) {
                    aleatoireMechant1Y -= 5;
                } else {
                    aleatoireMechant1Y = 0;
                }
                aleatoireMechant1X = valeurXMechant;
                ctx.drawImage(mechant1, aleatoireMechant1X, aleatoireMechant1Y);
                valeurYMechant = aleatoireMechant1Y;
                valeurXMechant = aleatoireMechant1X;
                perdu(aleatoireMechant1X,aleatoireMechant1Y,aleatoireMickeyX, aleatoireMickeyY);break;
        }

    }

function deplacementMechant2(){
    let valeurXMechant = aleatoireMechant2X;
    let valeurYMechant = aleatoireMechant2Y;

    switch(direction2){
        case 0 : ctx.clearRect(aleatoireMechant2X, aleatoireMechant2Y, 20,20);
            if (aleatoireMechant2X < 480) {
                aleatoireMechant2X += 5;
            } else {
                aleatoireMechant2X = 480;
            }
            aleatoireMechant2Y = valeurYMechant;
            ctx.drawImage(mechant2, aleatoireMechant2X, aleatoireMechant2Y);
            valeurYMechant = aleatoireMechant2Y;
            valeurXMechant = aleatoireMechant2X; break;

        case 1 : ctx.clearRect(aleatoireMechant2X, aleatoireMechant2Y, 20,20);
            if (aleatoireMechant2X > 0) {
                aleatoireMechant2X -= 5;
            } else {
                aleatoireMechant2X = 0;
            }
            aleatoireMechant2Y = valeurYMechant;
            ctx.drawImage(mechant2, aleatoireMechant2X, aleatoireMechant2Y);
            valeurYMechant = aleatoireMechant2Y;
            valeurXMechant = aleatoireMechant2X; break;

        case 2 : ctx.clearRect(aleatoireMechant2X, aleatoireMechant2Y, 20,20);
            if (aleatoireMechant2Y < 480) {
                aleatoireMechant2Y += 5;
            } else {
                aleatoireMechant2Y = 480;
            }
            aleatoireMechant2X = valeurXMechant;
            ctx.drawImage(mechant2, aleatoireMechant2X, aleatoireMechant2Y);
            valeurYMechant = aleatoireMechant2Y;
            valeurXMechant = aleatoireMechant2X;break;

        case 3 : ctx.clearRect(aleatoireMechant2X, aleatoireMechant2Y, 20,20);
            if (aleatoireMechant2Y > 0) {
                aleatoireMechant2Y -= 5;
            } else {
                aleatoireMechant2Y = 0;
            }
            aleatoireMechant2X = valeurXMechant;
            ctx.drawImage(mechant2, aleatoireMechant2X, aleatoireMechant2Y);
            valeurYMechant = aleatoireMechant2Y;
            valeurXMechant = aleatoireMechant2X;break;
    }
    perdu(aleatoireMechant2X,aleatoireMechant2Y,aleatoireMickeyX, aleatoireMickeyY);
}

// ***********************************     DEPLACEMENT SARAH   ***********************************************
function deplacerSarahDroite() {
    ctx.clearRect(x, y, 50, 50);
    if (x < 450) {
        x += 5;
    } else {
        x = 450;
    }
    y = valeurY;
    ctx.drawImage(sarah(), x, y);
    valeurY = y;
    valeurX = x;
    trouve(valeurX,valeurY,aleatoireMickeyX, aleatoireMickeyY);
    perdu(aleatoireMechant1X, aleatoireMechant1Y, valeurX, valeurY);
    perdu(aleatoireMechant2X, aleatoireMechant2Y, valeurX, valeurY);
    console.log(valeurX, valeurY);
}

function deplacerSarahGauche() {
    ctx.clearRect(x, y, 50, 50);
    if (x > 0) {
        x -= 5;
    } else {
        x = 0
    }
    y = valeurY;
    ctx.drawImage(sarah(), x, y);
    valeurY = y;
    valeurX = x;
    trouve(valeurX,valeurY,aleatoireMickeyX, aleatoireMickeyY);
    perdu(aleatoireMechant1X, aleatoireMechant1Y, valeurX, valeurY);
    perdu(aleatoireMechant2X, aleatoireMechant2Y, valeurX, valeurY);
    console.log(valeurX, valeurY);
}

function deplacerSarahHaut() {
    ctx.clearRect(x, y, 50, 50);
    x = valeurX;
    if (y > 0) {
        y -= 5;
    } else {
        y = 0;
    }
    ctx.drawImage(sarah(), x, y);
    valeurY = y
    valeurX = x;
    trouve(valeurX,valeurY,aleatoireMickeyX, aleatoireMickeyY);
    perdu(aleatoireMechant1X, aleatoireMechant1Y, valeurX, valeurY);
    perdu(aleatoireMechant2X, aleatoireMechant2Y, valeurX, valeurY);
    console.log(valeurX, valeurY);
}

function deplacerSarahBas() {
    ctx.clearRect(x, y, 50, 50);
    x = valeurX;
    if (y < 450) {
        y += 5;
    } else {
        y = 450;
    }
    ctx.drawImage(sarah(), x, y);
    valeurY = y
    valeurX = x;
    trouve(valeurX,valeurY,aleatoireMickeyX, aleatoireMickeyY);
    perdu(aleatoireMechant1X, aleatoireMechant1Y, valeurX, valeurY);
    perdu(aleatoireMechant2X, aleatoireMechant2Y, valeurX, valeurY);
    console.log(valeurX, valeurY);
    }


//***********************************************************************************
let directionM;

function choixDirectionM(){
    return directionM = (Math.floor(Math.random() * 4));
}

function deplacementMickey(){
    let valeurXMickey = aleatoireMickeyX;
    let valeurYMickey = aleatoireMickeyY;

    switch(directionM){
        case 0 : ctx.clearRect(aleatoireMickeyX, aleatoireMickeyY, 20,20);
            if (aleatoireMickeyX < 480) {
                aleatoireMickeyX += 5;
            } else {
                aleatoireMickeyX = 480;
            }
            aleatoireMickeyY = valeurYMickey;
            ctx.drawImage(mickey, aleatoireMickeyX, aleatoireMickeyY);
            valeurXMickey = aleatoireMickeyX;
            valeurYMickey = aleatoireMickeyY;break;

        case 1 : ctx.clearRect(aleatoireMickeyX, aleatoireMickeyY, 20,20);
            if (aleatoireMickeyX > 0) {
                aleatoireMickeyX -= 5;
            } else {
                aleatoireMickeyX = 0;
            }
            aleatoireMickeyY = valeurYMickey;
            ctx.drawImage(mickey, aleatoireMickeyX, aleatoireMickeyY);
            valeurXMickey = aleatoireMickeyX;
            valeurYMickey = aleatoireMickeyY;break;

        case 2 : ctx.clearRect(aleatoireMickeyX, aleatoireMickeyY, 20,20);
            if (aleatoireMickeyY < 480) {
                aleatoireMickeyY += 5;
            } else {
                aleatoireMickeyY = 480;
            }
            aleatoireMickeyX = valeurXMickey;
            ctx.drawImage(mickey, aleatoireMickeyX, aleatoireMickeyY);
            valeurXMickey = aleatoireMickeyX;
            valeurYMickey = aleatoireMickeyY;break;

        case 3 : ctx.clearRect(aleatoireMickeyX, aleatoireMickeyY, 20,20);
            if (aleatoireMickeyY > 0) {
                aleatoireMickeyY -= 5;
            } else {
                aleatoireMickeyY = 0;
            }
            aleatoireMickeyX = valeurXMickey;
            ctx.drawImage(mickey, aleatoireMickeyX, aleatoireMickeyY);
            valeurXMickey = aleatoireMickeyX;
            valeurYMickey = aleatoireMickeyY;break;
    }
}


function changerDirection(e){
    switch (e.key){
        case "ArrowLeft": deplacerSarahGauche(); break;
        case "ArrowRight": deplacerSarahDroite(); break;
        case "ArrowDown": deplacerSarahBas(); break;
        case "ArrowUp": deplacerSarahHaut(); break;
    }
}


// *********************************** IMAGES SARAH COTE *************************************************
                        // *************** GAUCHE ************************
let nbImg = 2;
let imgEnCours = 0;
let anim = new Array();

for(let i=0; i<nbImg; i++){
    anim[i] = new Image(100,100);
    anim[i].src = './images/Sarah' + (i+1) + '.gif';
}
function mouv(){
    document.getElementById('sarahGauche').src = anim[imgEnCours].src;
    imgEnCours++;
    if(imgEnCours >= nbImg) imgEnCours =0;
}

function animate(){
    mouv();
    setInterval(mouv,200);
}

                            // *************** DROITE ************************

let nbImg2 = 2;
let imgEnCours2 = 0;
let anim2 = new Array();

for(let i=0; i<nbImg2; i++){
    anim2[i] = new Image(100,100);
    anim2[i].src = './images/Sarah' + (i+1) + '.gif';
}
function mouv2(){
    document.getElementById('sarahDroite').src = anim2[imgEnCours2].src;
    imgEnCours2++;
    if(imgEnCours2 >= nbImg2) imgEnCours2 =0;
}

function animate2(){
    mouv2();
    setInterval(mouv2,200);
}


//********************************** API KAAMELOTT ************************************
kaamelott = document.getElementById("kaamelott")
url = "https://kaamelott.chaudie.re/api/random";

fetch(url)
    .then(reponse=>reponse.json())
    .then(res => {
    texte = document.createElement("h4");
    texte.innerText= res.citation.infos.personnage +' : '+ res.citation.citation;
    kaamelott.appendChild(texte);
    })

//*********************************************************************************************************


document.getElementById("btnDroite").addEventListener("click", deplacerSarahDroite);
document.getElementById("btnGauche").addEventListener("click", deplacerSarahGauche);
document.getElementById("btnHaut").addEventListener("click", deplacerSarahHaut);
document.getElementById("btnBas").addEventListener("click", deplacerSarahBas);
document.onkeydown = changerDirection;

window.onload = setInterval(deplacementMechant, 150);
window.onload = setInterval(choixDirection1, 500);
window.onload = setInterval(deplacementMechant2, 150);
window.onload = setInterval(choixDirection2, 700);
window.onload = setInterval(deplacementMickey, 150);
window.onload = setInterval(choixDirectionM, 700);
window.onload = animate();
window.onload = animate2();

