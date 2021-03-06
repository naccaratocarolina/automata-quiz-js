// Definindo constantes
const MAX_HIGH_SCORES = 5; // numero maximo de usuarios no rank

// Acessando objetos do HTML
const username = document.querySelector('#username');
const saveScoreBtn = document.querySelector('#saveScoreBtn');
const finalScore = document.querySelector('#finalScore');
const lastScore = localStorage.getItem('lastScore');

// Acessando o local storage (que tem o lastScore salvo)
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

finalScore.innerText = lastScore;

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value
});

saveHighScore = e => {
    e.preventDefault();

    const score = {
        score: lastScore,
        name: username.value
    };

    highScores.push(score);

    highScores.sort((a,b) => {
        return b.score - a.score
    });

    highScores.splice(5);

    localStorage.setItem('highScores', JSON.stringify(highScores));
    window.location.assign('./highscores.html');
};
