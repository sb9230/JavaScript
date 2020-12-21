const quizData = [
    {
        question : '승빈이가 태어난 년도는?',
        a: '1992',
        b: '1993',
        c: '1994',
        d: '1995',
        correct : 'c'
    },
    {
        question : '승빈이의 생일은?',
        a : '8월 19일',
        b : '5월 24일',
        c : '12월 25일',
        d : '7월 18일',
        correct : 'd'
    },
    {
        question : '승빈이의 키는?',
        a : '185cm',
        b : '188cm',
        c : '191cm',
        d : '192cm',
        correct : 'b'
    },
    {
        question : '승빈이가 가장 좋아하는 스포츠는?',
        a : '축구',
        b : '농구',
        c : '야구',
        d : '탁구',
        correct : 'b'
    },
    {
        question : '승빈이가 우수상을 수상한 해커톤의 개최지는?',
        a : '경기',
        b : '부산',
        c : '인천',
        d : '서울',
        correct : 'a'
    },
    {
        question : '승빈이가 졸업한 초등학교 이름?',
        a : '수서초등학교',
        b : '개포초등학교',
        c : '대왕초등학교',
        d : '양재초등학교',
        correct : 'c' 
    },
    {
        question : '승빈이가 졸업한 중학교 이름?',
        a : '수서중학교',
        b : '개포중학교',
        c : '대왕중학교',
        d : '언남중학교',
        correct : 'a' 
    },
    {
        question : '승빈이가 졸업한 고등학교 이름?',
        a : '세종고등학교',
        b : '서초고등학교',
        c : '언남고등학교',
        d : '양재고등학교',
        correct : 'd' 
    },
    {
        question : '승빈이가 전역한 사단은?',
        a : '1사단',
        b : '9사단',
        c : '11사단',
        d : '7사단',
        correct : 'b' 
    },
    {
        question : '승빈이가 살던 곳 순서로 정확한 것은?',
        a : '염곡동 - 율현동 - 양재동',
        b : '양재동 - 염곡동 - 율현동',
        c : '율현동 - 양재동 - 염곡동',
        d : '율현동 - 염곡동 - 양재동',
        correct : 'd' 
    }
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswer();

    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {

    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    });
    
    return answer;
}

function deselectAnswer() {

    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
        });
};

submitBtn.addEventListener('click',() => {
    //check to see the answer
    const answer = getSelected();

    console.log(answer);

    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if(currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2> 당신의 점수 입니다.  ${score}/${quizData.length}</h2>`;
        }
    }
});

