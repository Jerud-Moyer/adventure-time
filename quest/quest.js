import allQuests from "../data/quest-data.js";
import { renderSection, findById } from './questUtils.js';

const main = document.querySelector('main');


const params = new URLSearchParams(window.location.search);
const proceedButton = document.querySelector('#proceed'); 

const questId = params.get('id');
console.log(questId);

const questData = findById(allQuests, questId);
const sectionEl = renderSection(questData);

proceedButton.addEventListener('click', () => {
    window.location = '/map';
});
main.append(sectionEl);

