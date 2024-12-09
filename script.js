let firstinput_word = document.getElementById("firstword")
let firstinput_button = document.getElementById("firststep_btn")
firstinput_word.addEventListener("keypress", function(event) {
    // Check if the pressed key is the Enter key (key code 13)
    if (event.keyCode === 13 || event.which === 13) {
        CheckFirstStep()
    }
});
firstinput_button.addEventListener("click", function(){
    CheckFirstStep()
})

function CheckFirstStep(){

    // get vlaue
    let answer = firstinput_word.value.toLowerCase().replace(/\s/g, '')
    if(answer === "canibal"){
        StepTwo()
    }else{
        firstinput_word.value="Eroare!"
        setTimeout(() => {
            firstinput_word.value = ""    
        }, 1000);
    }
}


function StepTwo(){
    let steptwo_div = document.querySelector(".first-step")
    steptwo_div.innerHTML = `
     <h1>Pasul 2</h1>
    <h3>Ceva în imagine</h3>
    <p>E ceva în această imagine. Ce este?</p>
    <img src="./assets/dqdohristo.png"></img>
    <input type="text" style="margin-top:30px;" class="form-control" placeholder="Ce este în imagine?" id="secondword">
    <button class="btn" id="secondstep_btn">Înainte</button>`


    let secondinput_word = document.getElementById("secondword")
let secondinput_button = document.getElementById("secondstep_btn")
secondinput_word.addEventListener("keypress", function(event) {
    // Check if the pressed key is the Enter key (key code 13)
    if (event.keyCode === 13 || event.which === 13) {
        CheckSecondStep()
    }
});
secondinput_button.addEventListener("click", function(){
    CheckSecondStep()
})


function CheckSecondStep(){

    // get vlaue
    let answer = secondinput_word.value.toLowerCase().replace(/\s/g, '')
    if(answer.includes("maya") ||answer.includes("maia") && answer.includes("marin") ){
        StepThree()
    }else{
        secondinput_word.value="Eroare!"
        setTimeout(() => {
            secondinput_word.value = ""    
        }, 1000);
    }
}
}

function StepThree(){
    let stepthree_div = document.querySelector(".first-step")
    stepthree_div.innerHTML = `
     <h1>Pasul 2</h1>
    <h3>Înregistrarea sunetului</h3>
    <p>lutot lêpinçet în adnu.</p>
    <audio controls>
  <source src="./assets/sound.mp3" type="audio/ogg">
  <source src="./assets/sound.mp3" type="audio/mpeg">
Your browser does not support the audio element.
</audio>
<img src="./assets/bebe.png">
    <input type="text" class="form-control" placeholder="Răspundeți..." id="thirdword">
    <button class="btn" id="thirdstep_btn">Înainte</button>`


    let thirdinput_word = document.getElementById("thirdword")
    let thirdinput_button = document.getElementById("thirdstep_btn")
    thirdinput_word.addEventListener("keypress", function(event) {
        // Check if the pressed key is the Enter key (key code 13)
        if (event.keyCode === 13 || event.which === 13) {
            CheckThirdStep()
        }
    });
    thirdinput_button.addEventListener("click", function(){
        CheckThirdStep()
    })


    function CheckThirdStep(){

        // get vlaue
        let answer = thirdinput_word.value.toLowerCase().replace(/\s/g, '')
        if(answer === "aeraotalru"){
            StepFour()
        }else{
            thirdinput_word.value="Eroare!"
            setTimeout(() => {
                thirdinput_word.value = ""    
            }, 1000);
        }
    }

}

function StepFour(){
    let stepthree_div = document.querySelector(".first-step")
    stepthree_div.innerHTML = `
     <h1>Succes</h1>
    <h3 style="color:green;">Ați reușit să spargeți codul</h3>
    <p>După ce detectivul Todorov a făcut un test de salivă și nu a găsit nimic în sistem, a realizat că trebuie să testeze toți suspecții!</p>
    <img src="./assets/gnusnasnimka.png">
    <img src="./assets/dnatest.png">`
    

}