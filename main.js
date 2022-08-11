/* Main game - hard */
/* grabbing the wanted functions needed for the game functionality */

const section = document.querySelector("section");
const playerLivesCount = document.querySelector("span");
let playerLives = 99;

playerLivesCount.textContent = playerLives;

/* card face data and names to be called */
const getData = () => [
    { imgSrc: "./images/bulls.png", name:"bulls"},
    { imgSrc: "./images/cavs.png", name:"cavs"},
    { imgSrc: "./images/celtics.png", name:"celtics"},
    { imgSrc: "./images/clippers.png", name:"clippers"},
    { imgSrc: "./images/grizzlies.png", name:"grizzlies"},
    { imgSrc: "./images/hawks.png", name:"hawks"},
    { imgSrc: "./images/heat.png", name:"heat"},
    { imgSrc: "./images/hornets.png", name:"hornets"},
    { imgSrc: "./images/jazz.png", name:"jazz"},
    { imgSrc: "./images/kings.png", name:"kings"},
    { imgSrc: "./images/knicks.png", name:"knicks"},
    { imgSrc: "./images/lakers.png", name:"lakers"},
    { imgSrc: "./images/magic.png", name:"magic"},
    { imgSrc: "./images/mavs.png", name:"mavs"},
    { imgSrc: "./images/bucks.png", name:"bucks"},
    { imgSrc: "./images/nets.png", name:"nets"},
    { imgSrc: "./images/nuggets.png", name:"nuggets"},
    { imgSrc: "./images/pacers.png", name:"pacers"},
    { imgSrc: "./images/pelicans.png", name:"pelicans"},
    { imgSrc: "./images/pistons.png", name:"pistons"},
    { imgSrc: "./images/raptors.png", name:"raptors"},
    { imgSrc: "./images/rockets.png", name:"rockets"},
    { imgSrc: "./images/sixers.png", name:"sixers"},
    { imgSrc: "./images/spurs.png", name:"spurs"},
    { imgSrc: "./images/suns.png", name:"suns"},
    { imgSrc: "./images/thunder.png", name:"thunder"},
    { imgSrc: "./images/timberwolves.png", name:"timberwolves"},
    { imgSrc: "./images/trailblazers.png", name:"trailblazers"},
    { imgSrc: "./images/warriors.png", name:"warriors"},
    { imgSrc: "./images/wizards.png", name:"wizards"},
    /* pairs without NBA logo */
    { imgSrc: "./images/bulls.png", name:"bulls"},
    { imgSrc: "./images/cavs.png", name:"cavs"},
    { imgSrc: "./images/celtics.png", name:"celtics"},
    { imgSrc: "./images/clippers.png", name:"clippers"},
    { imgSrc: "./images/grizzlies.png", name:"grizzlies"},
    { imgSrc: "./images/hawks.png", name:"hawks"},
    { imgSrc: "./images/heat.png", name:"heat"},
    { imgSrc: "./images/hornets.png", name:"hornets"},
    { imgSrc: "./images/jazz.png", name:"jazz"},
    { imgSrc: "./images/kings.png", name:"kings"},
    { imgSrc: "./images/knicks.png", name:"knicks"},
    { imgSrc: "./images/lakers.png", name:"lakers"},
    { imgSrc: "./images/magic.png", name:"magic"},
    { imgSrc: "./images/mavs.png", name:"mavs"},
    { imgSrc: "./images/bucks.png", name:"bucks"},
    { imgSrc: "./images/nets.png", name:"nets"},
    { imgSrc: "./images/nuggets.png", name:"nuggets"},
    { imgSrc: "./images/pacers.png", name:"pacers"},
    { imgSrc: "./images/pelicans.png", name:"pelicans"},
    { imgSrc: "./images/pistons.png", name:"pistons"},
    { imgSrc: "./images/raptors.png", name:"raptors"},
    { imgSrc: "./images/rockets.png", name:"rockets"},
    { imgSrc: "./images/sixers.png", name:"sixers"},
    { imgSrc: "./images/spurs.png", name:"spurs"},
    { imgSrc: "./images/suns.png", name:"suns"},
    { imgSrc: "./images/thunder.png", name:"thunder"},
    { imgSrc: "./images/timberwolves.png", name:"timberwolves"},
    { imgSrc: "./images/trailblazers.png", name:"trailblazers"},
    { imgSrc: "./images/warriors.png", name:"warriors"},
    { imgSrc: "./images/wizards.png", name:"wizards"},
];

/* randomize */
const randomize = () => {
    const cardData = getData();
    cardData.sort(() => Math.random() - 0.5);
    return cardData;
    };

/* card generator function */
const cardGenerator = () => {
    const cardData = randomize();
    /* generate the html */
    const cards = document.querySelectorAll(".cards");
    cardData.forEach((item) => {
        const card = document.createElement("div");
        const face = document.createElement("img");
        const back = document.createElement("div");
        card.classList = "card";
        face.classList = "face";
        back.classList = "back";
    /**attach the info to cards*/
    face.src = item.imgSrc;  
    card.setAttribute('name', item.name)
    /* attach the cards to section */  
        section.appendChild(card);
        card.appendChild(face);
        card.appendChild(back);

        card.addEventListener('click', (e) =>{
            card.classList.toggle("toggleCard");
            checkCards(e);
        })

    });
};
/**check cards */
 const checkCards = (e) => {
    const clickedCard = e.target;
    clickedCard.classList.add('flipped');
    const flippedCards = document.querySelectorAll('.flipped');
    const toggleCard = document.querySelectorAll(".toggleCard");

    /*logic*/
    if(flippedCards.length === 2) {
        if(flippedCards[0].getAttribute("name") === 
        flippedCards[1].getAttribute("name"))
        {
            console.log("match");
            flippedCards.forEach((card) =>{
                card.classList.remove("flipped");
                card.style.pointerEvents = "none";
            })
        
    } else {
        console.log("wrong");
        flippedCards.forEach((card) => {
            card.classList.remove("flipped");
            setTimeout(() => card.classList.remove("toggleCard"), 1000);

        });
        playerLives--;
        playerLivesCount.textContent = playerLives;
        if(playerLives === 0) {
            restart("☹️ You lost! try again ☹️");
        }
      }
    }
    /* Check for win */
    if(toggleCard.length === 60){
        restart("🥳Winner, winner!!🥳");
    }
 };

 /* restart after no more lives */

 const restart = (text) => {
    let cardData = randomize ();
    let faces = document.querySelectorAll(".face");
    let cards = document.querySelectorAll(".card");
    section.style.pointerEvents = "none";
    cardData.forEach((item,index) => {
        cards[index].classList.remove("toggleCard");
        /* randomize */
        setTimeout(() => {
            cards[index].style.pointerEvents = "all";
            faces[index].src = item.imgSrc;
            cards[index].setAttribute("name", item.name);
            section.style.pointerEvents = "all";
        }, 1000);
    });
    playerLives = 99;
    playerLivesCount.textContent = playerLives;
    setTimeout(() => window.alert(text), 100);
 }


cardGenerator();