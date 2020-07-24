import quests from '../data/quest-data.js';
import { getUser } from '../userUtils.js';

const user = getUser();

if (user.hp <= 0) {
    alert('YOU DIED! HAHAHAHAHA!');
    alert(`you had ${user.gold} gold left on your lifeless body`);
    window.location = '/results';
}


const section = document.querySelector('section');

let completedQuests = 0;

for (let i =0; i < quests.length; i++) {
    const quest = quests[i];

    if (user.completed[quest.id]) {
        completedQuests++;

    }
}

if (completedQuests === quests.length) {
    alert(`You have survived the gauntelet of quests! You are champion and retire from questing with ${user.gold} gold!`);
    window.location = '/results';
}

for (let i = 0; i < quests.length; i++) {
    const quest = quests[i];
    
    /*const a = document.createElement('a');
    a.textContent = quest.title;
    a.href = '/quest/?id=' + quest.id;*/
    
    if (user.completed[quest.id]) {
        const span = document.createElement('span');
        span.textContent = quest.title;
        span.style.textDecoration = 'strikethough';
        section.append(span);
    } else {
        const a = document.createElement('a');
        a.textContent = quest.title
        a.href = '/quest/?id=' + quest.id;
        section.append(a);
    }
}

    
