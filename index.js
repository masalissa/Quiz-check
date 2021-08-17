var quizData = [
    { 
        q:"Inside which HTML element do we put the JavaScript?",
        a:"<scripting>",
        b:"<javascript>",
        c:"<script>",
        d:"<js>",
        answer:"c"
    },
    { 
        q:"Where is the correct place to insert a JavaScript?",
        a:"The <head> section",
        b:"Both the <head> section and the <body> section are correct",
        c:"The <HTML> section",
        d:"The <body> section",
        answer:"a"
    },
    { 
        q:"What is the correct syntax for referring to an external script called 'xxx.js'?",
        a:"<script name='xxx.js'>",
        b:"<script src='xxx.js'>",
        c:"<script href='xxx.js'>",
        d:"<script value='xxx.js'>",
        answer:"b"
    },
    { 
        q:"How do you write 'Hello World' in an alert box?",
        a:"alertBox('Hello World')",
        b:"msg('Hello World')",
        c:"alert('Hello World')",
        d:"msgBox('Hello World')",
        answer:"c"
    },
    { 
        q:"How do you create a function in JavaScript?",
        a:"function:myFunction()",
        b:"function == myFunction()",
        c:"function myFunction()",
        d:"function = myFunction()",
        answer:"c"
    },
    { 
        q:"What is the correct HTML element for inserting a line break?",
        a:"<br>",
        b:"<break>",
        c:"<lb>",
        d:"<abbr></abbr>",
        answer:"a"
    },
    { 
        q:"What is the correct HTML for adding a background color?",
        a:"<background>yellow</background>",
        b:"<body display='yellow'>",
        c:"<body bg='yellow'>",
        d:"<body style='background-color:yellow;",
        answer:"d"
    },
    { 
        q:"Choose the correct HTML element to define important text",
        a:"<b>",
        b:"<i>",
        c:"<strong>",
        d:"<important>",
        answer:"c"
    },
    { 
        q:"Choose the correct HTML element to define emphasized text",
        a:"<em>",
        b:"<italic>",
        c:"<i>",
        d:"<cite>",
        answer:"a"
    },
    { 
        q:"What is the correct HTML for creating a hyperlink?",
        a:"<a href='http://www.google.com'Google</a>",
        b:"<a url='http://www.google.com'Google</a>",
        c:"<a>http://www.google.com</a>",
        d:"<a name='http://www.google.com'Google</a>",
        answer:"a"
    }
];



var m = document.getElementById("m");
var s = document.getElementById("s");



var currentQuestion = 0;
var score = 0;

var myScore = document.getElementById("score");

var numberOfQuestion = document.getElementById("numberOfQuestion");

var totalOfQuestions = document.getElementById("totalOfQuestions");

var question = document.getElementById("question");

var options = document.querySelectorAll(".option");

var text_a = document.getElementById("text_a");

var text_b = document.getElementById("text_b");

var text_c = document.getElementById("text_c");

var text_d = document.getElementById("text_d");

var btn = document.getElementById("btn");

var btnNew = document.getElementById("btnNew");


var s = document.getElementById("s");
var m = document.getElementById("m");

s.innerHTML = "00";
m.innerHTML = "00";

var set;
function onload(){


document.addEventListener("DOMContentLoaded", function() {
    
   
     set = setInterval(function(){
        s.innerHTML++;
          if(s.innerHTML < 10){
              s.innerHTML = "0" + s.innerHTML
           
          } 
          if (s.innerHTML === "60"){
            m.innerHTML++ 
            s.innerHTML = "00";
          }
          if(m.innerHTML < 10){
            m.innerHTML = "0" + m.innerHTML++ 
         }
         
         if(m.innerHTML === "01"){
             alert("Time Is Over!!");
             clearInterval(set)
             btn.innerHTML = "FINSH";
               btn.style.display = "none";
               btnNew.style.display = "inline-block";
               btnNew.classList.add("btn-red")
         } 
         
    
        },1000)
      
})

}

onload()






function loadQuestion(){
    myScore.innerHTML = "Your score is : " + score;
    numberOfQuestion.innerHTML = currentQuestion + 1;
    totalOfQuestions.innerHTML = quizData.length;

    question.innerHTML = quizData[currentQuestion].q;
   text_a.textContent = quizData[currentQuestion].a;
   text_b.textContent = quizData[currentQuestion].b;
   text_c.textContent = quizData[currentQuestion].c;
   text_d.textContent = quizData[currentQuestion].d;

}

loadQuestion();

var option1;

document.addEventListener("DOMContentLoaded", function(){
    btn.disabled = true;
    options.forEach((option)=>{
        if(option.checked){
            option1 = option.id;
        }
       go(option,option.id);
        
    })
})


function go(option,optionID) {
    option.addEventListener("click",function(){
        btn.disabled = false;
        option1 = optionID;
    })
}


btn.addEventListener("click",function(){
    if (option1=== quizData[currentQuestion].answer){
        score++;
    }
    btn.disabled = true;
    currentQuestion++;

    if (currentQuestion < quizData.length){
        options.forEach((option)=>{ option.checked = false});
        loadQuestion();

    } else {
        options.forEach((option)=>{ option.checked = false});
        function result(){
            var seeResult;
            if(score >= 5 ){
                return seeResult="You are successful. Congratulations !!!";
            } else{
                return seeResult="You are not successful. May be Next Time.";
            }
            return seeResult;
        }

        alert("The Quiz is Finished. You get score " + score + " Of " + quizData.length + "." + " This means " + result() + ".");
        clearInterval(set)
        btn.innerHTML = "FINSH";
               btn.style.display = "none";
               btnNew.style.display = "inline-block";
               btnNew.classList.add("green")
    }
})










