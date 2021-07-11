// Создаем массив со словами
alert("Приветствую Вас в игре!!! А Вы знали, что на территории нашей страны обитает аж целых 11 видов кошачьих в дикой природе. Я загадал одного из них, догадайтесь кого");

var words = [
"камышовый кот",
"лесная кошка",
"степной кот",
"кавказский лесной кот ",
"обыкновенная рысь",
"амурский тигр",
"дальневосточный леопард",
"переднеазиатский леопард ",
"ирбис",
"каракал",
];
// Выбираем случайное слово
var word = words[Math.floor(Math.random() * words.length)];
var numberOfTries = 20;
// Создаем итоговый массив
var answerArray = [];
for (var i = 0; i < word.length; i++) {
answerArray[i] = "_";
}
var remainingLetters = word.length;
// Игровой цикл
if (remainingLetters > 0 && numberOfTries >0) {


while (remainingLetters > 0 && numberOfTries >0) {
// Показываем состояние игры
alert("Загаданное слово   " + answerArray.join(" ") + "   Осталось попыток " + numberOfTries);
// Запрашиваем вариант ответа
var guess = prompt("Угадайте букву, или нажмите Отмена для выхода из игры.");
var guess = guess.toLowerCase();
numberOfTries--;
if (guess === null) {
// Выходим из игрового цикла
break;
} else if (guess.length !== 1) {
alert("Пожалуйста, введите одиночную букву.");
} else {
// Обновляем состояние игры
for (var j = 0; j < word.length; j++) {
if (word[j] === guess && answerArray[j] == "_") {
answerArray[j] = guess;
remainingLetters--;
}
}
}
}
// Конец игрового цикла
}
if (numberOfTries === 0) {
  alert("К сожалению, Вы не догадались. я загадывал вот этого котика: " + word);
}  else if (numberOfTries > 0) {
alert(answerArray.join(" "));
alert("Отлично! на территории Российской федерации ты можешь встретить котика по имени  " + word);
// Отображаем ответ и поздравляем игрока

}
