let chaptersArray = getChapterList() || [];

const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

chaptersArray.forEach(chapter => displayList(chapter));

button.addEventListener('click', () =>  {
    if (input.value !== '') {
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = '';
        input.focus();
    }
})

function displayList(item) {
    if (item.trim() !== '') {
        const li = document.createElement('li');

        const deleteButton = document.createElement('button');

        li.textContent = item;

        deleteButton.textContent = '❌';

        li.append(deleteButton);

        list.append(li);

        item = '';

        deleteButton.addEventListener('click', function() {
            list.removeChild(li);
            deleteChapter(li.textContent);
            input.focus();
        });
    }

    else {
        input.focus();
    }
}

function setChapterList() {
    window.localStorage.setItem('scriptures-ls', JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem('scriptures-ls'));
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
}