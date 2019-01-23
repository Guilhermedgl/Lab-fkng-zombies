/* eslint-disable no-return-assign */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

const updateScore = () => {
  const newScore = document.getElementById('score');
  if (score < 10) {
    return newScore.textContent = `0${score}`;
  } return newScore.textContent = `${score}`;
};
