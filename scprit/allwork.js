function work(){
    const currentScoreElement = document.getElementById('sit-less');
        const currentScoreText= currentScoreElement.innerText;
        const currentScore = parseInt(currentScoreText);
        // console.log(currentScore);
        const newScore = currentScore -1;
        currentScoreElement.innerText=newScore;


        const currentLifeElement = document.getElementById('sit-select');
        const currentLifeText = currentLifeElement.innerText;
        const currentLife = parseInt(currentLifeText);
        const newLife = currentLife + 1;
        currentLifeElement.innerText = newLife;
        //lest taka
        const currentElement = document.getElementById('last-ammount');
        const currentText = currentElement.innerText;
        const currentAmmount = parseInt(currentText);
        const newAmmount = currentAmmount + 1520;
        currentElement.innerText = newAmmount;
       

        
}
function work1(){

    hideElementById('first-part');
    showElementById('second-part');
}
// //function work(){
//     console.log('ok');
// }