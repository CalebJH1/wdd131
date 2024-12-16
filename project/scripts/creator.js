const stories = JSON.parse(window.localStorage.getItem('stories-array')) || [
    {
        title: "The Worst Day of My Life",
        text: `Today was the worst day of my life. First off, it started normal, with the sun shining and the birds chirping. But as soon as I stepped out of my house, everything went wrong. I missed my bus, spilled coffee on my shirt, and accidentally deleted an important email. At work, my boss yelled at me for a mistake I didn't even make. Then, I found out my wallet was missing and my credit card was used to make fraudulent purchases. As I rushed to the bank, I tripped on a pencil. I couldn't wait for this stupid day to be over. But when I got home, I found out my apartment had been flooded due to a burst pipe. I just collapsed on the floor, feeling defeated. I went to bed that night, hoping tomorrow would be better. But as I drifted off to sleep, I heard a loud crash and realized my ceiling had caved in. I couldn't believe my luck. But despite all the chaos and misfortunes, I knew I had to keep going. Because even on the worst day of my life, I still had hope for a better tomorrow.`,
        image: "../images/spilled-drink.webp",
        words: 
        {
            'shining': 'verb ending in -ing',
            'birds': 'plural animal', 
            'bus,': 'noun', 
            'coffee': 'plural noun',
            'important': 'adjective',
            'yelled': 'past tense verb',
            'rushed': 'past tense verb',
            'pencil.': 'noun',
            'stupid': 'adjective',
            'pipe.': 'noun',
            'collapsed': 'past tense verb',
            'defeated.': 'emotion',
            'better.': 'adjective',
            'ceiling': 'noun'
        }
    },
    {
        title: "My Best Day Ever",
        text: `The best day of my life started off like any other. I woke up to the sound of birds chirping and the warm sun shining through my window. I went to school, had a few classes, and then came home. But little did I know, this day would be different. As I walked home, a stray dog followed me. I gave him some food and he became my new friend. We played in the park and ran around until we were tired. Then, I brought him home and my parents let me keep him. That day, I learned that sometimes the best things in life come unexpectedly. And that's what made it the best day of my life.`,
        image: "../images/rising-sun.webp",
        words:
        {
            'birds': 'plural animal',
            'warm': 'adjective',
            'different.': 'adjective',
            'dog': 'animal',
            'food': 'noun',
            'park': 'place',
            'ran': 'past tense verb'
        }
    },
    {
        title: "Date Night",
        text: `I nervously adjusted my hair as I waited for my girlfriend to arrive. We had been planning this date for weeks and I couldn't wait to spend some quality time with her. As she pulled up, I could feel my heart beat with excitement. I opened the car door for her and we drove off to our favorite Italian restaurant. Over a candlelit dinner, we talked and laughed, just enjoying each other's company. As the night went on, we took a romantic walk by the river and sat under the stars. It was a simple yet perfect date, and I couldn't wait for the next one with my amazing girlfriend.`,
        image: "../images/neon-heart.webp",
        words:
        {
            'adjusted': 'past tense verb',
            'quality': 'adjective',
            'heart': 'body part',
            'restaurant.': 'place',
            'talked': 'past tense verb',
            'romantic': 'adjective',
            'sat': 'past tense verb',
            'amazing': 'adjective'
        }
    },
    {
        title: "Seeing the Penguins",
        text: `It was a dream come true for Sarah. She had always been fascinated by penguins and the thought of seeing them in their natural habitat was enough to make her jump with joy. As her boat approached Antarctica, she couldn't contain her excitement. The cold wind and endless stretch of ice only added to the thrill. Finally, she reached the penguin colony and was greeted by hundreds of the adorable creatures waddling around. Sarah couldn't stop smiling as she watched the penguins play and interact with each other. It was a truly magical experience. As the day came to an end, Sarah knew she would never forget this trip. She bid farewell to the penguins, promising to come back again someday. This was a journey she would cherish forever.`,
        image: "../images/penguins.webp",
        words:
        {
            'fascinated': 'emotion',
            'jump': 'verb',
            'boat': 'noun',
            'Antarctica,': 'place',
            'endless': 'adjective',
            'adorable': 'adjective',
            'smiling': 'verb ending in -ing',
            'interact': 'verb',
            'magical': 'adjective'
        }
    },
    {
        title: "The Unfortunate Event on the Road",
        text: `I was driving down the familiar road towards work, my trusty old car purring beneath me. Suddenly, out of nowhere, a car ran a red light and smashed into my side. The impact was jarring, and my car spun out of control. I watched in horror as it flipped over and landed with a loud crash. Dazed and bruised, I stumbled out of the car, only to see it a crumpled mess. My heart sank as I realized it was beyond repair. My faithful companion, gone in an instant. I sighed and called for a tow truck, knowing I would have to start my search for a new car all over again.`,
        image: "../images/wrecked-car.webp",
        words:
        {
            'familiar': 'adjective',
            'purring': 'verb ending in -ing',
            'Suddenly,': 'adverb',
            'red': 'color',
            'jarring,': 'verb ending in -ing',
            'spun': 'past tense verb',
            'flipped': 'past tense verb',
            'Dazed': 'emotion',
            'stumbled': 'past tense verb',
            'faithful': 'adjective',
            'sighed': 'past tense verb'
        }
    },
    {
        title: "The Hard Deadline",
        text: `It was the final day to work on the big project for college. James sat at his desk, staring at the blank page on his computer screen. He had been procrastinating for weeks, but now the deadline was looming. He took a deep breath and started typing, his fingers flying across the keyboard. He had done all the research, collected all the data, and now it was time to put it all together. Hours passed as he worked tirelessly, fueled by coffee and determination. Finally, as the sun began to set, he hit the save button. The project was done. James smiled, knowing he had given it his all. He closed his laptop and headed to bed, ready to turn it in the next day and finally be free from the stress of the project.`,
        image: "../images/sticky-notes.webp",
        words:
        {
            'desk,': 'noun',
            'fingers': 'body part',
            'flying': 'verb ending in -ing',
            'collected': 'past tense verb',
            'tirelessly,': 'adverb',
            'coffee': 'noun',
            'smiled,': 'past tense verb',
            'laptop': 'noun'
        }
    },
    {
        title: "The Football Game",
        text: `The football game was the talk of the town. The entire community was buzzing with excitement as the two rival teams prepared to face off on the field. The sun was shining down, casting a warm glow over the green grass. The smell of hot dogs and popcorn filled the air as the bleachers filled up with eager fans. The game began and the players ran onto the field, their determination evident in their eyes. The crowd cheered as the first goal was scored, and the game continued with back and forth action. In the end, the home team emerged victorious, much to the delight of their supporters. The players were carried off the field on the shoulders of their teammates, basking in the glory of their win. As the sun set and the crowd dispersed, the town was left with a sense of satisfaction and pride. The football game had brought the community together, even if just for a few hours. It was a reminder that sometimes, the simplest things can bring us the greatest joy.`,
        image: "../images/football-stadium.webp",
        words:
        {
            'buzzing': 'verb ending in -ing',
            'green': 'color',
            'popcorn': 'food',
            'eager': 'emotion',
            'field,': 'place',
            'field': 'place',
            'cheered': 'past tense verb',
            'supporters.': 'group of people',
            'shoulders': 'plural body part',
            'basking': 'verb ending in -ing',
            'dispersed,': 'past tense verb',
            'pride.': 'emotion',
            'joy.': 'emotion'
        }
    },
    {
        title: "Busy Day",
        text: `It was a scorching hot summer day, and I had just finished breakfast when my mom handed me a list of chores. I groaned as I read through it - yardwork, car washing, and bathroom cleaning. I knew I had a long day ahead of me. I started with the yardwork, sweating profusely under the blazing sun as I mowed the lawn and pulled out weeds. Next, I tackled the car, scrubbing it until it sparkled. Finally, I moved on to the bathroom, dreading the thought of scrubbing the toilet. But as I finished each task, I felt a sense of accomplishment. And by the end of the day, I was exhausted but proud of what I had accomplished. Chores may not be fun, but they taught me responsibility and hard work. And that was a lesson worth learning.`,
        image: "../images/car-wash.webp",
        words:
        {
            'scorching': 'verb ending in -ing',
            'groaned': 'past tense verb',
            'profusely': 'adverb',
            'weeds.': 'plural noun',
            'sparkled.': 'past tense verb',
            'toilet.': 'noun',
            'fun,': 'adjective'
        }
    },
    {
        title: "A Kitchen Nightmare",
        text: `I walked into the restaurant with high hopes. The sign outside boasted "Best food in town!" But as soon as I took a bite of the soggy, tasteless burger, I knew I had made a mistake. The fries were cold and the milkshake was watery. I couldn't believe I had wasted my money on this place. To make matters worse, the service was terrible. Our server was rude and uninterested in our complaints. I couldn't wait to leave. As I paid the bill, I noticed a cockroach scurry across the floor. That was the last straw. I vowed never to return to the worst restaurant I had ever eaten at.`,
        image: "../images/restaurant.webp",
        words:
        {
            '"Best': 'adjective ending in -est',
            'burger,': 'food',
            'cold': 'adjective',
            'watery.': 'adjective',
            'terrible.': 'adjective',
            'cockroach': 'animal',
            'scurry': 'verb'
        }
    },
    {
        title: "Best Christmas Ever",
        text: `It was Christmas Eve and the town was covered in a blanket of snow. The streets were filled with the warm glow of twinkling lights and the sound of carolers singing. The whole town was buzzing with excitement for the best Christmas yet. The Johnson family had been preparing for weeks. The tree was decorated with shiny ornaments and the smell of freshly baked cookies filled the air. The children were eagerly waiting for Santa to arrive. As they sat down for their traditional Christmas dinner, they shared stories and laughter. The joy and love in the room were palpable. As the night came to an end, the family gathered around the fireplace and exchanged gifts. The children's faces lit up with delight as they unwrapped their presents. As the snow continued to fall outside, the Johnsons basked in the warmth of their home and the love of their family. This was truly the best Christmas they had ever had. And as they drifted off to sleep, they knew that the magic of Christmas would stay with them throughout the year.`,
        image: "../images/christmas-ornaments.webp",
        words:
        {
            'snow.': 'noun',
            'snow': 'noun',
            'twinkling': 'verb ending in -ing',
            'carolers': 'group of people',
            'buzzing': 'verb ending in -ing',
            'best': 'adjective ending in -est',
            'preparing': 'verb ending in -ing',
            'shiny': 'adjective',
            'freshly': 'adverb',
            'eagerly': 'adverb',
            'stories': 'plural noun',
            'palpable.': 'adjective',
            'fireplace': 'noun',
            'unwrapped': 'past tense verb'
        }
    },
    {
        title: "Basketball Game",
        text: `It was the final seconds of the basketball game and the score was tied. Our team had played our hearts out, but it seemed like luck was not on our side. The opposing team had possession of the ball and their star player was dribbling towards our basket with lightning speed. As he went for the layup, our team's best defender jumped up to block him, but he was just a fraction of a second too late. The ball went through the hoop and the buzzer sounded, signaling the end of the game. We had lost. Disappointment filled our hearts, but we knew we had given it our all. As we walked off the court, we congratulated the other team and promised to come back stronger next time. After all, losing is just a part of the game.`,
        image: "../images/basketball.webp",
        words:
        {
            'hearts': 'plural body part',
            'ball': 'noun',
            'basket': 'noun',
            'block': 'verb',
            'walked': 'past tense verb',
            'court,': 'place',
            'congratulated': 'past tense verb',
            'losing': 'verb ending in -ing'
        }
    }
];
    
const storyContainer = document.querySelector('.story-container');
const heading = document.querySelector('h2');
const chooseButton = document.querySelector('.choose');
const randomButton = document.querySelector('.random');
const optionContainer = document.querySelector('.creator-options');


chooseButton.addEventListener('click', () => {
    optionContainer.classList.toggle('invisible');
    populateScreen();
    addButtonFunctionality();
});

randomButton.addEventListener('click', () => {
    optionContainer.classList.toggle('invisible');
    const keys = Object.keys(stories);
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    const randomStory = stories[randomKey];
    const heading = randomStory.title;
    const image = randomStory.image;
    let storyText = randomStory.text;
    const wordList = randomStory.words;

    runMainEvent(wordList, storyText, image, heading);
});



function populateScreen(storiesArray=stories) {
    storiesArray.forEach(story => {
        const html = `
        <button class="story-button">
            <p>${story.title}</p>
            <img src=${story.image} alt='image not available' width=150 loading='lazy'>
        </button>`;
        storyContainer.innerHTML += html;
    });
    
}
    
function addButtonFunctionality() {
    const buttonsArray = document.querySelectorAll('.story-button');
    for (let i = 0; i < buttonsArray.length; i++) {
        buttonsArray[i].addEventListener('click', () => {
            heading.textContent = stories[i].title;

            storyContainer.classList.toggle('invisible');
            const image = stories[i].image;
            let storyText = stories[i].text;
            const wordList = stories[i].words;

            runMainEvent(wordList, storyText, image)
        });
    }
}

function runMainEvent(wordList, storyText, image, title='') {
    const form = document.querySelector('.user-input-boxes')
    form.classList.toggle('invisible');

    const shuffledWordList = shuffleObject(wordList);
    for (let i = 0; i < Object.keys(shuffledWordList).length; i++) {
        const fieldset = document.createElement('fieldset');
        fieldset.classList.toggle('invisible');
        fieldset.innerHTML = `
        <label for="word"></label>
        <input type="text" name="word">
        <button class="next" type="submit">Next</button>`;
        form.appendChild(fieldset);
    }

    submitButton = document.createElement('button');
    submitButton.classList.add('submit-button');
    submitButton.classList.add('invisible');
    submitButton.type = 'submit';
    submitButton.textContent = 'View Story';

    form.appendChild(submitButton);

    const buttons = document.getElementsByClassName('next');
    const labels = document.querySelectorAll('label');
    const inputs = document.querySelectorAll('input');
    const fieldsets = document.querySelectorAll('fieldset');
    const userInputs = {};

    let autoIncrementedIndex = 0;
    let manuallyIncrementedIndex = 0;
    fieldsets[autoIncrementedIndex].classList.toggle('invisible');
    for (const [key, val] of Object.entries(shuffledWordList)) {
        labels[autoIncrementedIndex].textContent = val;
        userInputs[key] = "";

        buttons[autoIncrementedIndex].addEventListener('click', event => {
            event.preventDefault();
            const keys = Object.keys(userInputs);
            userInputs[keys[manuallyIncrementedIndex]] = inputs[manuallyIncrementedIndex].value;
            fieldsets[manuallyIncrementedIndex].classList.toggle('invisible');
            if (manuallyIncrementedIndex < fieldsets.length - 1) {
                fieldsets[manuallyIncrementedIndex + 1].classList.toggle('invisible');
                manuallyIncrementedIndex++;
            } else {
                submitButton.classList.toggle('invisible');
                submitButton.addEventListener('click', event => {
                    event.preventDefault();
                    form.classList.toggle('invisible');
                    const updatedText = updateText(userInputs, storyText);
                    submitButton.classList.toggle('invisible');
                    const paragraph = `<p>${updatedText}</p>`;
                    const imageElement = document.createElement('img');
                    imageElement.src = image;
                    imageElement.loading = 'lazy';
                    imageElement.classList.toggle('large-image');
        
                    storyContainer.parentElement.appendChild(imageElement);
                    storyContainer.parentElement.innerHTML += paragraph;
                    if (title.length > 0) {
                        const heading = document.querySelector('h2');
                        heading.textContent = title;
                    }
                    document.querySelector('.large-image').addEventListener('error', function() {
                        this.style.display = 'none';
                    });
                });
            }
        })
        autoIncrementedIndex++;
    }
}

function updateText(words, storyText) {
    const storyTextArray = storyText.split(' ');
    for (let [key, val] of Object.entries(words)) {
        let index = 0;
        while (true) {
            index = storyTextArray.indexOf(key);
            if (index === -1) {
                break;
            }
            const regex = /[A-Z]/;
            const hasCapitalLetter = regex.test(key);
            if (hasCapitalLetter) {
                val = val.charAt(0).toUpperCase() + val.slice(1);
            }
            if (key[0] === '"') {
                val = '"' + val;
            }
            if (key[0] === '(') {
                val = '(' + val;
            }
            if (key.endsWith(')')) {
                val = val + ')';
            }
            if (key.endsWith('"')) {
                val = val + '"';
            }
            if (key.endsWith(':')) {
                val = val + ':';
            }
            if (key.endsWith(';')) {
                val = val + ';';
            }
            if (key.endsWith('!')) {
                val = val + '!';
            }
            if (key.endsWith('?')) {
                val = val + '?';
            }
            if (key.endsWith('.')) {
                val = val + '.';
            }
            if (key.endsWith(',')) {
                val = val + ',';
            }
            
            val = `<span class='highlighted'>${val}</span>`
            storyTextArray[index] = val;
        } 
    }
    storyText = storyTextArray.join(', ');
    storyText = storyText.replaceAll(',</span>,', ',,</span>')
    storyText = storyText.replaceAll(',,', '(this is a double comma that will be replaced with a singular comma)');
    storyText = storyText.replaceAll(',', '');
    storyText = storyText.replaceAll('(this is a double comma that will be replaced with a singular comma)', ',');
    return storyText;
}


function shuffleObject(obj) {
    const entries = Object.entries(obj);
    
    for (let i = entries.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [entries[i], entries[j]] = [entries[j], entries[i]];
    }
    
    return Object.fromEntries(entries);
}