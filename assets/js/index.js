"use strict";


let stay = true;

do {

    const taskNumber = prompt("Which task do you want (from 1 to 10, press \"E\" to exit)?")

    switch (taskNumber) {
        case "1": {

            const userValue = prompt("Please input your count");

            let i = 0;

            while (i++ < userValue) {

                console.log("#");

            }


        }
            break;
        case "2": {
            const userValue = prompt("Please input your count");

            let userNumber = Number(userValue);

            if (userNumber >= 0) {
                while (userNumber >= 0) {

                    console.log(userNumber--);

                }
            } else {
                while (userNumber <= 0) {

                    console.log(userNumber++);

                }
            }


        }
            break;
        case "3": {
            const userValue = +prompt("Please input your number");
            const userExp = prompt("Please input your exponent");

            let result = userValue;
            let i = 1;

            while (i++ < userExp) {

                result *= userValue;


            }

            console.log(result);


        }
            break;
        case "4": {
            const firstValue = prompt("First value");
            const secondValue = prompt("Second value");

            const minValue = firstValue > secondValue ? secondValue : firstValue;

            let i = 0;
            while (i++ <= minValue) {

                if (firstValue % i === 0 && secondValue % i === 0) {
                    console.log(i);
                }

            }

        }
            break;
        case "5": {
            const value = prompt("Input yout value");

            if (value == 0) {
                console.log(1);
                break;
            }
            let i = 1;
            let result = 1;
            while (i++ < value) {

                result *= i;

            }
            console.log(result);


        }
            break;
        case "6": {


            for (let i = 0; i < 100; i++) {

                if (i === 50) {
                    break;
                }


            }


        }
            break;
        case "7": {
            console.log(taskNumber);
        }
            break;
        case "8": {
            console.log(taskNumber);
        }
            break;
        case "9": {
            console.log(taskNumber);
        }
            break;
        case "10": {
            console.log(taskNumber);
        }
            break;

        case "E":
        case "e": {
            console.log(taskNumber);

            stay = false;
        }
            break;

    }


} while (stay);


console.log("EXIT!");








