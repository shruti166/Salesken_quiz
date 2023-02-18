const quesDataBase = [
    {
        question: "Q1: What is the full form of HTTP?",
        a: "Hypertext transfer protocol",
        b: "Hypertext transfer policy",
        c: "Hypertext text protocol",
        d: "Hypertect text policy",
        ans: "a"
    },
    {
        question: "Q2: Inside which HTML element do we put the JavaScript?",
        a: "<Scripting>",
        b: "<Script>",
        c: "<body>",
        d: "<head>",
        ans: "b"
    },
    {
        question: "Q3: Where is the correct place to insert a JavaScript?",
        a: "Head",
        b: "body",
        c: "both head and body",
        d: "None",
        ans: "c"
    },
    {
        question: "Q4: What is the correct syntax for referring to an external script called xxx.js ?",
        a: "<script href = xxx.js>",
        b: "<script name = xxx.js>",
        c: "<script link = xxx.js>",
        d: "<script to = xxx.js>",
        ans: "a"
    },
    {
        question: "Q5: How do you write Hello World in an alert box ?",
        a: "alert(Hello world)",
        b: "conosle.log(alert)",
        c: "console.log(Hello world)",
        d: "msg(Hello world)",
        ans: "a"
    },
    {
        question: "Q6: What is the full form of HTTP ?",
        a: "Hypertext transfer protocol",
        b: "Hypertext transfer policy",
        c: "Hypertext text protocol",
        d: "Hypertect text policy",
        ans: "a"
    },
    {
        question: "Q7: How do you create a function in JavaScript ?",
        a: "function myFunction()",
        b: "function:myFunction",
        c: "function:myFunction()",
        d: "function = myFunction",
        ans: "a"
    },
    {
        question: "Q8: How do you call a function named myFunction ?",
        a: "call myFunction",
        b: "call myFunction()",
        c: "myFunction()",
        d: "myFunction",
        ans: "c"
    },
    {
        question: "Q9: How to write an IF statement in JavaScript ?",
        a: "if i == 5 then",
        b: "if(i == 5)",
        c: "if i = 5 then",
        d: "if(i = 5)",
        ans: "b"
    },
    {
        question: "Q10: What is the full form of CSS ?",
        a: "Cascading style sheets",
        b: "Cascading style string",
        c: "Computed style sheet",
        d: "Computed style string",
        ans: "a"
    }
]
let i = 0;
const getQues = () => {
   
    let ques = quesDataBase[i];
    console.log(ques);
    let quesHeading = document.createElement("h1");
    quesHeading.innerText = ques.question;
    let row1 = document.createElement("row");
    row1.setAttribute("id", "row1");
    row1.style.display = "flex";

    let row2 = document.createElement("row");
    row2.setAttribute("id", "row2");
    row2.style.display = "flex";

    let row3 = document.createElement("row");
    row3.setAttribute("id", "row3");
    row3.style.display = "flex";

    let row4 = document.createElement("row");
    row4.setAttribute("id", "row4");
    row4.style.display = "flex";
    

    let option1 = document.createElement('p');
    let input1 = document.createElement('input');
    input1.setAttribute("id", "input1");
    input1.setAttribute("type", "radio");
    input1.setAttribute("name", "radio");
    option1.append(input1);
    option1.innerText = ques.a;
    row1.append(input1, option1);


    let option2 = document.createElement('p');
    let input2 = document.createElement('input');
    input2.setAttribute("id", "input2");
    input2.setAttribute("type", "radio");
    input2.setAttribute("name", "radio");
    option2.append(input2);
    option2.innerText = ques.b;
    row2.append(input2, option2);

    let option3 = document.createElement('p');
    let input3 = document.createElement('input');
    input3.setAttribute("id", "input3");
    input3.setAttribute("type", "radio");
    input3.setAttribute("name", "radio");
    option3.append(input3);
    option3.innerText = ques.c;
    row3.append(input3, option3);

    let option4 = document.createElement('p');
    let input4 = document.createElement('input');
    input4.setAttribute("id", "input4");
    input4.setAttribute("type", "radio");
    input4.setAttribute("name", "radio");
    option4.append(input4);
    option4.innerText = ques.d;
    row4.append(input4, option4)

    document.getElementById("question-container").append(quesHeading, row1, row2, row3, row4);
    
}
getQues();

