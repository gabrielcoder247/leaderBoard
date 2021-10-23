import './style.css';
import addScore from './addScore.js';
import {
  createGame,
  gameId,
  baseUri,
} from './createGames.js';

const createForm = () => {
  const formHtml = `
            <h4 class="mb-2">Add your score</h4>
            <form action=${baseUri}+${createGame.gameId}+"/scores"
            method="post" id="name-score-form">
            <div class="mb-3">
            <input type="text" name="name" placeholder="Your name" id="input-name" class="form-control" aria-describedby="emailHelp" required>
            </div>
            <div class="mb-3">
            <input type="number" name="score" placeholder="Your score" class="form-control" id="input-score" required>
            </div>
            <input type="submit" class="btn btn-outline-secondary" value="Submit" id="name-score-submit">
            </form>
        `;
  const formDiv = document.querySelector('#add-score');
  formDiv.innerHTML = formHtml;
};

const refreshScore = async () => {
  const nameScoreList = document.querySelector('#name-score-list');
  const response = await fetch(`${baseUri}${gameId}/scores`);
  response.json().then((json) => {
    let listHtml = '';
    const jsonArr = json.result;
    jsonArr.forEach((item) => {
      listHtml += `<li class="list-group-item">${item.user}: ${item.score}</li>`;
    });
    nameScoreList.innerHTML = listHtml;
  });
};

createGame();

createForm();

const scoreForm = document.querySelector('#name-score-form');

scoreForm.addEventListener('submit', (e) => {
  e.preventDefault();
  addScore(scoreForm.name.value, scoreForm.score.value);
});

const refreshBtn = document.querySelector('#refresh-btn');

refreshBtn.addEventListener('click', () => {
  refreshScore();
});