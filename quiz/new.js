import {questions} from './question.js'
const start=document.getElementById('next-btn');
const quizcont=document.getElementById('quiz-container')
let currentquesindex=0;
let score=0;
const questionele=document.createElement('h2');
const options=document.createElement('div');
options.classList.add('answer-buttons')
quizcont.appendChild(questionele) 
quizcont.appendChild(options)  
start.addEventListener('click',()=>{
    if (start.textContent==='Next'){
        handlenext()
    }else{
        startquiz()
    }
})
function startquiz(){
    currentquesindex=0;
    score=0;
    start.textContent='Next';
    showquestions()
}
function showquestions(){
    questionele.innerHTML=`${currentquesindex + 1}.  ${questions[currentquesindex].question}`
    options.innerHTML='';
    questions[currentquesindex].answers.forEach((ans)=>{
        const optionbut=document.createElement('button');
        optionbut.textContent=ans.text
        optionbut.addEventListener('click',()=>showanswer(optionbut,ans.correct))
        optionbut.classList.add("btn");
        options.appendChild(optionbut)
    })
}
const handlenext=()=>{
    currentquesindex ++;
    if (currentquesindex < questions.length){
        showquestions()
    }else{
        showscore()
    }
}
function showscore(){
    questionele.textContent=`You scored ${score} out of ${questions.length * 2}`
    options.textContent=''
    start.innerHTML='Play again'
}
function showanswer(button,iscorrect){
    if (iscorrect){
        score +=2;
    }else{
        score;
    }
     Array.from(options.children).forEach(btn => {
        if (btn !== button && questions[currentquesindex].answers.find(a => a.text === btn.textContent).correct) {
            btn.classList.add('correct');
        }
        btn.disabled = true;
    });

    // Show Next button
    start.style.display = 'block';
}