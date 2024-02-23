whenSubmitted = function(){
    let q1 = document.querySelector("input[name='money']:checked");
    let q1CheckedID = q1.id;
    let q2 = document.querySelector("input[name='speech']:checked");
    let q2CheckedID = q2.id;
    let q3 = document.querySelector("input[name='president']:checked");
    let q3CheckedID = q3.id;
    let q4 = document.querySelector("input[name='tall']:checked");
    let q4CheckedID = q4.id;
    let q5 = document.querySelector("input[name='court']:checked");
    let q5CheckedID = q5.id;
    let q1Score = 0;
    let q2Score = 0;
    let q3Score = 0;
    let q4Score = 0;
    let q5Score = 0;
    
    if(q1CheckedID == "q1answer2"){
        q1Score = 20;
    } else{
        q1Score = 0;
    }
    if(q2CheckedID == "q2answer3"){
        q2Score = 20;
    } else{
        q2Score = 0
    }
    if(q3CheckedID == "q3answer4"){
        q3Score = 20;
    } else{
        q3Score = 0;
    }
    if(q4CheckedID == "q4answer3"){
        q4Score = 20;
    } else{
        q4Score = 0;
    }
    if(q5CheckedID == "q5answer1"){
        q5Score = 20;
    } else{
        q5Score = 0;
    }
    let result = q1Score + q2Score + q3Score + q4Score + q5Score;
    let Get_placeholder = document.getElementById('placeholder');
    let mssg = Get_placeholder.innerText = `You got ${result}%!`;
    document.body.classList.add('read-only');
};