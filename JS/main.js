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
const errorMessage = document.getElementById('error-message');
const submitBtn = document.getElementById('submit');

let currentQuestion = 0;
let score = 0;
shuffle(quizData); // Randomizar el orden de las preguntas

loadQuiz();

function loadQuiz() {
    deselectAnswers();

// Obtener los datos de la pregunta actual
const currentQuizData = quizData[currentQuestion];

// Mostrar la pregunta y las opciones en el HTML
questionEl.innerText = currentQuizData.question;
aText.innerText = currentQuizData.a;
bText.innerText = currentQuizData.b;
cText.innerText = currentQuizData.c;
dText.innerText = currentQuizData.d;
}

function deselectAnswers() {
    // Deseleccionar todas las respuestas
    answerEls.forEach(answerEl => 
        answerEl.classList.checked = false);
}

function getSelected() {
    let answer;

// Obtener la respuesta seleccionada por el usuario
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    })
    return answer;
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();

    if (answer) { // Verifica si se ha seleccionado una respuesta
        if (answer === quizData[currentQuestion].correct) {
            score++;
        }
        currentQuestion++;

        if (currentQuestion < quizData.length) {
            // Cargar la siguiente pregunta
            loadQuiz();
        } else {
            // Mostrar resultados y botón de reinicio
            quizContainer.innerHTML = `
            <h2>You answered ${score}/${quizData.length} questions correctly</h2>
            <button class='btn-restart' onclick="location.reload()">Restart</button>
            `;
        }
    } else {
        // Mensaje de error para el usuario
        errorMessage.textContent = 'Please select an answer before submitting.';
    }
});

function shuffle(array) {
    let currentIndex = array.length;

    while (currentIndex !== 0) {
        const randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // Intercambiar elementos
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
}







