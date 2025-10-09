let choices = document.querySelectorAll('#choice');
let userScore = 0;
let compScore = 0;
let user_score = document.querySelector('#user_score');
let comp_score = document.querySelector('#comp_score');
let your_choice = document.querySelector('#user_choice');
let comp_choice = document.querySelector('#comp_choice');


const playGame=(userChoice, compChoice)=>{
    if ((userChoice==='rock' && compChoice==='scissors') || (userChoice==='paper' && compChoice==='rock') || (userChoice==='scissors' && compChoice==='paper')){
        userScore ++
    } else if (userChoice!=compChoice){
        compScore ++
    }
};

const random_choice = () => {
    let options = ["rock", "paper", "scissors"];
    let index = Math.floor(Math.random()*3);
    return options[index];
};

choices.forEach((choice)=>{
    choice.addEventListener('click',()=>{
        const user_choice = choice.getAttribute('name');
        let computer_choice = random_choice();
        your_choice.innerText = user_choice[0].toUpperCase() + user_choice.slice(1);
        comp_choice.innerText = computer_choice[0].toUpperCase() + computer_choice.slice(1);
        playGame(user_choice, computer_choice);
        user_score.innerText = userScore;
        comp_score.innerText = compScore;
    });
});

