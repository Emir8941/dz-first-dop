const names = prompt('Как вас зовут?');
const age = prompt('Сколько вам лет?');
const temperature = prompt('какая у вас температура?');

if (temperature < 15){
    alert ('одевайтесь по теплее');
} else if (temperature > 45){
    alert ('не выходите на улецу!!!')
} else {
    alert (names + ' приятной прогулки');
}