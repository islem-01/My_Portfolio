let currentQuestionIndex = 0;
let score = 0;
const questions = [
    {    
        question: "Quel langage est utilisé principalement \n pour l'analyse de données et le machine learning ?",
        options: ["Python", "Ruby", "PHP", "C++"],
        answer: 0, 
    },
    {
        question: "gen=(x**2 for x in range())\n print(next(gen))\n print(next(gen))",
        options: [
            "0\n1",
            "0\n4",
            "1\n4",
            "Error"
        ],
        answer: 3, // Index de la réponse correcte ("Error")
    },
    {
        question: "my_list =[1,2,3,4,5]\n print(my_list[1:5:2])",
        options: [
            "[1,2,3,4,5]",
            "[2,4]",
            "[1,3,5]",
            "Error"
        ],
        answer: 1,
    },
    {
        question: "Javascript est un langage de ...... ?",
        options: [
            "object-oriented",
            "object-based",
            "Procedural",
            "Pas réponse"
        ],
        answer: 1,
    },
    {
        question: "Que signifie SQL ?",
        options: [
            "Structured Query Language",
            "Simple Query Language",
            "Secure Query Language",
            "Statement Query Language"
        ],
        answer: 0,
    },
    {
        question: "Que signifie XML ?",
        options: [
            "Extensible Markup Language",
            "Executable Markup Language",
            "Extra Markup Language",
            "Example Markup Language"
        ],
        answer: 0,
    },
    {
        question: "Quel est le langage de programmation utilisé\npour créer des pages web ?",
        options: ["Java", "Python", "HTML", "C++"],
        answer: 2,
    },
    {
        question: "Quel langage est utilisé pour le calcul scientifique ?",
        options: ["PHP", "Ruby", "Python", "HTML"],
        answer: 2, 
    },
    {
        question: "Quel langage est le plus utilisé pour le développement\nd'applications Android ?",
        options: ["Swift", "Java", "Kotlin", "JavaScript"],
        answer: 2, 
    },
    {
        question: "Quel langage est connu pour son utilisation dans\nles pages dynamiques ?",
        options: ["HTML", "JavaScript", "CSS", "SQL"],
        answer: 1, 
    },
    {
        question: "Comment supprimer une table utilisateurs en SQL ?",
        options: ["DROP TABLE utilisateurs;", "DELETE TABLE utilisateurs;", "REMOVE TABLE utilisateurs;", "DROP utilisateurs;"],
        answer: 0, 
    },
    {
        question: "Quelle commande SQL permet d'ajouter \n une nouvelle ligne dans une table ?",
        options: ["INSERT INTO", "ADD INTO", "INSERT NEW", "ADD ROW"],
        answer: 0, 
    },
    {
        question: "Quel langage de programmation est utilisé \n pour développer des applications avec Flutter ?",
        options: ["Java", "Dart", "Swift", "Kotlin"],
        answer: 1,
    },
    {
        question: "Que signifie GitHub ?",
        options: ["Un gestionnaire de bases de données", "Une plateforme de gestion de version basée sur Git", "Un éditeur de code", "Un langage de programmation"],
        answer: 1, 
    },
    {
        question: "Quel langage est utilisé pour manipuler les bases\nde données ?",
        options: ["SQL", "HTML", "CSS", "Python"],
        answer: 0,
    }


];


// Fonction pour démarrer le quiz
function startQuiz() {
    document.getElementById("start-screen").style.display = "none";
    document.getElementById("question-screen").style.display = "block";
    showQuestion();
}

// Fonction pour afficher une question
function showQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById("question").textContent = question.question;
    
    const optionsList = document.getElementById("options");
    optionsList.innerHTML = '';  // Réinitialiser les options
    question.options.forEach((option, index) => {
        const li = document.createElement("li");
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => checkAnswer(index);  // Comparer l'index de la réponse
        li.appendChild(button);
        optionsList.appendChild(li);
    });
}

// Fonction pour vérifier la réponse
function checkAnswer(selectedIndex) {
    const question = questions[currentQuestionIndex];
    if (selectedIndex === question.answer) {  // Comparer l'index sélectionné à la bonne réponse
        score++;
    }
    document.getElementById("score").textContent = score;
    document.getElementById("next-btn").style.display = "block"; // Afficher le bouton "Suivant"
}

// Fonction pour passer à la question suivante
function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
        document.getElementById("next-btn").style.display = "none"; // Cacher le bouton "Suivant" jusqu'à ce qu'une réponse soit donnée
    } else {
        endQuiz();
    }
}

// Fonction pour terminer le quiz
function endQuiz() {
    document.getElementById("question-screen").style.display = "none";
    document.getElementById("end-screen").style.display = "block";
    document.getElementById("final-score").textContent = score;
}

// Fonction pour redémarrer le quiz
function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById("score").textContent = score;
    document.getElementById("end-screen").style.display = "none";
    document.getElementById("start-screen").style.display = "block";
}
