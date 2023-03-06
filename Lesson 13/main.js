'use strict'

const Game = new Phaser.Game(800, 800, Phaser.AUTO, "", { preload, create, update})

let mLabel, ans1, ans2, ans3;
let buttonImg1, buttonImg2, buttonImg3
let problem
let pointsLabel, points = 0
let buttons = []
let answers = [], answerCount = 3;
let num1, num2, symbolI
let symbol
let realAnswer
let correctAnswer = Game.rnd.integerInRange(1, 3);

function preload() {
    Game.load.image("butonche", "butonche.jpg");
    Game.load.image("bg", "bg.png");
}

function create() {
    createButtons();
    createAnswers();
    createProblem();
    createPoints();
}
function createQuestion() {
    num1 = Game.rnd.integerInRange(1, 150);
    num2 = Game.rnd.integerInRange(1, 150); 
    symbolI = Game.rnd.integerInRange(1, 4);
    switch(symbolI){
        case 1:
            symbol = " + "
            realAnswer = num1 + num2
            break;
        case 2:
            symbol = " - "
            realAnswer = num1 - num2
            break;
        case 3:
            symbol = " * "
            realAnswer = num1 * num2
            break;
        case 4:
            symbol = " / "
            realAnswer = Math.round(num1 / num2)
            break;
        default:
            console.log("error")
    }
    let wrongA1 = realAnswer + Game.rnd.integerInRange(-5, -1);
    let wrongA2 = realAnswer + Game.rnd.integerInRange(1, 5);

    switch(correctAnswer){
        case 1:
            ans1.text = realAnswer
            ans2.text = wrongA1
            ans3.text = wrongA2
            break;
        case 2:
            ans2.text = realAnswer
            ans1.text = wrongA1
            ans3.text = wrongA2
            break;
        case 3:
            ans3.text = realAnswer
            ans1.text = wrongA1
            ans2.text = wrongA2
            break;
    }
} 
function createProblem() {
    createQuestion();
    problem = Game.add.text(Game.width / 2, Game.height - 600, '' + num1 + symbol + num2, { font: "24px Arial", fill:  "#fff"} );
    problem.anchor.setTo(0.5);

}
function createButtons() {
    buttonImg1 = Game.add.image(200, Game.height - 400, "butonche")
    buttonImg1.anchor.setTo(0.5)
    buttonImg1.scale.setTo(0.2)
    
    
    buttonImg2 = Game.add.image(400, Game.height - 400, "butonche")
    buttonImg2.anchor.setTo(0.5)
    buttonImg2.scale.setTo(0.2)

    
    buttonImg3 = Game.add.image(600, Game.height - 400, "butonche")
    buttonImg3.anchor.setTo(0.5)
    buttonImg3.scale.setTo(0.2)
}

function createAnswers() {
    
    ans1 = Game.add.text(200, Game.height - 400, "Boro slepiq", {font: "18px Arial", fill: "#fff"} );
    ans1.anchor.setTo(0.5);
    ans1.inputEnabled = true; 
    ans1.events.onInputUp.add(function(){
        if(correctAnswer == 1){
            createQuestion();
            updateQuestionLable();
            createPoints();
            points
        }else{
            console.log("wrong answer")
        }
    });

    ans2 = Game.add.text(400, Game.height - 400, "aaa" ,{font: "18px Arial", fill:"#fff"});
    ans2.anchor.setTo(0.5);
    ans2.inputEnabled = true; 
    ans2.events.onInputUp.add(function(){
        if(correctAnswer == 2){
            createQuestion();
            updateQuestionLable();
            createPoints();
            points ++
        }else{
            console.log("wrong answer")
        }
    });

    ans3 = Game.add.text(600, Game.height - 400, "3400" ,{font: "18px Arial", fill:"#fff"});
    ans3.anchor.setTo(0.5);
    ans3.inputEnabled = true; 
    ans3.events.onInputUp.add(function(){
        if(correctAnswer == 3){
            createQuestion();
            updateQuestionLable();
            createPoints();
            points ++
        }else{
            console.log("wrong answer")
        }
    });
    
   
//    let genCorrectAnswer = Game.rnd.integerInRange(0, answerCount - 1); 
//    let x = 200;
//    let y = Game.height - 400;
//    for(let i = 0; i < answerCount; i++){
//     buttons[i] = Game.add.sprite(x, y, "butonche");
//     buttons[i].anchor.setTo(0.5);
//     buttons[i].scale.setTo(0.2);
    
//     if(i == genCorrectAnswer){


//         answers[i] = Game.add.text(x, y,  realAnswer, {font: "18px Arial", fill: "#fff"});
//         answers[i].anchor.setTo(0.5);
//         answers[i].inputEnabled = true;
//         //answers[i].onInputUp.add(function(){});
//     }else{
//     createFakeAnswer();
//     answers[i] = Game.add.text(x, y, fakeAnswer, {font: "18px Arial", fill: "#fff"});
//     answers[i].anchor.setTo(0.5);
//     answers[i].inputEnabled = true;
//     //answers[i].onInputUp.add(function(){});
//     }
//     x += 200;
//     if(x >= Game.width){
//         y += 200
//     }
//    }
//    x = 200;
   
 }
let fakeAnswer
function createFakeAnswer(){
    let temp = Game.rnd.integerInRange(1, 4)
    let num = Game.rnd.integerInRange(0, 20)
    switch(temp){
        case 1:
            fakeAnswer = realAnswer + num; 
            break;
        case 2:
            fakeAnswer = realAnswer - num;
            break;
        case 3:
            fakeAnswer = realAnswer * num;
            break;
        case 4:
            fakeAnswer = realAnswer / num;
            break;
    }
}
function createPoints(){
    pointsLabel = Game.add.text(50, 50, "points - " + points, {font: "24px Arial", fill: "#fff"})
}
function updateQuestionLable(){
    problem.text = num1 + symbol + num2
}

function update(){
    
}
