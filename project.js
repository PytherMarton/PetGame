const inquirer = require("inquirer");

health = 100;
happiness = 100;
attack = 100;
defense = 100;

function statusOption () {
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
  health = health +12;
  happiness = happiness +7;
}

function learn () {
  health = health +12;
  happiness = happiness +7;
}

function sleep () {

}

function bath () {

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
    health -= 10;
    happiness += 25;
    attack += 10;
    defense -= 10;
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
          console.log(`Health: ${this.med1}`);
          console.log(`Happiness: ${thismed2}`);
          console.log(`Attack: -10`);
          console.log(`Defense: -35`);
          console.log("-------------------")
        } else {
          console.log("-------------------")
          console.log(">Bite< has been used!")
          console.log("-------------------")
          console.log(`Health: -10`);
          console.log(`Happiness: +25`);
          console.log(`Attack: +10`);
          console.log(`Defense: -10`);
          bite();
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

init();