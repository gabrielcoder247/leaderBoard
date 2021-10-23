let gameId = ''; // eslint-disable-line
const baseUri = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';

const createGame = async () => {
  const response = await fetch(baseUri, {
    method: 'POST',
    body: JSON.stringify({
      name: 'foo',
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  response.json().then((json) => {
    const [, , , d] = json.result.split(' ');
    gameId = d;
  });
};

export { createGame, gameId, baseUri };