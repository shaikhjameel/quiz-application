
let questions = [
    {
        id: 1,
        question: "Inside which HTML element do we put the JavaScript?",
        answer:"Script",
        options: [
            "JS",
            "Script",
            "Scripting",
            "JavaScripting"
        ]   
    },
    {
        id: 2,
        question: "Where is the correct place to insert a JavaScript?",
        answer: "Both Head & Body ",
        options: [
          "The Head section",
          "Both Head & Body ",
          "Body section",
          "None of these"
        ]
      },
      {
        id: 3,
        question: "The external JavaScript file must contain the script tag",
        answer: "false",
        options: [
          "False",
          "True",
          "Both",
          "None of these"
        ]
      },
      {
        id: 4,
        question: "How do you create a function in JavaScript?",
        answer: "function myFunction()",
        options: [
          "function: myfunction()",
          "function =  myfunction()",
          "function myFunction()",
          "None of these"
        ]
      },
      {
        id: 5,
        question: "Which operator is used to assign a value to a variable?",
        answer: "=",
        options: [
          "/",
          "%",
          "+",
          "="
        ]
      },
      {
        id: 6,
        question: "How to write an IF statement in JavaScript?",
        answer: "if (i == 5)",
        options: [
          "if i == 5 then",
          "if i == 5",
          "if (i == 5)",
          "if (i=5)"
        ]
      },
      {
        id: 7,
        question: "How does a FOR loop start?",
        answer: "for (i = 0, i < = 5; i++)",
        options: [
          "for (i = 0, i < = 5; i +)",
          "for (i = 0, i < = 5; i++)",
          "for (i = 0, i < = 5; i +++)",
          "None of these"
        ]
      },
      {
        id: 8,
        question: "How do you round the number 7.25, to the nearest integer?",
        answer: "Math.round(7.25)",
        options: [
          "Math.round(7.25)",
          "round.math(7.25)",
          "Math.rnd(7.25)",
          "None of these" 
        ]
      },
      {
        id: 9,
        question: "How do you find the number with the highest value of x and y?",
        answer: "Math.Max(x, y)",
        options: [
          "Math.ceil(x,y)",
          "Math.top(x,y)",
          "Math.Max(x, y)",
          "None of these"
        ]
      },
      {
        id: 10,
        question: "How do you declare a JavaScript variable?",
        answer: "var carName;",
        options: [
          "variable carName;",
          "var carName;",
          "v carName;",
          "None of these"
          
        ]
      },
];

let question_count = 0;
let points = 0;


window.onload = function(){
    show(question_count);
};

function show(count){
    let question = document.getElementById("questions");
    let[first, second, third, fourth] = questions[count].options;

    question.innerHTML = `<h2>Q${count + 1}. ${questions[count].question}</h2>
    <ul class="option_group">
    <li class="option">${first}</li>
    <li class="option">${second}</li>
    <li class="option">${third}</li>
    <li class="option">${fourth}</li>
    </ul>`;
    toggleActive();  
}

function toggleActive(){
    let option = document.querySelectorAll("li.option");
    for(let i=0; i < option.length; i++){
        option[i].onclick = function(){
            for(let i=0; i < option.length; i++){
                if(option[i].classList.contains("active")){
                    option[i].classList.remove("active");
                }
            }
            option[i].classList.add("active");
        }
    }
}

function next(){

    if(question_count == questions.length -1){
        location.href = "final.html";
    }
    console.log(question_count);


let user_answer = document.querySelector("li.option.active").innerHTML;

if(user_answer == questions[question_count].answer){
    points += 10;
    sessionStorage.setItem("points",points);
}
console.log(points);

question_count++;
show(question_count);
}