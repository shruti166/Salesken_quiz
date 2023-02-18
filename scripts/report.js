
let userReport = JSON.parse(localStorage.getItem("report"));
console.log(userReport);
let totalScore = localStorage.getItem('score');
console.log(totalScore);

const displayReport = () => {
    userReport.map((elem) => {
        let row = document.createElement('tr');
        
        let ques = document.createElement("td");
        ques.innerHTML = elem.question;

        let correctAns = document.createElement('td');
        correctAns.innerHTML = elem.correctAns;

        let userAns  = document.createElement('td');
        userAns.innerHTML = elem.userAns;

        row.append(ques, correctAns, userAns);
        document.getElementById("body").append(row);
    })
   
    document.getElementById('scoreBox').innerHTML = "YOUR SCORE IS" + " " +totalScore +" " +  "OUT OF 10";
    
}
displayReport()