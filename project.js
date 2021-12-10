const { shark } = require("cli-spinners");
const inquirer = require("inquirer");
const colors = require('colors');
const figlet = require('figlet');

health = 100;
happiness = 100;
attack = 100;
defense = 100;
petStat = "";

const unicorn = () => {
  console.log("               ,,))))))));,");
  console.log("            __)))))))))))))),");
  console.log("\|/      -\(((((''''((((((((.");
  console.log("-*-==//////((''  .     `)))))),");
  console.log("/|\      ))| o    ;-.    '(((((                                  ,(,");
  console.log("          ( `|    /  )    ;))))'                               ,_))^;(~");
  console.log("            |   |   |   ,))((((_     _____------~~~-.        %,;(;(>';'~");
  console.log("            o_);   ;    )))(((` ~---~  `::           \      %%~~)(v;(`('~");
  console.log("                  ;    ''''````         `:       `:::|\,__,%%    );`'; ~");
  console.log("                |   _                )     /      `:|`----'     `-'");
  console.log("         ______/\/~    |                 /        /");
  console.log("        /~;;.____/;;'  /          ___--,-(   `;;;/");
  console.log("       / //  _;______;'------~~~~~    /;;/\    /");
  console.log("      //  | |                        / ;   \;;,");
  console.log("     (<_  | ;                      /',/-----'  _>");
  console.log("     \_| ||_                     //~;~~~~~~~~~");
  console.log("     `\_|                       (,~~ ");
  console.log("                                \~");
  console.log("                                 ~~")
}

const seahorse = () => {
  console.log("        __________");
  console.log("       /          ;                                             (");
  console.log("      /____________;                                           (;)");
  console.log("       |:_:_:_:_:_|                                             ))");
  console.log("       |_:_,--.:_:|                        ;/)/)             (;//   )");
  console.log("       |:_:|__|_:_|                      _'  oo(_.-.        ) ))   ((");
  console.log("    _  |_   _  :_:|   _   _   _        /'.     .---'       ((((   /);`");
  console.log("   | |_| |_| |   _|  | |_| |_| |     /'-./    (             ;;)) (( (");
  console.log("    ;_:_:_:_:/|_|_|_|;:_:_:_:_/      )     ; __;             ((   ))))");
  console.log("     |_,-._:_:_:_:_:_:_:_.-,_|       ;_.'; : __|              )) ((//");
  console.log("     |:|_|:_:_:,---,:_:_:|_|:|            )  _/              ,-.  )/");
  console.log("     |_:_:_:_,'     `,_:_:_:_|           (  (,.             ,;'))((");
  console.log("     |:_:_:_/  _ | _  ;_:_:_:|           '-.-'                ((  ))");
  console.log("_____|_:_:_|  (o)-(o)  |_:_:_|--'`-.     ,--.                (((;'/");
  console.log(" ', ;|:_:_:| -( .-. )- |:_:_:| ', ; `--._;  /,---.~           ;`))");
  console.log(".  ` |_:_:_|   ;`-'/   |_:_:_|.  ` .  `  /();.__( ) .,-----'`-;((");
  console.log(" ', ;|:_:_:|    `-'    |:_:_:| ', ; ', ; `--'|   ; ', ; ', ; ',')).,--");
  console.log(".  `  ` .  ` .  ` .  ` .  ` .  ` .  ` .    .  ` .  ` .  ` .  ` .  `");
  console.log("', ; ', ; ', ; ', ; ', ; ', ; ', ; ', ; ', ; ', ; ', ; ', ; ', ; ', ;");
}

const wolf = () => {
  console.log("                                      __");
  console.log("                                   .d$$b");
  console.log("                                  .' TO$;)");
  console.log("                                 /  : TP._;");
  console.log("                                / _.;  :Tb|");
  console.log("                               /   /   ;j$j");
  console.log("                           _.-'       d$$$$'");
  console.log("                         .' ..       d$$$$;");
  console.log("                        /  /P'      d$$$$P. |)");
  console.log("                       /   ``      .d$$$P' |)^`l");
  console.log("                     .'           `T$P^``````  :");
  console.log("                 ._.'      _.'                ;");
  console.log("              `-.-'.-'-' ._.       _.-`     .-")
  console.log("            `.-`` _____  ._              .-''");
  console.log("           -(.g$$$$$$$b.              .'");
  console.log("             ```^^T$$$P^)            .(:");
  console.log("                _/  -``  /.'        /:/;");
  console.log("             ._.'-'`-'  '')/         /;/;");
  console.log("          `-.-'..--'''   ' /          /  ;");
  console.log("        .-'' ..--'`'        -'          :");
  console.log("        ..--```--.-'         ()      .-()");
  console.log("          ..--```              `-)()/;`");
  console.log("              _.                      :");
  console.log("                                      ;`-");
  console.log("                                     :)");
  console.log("                                     ;  ");
}

function theEnd(){
  setTimeout(function() {
    console.log(figlet.textSync('THE END!', {
      font: 'Doh',
      horizontalLayout: 'default',
      verticalLayout: 'default',
      width: 120,
      whitespaceBreak: true
  }));
  }, 3000);
  console.log(figlet.textSync('Your  Pet  DIED !  :/', {
    font: 'Standard',
    horizontalLayout: 'default',
    verticalLayout: 'default',
    width: 120,
    whitespaceBreak: true
}));
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
        if (pet == unicorn){
          console.log("-------------------------------------------------------------------------------------------------")
          unicorn();
          console.log("-------------------------------------------------------------------------------------------------")
          console.log(petStat);
          console.log("-------------------------------------------------------------------------------------------------")
        } else if (pet == seahorse){
          console.log("---------------------------------------------------------------------------------------------------")
          seahorse();
          console.log("---------------------------------------------------------------------------------------------------")
          console.log(petStat);
          console.log("---------------------------------------------------------------------------------------------------")
        } else {
          console.log("-------------------------------------------------------------------------------------------------")
          wolf();
          console.log("-------------------------------------------------------------------------------------------------")
          console.log(petStat);
          console.log("-------------------------------------------------------------------------------------------------")
        }
        console.log("-----------------------------------------------------------".black.bgWhite)
        console.log(`| Health: ${health} | Happiness: ${happiness} | Attack: ${attack} | Defense: ${defense} |`.black.bgWhite);
        console.log("-----------------------------------------------------------".black.bgWhite)
      } else {
        console.log("-----------------------------------------------------------".black.bgWhite)
        console.log(`| Health: ${health} | Happiness: ${happiness} | Attack: ${attack} | Defense: ${defense} |`.black.bgWhite);
        console.log("-----------------------------------------------------------".black.bgWhite)
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
        console.log(`Health:`.black.bgWhite, `+10`.green.bgBlack);
        console.log("-------------------")
        console.log(`Happiness:`.black.bgWhite, `+10`.green.bgBlack);
        console.log("-------------------")
      }
      if (answer.eatP == "Cake") {
        console.log("-------------------")
        console.log("Mmmm, this Cake is delicious.")
        console.log("-------------------")
        health -= 10;
        happiness += 20;
        console.log(`Health:`.black.bgWhite, `-10`.red.bgBlack);
        console.log("-------------------")
        console.log(`Happiness:`.black.bgWhite, `+20`.green.bgBlack);
        console.log("-------------------")
      }
      if (answer.eatP == "Big Mac") {
        console.log("-------------------")
        console.log("Mmmm, this Big Mac is delicious.")
        console.log("-------------------")
        health -= 30;
        happiness += 30;
        console.log(`Health:`.black.bgWhite, `-30`.red.bgBlack);
        console.log("-------------------")
        console.log(`Happiness:`.black.bgWhite, ` +30`.green.bgBlack);
        console.log("-------------------")
      }
      if (answer.eatP == "Protein Bar") {
        console.log("-------------------")
        console.log("Mmmm, this Protein Bar is delicious.")
        console.log("-------------------")
        health += 20;
        happiness += 10;
        console.log(`Health:`.black.bgWhite, `+20`.green.bgBlack);
        console.log("-------------------")
        console.log(`Happiness:`.black.bgWhite, `+10`.green.bgBlack);
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
        console.log(`Health:`.black.bgWhite, `+15`.green.bgBlack);
        console.log("-------------------")
        console.log(`Happiness:`.black.bgWhite, `+15`.green.bgBlack);
        console.log("-------------------")
      }
      if (answer.drinkP == "Coffee") {
        console.log("-------------------")
        console.log("Aaah, this Coffee is delicious.")
        console.log("-------------------")
        health -= 15;
        happiness += 15;
        console.log(`Health:`.black.bgWhite, `-15`.red.bgBlack);
        console.log("-------------------")
        console.log(`Happiness:`.black.bgWhite, `+15`.green.bgBlack);
        console.log("-------------------")
      }
      if (answer.drinkP == "Coke") {
        console.log("-------------------")
        console.log("Aaah, this Coke is delicious.")
        console.log("-------------------")
        health -= 40;
        happiness += 40;
        console.log(`Health:`.black.bgWhite, `-30`.red.bgBlack);
        console.log("-------------------")
        console.log(`Happiness:`.black.bgWhite, `+40`.green.bgBlack);
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
        console.log(`Health:`.black.bgWhite, `+${number1}`.green.bgBlack);
        console.log("-------------------")
        console.log(`Happiness:`.black.bgWhite,`+${number2}`.green.bgBlack);
        console.log("-------------------")
      }
    })
    .then(() => gameLoop())
}

function play () {
  quiz = () => {
    inquirer
    .prompt([
      {
        type: "list",
        name: "quiz1P",
        message: "What is the capital of England?",
        choices: ["Manchaster", "Liverpool", "York", "London"],
      },
      {
        type: "list",
        name: "quiz2P",
        message: "What is heavier?",
        choices: ["1kg of Iron", "1kg of Feather", "1kg of Coffee", "They are the same weight."],
      },
      {
        type: "list",
        name: "quiz3P",
        message: "Where you can't watch a movie?",
        choices: ["Cinema", "Nokia 3220", "Laptop", "TV"],
      },
      {
        type: "list",
        name: "quiz4P",
        message: "What colour is the Polar Bear skin?",
        choices: ["Black", "White", "Brown", "Purple"],
      },
      {
        type: "list",
        name: "quiz5P",
        message: "Which statement is true??",
        choices: ["The coffee is purple.", "The Polar Bear skin is black.", "You can watch a movie on a Nokia 3220.", "None of them are true."],
      },
      {
        type: "list",
        name: "quiz6P",
        message: "What is Pi equal to?",
        choices: ["3.1415926535", "3.1592874631", "3.2093763192", "4.1928374511"],
      },
      {
        type: "list",
        name: "quiz7P",
        message: "Who is the CEO of Code Nation?",
        choices: ["Peter Marton", "David Muir", "Chuck Norris", "Ben Maudslay"],
      },
      {
        type: "list",
        name: "quiz8P",
        message: "Usain Bolt is the faster man on the Earth. What speed did he reached?",
        choices: ["75.10 km/h (46.66 mp/h)", "30.18 km/h (18.75 mp/h)", "43.99 km/h (27.33 mp/h)", "56.24 km/h (34.94 mp/h)"],
      },
      {
        type: "list",
        name: "quiz9P",
        message: "Gordon Ramsay is famous for?",
        choices: ["Boxing", "Cycling", "Cooking", "He is not famous."],
      },
      {
        type: "list",
        name: "quiz10P",
        message: "What was first? The Chicken or the Egg?",
        choices: ["Chicken", "Egg", "No idea"],
      },
    ])
    .then((answers) => {
      if (answers.quiz1P == "London"){
        console.log("-------------------")
        console.log("Your answer 'London' for the 1th question was correct.")
        timeReverse();
        console.log("Health:".black.bgWhite, "+1".green.bgBlack)
        console.log("-------------------")
        console.log("Happiness:".black.bgWhite, "+1".green.bgBlack)
        console.log("-------------------")
        console.log("Attack:".black.bgWhite, "+1".green.bgBlack)
        console.log("-------------------")
        console.log("Defense:".black.bgWhite, "+1".green.bgBlack)
      } else {
        console.log("-------------------")
        console.log("Your answer for the 1th question was incorrect.")
        time ();
        console.log("Health:".black.bgWhite, "-1".red.bgBlack)
        console.log("-------------------")
        console.log("Happiness:".black.bgWhite, "-1".red.bgBlack)
        console.log("-------------------")
        console.log("Attack:".black.bgWhite, "-1".red.bgBlack)
        console.log("-------------------")
        console.log("Defense:".black.bgWhite, "-1".red.bgBlack)
      }
      if (answers.quiz2P == "They are the same weight."){
        console.log("-------------------")
        console.log("Your answer 'They are the same weight.' for the 2nd question was correct.")
        timeReverse();
        console.log("Health:".black.bgWhite, "+1".green.bgBlack)
        console.log("-------------------")
        console.log("Happiness:".black.bgWhite, "+1".green.bgBlack)
        console.log("-------------------")
        console.log("Attack:".black.bgWhite, "+1".green.bgBlack)
        console.log("-------------------")
        console.log("Defense:".black.bgWhite, "+1".green.bgBlack)
      } else {
        console.log("-------------------")
        console.log("Your answer for the 2nd question was incorrect.")
        time ();
        console.log("Health:".black.bgWhite, "-1".red.bgBlack)
        console.log("-------------------")
        console.log("Happiness:".black.bgWhite, "-1".red.bgBlack)
        console.log("-------------------")
        console.log("Attack:".black.bgWhite, "-1".red.bgBlack)
        console.log("-------------------")
        console.log("Defense:".black.bgWhite, "-1".red.bgBlack)
      }
      if (answers.quiz3P == "Nokia 3220"){
        console.log("-------------------")
        console.log("Your answer 'Nokia 3220' for the 3rd question was correct.")
        timeReverse();
        console.log("Health:".black.bgWhite, "+1".green.bgBlack)
        console.log("-------------------")
        console.log("Happiness:".black.bgWhite, "+1".green.bgBlack)
        console.log("-------------------")
        console.log("Attack:".black.bgWhite, "+1".green.bgBlack)
        console.log("-------------------")
        console.log("Defense:".black.bgWhite, "+1".green.bgBlack)
      } else {
        console.log("-------------------")
        console.log("Your answer for the 3rd question was incorrect.")
        time ();
        console.log("Health:".black.bgWhite, "-1".red.bgBlack)
        console.log("-------------------")
        console.log("Happiness:".black.bgWhite, "-1".red.bgBlack)
        console.log("-------------------")
        console.log("Attack:".black.bgWhite, "-1".red.bgBlack)
        console.log("-------------------")
        console.log("Defense:".black.bgWhite, "-1".red.bgBlack)
      }
      if (answers.quiz4P == "Black"){
        console.log("-------------------")
        console.log("Your answer 'Black' for the 4th question was correct.")
        timeReverse();
        console.log("Health:".black.bgWhite, "+1".green.bgBlack)
        console.log("-------------------")
        console.log("Happiness:".black.bgWhite, "+1".green.bgBlack)
        console.log("-------------------")
        console.log("Attack:".black.bgWhite, "+1".green.bgBlack)
        console.log("-------------------")
        console.log("Defense:".black.bgWhite, "+1".green.bgBlack)
      } else {
        console.log("-------------------")
        console.log("Your answer for the 4th question was incorrect.")
        time ();
        console.log("Health:".black.bgWhite, "-1".red.bgBlack)
        console.log("-------------------")
        console.log("Happiness:".black.bgWhite, "-1".red.bgBlack)
        console.log("-------------------")
        console.log("Attack:".black.bgWhite, "-1".red.bgBlack)
        console.log("-------------------")
        console.log("Defense:".black.bgWhite, "-1".red.bgBlack)
      }
      if (answers.quiz5P == "The Polar Bear skin is black."){
        console.log("-------------------")
        console.log("Your answer 'The Polar Bear skin is black.' for the 5th question was correct.")
        timeReverse();
        console.log("Health:".black.bgWhite, "+1".green.bgBlack)
        console.log("-------------------")
        console.log("Happiness:".black.bgWhite, "+1".green.bgBlack)
        console.log("-------------------")
        console.log("Attack:".black.bgWhite, "+1".green.bgBlack)
        console.log("-------------------")
        console.log("Defense:".black.bgWhite, "+1".green.bgBlack)
      } else {
        console.log("-------------------")
        console.log("Your answer for the 5th question was incorrect.")
        time ();
        console.log("Health:".black.bgWhite, "-1".red.bgBlack)
        console.log("-------------------")
        console.log("Happiness:".black.bgWhite, "-1".red.bgBlack)
        console.log("-------------------")
        console.log("Attack:".black.bgWhite, "-1".red.bgBlack)
        console.log("-------------------")
        console.log("Defense:".black.bgWhite, "-1".red.bgBlack)
      }
      if (answers.quiz6P == "3.1415926535"){
        console.log("-------------------")
        console.log("Your answer '3.1415926535' for the 6th question was correct.")
        timeReverse();
        console.log("Health:".black.bgWhite, "+1".green.bgBlack)
        console.log("-------------------")
        console.log("Happiness:".black.bgWhite, "+1".green.bgBlack)
        console.log("-------------------")
        console.log("Attack:".black.bgWhite, "+1".green.bgBlack)
        console.log("-------------------")
        console.log("Defense:".black.bgWhite, "+1".green.bgBlack)
      } else {
        console.log("-------------------")
        console.log("Your answer for the 6th question was incorrect.")
        time ();
        console.log("Health:".black.bgWhite, "-1".red.bgBlack)
        console.log("-------------------")
        console.log("Happiness:".black.bgWhite, "-1".red.bgBlack)
        console.log("-------------------")
        console.log("Attack:".black.bgWhite, "-1".red.bgBlack)
        console.log("-------------------")
        console.log("Defense:".black.bgWhite, "-1".red.bgBlack)
      }
      if (answers.quiz7P == "David Muir"){
        console.log("-------------------")
        console.log("Your answer 'David Muir' for the 7th question was correct.")
        timeReverse();
        console.log("Health:".black.bgWhite, "+1".green.bgBlack)
        console.log("-------------------")
        console.log("Happiness:".black.bgWhite, "+1".green.bgBlack)
        console.log("-------------------")
        console.log("Attack:".black.bgWhite, "+1".green.bgBlack)
        console.log("-------------------")
        console.log("Defense:".black.bgWhite, "+1".green.bgBlack)
      } else {
        console.log("-------------------")
        console.log("Your answer for the 7th question was incorrect.")
        time ();
        console.log("Health:".black.bgWhite, "-1".red.bgBlack)
        console.log("-------------------")
        console.log("Happiness:".black.bgWhite, "-1".red.bgBlack)
        console.log("-------------------")
        console.log("Attack:".black.bgWhite, "-1".red.bgBlack)
        console.log("-------------------")
        console.log("Defense:".black.bgWhite, "-1".red.bgBlack)
      }
      if (answers.quiz8P == "43.99 km/h (27.33 mp/h)"){
        console.log("-------------------")
        console.log("Your answer '43.99 km/h (27.33 mp/h)' for the 8th question was correct.")
        timeReverse();
        console.log("Health:".black.bgWhite, "+1".green.bgBlack)
        console.log("-------------------")
        console.log("Happiness:".black.bgWhite, "+1".green.bgBlack)
        console.log("-------------------")
        console.log("Attack:".black.bgWhite, "+1".green.bgBlack)
        console.log("-------------------")
        console.log("Defense:".black.bgWhite, "+1".green.bgBlack)
      } else {
        console.log("-------------------")
        console.log("Your answer for the 8th question was incorrect.")
        time ();
        console.log("Health:".black.bgWhite, "-1".red.bgBlack)
        console.log("-------------------")
        console.log("Happiness:".black.bgWhite, "-1".red.bgBlack)
        console.log("-------------------")
        console.log("Attack:".black.bgWhite, "-1".red.bgBlack)
        console.log("-------------------")
        console.log("Defense:".black.bgWhite, "-1".red.bgBlack)
      }
      if (answers.quiz9P == "Cooking"){
        console.log("-------------------")
        console.log("Your answer 'Cooking' for the 9th question was correct.")
        timeReverse();
        console.log("Health:".black.bgWhite, "+1".green.bgBlack)
        console.log("-------------------")
        console.log("Happiness:".black.bgWhite, "+1".green.bgBlack)
        console.log("-------------------")
        console.log("Attack:".black.bgWhite, "+1".green.bgBlack)
        console.log("-------------------")
        console.log("Defense:".black.bgWhite, "+1".green.bgBlack)
      } else {
        console.log("-------------------")
        console.log("Your answer for the 9th question was incorrect.")
        time ();
        console.log("Health:".black.bgWhite, "-1".red.bgBlack)
        console.log("-------------------")
        console.log("Happiness:".black.bgWhite, "-1".red.bgBlack)
        console.log("-------------------")
        console.log("Attack:".black.bgWhite, "-1".red.bgBlack)
        console.log("-------------------")
        console.log("Defense:".black.bgWhite, "-1".red.bgBlack)
      }
      if (answers.quiz10P == "No idea"){
        console.log("-------------------")
        console.log("Your answer 'No idea' for the 10th question was correct.")
        timeReverse();
        console.log("Health:".black.bgWhite, "+1".green.bgBlack)
        console.log("-------------------")
        console.log("Happiness:".black.bgWhite, "+1".green.bgBlack)
        console.log("-------------------")
        console.log("Attack:".black.bgWhite, "+1".green.bgBlack)
        console.log("-------------------")
        console.log("Defense:".black.bgWhite, "+1".green.bgBlack)
      } else {
        console.log("-------------------")
        console.log("Your answer for the 10th question was incorrect.")
        time ();
        console.log("Health:".black.bgWhite, "-1".red.bgBlack)
        console.log("-------------------")
        console.log("Happiness:".black.bgWhite, "-1".red.bgBlack)
        console.log("-------------------")
        console.log("Attack:".black.bgWhite, "-1".red.bgBlack)
        console.log("-------------------")
        console.log("Defense:".black.bgWhite, "-1".red.bgBlack)
        console.log("-------------------")
      }
    })
    .then(() => gameLoop())
  }
  mathGame = () => {
    inquirer
    .prompt([
      {
        type: "list",
        name: "math1P",
        message: "What is 1 + 7 equal to?",
        choices: ["7", "1", "8", "0"],
      },
      {
        type: "list",
        name: "math2P",
        message: "What is 16 + 61 equal to?",
        choices: ["16", "61", "76", "77"],
      },
      {
        type: "list",
        name: "math3P",
        message: "What is 10 - 6 equal to?",
        choices: ["0", "4", "8", "12"],
      },
      {
        type: "list",
        name: "math4P",
        message: "What is 54 - 42 equal to?",
        choices: ["96", "12", "32", "7"],
      },
      {
        type: "list",
        name: "math5P",
        message: "What is 1 * 7 equal to?",
        choices: ["7", "14", "21", "28"],
      },
      {
        type: "list",
        name: "math6P",
        message: "What is 7 * 8 equal to?",
        choices: ["40", "56", "62", "1"],
      },
      {
        type: "list",
        name: "math7P",
        message: "What is 9 / 1 equal to?",
        choices: ["7", "1", "8", "9"],
      },
      {
        type: "list",
        name: "math8P",
        message: "What is 90 / 10 equal to?",
        choices: ["1", "10", "9", "19"],
      },
      {
        type: "list",
        name: "math9P",
        message: "What is 142857 * 3 equal to?",
        choices: ["285714", "857142", "428571", "3"],
      },
      {
        type: "list",
        name: "math10P",
        message: "What is Pi * Pi equal to?",
        choices: ["9.86", "8.69", "6.86", "9.68"],
      },
    ])
    .then((answers) => {
      if (answers.math1P == "8"){
        console.log("-------------------")
        console.log("Your answer '8' for the 1th question was correct.")
        randomMath1 = Math.floor(Math.random()*2);
        attack += randomMath1;
        defense += randomMath1;
        console.log(`Attack:`.black.bgWhite, `+${randomMath1}`.green.bgBlack)
        console.log("-------------------")
        console.log(`Defense:`.black.bgWhite, `+${randomMath1}`.green.bgBlack)
      } else {
        console.log("-------------------")
        console.log("Your answer for the 1th question was incorrect.")
        randomMath1 = Math.floor(Math.random()*2);
        attack -= randomMath1;
        defense -= randomMath1;
        console.log(`Attack:`.black.bgWhite, `-${randomMath1}`.red.bgBlack)
        console.log("-------------------")
        console.log(`Defense:`.black.bgWhite, `-${randomMath1}`.red.bgBlack)
       
      }
      if (answers.math2P == "77"){
        console.log("-------------------")
        console.log("Your answer '77' for the 2nd question was correct.")
        randomMath2 = Math.floor(Math.random()*3);
        attack += randomMath2;
        defense += randomMath2;
        console.log(`Attack:`.black.bgWhite, `+${randomMath2}`.green.bgBlack)
        console.log("-------------------")
        console.log(`Defense:`.black.bgWhite, `+${randomMath2}`.green.bgBlack)
       
      } else {
        console.log("-------------------")
        console.log("Your answer for the 2nd question was incorrect.")
        randomMath2 = Math.floor(Math.random()*3);
        attack -= randomMath2;
        defense -= randomMath2;
        console.log(`Attack:`.black.bgWhite, `-${randomMath2}`.red.bgBlack)
        console.log("-------------------")
        console.log(`Defense:`.black.bgWhite, `-${randomMath2}`.red.bgBlack)
      }
      if (answers.math3P == "4"){
        console.log("-------------------")
        console.log("Your answer '4' for the 3rd question was correct.")
        randomMath3 = Math.floor(Math.random()*4);
        attack += randomMath3;
        defense += randomMath3;
        console.log(`Attack:`.black.bgWhite, `+${randomMath3}`.green.bgBlack)
        console.log("-------------------")
        console.log(`Defense:`.black.bgWhite, `+${randomMath3}`.green.bgBlack)
      
      } else {
        console.log("-------------------")
        console.log("Your answer for the 3rd question was incorrect.")
        randomMath3 = Math.floor(Math.random()*4);
        attack -= randomMath3;
        defense -= randomMath3;
        console.log(`Attack:`.black.bgWhite, `-${randomMath3}`.red.bgBlack)
        console.log("-------------------")
        console.log(`Defense:`.black.bgWhite, `-${randomMath3}`.red.bgBlack)
      }
      if (answers.math4P == "12"){
        console.log("-------------------")
        console.log("Your answer '12' for the 4th question was correct.")
        randomMath4 = Math.floor(Math.random()*5);
        attack += randomMath4;
        defense += randomMath4;
        console.log(`Attack:`.black.bgWhite, `+${randomMath4}`.green.bgBlack)
        console.log("-------------------")
        console.log(`Defense:`.black.bgWhite, `+${randomMath4}`.green.bgBlack)
      
      } else {
        console.log("-------------------")
        console.log("Your answer for the 4th question was incorrect.")
        randomMath4 = Math.floor(Math.random()*5);
        attack -= randomMath4;
        defense -= randomMath4;
        console.log(`Attack:`.black.bgWhite, `-${randomMath4}`.red.bgBlack)
        console.log("-------------------")
        console.log(`Defense:`.black.bgWhite, `-${randomMath4}`.red.bgBlack)
      }
      if (answers.math5P == "7"){
        console.log("-------------------")
        console.log("Your answer '7' for the 5th question was correct.")
        randomMath5 = Math.floor(Math.random()*6);
        attack += randomMath5;
        defense += randomMath5;
        console.log(`Attack:`.black.bgWhite, `+${randomMath5}`.green.bgBlack)
        console.log("-------------------")
        console.log(`Defense:`.black.bgWhite, `+${randomMath5}`.green.bgBlack)
      
      } else {
        console.log("-------------------")
        console.log("Your answer for the 5th question was incorrect.")
        randomMath5 = Math.floor(Math.random()*6);
        attack -= randomMath5;
        defense -= randomMath5;
        console.log(`Attack:`.black.bgWhite, `-${randomMath5}`.red.bgBlack)
        console.log("-------------------")
        console.log(`Defense:`.black.bgWhite, `-${randomMath5}`.red.bgBlack)
      }
      if (answers.math6P == "56"){
        console.log("-------------------")
        console.log("Your answer '56' for the 6th question was correct.")
        randomMath6 = Math.floor(Math.random()*7);
        attack += randomMath6;
        defense += randomMath6;
        console.log(`Attack:`.black.bgWhite, `+${randomMath6}`.green.bgBlack)
        console.log("-------------------")
        console.log(`Defense:`.black.bgWhite, `+${randomMath6}`.green.bgBlack)
      
      } else {
        console.log("-------------------")
        console.log("Your answer for the 6th question was incorrect.")
        randomMath6 = Math.floor(Math.random()*7);
        attack -= randomMath6;
        defense -= randomMath6;
        console.log(`Attack:`.black.bgWhite, `-${randomMath6}`.red.bgBlack)
        console.log("-------------------")
        console.log(`Defense:`.black.bgWhite, `-${randomMath6}`.red.bgBlack)
      }
      if (answers.math7P == "9"){
        console.log("-------------------")
        console.log("Your answer '9' for the 7th question was correct.")
        randomMath7 = Math.floor(Math.random()*8);
        attack += randomMath7;
        defense += randomMath7;
        console.log(`Attack:`.black.bgWhite, `+${randomMath7}`.green.bgBlack)
        console.log("-------------------")
        console.log(`Defense:`.black.bgWhite, `+${randomMath7}`.green.bgBlack)
      
      } else {
        console.log("-------------------")
        console.log("Your answer for the 7th question was incorrect.")
        randomMath7 = Math.floor(Math.random()*8);
        attack -= randomMath7;
        defense -= randomMath7;
        console.log(`Attack:`.black.bgWhite, `-${randomMath7}`.red.bgBlack)
        console.log("-------------------")
        console.log(`Defense:`.black.bgWhite, `-${randomMath7}`.red.bgBlack)
      }
      if (answers.math8P == "9"){
        console.log("-------------------")
        console.log("Your answer '9' for the 8th question was correct.")
        randomMath8 = Math.floor(Math.random()*9);
        attack += randomMath8;
        defense += randomMath8;
        console.log(`Attack:`.black.bgWhite, `+${randomMath8}`.green.bgBlack)
        console.log("-------------------")
        console.log(`Defense:`.black.bgWhite, `+${randomMath8}`.green.bgBlack)
      
      } else {
        console.log("-------------------")
        console.log("Your answer for the 8th question was incorrect.")
        randomMath8= Math.floor(Math.random()*9);
        attack -= randomMath8;
        defense -= randomMath8;
        console.log(`Attack:`.black.bgWhite, `-${randomMath8}`.red.bgBlack)
        console.log("-------------------")
        console.log(`Defense:`.black.bgWhite, `-${randomMath8}`.red.bgBlack)
      }
      if (answers.math9P == "428571"){
        console.log("-------------------")
        console.log("Your answer '428571' for the 9th question was correct.")
        randomMath9 = Math.floor(Math.random()*10);
        attack += randomMath9;
        defense += randomMath9;
        console.log(`Attack:`.black.bgWhite, `+${randomMath9}`.green.bgBlack)
        console.log("-------------------")
        console.log(`Defense:`.black.bgWhite, `+${randomMath9}`.green.bgBlack)
       
      } else {
        console.log("-------------------")
        console.log("Your answer for the 9th question was incorrect.")
        randomMath9 = Math.floor(Math.random()*10);
        attack -= randomMath9;
        defense -= randomMath9;
        console.log(`Attack:`.black.bgWhite, `-${randomMath9}`.red.bgBlack)
        console.log("-------------------")
        console.log(`Defense:`.black.bgWhite, `-${randomMath9}`.red.bgBlack)
      }
      if (answers.math10P == "9.86"){
        console.log("-------------------")
        console.log("Your answer '9.86' for the 10th question was correct.")
        randomMath10 = Math.floor(Math.random()*11);
        attack += randomMath10;
        defense += randomMath10;
        console.log(`Attack:`.black.bgWhite, `+${randomMath10}`.green.bgBlack)
        console.log("-------------------")
        console.log(`Defense:`.black.bgWhite, `+${randomMath10}`.green.bgBlack)

      } else {
        console.log("-------------------")
        console.log("Your answer for the 10th question was incorrect.")
        randomMath10 = Math.floor(Math.random()*11);
        attack -= randomMath10;
        defense -= randomMath10;
        console.log(`Attack:`.black.bgWhite, `-${randomMath10}`.red.bgBlack)
        console.log("-------------------")
        console.log(`Defense:`.black.bgWhite, `-${randomMath10}`.red.bgBlack)
        console.log("-------------------")
      }
    })
    .then(() => gameLoop())
  }
  translatorGame = () => {
    console.log("You need to learn foreign languages to unlock this game.")
    console.log("You can learn new languages in the 'Learn' section.")
    console.log("-------------------")
    gameLoop();
  }
  inquirer
    .prompt([
      {
        type: "list",
        name: "playP",
        message: "What would you like to play?",
        choices: ["Quiz", "Math Game", "Translator Game"],
      },
    ])
    .then((answer) => {
      if (answer.playP == "Quiz") {
        console.log("-------------------")
        console.log("Good choice! Lets answer some questions! :)")
        console.log("-------------------")
        quiz();
      }
      if (answer.playP == "Math Game") {
        console.log("-------------------")
        console.log("Prepare your brain!")
        console.log("If you find it hard, go to learn, and come back later!")
        console.log("-------------------")
        mathGame();
      }
      if (answer.playP == "Translator Game") {
        console.log("-------------------")
        console.log("Let's see what do you know about languages!")
        console.log("-------------------")
        translatorGame();
      }
    })
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
        console.log (`All your status went down to 50 :/`.red.bgBlack)
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
          console.log(`Health:`.black.bgWhite, `+30`.green.bgBlack)
          console.log("-------------------")
          console.log(`Happiness:`.black.bgWhite, `+30`.green.bgBlack)
          gameLoop();
        } else {
          console.log("Your Attack or Defense was too low.")
          console.log("Your attack is failed.")
          console.log("-------------------")
          health -= 10;
          happiness -= 10;
          console.log(`Health:`.black.bgWhite, `-10`.red.bgBlack)
          console.log("-------------------")
          console.log(`Happiness:`.black.bgWhite, `-10`.red.bgBlack)
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
        console.log(`Health:`.black.bgWhite, `+15`.green.bgBlack)
        console.log("-------------------")
        console.log(`Happiness:`.black.bgWhite, `+15`.green.bgBlack)
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
          console.log("All your Status level went up to 200! :)".green.bgBlack)
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
        console.log(`Health:`.black.bgWhite, `+1`.green.bgBlack);
        console.log("-------------------")
        console.log(`Happiness:`.black.bgWhite, `+1`.green.bgBlack);
        console.log("-------------------")
        console.log(`Attack:`.black.bgWhite, `+1`.green.bgBlack);
        console.log("-------------------")
        console.log(`Defense:`.black.bgWhite, `+1`.green.bgBlack);
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
        console.log(`Health:`.black.bgWhite, `+2`.green.bgBlack);
        console.log("-------------------")
        console.log(`Happiness:`.black.bgWhite, `+2`.green.bgBlack);
        console.log("-------------------")
        console.log(`Attack:`.black.bgWhite, `+2`.green.bgBlack);
        console.log("-------------------")
        console.log(`Defense:`.black.bgWhite, `+2`.green.bgBlack);
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
        console.log(`Health:`.black.bgWhite, `+3`.green.bgBlack);
        console.log("-------------------")
        console.log(`Happiness:`.black.bgWhite, `+3`.green.bgBlack);
        console.log("-------------------")
        console.log(`Attack:`.black.bgWhite, `+3`.green.bgBlack);
        console.log("-------------------")
        console.log(`Defense:`.black.bgWhite, `+3`.green.bgBlack);
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
        console.log(`Health:`.black.bgWhite, `+3`.green.bgBlack);
        console.log("-------------------")
        console.log(`Happiness:`.black.bgWhite, `+3`.green.bgBlack);
        console.log("-------------------")
        console.log(`Attack:`.black.bgWhite, `+3`.green.bgBlack);
        console.log("-------------------")
        console.log(`Defense:`.black.bgWhite, `+3`.green.bgBlack);
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
        console.log(`Health:`.black.bgWhite, `+4`.green.bgBlack);
        console.log("-------------------")
        console.log(`Happiness:`.black.bgWhite, `+4`.green.bgBlack);
        console.log("-------------------")
        console.log(`Attack:`.black.bgWhite, `+4`.green.bgBlack);
        console.log("-------------------")
        console.log(`Defense:`.black.bgWhite, `+4`.green.bgBlack);
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
        console.log(`Happiness:`.black.bgWhite, `+1`.green.bgBlack)
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
        console.log(`Happiness:`.black.bgWhite, `+2`.green.bgBlack)
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
        console.log(`Happiness:`.black.bgWhite, `+3`.green.bgBlack)
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
        console.log(`Happiness:`.black.bgWhite, `+4`.green.bgBlack)
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
        console.log(`Happiness:`.black.bgWhite, `+5`.green.bgBlack)
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
        console.log(`Health:`.black.bgWhite, `+1`.green.bgBlack);
        console.log("-------------------")
        console.log(`Happiness:`.black.bgWhite, `+1`.green.bgBlack);
        console.log("-------------------")
        console.log(`Attack:`.black.bgWhite, `+1`.green.bgBlack);
        console.log("-------------------")
        console.log(`Defense:`.black.bgWhite, `+1`.green.bgBlack);
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
        console.log(`Health:`.black.bgWhite, `+2`.green.bgBlack);
        console.log("-------------------")
        console.log(`Happiness:`.black.bgWhite, `+2`.green.bgBlack);
        console.log("-------------------")
        console.log(`Attack:`.black.bgWhite, `+2`.green.bgBlack);
        console.log("-------------------")
        console.log(`Defense:`.black.bgWhite, `+2`.green.bgBlack);
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
        console.log(`Health:`.black.bgWhite, `+3`.green.bgBlack);
        console.log("-------------------")
        console.log(`Happiness:`.black.bgWhite, `+3`.green.bgBlack);
        console.log("-------------------")
        console.log(`Attack:`.black.bgWhite, `+3`.green.bgBlack);
        console.log("-------------------")
        console.log(`Defense:`.black.bgWhite, `+3`.green.bgBlack);
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
        console.log(`Health:`.black.bgWhite, `-15`.red.bgBlack);
        console.log("-------------------")
        console.log(`Happiness:`.black.bgWhite, `-25`.red.bgBlack);
        console.log("-------------------")
      }
      if (answer.sleepP == "3 hours") {
        console.log("-------------------")
        console.log("I'm still sleepy.... :(")
        console.log("-------------------")
        health -= 10;
        happiness -= 15;
        console.log(`Health:`.black.bgWhite, `-10`.red.bgBlack);
        console.log("-------------------")
        console.log(`Happiness:`.black.bgWhite, `-15`.red.bgBlack);
        console.log("-------------------")
      }
      if (answer.sleepP == "8 hours") {
        console.log("-------------------")
        console.log("Thank you! I am feeling much better! :)")
        console.log("-------------------")
        health += 25;
        happiness += 25;
        console.log(`Health:`.black.bgWhite, `+25`.green.bgBlack);
        console.log("-------------------")
        console.log(`Happiness:`.black.bgWhite, `+25`.green.bgBlack);
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
        console.log(`Health:`.black.bgWhite, `+${number1}`.green.bgBlack);
        console.log("-------------------")
        console.log(`Happiness:`.black.bgWhite, `+${number2}`.green.bgBlack);
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
        console.log(`Health:`.black.bgWhite, `+15`.green.bgBlack);
        console.log("-------------------")
        console.log(`Happiness:`.black.bgWhite, `+25`.green.bgBlack);
        console.log("-------------------")
      }
      if (answer.bathP == "River") {
        console.log("-------------------")
        console.log("Oh-noo! You were bitten by a Black Piranha.")
        console.log("-------------------")
        health -= 20;
        happiness -= 20;
        console.log(`Health:`.black.bgWhite, `-20`.red.bgBlack);
        console.log("-------------------")
        console.log(`Happiness:`.black.bgWhite, `-20`.red.bgBlack);
        console.log("-------------------")
      }
      if (answer.bathP == "Sea") {
        console.log("-------------------")
        console.log("That was very refreshing! :)")
        console.log("-------------------")
        health += 25;
        happiness += 25;
        console.log(`Health:`.black.bgWhite, `+25`.green.bgBlack);
        console.log("-------------------")
        console.log(`Happiness:`.black.bgWhite, `+25`.green.bgBlack);
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
        console.log(`Health:`.black.bgWhite, `-${number1}`.red.bgBlack);
        console.log("-------------------")
        console.log(`Happiness:`.black.bgWhite, `-${number2}`.red.bgBlack);
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
            console.log(`Health:`.black.bgWhite, `${this.num1}`.red.bgBlack);
          } else {
            console.log(`Health:`.black.bgWhite, `+${this.num1}`.green.bgBlack);
          }
          console.log("-------------------")
          if (num2 < 0){
            console.log(`Happiness:`.black.bgWhite, `${this.num2}`.red.bgBlack);
          } else {
            console.log(`Happiness:`.black.bgWhite, `+${this.num2}`.green.bgBlack);
          }
          console.log("-------------------")
          if (num3 < 0){
            console.log(`Attack:`.black.bgWhite, `${this.num3}`.red.bgBlack);
          } else {
            console.log(`Attack:`.black.bgWhite, `+${this.num3}`.green.bgBlack);
          }
          console.log("-------------------")
          if (num4 < 0){
            console.log(`Defense:`.black.bgWhite, `${this.num4}`.red.bgBlack);
          } else {
            console.log(`Defense:`.black.bgWhite, `+${this.num4}`.green.bgBlack);
          }
          console.log("-------------------")
        } else if (pet.skill == "Meditate") {
          console.log("-------------------")
          console.log(">Meditate< has been used!")
          console.log("-------------------")
          meditate();
          console.log(`Health:`.black.bgWhite, `+${this.med1}`.green.bgBlack);
          console.log("-------------------")
          console.log(`Happiness:`.black.bgWhite, `+${this.med2}`.green.bgBlack);
          console.log("-------------------")
          console.log(`Attack:`.black.bgWhite, `-${this.med3}`.red.bgBlack);
          console.log("-------------------")
          console.log(`Defense:`.black.bgWhite, `-${this.med4}`.red.bgBlack);
          console.log("-------------------")
        } else {
          console.log("-------------------")
          console.log(">Bite< has been used!")
          console.log("-------------------")
          bite();
          console.log(`Health:`.black.bgWhite, `-${this.bite1}`.red.bgBlack);
          console.log("-------------------")
          console.log(`Happiness:`.black.bgWhite, `+${this.bite2}`.green.bgBlack);
          console.log("-------------------")
          console.log(`Attack:`.black.bgWhite, `+${this.bite3}`.green.bgBlack);
          console.log("-------------------")
          console.log(`Defense:`.black.bgWhite, `-${this.bite4}`.red.bgBlack);
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

      console.log("               ,,))))))));,");
      console.log("            __)))))))))))))),");
      console.log("\|/      -\(((((''''((((((((.");
      console.log("-*-==//////((''  .     `)))))),");
      console.log("/|\      ))| o    ;-.    '(((((                                  ,(,");
      console.log("          ( `|    /  )    ;))))'                               ,_))^;(~");
      console.log("            |   |   |   ,))((((_     _____------~~~-.        %,;(;(>';'~");
      console.log("            o_);   ;    )))(((` ~---~  `::           \      %%~~)(v;(`('~");
      console.log("                  ;    ''''````         `:       `:::|\,__,%%    );`'; ~");
      console.log("                |   _                )     /      `:|`----'     `-'");
      console.log("         ______/\/~    |                 /        /");
      console.log("        /~;;.____/;;'  /          ___--,-(   `;;;/");
      console.log("       / //  _;______;'------~~~~~    /;;/\    /");
      console.log("      //  | |                        / ;   \;;,");
      console.log("     (<_  | ;                      /',/-----'  _>");
      console.log("     \_| ||_                     //~;~~~~~~~~~");
      console.log("     `\_|                       (,~~ ");
      console.log("                                \~");
      console.log("                                 ~~")

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

class Wolf extends Pet {
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
  console.clear();
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is your name?",
      }
    ])
    .then((answer) => {
      console.log(figlet.textSync(`Welcome  ${answer.name} !  :d`, {
        font: 'Standard',
        horizontalLayout: 'default',
        verticalLayout: 'default',
        width: 120,
        whitespaceBreak: true
    }));
    })
    .then(() => {
      setTimeout(function() {
        console.clear();
        petBuild()
      }, 4000);
    })
}

const petBuild = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "petP",
        message: "Please choose a pet: ",
        choices: ["Unicorn", "Seahorse", "Wolf"],
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
        petStat = `| Type: ${answers.typeP} | Name: ${answers.nameP} | Colour: ${answers.colourP} | Gender: ${answers.genderP} | Power: ${answers.powerP} | Unic skill: Magic |`;
        pet = unicorn;
      } else if (answers.petP == "Seahorse"){
        pet = new Seahorse (`${answers.typeP}`, `${answers.nameP}`, `${answers.colourP}`, `${answers.genderP}`, `${answers.powerP}`, "Meditate");
        petStat = `| Type: ${answers.typeP} | Name: ${answers.nameP} | Colour: ${answers.colourP} | Gender: ${answers.genderP} | Power: ${answers.powerP} | Unic skill: Meditate |`;
        pet = seahorse;
      } else {
        pet = new Wolf (`${answers.typeP}`, `${answers.nameP}`, `${answers.colourP}`, `${answers.genderP}`, `${answers.powerP}`, "Bite");
        petStat = `| Type: ${answers.typeP} | Name: ${answers.nameP} | Colour: ${answers.colourP} | Gender: ${answers.genderP} | Power: ${answers.powerP} | Unic skill: Bite |`;
        pet = wolf;
      }
    })
    .then(() => {
      console.clear();
      status()
    })
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
        if (pet == unicorn){
          console.log("-------------------------------------------------------------------------------------------------")
          unicorn();
          console.log("-------------------------------------------------------------------------------------------------")
          console.log(petStat);
          console.log("-------------------------------------------------------------------------------------------------")
        } else if (pet == seahorse){
          console.log("---------------------------------------------------------------------------------------------------")
          seahorse();
          console.log("---------------------------------------------------------------------------------------------------")
          console.log(petStat);
          console.log("---------------------------------------------------------------------------------------------------")
        } else {
          console.log("-------------------------------------------------------------------------------------------------")
          wolf();
          console.log("-------------------------------------------------------------------------------------------------")
          console.log(petStat);
          console.log("-------------------------------------------------------------------------------------------------")
        }
        console.log("-----------------------------------------------------------".black.bgWhite)
        console.log(`| Health: ${health} | Happiness: ${happiness} | Attack: ${attack} | Defense: ${defense} |`.black.bgWhite);
        console.log("-----------------------------------------------------------".black.bgWhite)
        console.log("-----------------------------")
        console.log("Let's interact with your pet.")
        console.log("-----------------------------")
      } else {
        console.log("-----------------------------")
        console.log("Let's interact with your pet.");
        console.log("-----------------------------")
      }
    })
    .then(() => {
      setTimeout(function() {
        console.clear();
        gameLoop()
      }, 3000);
    })
}

const gameLoop = () => {
  if (health >= 201 || happiness >= 201){
    health = 200;
    happiness = 200;
  }
  if (attack >= 201 || defense >= 201){
    attack = 200;
    happiness = 200;
  } 
  if (health <= 0 || happiness <= 0){
    theEnd();
  } else {
    time();
    console.log("                     ,---.           ,---.");
    console.log("                    / /'`.).--'''--./,'') )");
    console.log("                    ) )    _       _    / /");
    console.log("                     `./  / __   __ )  ;,/ ");
    console.log("                      /    /_O)_(_O)    |");
    console.log("                      |  .-'  ___  `-.  |");
    console.log("                   .--|       )_/       |--.");
    console.log("                 ,'    )   )   |   /   /    `.");
    console.log("                /       `.  `--^--'  ,'       )");
    console.log("             .-''``'-.    `--.___.--'     .-''`''-.");
    console.log(".-----------/         )------------------/         )--------------.");
    console.log("| .---------)         /----------------- )         /------------. |");
    console.log("| |          `-`--`--'                    `--'--'-'             | |");
    console.log("| |                                                             | |");
    console.log("| |                                                             | |");
    console.log("| |                 Interact with your pet! :)                  | |");
    console.log("| |                                                             | |");
    console.log("| |                                                             | |");
  inquirer
    .prompt([
      {
        type: "list",
        name: "optionP",
        message: "What would you like to do next? ",
        choices: ["1: Check your Pet Status".underline, "2. Eat".underline, "3. Drink".underline, "4. Play".underline, "5. Hunt".underline, "6. Learn".underline, "7. Sleep".underline, "8. Bath".underline, "9. * Use your Unic skill *".underline],
      },
    ])
    .then((answer) => {
      console.clear();
      if (answer.optionP == "1: Check your Pet Status".underline){
        console.log("-------------------");
        statusOption();
      }
      if (answer.optionP == "2. Eat".underline){
        console.log("-------------------");
        eat();
      }
      if (answer.optionP == "3. Drink".underline){
        console.log("-------------------");
        drink();
      }
      if (answer.optionP == "4. Play".underline){
        console.log("-------------------");
        play();
      }
      if (answer.optionP == "5. Hunt".underline){
        console.log("-------------------");
        hunt();
      }
      if (answer.optionP == "6. Learn".underline){
        console.log("-------------------");
        learn();
      }
      if (answer.optionP == "7. Sleep".underline){
        console.log("-------------------");
        sleep();
      }
      if (answer.optionP == "8. Bath".underline){
        console.log("-------------------");
        bath();
      }
      if (answer.optionP == "9. * Use your Unic skill *".underline){
        console.log("-------------------");
        skills();
      }
    })
  }
}

module.exports = {
  name: "project.js",
  desc: "Full game",
  unicorn,
  seahorse,
  wolf,
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
  Wolf,
  init,
  petBuild,
  status,
  gameLoop,
}