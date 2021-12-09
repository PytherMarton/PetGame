const { shark } = require("cli-spinners");
const inquirer = require("inquirer");

health = 100;
happiness = 100;
attack = 100;
defense = 100;

function theEnd(){
  console.log("Your Pet Died :((((");
  console.log("THE END")
}

function time () {
  health -= 1;
  happiness -= 1;
  attack -= 1;
  defense -= 1;  
}

function timeReverse() {
  health += 1;
  happiness += 1;
  attack += 1;
  defense += 1;   
}

function statusOption () {
  timeReverse();
  inquirer
    .prompt([
      {
        type: "list",
        name: "statusOptionP",
        message: "Do you want to check the Full or just the Modified status? ",
        choices: ["Full status", "Modified status"],
      },
    ])
    .then((answer) => {
      if (answer.statusOptionP == "Full status"){
        console.log("-------------------")
        console.log(pet);
        console.log("-------------------")
        console.log(`Health: ${health}`);
        console.log(`Happiness: ${happiness}`);
        console.log(`Attack: ${attack}`);
        console.log(`Defense: ${defense}`);
        console.log("-------------------")
      } else {
        console.log("-------------------")
        console.log(`Health: ${health}`);
        console.log(`Happiness: ${happiness}`);
        console.log(`Attack: ${attack}`);
        console.log(`Defense: ${defense}`);
        console.log("-------------------")
      }
    })
    .then(() => gameLoop())
}

function eat () {
  inquirer
    .prompt([
      {
        type: "list",
        name: "eatP",
        message: "What would you like to eat?",
        choices: ["Apple", "Cake", "Big Mac", "Protein Bar"],
      },
    ])
    .then((answer) => {
      if (answer.eatP == "Apple") {
        console.log("-------------------")
        console.log("Mmmm, this Apple is delicious.")
        console.log("-------------------")
        health += 10;
        happiness += 10;
        console.log(`Health: +10`);
        console.log(`Happiness: +10`);
        console.log("-------------------")
      }
      if (answer.eatP == "Cake") {
        console.log("-------------------")
        console.log("Mmmm, this Cake is delicious.")
        console.log("-------------------")
        health -= 10;
        happiness += 20;
        console.log(`Health: -10`);
        console.log(`Happiness: +20`);
        console.log("-------------------")
      }
      if (answer.eatP == "Big Mac") {
        console.log("-------------------")
        console.log("Mmmm, this Big Mac is delicious.")
        console.log("-------------------")
        health -= 30;
        happiness += 30;
        console.log(`Health: -30`);
        console.log(`Happiness: +30`);
        console.log("-------------------")
      }
      if (answer.eatP == "Protein Bar") {
        console.log("-------------------")
        console.log("Mmmm, this Protein Bar is delicious.")
        console.log("-------------------")
        health += 20;
        happiness += 10;
        console.log(`Health: +20`);
        console.log(`Happiness: +10`);
        console.log("-------------------")
      }
    })
    .then(() => gameLoop())
}


function drink () {
  inquirer
    .prompt([
      {
        type: "list",
        name: "drinkP",
        message: "What would you like to drink?",
        choices: ["Tea", "Coffee", "Coke", "Magic Potion"],
      },
    ])
    .then((answer) => {
      if (answer.drinkP == "Tea") {
        console.log("-------------------")
        console.log("Aaah, this Tea is delicious.")
        console.log("-------------------")
        health += 15;
        happiness += 15;
        console.log(`Health: +15`);
        console.log(`Happiness: +15`);
        console.log("-------------------")
      }
      if (answer.drinkP == "Coffee") {
        console.log("-------------------")
        console.log("Aaah, this Coffee is delicious.")
        console.log("-------------------")
        health -= 15;
        happiness += 15;
        console.log(`Health: -15`);
        console.log(`Happiness: +15`);
        console.log("-------------------")
      }
      if (answer.drinkP == "Coke") {
        console.log("-------------------")
        console.log("Aaah, this Coke is delicious.")
        console.log("-------------------")
        health -= 40;
        happiness += 40;
        console.log(`Health: -30`);
        console.log(`Happiness: +40`);
        console.log("-------------------")
      }
      if (answer.drinkP == "Magic Potion") {
        console.log("-------------------")
        console.log("Aaah, this Magic Potion is delicious.")
        console.log("-------------------")
        number1 = Math.floor(Math.random()*30);
        number2 = Math.floor(Math.random()*20);
        health += number1;
        happiness += number2;
        console.log(`Health: +${number1}`);
        console.log(`Happiness: +${number2}`);
        console.log("-------------------")
      }
    })
    .then(() => gameLoop())
}

function play () {
  health = health +12;
  happiness = happiness +7;
}

function hunt () {
  const babyE = () => {
    inquirer
    .prompt([
      {
        type: "list",
        name: "babyElephantP",
        message: "Are you sure, that you want to attack the Baby Elephant?",
        choices: ["Yes", "No"],
      },
    ])
    .then((answer) => {
      if (answer.babyElephantP == "Yes") {
        console.log("-------------------")
        console.log("The Mother of the Baby Elephant suddenly apperead, and you almost died!")
        console.log("-------------------")
        health = 50;
        happiness = 50;
        attack = 50;
        defense = 50;
        console.log ("Check your Status, to see if you survived or not.")
        console.log("-------------------")
      }
    })
    .then(() => gameLoop())
  } 
  const shark = () => {
    inquirer
    .prompt([
      {
        type: "list",
        name: "sharkP",
        message: "Are you sure, that you want to attack the Shark?",
        choices: ["Yes", "No"],
      },
    ])
    .then((answer) => {
      if (answer.sharkP == "Yes") {
        console.log("-------------------")
        if (attack >= 50 || defense >= 50){
          console.log("Your attack was successfull! :)")
          console.log("-------------------")
          health += 30;
          happiness +30;
          console.log("Health: +30")
          console.log("Happiness: +30")
          gameLoop();
        } else {
          console.log("Your Attack or Defense was too low.")
          console.log("Your attack is failed.")
          console.log("-------------------")
          health -= 10;
          happiness -= 10;
          console.log("Health: -10")
          console.log("Happiness: -10")
          console.log("-------------------")
          if (health <= 0 || happiness <= 0){
            theEnd();
          } else{
            gameLoop();
          }
        }
      }
    })
  }
  const dragon = () => {
    inquirer
    .prompt([
      {
        type: "list",
        name: "dragonP",
        message: "Are you sure, that you want to attack the Dragon?",
        choices: ["Yes", "No"],
      },
    ])
    .then((answer) => {
      if (attack < 100 || defense < 100){
        console.log("You Attack or Defense is too low.")
        console.log("Try to improve them, and come back later!")
        gameLoop();
      } else if (answer.dragonP == "Yes") {
        console.log("-------------------")
        console.log("A magician appeared, and turned the Dragon into a Fly.")
        console.log("You defeated the 'Dragon'.")
        console.log("-------------------")
        health += 15;
        happiness += 15;
        console.log("Health: +15")
        console.log("Happiness: +15")
        console.log("-------------------")
        gameLoop();
      } else {
        gameLoop();
      }
    })
  }
  const alienAi = () => {
    inquirer
    .prompt([
      {
        type: "list",
        name: "alienAiP",
        message: "Alien Ai is the strongest creature in the world. Are you still wan't to attack?",
        choices: ["Yes", "No"],
      },
    ])
    .then((answer) => {
      if (answer.alienAiP == "Yes") {
        if ( attack >= 150 && attack <= 190) {
          console.log("Well done!! You defeated the Alien Ai.")
          health = 200;
          happiness = 200;
          attack = 200;
          defense = 200;
          console.log("All your Status level went up to 200! :)")
          gameLoop();
        } else if (attack >= 191) {
          console.log("You are brave, but you are exhausted.")
          console.log("Come back later!")
          gameLoop();
        } else {
          console.log("I told you, the Alien Ai is very strong!")
          theEnd();
        }
      } else {
        gameLoop();
      }
    })
  }
  inquirer
    .prompt([
      {
        type: "list",
        name: "huntP",
        message: "Which creature do you want to attack?",
        choices: ["Baby Elephant", "Shark", "Dragon", "Alien Ai"],
      },
    ])
    .then((answer) => {
      if (answer.huntP == "Baby Elephant") {
        console.log("-------------------")
        console.log("Please don't kill me. I wan't to grow up!")
        console.log("-------------------")
        babyE();
      }
      if (answer.huntP == "Shark") {
        console.log("-------------------")
        console.log("Dont' you dare attacking me!")
        console.log("-------------------")
        shark();
      }
      if (answer.huntP == "Dragon") {
        console.log("-------------------")
        console.log("Are you not afraid of Fire?")
        console.log("-------------------")
        dragon();
      }
      if (answer.huntP == "Alien Ai") {
        console.log("-------------------")
        console.log("Don't play with Aline Ai, they are way stronger than you!!!")
        console.log("-------------------")
        alienAi();
      }
    })
}

function learn () {
  const math = () => {
    inquirer
    .prompt([
      {
        type: "list",
        name: "mathP",
        message: "What would you like to learn first?",
        choices: ["Counting", "Addition", "Subtraction", "Multiplication", "Division"],
      },
    ])
    .then((answer) => {
      if (answer.mathP == "Counting") {
        console.log("-------------------")
        console.log("Let's learn how to count form 1 to 10!")
        console.log("-------------------")
        console.log("1")
        console.log("1, 2")
        console.log("1, 2, 3")
        console.log("1, 2, 3, 4")
        console.log("1, 2, 3, 4, 5")
        console.log("1, 2, 3, 4, 5, 6")
        console.log("1, 2, 3, 4, 5, 6, 7")
        console.log("1, 2, 3, 4, 5, 6, 7, 8")
        console.log("1, 2, 3, 4, 5, 6, 7, 8, 9")
        console.log("1, 2, 3, 4, 5, 6, 7, 8, 9, 10")
        console.log("-------------------")
        timeReverse();
        console.log(`Health: +1`);
        console.log(`Happiness: +1`);
        console.log(`Attack: +1`);
        console.log(`Defense: +1`);
        console.log("-------------------")
      }
      if (answer.mathP == "Addition") {
        console.log("-------------------")
        console.log("Let's learn basic Addition!")
        console.log("-------------------")
        console.log("1 + 1 = 2")
        console.log("1 + 2 = 3")
        console.log("1 + 3 = 4")
        console.log("1 + 4 = 5")
        console.log("1 + 5 = 6")
        console.log("1 + 6 = 7")
        console.log("1 + 7 = 8")
        console.log("1 + 8 = 9")
        console.log("1 + 9 = 10")
        console.log("1 + 10 = 11")
        console.log("-------------------")
        timeReverse();
        timeReverse();
        console.log(`Health: +2`);
        console.log(`Happiness: +2`);
        console.log(`Attack: +2`);
        console.log(`Defense: +2`);
        console.log("-------------------")
      }
      if (answer.mathP == "Subtraction") {
        console.log("-------------------")
        console.log("Let's learn basic Subtraction!")
        console.log("-------------------")
        console.log("10 - 1 = 9")
        console.log("10 - 2 = 8")
        console.log("10 - 3 = 7")
        console.log("10 - 4 = 6")
        console.log("10 - 5 = 5")
        console.log("10 - 6 = 4")
        console.log("10 - 7 = 3")
        console.log("10 - 8 = 2")
        console.log("10 - 9 = 1")
        console.log("10 - 10 = 0")
        console.log("-------------------")
        timeReverse();
        timeReverse();
        timeReverse();
        console.log(`Health: +3`);
        console.log(`Happiness: +3`);
        console.log(`Attack: +3`);
        console.log(`Defense: +3`);
        console.log("-------------------")
      }
      if (answer.mathP == "Multiplication") {
        console.log("-------------------")
        console.log("Let's learn basic Multiplication!")
        console.log("-------------------")
        console.log("1 x 1 = 1")
        console.log("1 x 2 = 2")
        console.log("1 x 3 = 3")
        console.log("1 x 4 = 4")
        console.log("1 x 5 = 5")
        console.log("1 x 6 = 6")
        console.log("1 x 7 = 7")
        console.log("1 x 8 = 8")
        console.log("1 x 9 = 9")
        console.log("1 x 10 = 10")
        console.log("-------------------")
        timeReverse();
        timeReverse();
        timeReverse();
        console.log(`Health: +3`);
        console.log(`Happiness: +3`);
        console.log(`Attack: +3`);
        console.log(`Defense: +3`);
        console.log("-------------------")
      }
      if (answer.mathP == "Division") {
        console.log("-------------------")
        console.log("Let's learn basic Division!")
        console.log("-------------------")
        console.log("2 / 1 = 2")
        console.log("4 / 2 = 2")
        console.log("8 / 2 = 4")
        console.log("16 / 2 = 8")
        console.log("32 / 2 = 18")
        console.log("64 / 2 = 32")
        console.log("128 / 2 = 64")
        console.log("256 / 2 = 128")
        console.log("512 / 2 = 256")
        console.log("1024 / 2 = 512")
        console.log("-------------------")
        timeReverse();
        timeReverse();
        timeReverse();
        timeReverse();
        console.log(`Health: +4`);
        console.log(`Happiness: +4`);
        console.log(`Attack: +4`);
        console.log(`Defense: +4`);
        console.log("-------------------")
      }
    })
    .then(() => gameLoop())
  }
  const spanish = () => {
    inquirer
    .prompt([
      {
        type: "list",
        name: "spanishP",
        message: "With which topic would you like to start with?",
        choices: ["Phrases", "Travel", "Family", "Restaurant", "Shopping"],
      },
    ])
    .then((answer) => {
      if (answer.spanishP == "Phrases") {
        console.log("-------------------")
        console.log("Let's learn some Phrases in Spanish!")
        console.log("-------------------")
        console.log("Hello = Hola")
        console.log("Good Morning = Buenos dias")
        console.log("Good Afternoon = Buenos tardes")
        console.log("Good Night = Buenos noches")
        console.log("-------------------")
        happiness += 1;
        console.log("Happiness: +1")
        console.log("-------------------")
      }
      if (answer.spanishP == "Travel") {
        console.log("-------------------")
        console.log("Let's learn some Travel phrases in Spanish!")
        console.log("-------------------")
        console.log("Where = Donde")
        console.log("Passport = Pasaporte")
        console.log("Reservation = Reserva")
        console.log("Airport = Aeropuerto")
        console.log("-------------------")
        happiness += 2;
        console.log("Happiness: +2")
        console.log("-------------------")
      }
      if (answer.spanishP == "Family") {
        console.log("-------------------")
        console.log("Let's learn some Family phrases in Spanish!")
        console.log("-------------------")
        console.log("Mother = Madre")
        console.log("Father = Padre")
        console.log("Girl = Nina")
        console.log("Boy = Nino")
        console.log("-------------------")
        happiness += 3;
        console.log("Happiness: +3")
        console.log("-------------------")
      }
      if (answer.spanishP == "Restaurant") {
        console.log("-------------------")
        console.log("Let's learn some Restaurant phrases in Spanish!")
        console.log("-------------------")
        console.log("Restaurant = Restaurante")
        console.log("Table = Mesa")
        console.log("Closed = Cerrado")
        console.log("Money = Dinero")
        console.log("-------------------")
        happiness += 4;
        console.log("Happiness: +4")
        console.log("-------------------")
      }
      if (answer.spanishP == "Shopping") {
        console.log("-------------------")
        console.log("Let's learn some Shopping phrases in Spanish!")
        console.log("-------------------")
        console.log("Clothing = Ropa")
        console.log("Cheap = Barato")
        console.log("Shirt = Camisa")
        console.log("Vestido = Dress")
        console.log("-------------------")
        happiness += 5;
        console.log("Happiness: +5")
        console.log("-------------------")
      }
    })
    .then(() => gameLoop())
  }
  const programming = () => {
    inquirer
    .prompt([
      {
        type: "list",
        name: "programmingP",
        message: "What would you like to learn first??",
        choices: ["HTML", "CSS", "JavaScript"],
      },
    ])
    .then((answer) => {
      if (answer.programmingP == "HTML") {
        console.log("-------------------")
        console.log("Learn how to write a basic HTML page!")
        console.log("-------------------")
        console.log("<!DOCTYPE html>")
        console.log("<html>")
        console.log("<body>")
        console.log("")
        console.log("<h1>My First Heading</h1>")
        console.log("<p>My first paragraph.</p>")
        console.log("")
        console.log("</body>")
        console.log("</html>")
        console.log("-------------------")
        timeReverse();
        console.log(`Health: +1`);
        console.log(`Happiness: +1`);
        console.log(`Attack: +1`);
        console.log(`Defense: +1`);
        console.log("-------------------")
      }
      if (answer.programmingP == "CSS") {
        console.log("-------------------")
        console.log("Let's learn some basic CSS!")
        console.log("-------------------")
        console.log("body {")
        console.log("  background-color: lightblue;")
        console.log("}")
        console.log("")
        console.log("h1 {")
        console.log("  color: white;")
        console.log("  text-align: center;")
        console.log("}")
        console.log("")
        console.log("p {")
        console.log("font-family: verdana;")
        console.log("font-size: 20px;")
        console.log("}")
        console.log("-------------------")
        timeReverse();
        timeReverse();
        console.log(`Health: +2`);
        console.log(`Happiness: +2`);
        console.log(`Attack: +2`);
        console.log(`Defense: +2`);
        console.log("-------------------")
      }
      if (answer.programmingP == "JavaScript") {
        console.log("-------------------")
        console.log("Let's learn basic Javascript statement!")
        console.log("-------------------")
        console.log("let x, y, z;  // Statement 1")
        console.log("x = 5;        // Statement 2")
        console.log("y = 6;        // Statement 3")
        console.log("z = x + y;    // Statement 4")
        console.log("document.getElementById.innerHTML =")
        console.log("The value of z is " + "z" + ".")
        console.log("-------------------")
        timeReverse();
        timeReverse();
        timeReverse();
        console.log(`Health: +3`);
        console.log(`Happiness: +3`);
        console.log(`Attack: +3`);
        console.log(`Defense: +3`);
        console.log("-------------------")
      }
    })
    .then(() => gameLoop())
  }
  inquirer
    .prompt([
      {
        type: "list",
        name: "learnP",
        message: "What would you like to learn?",
        choices: ["Math", "Spanish", "Programming", "Advanced learning", "Pro learning"],
      },
    ])
    .then((answer) => {
      if (answer.learnP == "Math") {
        console.log("-------------------")
        console.log("Let's learn some Math!")
        console.log("-------------------")
        math();
        console.log()
      }
      if (answer.learnP == "Spanish") {
        console.log("-------------------")
        console.log("Let's learn some Spanish!")
        console.log("-------------------")
        spanish();
      }
      if (answer.learnP == "Programming") {
        console.log("-------------------")
        console.log("Let's learn some Programming!")
        console.log("-------------------")
        programming();
      }
      if (answer.learnP == "Advanced learning") {
        console.log("-------------------")
        console.log("You need to complete Math/Spanish/Programming, to unlock Advanced learning.")
        console.log("-------------------")
        gameLoop();
      }
      if (answer.learnP == "Pro learning") {
        console.log("-------------------")
        console.log("You need to complete the Advanced learning first!")
        console.log("-------------------")
        gameLoop();
      }
    })
}

function sleep () {
  inquirer
    .prompt([
      {
        type: "list",
        name: "sleepP",
        message: "For how long do you want to sleep?",
        choices: ["1 hour", "3 hours", "8 hours", "12 hours"],
      },
    ])
    .then((answer) => {
      if (answer.sleepP == "1 hour") {
        console.log("-------------------")
        console.log("Oh-no! I want to sleep more!")
        console.log("-------------------")
        health -= 15;
        happiness -= 25;
        console.log(`Health: -15`);
        console.log(`Happiness: -25`);
        console.log("-------------------")
      }
      if (answer.sleepP == "3 hours") {
        console.log("-------------------")
        console.log("I'm still sleepy.... :(")
        console.log("-------------------")
        health -= 10;
        happiness -= 15;
        console.log(`Health: -10`);
        console.log(`Happiness: -15`);
        console.log("-------------------")
      }
      if (answer.sleepP == "8 hours") {
        console.log("-------------------")
        console.log("Thank you! I am feeling much better! :)")
        console.log("-------------------")
        health += 25;
        happiness += 25;
        console.log(`Health: +25`);
        console.log(`Happiness: +25`);
        console.log("-------------------")
      }
      if (answer.sleepP == "12 hours") {
        console.log("-------------------")
        console.log("I sleeped to much! I am still sleepy! :/")
        console.log("-------------------")
        number1 = Math.floor(Math.random()*20);
        number2 = Math.floor(Math.random()*10);
        health += number1;
        happiness += number2;
        console.log(`Health: +${number1}`);
        console.log(`Happiness: +${number2}`);
        console.log("-------------------")
      }
    })
    .then(() => gameLoop())
}

function bath () {
  inquirer
    .prompt([
      {
        type: "list",
        name: "bathP",
        message: "Where would you like to take the bath?",
        choices: ["Lake", "River", "Sea", "In your house"],
      },
    ])
    .then((answer) => {
      if (answer.bathP == "Lake") {
        console.log("-------------------")
        console.log("I am really enjoyed the Lake.")
        console.log("-------------------")
        health += 15;
        happiness += 25;
        console.log(`Health: +15`);
        console.log(`Happiness: +25`);
        console.log("-------------------")
      }
      if (answer.bathP == "River") {
        console.log("-------------------")
        console.log("Oh-noo! You were bitten by a Black Piranha.")
        console.log("-------------------")
        health -= 20;
        happiness -= 20;
        console.log(`Health: -20`);
        console.log(`Happiness: -20`);
        console.log("-------------------")
      }
      if (answer.bathP == "Sea") {
        console.log("-------------------")
        console.log("That was very refreshing! :)")
        console.log("-------------------")
        health += 25;
        happiness += 25;
        console.log(`Health: +25`);
        console.log(`Happiness: +25`);
        console.log("-------------------")
      }
      if (answer.bathP == "In your house") {
        console.log("-------------------")
        console.log("Oh-noo! You haven't got a house yet! :/")
        console.log("-------------------")
        number1 = Math.floor(Math.random()*20);
        number2 = Math.floor(Math.random()*20);
        health -= number1;
        happiness -= number2;
        console.log(`Health: -${number1}`);
        console.log(`Happiness: -${number2}`);
        console.log("-------------------")
      }
    })
    .then(() => gameLoop())
}

function skills() {
  const magic = () => {
    num1 = Math.floor(Math.random()*20) - Math.floor(Math.random()*15);
    num2 = Math.floor(Math.random()*20) - Math.floor(Math.random()*15);
    num3= Math.floor(Math.random()*20) - Math.floor(Math.random()*15);
    num4 = Math.floor(Math.random()*20) - Math.floor(Math.random()*15);
    health += num1;
    happiness += num2;
    attack += num3;
    defense += num4;
  }
  
  const meditate = () => {
    med1 = Math.floor(Math.random()*35);
    med2 = Math.floor(Math.random()*35);
    med3 = Math.floor(Math.random()*10);
    med4 = Math.floor(Math.random()*35);
    health += med1;
    happiness += med2;
    attack -= med3;
    defense -= med4;
  }
  
  const bite = () => {
    bite1 = Math.floor(Math.random()*10);
    bite2 = Math.floor(Math.random()*25);
    bite3 = Math.floor(Math.random()*10);
    bite4 = Math.floor(Math.random()*10);
    health -= bite1;
    happiness += bite2;
    attack += bite3;
    defense -= bite4;
  }
  inquirer
    .prompt([
      {
        type: "list",
        name: "skillsP",
        message: "Are you sure, that you want to use, your Unic skill? ",
        choices: ["Yes", "No", "Maybe"],
      },
    ])
    .then((answer) => {
      if (answer.skillsP == "Yes") {
        if (pet.skill == "Magic") {
          console.log("-------------------")
          console.log(">Magic< has been used!")
          console.log("-------------------")
          magic();
          if (num1 < 0){
            console.log(`Health: ${this.num1}`);
          } else {
            console.log(`Health: +${this.num1}`);
          }
          if (num2 < 0){
            console.log(`Happiness: ${this.num2}`);
          } else {
            console.log(`Happiness: +${this.num2}`);
          }
          if (num3 < 0){
            console.log(`Attack: ${this.num3}`);
          } else {
            console.log(`Attack: +${this.num3}`);
          }
          if (num4 < 0){
            console.log(`Defense: ${this.num4}`);
          } else {
            console.log(`Defense: +${this.num4}`);
          }
          console.log("-------------------")
        } else if (pet.skill == "Meditate") {
          console.log("-------------------")
          console.log(">Meditate< has been used!")
          console.log("-------------------")
          meditate();
          console.log(`Health: +${this.med1}`);
          console.log(`Happiness: +${this.med2}`);
          console.log(`Attack: -${this.med3}`);
          console.log(`Defense: -${this.med4}`);
          console.log("-------------------")
        } else {
          console.log("-------------------")
          console.log(">Bite< has been used!")
          console.log("-------------------")
          bite();
          console.log(`Health: -${this.bite1}`);
          console.log(`Happiness: +${this.bite2}`);
          console.log(`Attack: +${this.bite3}`);
          console.log(`Defense: -${this.bite4}`);
          console.log("-------------------")
        }
      } else {
        console.log("Interact with your pet :)")
      }
    })
    .then(() => gameLoop())
}

class Pet {
    constructor(type, name, colour, sex, superpower) {
      this.type = type;
      this.name = name;
      this.colour = colour;
      this.sex = sex;
      this.power = superpower;
    }
}
  
class Unicorn extends Pet {
    constructor(type, name, colour, sex, superpower, skill) {
      super(type, name, colour, sex, superpower);
      this.skill = skill;

      if(type == "Baby") {
        health = 90;
      } else if (type == "Adult") {
        health = 110;
      } else {
        health = 80;
      }
      if (colour == "White" || colour == "Black") {
        happiness = 120;
      } else if (colour == "Brown" || colour == "Purple"){
        happiness = 70;
      } else {
        happiness = 80;
      }
      if (sex == "Male") {
        attack = 75;
      } else if (sex == "Female") {
        attack = 125;
      } else {
        attack = 50;
      }
      if (superpower == "Teleport"){
        defense = 200;
      } else if (superpower == "Flight"){
        defense = 73;
      } else if (superpower == "Invisible"){
        health = 150;
        happiness = 150;
        attack = 150;
        defense = 150;
      } else if (superpower == "Time travel"){
        health = 100;
        happiness = 100;
        attack = 100;
        defense = 100;
      } else {
        health = 50;
        happiness = 50;
        attack = 200;
        defense = 200;
      }
    }
}

class Seahorse extends Pet {
    constructor(type, name, colour, sex, superpower, skill) {
      super(type, name, colour, sex, superpower);
      this.skill = skill;

      if(type == "Baby") {
        health = 115;
      } else if (type == "Adult") {
        health = 95;
      } else {
        health = 130;
      }
      if (colour == "White" || colour == "Black") {
        happiness = 75;
      } else if (colour == "Brown" || colour == "Purple"){
        happiness = 90;
      } else {
        happiness = 100;
      }
      if (sex == "Male") {
        attack = 125;
      } else if (sex == "Female") {
        attack = 75;
      } else {
        attack = 100;
      }
      if (superpower == "Teleport"){
        defense = 200;
      } else if (superpower == "Flight"){
        defense = 73;
      } else if (superpower == "Invisible"){
        health = 150;
        happiness = 150;
        attack = 150;
        defense = 150;
      } else if (superpower == "Time travel"){
        health = 100;
        happiness = 100;
        attack = 100;
        defense = 100;
      } else {
        health = 50;
        happiness = 50;
        attack = 200;
        defense = 200;
      }
    }
}

class Tiger extends Pet {
    constructor(type, name, colour, sex, superpower, skill) {
      super(type, name, colour, sex, superpower);
      this.skill = skill;
    
      if(type == "Baby") {
        health = 125;
      } else if (type == "Adult") {
        health = 125;
      } else {
        health = 35;
      }
      if (colour == "White" || colour == "Black") {
        happiness = 75;
      } else if (colour == "Brown" || colour == "Purple"){
        happiness = 100;
      } else {
        happiness = 110;
      }
      if (sex == "Male") {
        attack = 150;
      } else if (sex == "Female") {
        attack = 100;
      } else {
        attack = 40;
      }
      if (superpower == "Teleport"){
        defense = 200;
      } else if (superpower == "Flight"){
        defense = 73;
      } else if (superpower == "Invisible"){
        health = 150;
        happiness = 150;
        attack = 150;
        defense = 150;
      } else if (superpower == "Time travel"){
        health = 100;
        happiness = 100;
        attack = 100;
        defense = 100;
      } else {
        health = 50;
        happiness = 50;
        attack = 200;
        defense = 200;
      }
    }
}

const init = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is your name?",
      }
    ])
    .then((answer) => {
      console.log(`Welcome ${answer.name}!`)
    })
    .then(() => petBuild())
    .catch((error) => {
      console.log(error)
    })
}

const petBuild = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "petP",
        message: "Please choose a pet: ",
        choices: ["Unicorn", "Seahorse", "Tiger"],
      },
      {
        type: "input",
        name: "nameP",
        message: "Please name your pet: ",
      },
      {
        type: "list",
        name: "typeP",
        message: "What type of pet do you want?",
        choices: ["Baby", "Adult", "Random"],
      },
      {
        type: "list",
        name: "colourP",
        message: "Please choose a colour for your pet: ",
        choices: ["White", "Black", "Yellow", "Brown", "Orange", "Blue", "Purple", "Green", "Red"],
      },
      {
        type: "list",
        name: "genderP",
        message: "Please choose your pet's gender: ",
        choices: ["Male", "Female", "Other"],
      },
      {
        type: "list",
        name: "powerP",
        message: "Please choose your pet's superpower: ",
        choices: ["Teleport", "Flight", "Invisible", "Time travel", "Super speed"],
      },
    ])
    .then((answers) => {
      if (answers.petP == "Unicorn"){
        pet = new Unicorn (`${answers.typeP}`, `${answers.nameP}`, `${answers.colourP}`, `${answers.genderP}`, `${answers.powerP}`, "Magic");
      } else if (answers.petP == "Seahorse"){
        pet = new Seahorse (`${answers.typeP}`, `${answers.nameP}`, `${answers.colourP}`, `${answers.genderP}`, `${answers.powerP}`, "Meditate");
      } else {
        pet = new Tiger (`${answers.typeP}`, `${answers.nameP}`, `${answers.colourP}`, `${answers.genderP}`, `${answers.powerP}`, "Bite");
      }
    })
    .then(() => status())
}

const status = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "statusP",
        message: "Do you want to check your Pet status?",
        choices: ["Yes", "No"],
      },
    ])
    .then((answer) => {
      if (answer.statusP == "Yes"){
        console.log("-------------------")
        console.log(pet);
        console.log("-------------------")
        console.log(`Health: ${health}`);
        console.log(`Happiness: ${happiness}`);
        console.log(`Attack: ${attack}`);
        console.log(`Defense: ${defense}`);
        console.log("-------------------")
        console.log("Let's interact with your pet.")
        console.log("-------------------")
      } else {
        console.log("-------------------")
        console.log("Let's interact with your pet.");
        console.log("-------------------")
      }
    })
    .then(() => gameLoop())
}

const gameLoop = () => {
  if (health <= 0 || happiness <= 0){
    theEnd();
  }
  if (health >= 201 || happiness >= 201){
    health = 200;
    happiness = 200;
  }
  if (attack >= 201 || defense >= 201){
    attack = 200;
    happiness = 200;
  }
  time();
  inquirer
    .prompt([
      {
        type: "list",
        name: "optionP",
        message: "What would you like to do next? ",
        choices: ["> Check your Pet Status <", "Eat", "Drink", "Play", "Hunt", "Learn", "Sleep", "Bath", "* Use your Unic skill *"],
      },
    ])
    .then((answer) => {
      if (answer.optionP == "> Check your Pet Status <"){
        console.log("-------------------");
        statusOption();
      }
      if (answer.optionP == "Eat"){
        console.log("-------------------");
        eat();
      }
      if (answer.optionP == "Drink"){
        console.log("-------------------");
        drink();
      }
      if (answer.optionP == "Play"){
        console.log("-------------------");
        play();
      }
      if (answer.optionP == "Hunt"){
        console.log("-------------------");
        hunt();
      }
      if (answer.optionP == "Learn"){
        console.log("-------------------");
        learn();
      }
      if (answer.optionP == "Sleep"){
        console.log("-------------------");
        sleep();
      }
      if (answer.optionP == "Bath"){
        console.log("-------------------");
        bath();
      }
      if (answer.optionP == "* Use your Unic skill *"){
        console.log("-------------------");
        skills();
      }
    })
}

module.exports = {
  name: "project.js",
  desc: "Full game",
  theEnd,
  time,
  timeReverse,
  statusOption,
  eat,
  drink,
  play,
  hunt,
  learn,
  sleep,
  bath,
  skills,
  Pet,
  Unicorn,
  Seahorse,
  Tiger,
  init,
  petBuild,
  status,
  gameLoop,
}