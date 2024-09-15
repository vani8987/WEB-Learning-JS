// function GetTheAmount() {
//     let salaries = {
//         John: 100,
//         Ann: 160,
//         Pete: 130
//     };

//     let summ = 0;


//     for (let key in salaries) {
//         summ += salaries[key];
//     };

//     console.log(summ);

// };

// GetTheAmount();

// Создайте функцию multiplyNumeric(obj), которая умножает все 
// числовые свойства объекта obj на 2.

// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
//   };
 
//  function multiplyNumeric(obj) {
//     for(key in obj) {
//        if (typeof obj[key] === 'number') {
//           obj[key] *= 2;
//        }
//     }
//  }
  
//  multiplyNumeric(menu); // изменили размер
//  console.log(menu);


//  ==============================================================================================================


// изучение DOM;

// задание 1;

// Вывести кнопку с текстом "Привет", при нажатии; 
// на неё выводим alert c текстом "Привет Мир!";

const BtnTaskOne = document.querySelector('#BtnTaskOne');

BtnTaskOne.addEventListener('click', function() {
    alert("Привет Мир!");
});


//  ==============================================================================================================


// задание 2;

// Выводим кнопку с текстом "Заполнить" ;
// и незаполненный инпут, при клике на кнопку, заполняем инпут текстом "test@email.ru";

const EmailInputTaskTwo = document.querySelector('#EmailInputTaskTwo');
const BtnTaskTwo = document.querySelector('#BtnTaskTwo');
const BtnDeletions = document.querySelector('#BtnDeletions');



BtnTaskTwo.addEventListener('click', function() {
    BtnTaskTwo.innerText = "заполнено"
    EmailInputTaskTwo.value = 'test@email.ru'
    EmailInputTaskTwo.focus()
    BtnDeletions.innerText = 'удалить данные'
});

BtnDeletions.addEventListener('click', function() {
    BtnTaskTwo.innerText = "заполнить"
    EmailInputTaskTwo.value = ''
    EmailInputTaskTwo.focus()
    BtnDeletions.innerText = 'данных нет'
});


//  ==============================================================================================================


// задание 3;

// Выводим кнопку и инпут, в инпуте можно ввести любой и текст и при нажатии на кнопку,
// выводится алерт с текстом "Вы ввели 'текст инпута'" или "Вы ничего не ввели в поле";

const InputTaskThreeTaskTwo = document.querySelector('#InputTaskThree');
const BtnTaskThree = document.querySelector('#BtnTaskThree');

BtnTaskThree.addEventListener('click', function() {
    if (!InputTaskThreeTaskTwo.value) {
        alert("Вы ничего не ввели в поле");
    } else {
        const data = InputTaskThreeTaskTwo.value;
        alert(`Вы ввели: ${data}`); 
    }
});


//  ==============================================================================================================


// задание 4;

// Выводим кнопку с текстом "Поменять" и два инпута, при клике на;
// кнопку инпуты меняются своим введеным текстом;

const InputTaskThree_One = document.querySelector('#InputTaskFourth_One');
const InputTaskThree_Two = document.querySelector('#InputTaskFourth_Two');
const BtnTaskFourth = document.querySelector('#BtnTaskFourth');


BtnTaskFourth.addEventListener('click', ()=> {
    if (!InputTaskThree_Two.value) {
        InputTaskThree_Two.value = InputTaskThree_One.value;
        InputTaskThree_Two.focus();
        InputTaskThree_One.value = '';
    } else {
        InputTaskThree_One.value = InputTaskThree_Two.value;
        InputTaskThree_One.focus();
        InputTaskThree_Two.value = '';
    }
});


//  ==============================================================================================================


// задание 5;

// Выводим две кнопки "заблокировать" и "разблокировать" и инпут. Одна;
// из них блокирует инпут с помощью атрибута disabled, а другая разблокирует;

const InputTaskFive = document.querySelector('#InputTaskFive');
const BtnTaskFiveBlocking = document.querySelector('#BtnTaskFiveBlocking');
const BtnTaskFiveUnlock = document.querySelector('#BtnTaskFiveUnlock');


BtnTaskFiveBlocking.addEventListener('click', ()=> {
    if (InputTaskFive.hasAttribute('disabled') !== 'disabled') {
        InputTaskFive.setAttribute('disabled', 'disabled');
        InputTaskFive.classList.add('BlockedInputTaskFive')
    }
});

BtnTaskFiveUnlock.addEventListener('click', ()=> {
    if (InputTaskFive.getAttribute('disabled') == 'disabled') {
        InputTaskFive.removeAttribute('disabled');
        InputTaskFive.classList.remove('BlockedInputTaskFive')
    }
});


//  ==============================================================================================================


// задание 6;

// Вывести любой квадрат и кнопку "скрыть квадрат". Когда мы нажимаем на скрыть, квадрат исчезает и текст кнопки меняется на "показать квадрат" и так можно кликать сколько угодно раз;


const BlockId = document.querySelector('#BlockId');
const Btnhide = document.querySelector('#Btnhide');


Btnhide.addEventListener('click', function() {
    if (!BlockId.classList.contains('BlockHide')) {
        BlockId.classList.add('BlockHide');
        Btnhide.innerText = 'показать блок';
    } else {
        BlockId.classList.remove('BlockHide');
        Btnhide.innerText = 'скрыть блок';
    };
});


//  ==============================================================================================================


// задание 7
 
// водим красный квадрат, при наведении на него он становиться зеленым, а когда уводим курсор от него, обратно красным.


const BlockRed = document.querySelector('#BlockRed');

BlockRed.addEventListener('mouseover', function() {
    
    if (!BlockRed.classList.contains('GreenBlock')) {
        BlockRed.classList.add('GreenBlock');
        BlockRed.classList.remove('RedBlock');
    
    } else {
        
        BlockRed.addEventListener('mouseout', function() {
            BlockRed.classList.add('RedBlock'); 
            BlockRed.classList.remove('GreenBlock');
        });
    };
});


//  ==============================================================================================================


// задание 8

// создать калькулятор

const inpNumber = document.querySelector('#inpNumber');
const btnCalculator = document.querySelectorAll('#btnCalculator');

let numberOne = '';
let NumberTwo = '';
let sign = '';
let FinelNumber = '';

const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
const operations = ['%', '/', 'х', '-', '+'];


inpNumber.addEventListener('click', function() {
    if (inpNumber.focus) {
        inpNumber.value = ''
    } 
});

function ClearAll() {
    inpNumber.value = 0;
    numberOne = '';
    NumberTwo = '';
    sign = '';
};


btnCalculator.forEach(item => {
    item.addEventListener('click', function(e) {
        key = e.target.innerHTML;
        // функция отчистки инпута
        if (key == 'AC') {
            ClearAll();
        };

        // функция использования кнопок чисел
        if (numbers.includes(key)) {
            if (sign == '') {
                numberOne += key;
                inpNumber.value = numberOne;          
            } else {
                NumberTwo += key;
                inpNumber.value = NumberTwo;
            };    
        }; 

        // функция использования кнопок операций
        if (operations.includes(key) && !numberOne == '') {
            sign = key;
            inpNumber.value = sign;
        };

        // разблокировка = 
        if (!numberOne == '' && !NumberTwo == '') {
            equally = document.querySelector('.equally');
            equally.removeAttribute('disabled', 'disabled');
        } else {
            equally = document.querySelector('.equally');
            equally.setAttribute('disabled', 'disabled')
        };

        // основные расчеты калькулятора
        if (key == '=') {
            switch (sign) {
                case 'х':
                    FinelNumber = numberOne * NumberTwo
                    inpNumber.value = FinelNumber
                    NumberTwo = '';
                    sign = '';

                    break;
                
                case '/':
                    FinelNumber = numberOne / NumberTwo;
                    inpNumber.value = FinelNumber; 
                    NumberTwo = '';
                    sign = '';

                    if (NumberTwo == '0') { 
                        inpNumber.value = 'на 0 делить нельзя'
                        numberOne = '';
                        NumberTwo = '';
                        sign = '';
                    }
                    break;
                
                case '-':
                    FinelNumber = numberOne - NumberTwo;
                    inpNumber.value = FinelNumber;
                    NumberTwo = '';
                    sign = ''

                    break;

                case '+':
                    FinelNumber = +numberOne + +NumberTwo;
                    inpNumber.value = FinelNumber;
                    NumberTwo = '';
                    sign = '';
                    break;
                
                case '%':
                    FinelNumber = numberOne / 100 * NumberTwo;
                    inpNumber.value = FinelNumber;
                    NumberTwo = '';
                    sign = ''
                    break;

                default:
                    console.log('ошибка')
                    break;
            };
        };
    });
});


//  ==============================================================================================================


// !АССИНХРОННОСТЬ!

// !!!изучение setTimeout!!!

// console.log('start')
// console.log('start2')

// setTimeout(function() {
//     console.log('Timeout1')
// }, 1000);

// setTimeout(function() {
//     console.log('Timeout2')
// }, 1500);

// setTimeout(function() {
//     console.log('Timeout3')
// }, 5500);

// console.log('end')

// setTimeout(function() {
//     console.log('Timeout4')
// }, 0);

// Написать функцию с колбеком, которая принимает число с колбеком и через секунду выводить в консоль число. Ограничения - для решения задачи setTimeout - можно использовать только один раз! Реализовать вывод в консоль от 1 до 10 через секунду.

// const InputNumberOneTen = (number) => {
//     setTimeout(function () {
//         console.log(number)
//     }, number * 1000);
// }

// for (let number = 1; number <= 10; number++) {
//     InputNumberOneTen(number) 
// }


//  !!!изучение setTimeout!!! - ВЫПОЛНЕНО


//  ==============================================================================================================


// !!!изучение Promise!!!


// const outTime = 500;

// const squatingTime = 200;

// function wringOut(count) {
    
//     return new Promise((resolve, reject) => {


//         if (count > 100) {
//             reject(new Error('слишком много отжиманий'));
//         };

//         setTimeout(() => {
            
//             resolve();

//         }, count * outTime);


//     });
// };


// function squating(count) {
//     return new Promise((resolve, reject) => {

//         if (count > 100) {
//             reject(new Error('слишком много приседаний'));
//         };

//         setTimeout(() => {

//             resolve();

//         }, count * squatingTime);

//     });
// };



// console.log('начать тренировку');

// wringOut(10)
//     .then(() =>{
//         console.log('отжался 10 раз')
//         return squating(200);
    
//     }).then(() => {
//         console.log('присел 20 раз')
//         console.log('тренировка окончена');

// }).catch((err) => {

//     console.log(err.toString())
// });


// Выводим от 1 до 10 через секунду каждый раз. Используя Promise. Ограничения - setTimeout и new Promise() мы можем вызывать только один раз для решения нашей задачи.

// let time = 1

// const promise = new Promise((resolve, reject) => { 
//     setTimeout(() => {
//         resolve();
//     }, time * 2000);
// });

// function PromiseNumber() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve();
//         }, 2000);
//     });
// };

// function OutputNumber(n) {
//     if (n <= 10) {
//         PromiseNumber().then(() => {
//             console.log(n);
//             OutputNumber(n + 1)
//         });
//     }
// }

// OutputNumber(1)

//  !!!изучение Promise!!! - ВЫПОЛНЕНО


//  ==============================================================================================================


// !!!изучение async-await!!!

// const outTime = 500;

// const squatingTime = 200;

// function wringOut(count) {
    
//     return new Promise((resolve, reject) => {


//         if (count > 100) {
//             reject(new Error('слишком много отжиманий'));
//         };

//         setTimeout(() => {
            
//             resolve();

//         }, count * outTime);


//     });
// };


// function squating(count) {
//     return new Promise((resolve, reject) => {

//         if (count > 100) {
//             reject(new Error('слишком много приседаний'));
//         };

//         setTimeout(() => {

//             resolve();

//         }, count * squatingTime);

//     });
// };


// async function MyTrening() {
//     try {
//         console.log('начать тренировку');
//         await wringOut(10)
//         console.log('отжался 10 раз')
//         await squating(20);
//         console.log('присел 20 раз')
//         console.log('тренировка окончена');
//         return true;      

//     }catch(err) {
//         console.log(err.toString())
//         return false;
//     };
// };

// MyTrening().then((result) => {
//     console.log(result);
// });


// Скопируем решения из прошлой задачи и переписываем на async-await функцию, конструкцию .then - не используем


// function PromiseNumber() {
//     const time = 2

//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve();
//         }, time * 2000);
//     });
// };

// async function OutputNumber() {
//     try {
//         for (let num = 1; num <= 10; num++) {
//             await PromiseNumber();
//             console.log(num);
//         }
//         return true;

//     }catch(err) {
//         console.log('...')
//         return false; 
//     };
// };

// OutputNumber().then((result) => {
//     console.log(result);
// });


//  !!!изучение async-await!!! - ВЫПОЛНЕНО


//  ==============================================================================================================


// Сделайте функцию, которая будет генерировать случайные числа от 1 до 10. Сделайте так, чтобы сгенерированное число было задержкой функции setTimeout в секундах. Оберните все это в промис. Пусть промис выполнится успешно, если сгенерировано число от 1 до 5, и с ошибкой - если от 6 до 10

// console.log("програма запущена")

// function generatorNum() {
//     const arrNumber = [];

//     for (let n = 1; n <= 10; n++) {
//         arrNumber.push(n);
//     };

//     let randomNum = (Math.floor(Math.random() * arrNumber.length + 1));

//     return randomNum;
// };

// let num = generatorNum();

// function promiseNumber() {
//     return new Promise((resolve, reject) => {
        
//         if (num <= 5) {
//             setTimeout(() => {
//                 resolve();
//             }, 2000);
//         };

//         if (num >= 6) {
//             reject(new Error('ОШИБКА, число должно быть меньше 6'));
//         };  

//     });
// };

// async function outputNum() {
//     try {
//         await promiseNumber();
//         console.log(num);
//         console.log("програма отключена")

//         return true;

//     }catch(err) {
//         console.log(err.toString());
//         console.log("програма отключена")

//         return false;
//     };
// };

// outputNum().then((result) => {
//     console.log(result);
// });


//  ==============================================================================================================


// Сделайте цепочку из трех промисов. Пусть первый промис возвращает число. Сделайте так, чтобы каждый последующий промис через 3 секунды возводил в квадрат результат предыдущего промиса. После окончания манипуляций выведите число алертом на экран.


// function promise() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve()
//         }, 3000);
//     });
// };

// async function outputNumber() {
//     try {
//         await promise();
//         let num = 4;
//         await promise();
//         num = Math.pow(num, 2)
//         await promise();
//         num = Math.pow(num, 2)
//         alert(num)
//         return true;

//     } catch (err) {
//         console.log("Error")
//         return false;
//     };
// };

// outputNumber().then((result) => {
//     console.log(result);
// });


//  ==============================================================================================================


// Выполните запрос по получению списка пользователей, по этому url https://jsonplaceholder.typicode.com/users, в случае успеха выводим на экран пользователей со всеми данными в табличку. В случае не успеха выводим на экран ошибку "Ошибка, запрос не отработан". Используем для решения fetch.



// fetch('https://jsonplaceholder.typicode.com/users')
// .then((data) => {
//     if (data.status === 200) {
//         return data.json();
//     } else {
//         console.error('Ошибка, запрос не отработан');
//         return false;
//     }

// }).then((info) => {
//     info.forEach(item => {
//         console.log(item)
//     });
// })


//  ==============================================================================================================


// изучение обьектов


// const user = {
//     name: 'Олег',
//     age: 28,
//     isDeveloper: undefined
// }

// for (const key in user) {
//     console.log(user[key])
// }


//  ==============================================================================================================


// У нас есть объект, в котором хранятся зарплаты нашей команды:

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }
// Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.
// Если объект salaries пуст, то результат должен быть 0.

// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// let sum = 0;

// for (const key in salaries) {
//     if (key.length === 0) {
//         sum = 0;
//         console.log('в обьекте нет значений')
//         break
//     } else {
//         sum += salaries[key]
//     }
// }


// console.log(sum)

//  ==============================================================================================================

// Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.

// Например:

// // до вызова функции
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };

// multiplyNumeric(menu);

// // после вызова функции
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu"
// };
// Обратите внимание, что multiplyNumeric не нужно ничего возвращать. Следует напрямую изменять объект.
// P.S. Используйте typeof для проверки, что значение свойства числовое.


// const menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };

// console.log(menu)

// const multiplyNumeric = (obj) => {
//     for (let key in obj) {
//         if (typeof obj[key] === 'number') {
//             obj[key] *= 2
//         }
//     };
//     console.log(obj)
// };

// multiplyNumeric(menu)


// Написать объект ladder - объект, который позволяет подниматься вверх и спускаться. Пример работы должен быть таким:

// ladder.showStep(); // 0 (выводит ступеньку на который мы находимся)
// ladder.up(); 
// ladder.up();
// ladder.showStep(); // 2
// ladder.down();
// ladder.showStep(); // 1

// const ladder = {
//     ladder: 0,
    
//     up() {
//         ladder.ladder += 1;
//     },

//     down() {
//         ladder.ladder -= 1;

//         if (ladder.ladder < 0) {
//             console.log("ниже нуля ступенька не может быть");
//             ladder.ladder += 1;
//         };
//     },

//     showStep() {
//         console.log(ladder.ladder);
//     },
// };

// ladder.showStep();

// ladder.up();
// ladder.up();
// ladder.up();
// ladder.showStep();
// ladder.down();
// ladder.showStep();


//  ==============================================================================================================

// Регулярные выражения

// Число/не число
// const regexp = /\d\d/; 
// const regexp = /\D\D/;

// пробел/не пробельный
// const regexp = /\s\d\d\s/;
// const regexp = /\s\d\d\S/;

// числа/англиские символы/нижние подчёркивание
// const regexp = /\s\w\w\s/;
// const regexp = /\w\w\w\w\w/;

// не слово
// const regexp = /\W/;

// const str = 'привет/hello, я Игорь! Тебе 20? Мне вот 23 года_';


// НАБОРЫ!!!!

// const regexp = /[ЮИ]ра/;

// исключающий
// const regexp = /[^ЮИ]ра/;

// const str = 'Это Юра и Ира сказали ура!'

// const regexp = /[в-д]/;
// const regexp = /[^a-я]/;
// const str = 'абвгдеёжзклмнопрстуфчцчшщъыьэюя'

// const regexp = /\d\d\.\d\d\.\d\d\d\d/;

// const regexp = /\d{2}\.\d{2}\.\d{4}/;
// const str = 'сегодня 14.09.2024'

// const regexp = /colou?r/;
// const str = 'What color is the cat?'

// const regexp = /\d*?/;
// const str = '0123456789'

// const regexp = /\d+?/;
// const str = '0123456789'

// console.log(str.match(regexp))


// const regexp = /\s*,\s*/;
// const str = '1,2, 3  , 4, 5,6,   7   , 8'

// const result = str.split(regexp)
// console.log(result)

// const regexp = /\d{6}/;
// const str = '...телефон 123456, его почта...'

// const result = str.search(regexp)
// console.log(result)


// Проверка URL на валидность. Передаем урл функции и проверяем валидное оно или нет (возращаем тру или фолс). Критерии: Урл должен начинаться с http:// иили https:// и заканчиваться на .php или .html. Например - http://site.ru/index.php - валидный, http://site.com - не валидный, site.ru/index.php - не валидный

// const url = 'http://site.ru/index.php';

// const regExt = /(^https?:\/\/)?(\.php|html$)/i;

// if (url.match(regExt)) {
//     console.log('сайт валиден')
// } else {
//     console.log('сайт не валиден') 
// };
    


// !!!ооп - обьективно оринтированное программирование!!!

