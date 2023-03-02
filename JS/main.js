const quizData = [
    {
        question: 'Which language runs in a web browser?',
        a: 'Java',
        b: 'C',
        c: 'Python',
        d: 'Javascript',
        correct: 'd',
    },
    {
        question: 'What does CSS stand for?',
        a: 'Central Style Sheets',
        b: 'Cascading Style Sheets',
        c: 'Cascading Simple Sheets',
        d: 'Cars SUVS Sheets',
        correct: 'b',
    },
    {
        question: 'What does HTML stand for?',
        a: 'Hyper Text Markup Language',
        b: 'Hyper Text Markdown Language',
        c: 'Hyperloop Machine Language',
        d: 'Helicopters Terminals Motorboats Lamborginis',
        correct: 'a', 
    },
    {
        question: 'What year was Javascript launched?',
        a: '1996',
        b: '1995',
        c: '1994',
        d: 'none of the above',
        correct: 'b'
    },
    {
        question: 'Who is the founder of the Python programming language?',
        a: 'Bjarne Stroustrup',
        b: 'Brendan Eich',
        c: 'Larry Page',
        d: 'Guido van Rossum',
        correct: 'd'
    },
    {
        question: 'What is the term used to describe the process of finding and correcting errors in the code?',
        a: 'Debugging',
        b: 'Testing',
        c: 'Compiling',
        d: 'Refactoring',
        correct: 'a',
    }
];

const quizContainer = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const aText = document.getElementById('a-text');
const bText = document.getElementById('b-text');
const cText = document.getElementById('c-text');
const dText = document.getElementById('d-text');
const submitBtn = document.getElementById('submit');

let currentQuestion = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();


const currentQuizData = quizData[currentQuestion];

questionEl.innerText = currentQuizData.question;

aText.innerText = currentQuizData.a;
bText.innerText = currentQuizData.b;
cText.innerText = currentQuizData.c;
dText.innerText = currentQuizData.d;

}

function deselectAnswers() {
    answerEls.forEach(answerEl => 
        answerEl.classList.checked = false);
}

function getSelected() {
    let answer;

    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    })
    return answer;
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();

    if (answer === quizData[currentQuestion].correct) {
        score++;
    }
    currentQuestion++;

    if (currentQuestion < quizData.length) {
        loadQuiz();
} else {
    quiz.innerHTML = `
    <h2>Yoy answeredd ${score}/${quizData.length} questions correctyl</h2>

    <button onclick = "location.reload()">Reload</button>
    `
}
});









