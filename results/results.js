import { getUser } from '../userUtils.js'

const resultSpan = document.getElementById('result-span');


const user = getUser();

const name = user.name;
const gold = user.gold;
const hp = user.hp;

resultSpan.textContent = `${name} your myriad of quests have come to an end, you finished with ${gold} gold and ${hp} hp`;
