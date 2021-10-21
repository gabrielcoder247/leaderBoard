import { baseUri, gameId } from './createGames.js';

const addScore = async(name, score) => {
    const response = await fetch(`${baseUri}${gameId}/scores`, {
        method: 'POST',
        body: JSON.stringify({
            user: name,
            score: score,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    });
    return response.json();
};
export default addScore;