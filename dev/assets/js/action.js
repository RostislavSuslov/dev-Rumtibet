const motivationalMessages = [
    // 1
    "Каждый шаг",
    "— маленькое приключение",
    "которое стоит пережить❤️",

    // 2
    "Чувствуй свободу",
    "свежий воздух",
    "и радость",
    "настоящего момента✨",

    // 3
    "Пусть горы",
    "станут твоим источником",
    "силы и вдохновения❤️",

    // 4
    "Каждая тропа",
    "ведёт к новым эмоциям",
    "и открытиям✨",

    // 5
    "Природа, друзья, приключения",
    "— идеальное сочетание!❤️",

    // 6
    "Вдохни глубже",
    "смотри шире",
    "и наслаждайся",
    "каждым мгновением✨",

    // 7
    "Следуй тропой",
    "через лес",
    "и получай",
    "новые эмоции❤️",

    // 8
    "Подними рюкзак",
    "и отправляйся",
    "навстречу приключениям✨",
];

const bgColor = [
    '#FDE2E4',
    '#FFF5BA',
    '#D6EFFF',
    '#E3FCEF',
    '#FFD6A5',
    '#E7D8FF',
    '#C1F0F6',
    '#FFEECC',
    '#FDEBD0',
    '#E0FFE0',
    '#FFE0F0',
    '#FFF0F5',
    '#F0FFF0',
    '#FFE4E1',
    '#FAFAD2',
    '#E6E6FA'
];


const box = document.getElementById('message');
let i = 0;

function showNextMessage() {
    box.textContent = motivationalMessages[i];

    const randomColor = bgColor[Math.floor(Math.random() * bgColor.length)];
    box.style.background = randomColor;

    i++;
    if (i >= motivationalMessages.length) {
        i = 0; 
    }

    setTimeout(showNextMessage, 750);
}

showNextMessage();

// const box = document.getElementById('message');
// let i = 0;

// while (i < motivationalMessages.length) {
//     const idx = i; 
//     setTimeout(() => {
//         box.textContent = motivationalMessages[idx];

//         const randomColor = bgColor[Math.floor(Math.random() * bgColor.length)];
//         box.style.background = randomColor;
//     }, idx * 750);
//     i++;
// }