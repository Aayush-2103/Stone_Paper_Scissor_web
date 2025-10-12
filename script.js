let choices = document.querySelectorAll('#option');
let userScore = 0;
let compScore = 0;
let user_score = document.querySelector('#userScore');
let comp_score = document.querySelector('#compScore');
let your_choice = document.querySelector('#user_choice');
let comp_choice = document.querySelector('#comp_choice');
let resetBtn = document.querySelector('#resetbtn');


const playGame=(userChoice, compChoice)=>{
    if ((userChoice==='rock' && compChoice==='scissor') || (userChoice==='paper' && compChoice==='rock') || (userChoice==='scissor' && compChoice==='paper')){
        userScore ++
    } else if (userChoice!=compChoice){
        compScore ++
    }
    resetBtn.classList.remove('hidden');
};

const random_choice = () => {
    let options = ["rock", "paper", "scissor"];
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

resetBtn.addEventListener('click',()=>{
    your_choice.innerText = '';
    comp_choice.innerText = '';
    userScore = 0;
    user_score.innerText = '0';
    compScore = 0;
    comp_score.innerText = '0';
    resetBtn.classList.add('hidden');
});