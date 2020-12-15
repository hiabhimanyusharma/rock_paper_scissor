const buttons = document.querySelectorAll('.btn');
const winning = document.querySelector('.res');
const pointTo = document.querySelector('.point');
const arr = ['Rock','Paper','Sci'];
const reset = document.querySelector('.btn-reset');
const player = document.querySelector('.player');
const comp = document.querySelector('.comp');
const mainIst = document.querySelector('.mainInst');
const gif = document.querySelector('.row-res');

let pPoint = 0;
let cPoint = 0;

reset.addEventListener('click',function() {
    pPoint = 0;
    cPoint = 0;
    player.textContent = pPoint;
    comp.textContent = cPoint;
    pointTo.textContent = "";
    winning.textContent = "Take your chance";
    mainIst.textContent = "First to get 5 points Wins!";
    gif.innerHTML = '<h3 class="res">Take your chance</h3>';
});

buttons.forEach(button => {
    button.addEventListener('click',function() {
        let value = "";
        let compInp = arr[Math.floor(Math.random()*3)];
        let message = "";
        if(button===buttons[0] && pPoint<5 && cPoint<5) {
            value = "Rock";
            if(compInp==value) {
                message = "Same Input Tie!";
            }else if(compInp==arr[1]) {
                message = "1 Point to Computer!"
                cPoint+=1;
            }else {
                message = "1 Point to YOU!"
                pPoint+=1;
            }
        }else if(button===buttons[1] && pPoint<5 && cPoint<5) {
            value = 'Paper';
            if(compInp==value) {
                message = "Same Input Tie!";
            }else if(compInp==arr[2]) {
                message = "1 Point to Computer!"
                cPoint+=1;
            }else {
                message = "1 Point to YOU!"
                pPoint+=1;
            }
        }else if(button===buttons[2] && pPoint<5 && cPoint<5){
            value = 'Sci';
            if(compInp==value) {
                message = "Same Input Tie!";
            }else if(compInp==arr[0]) {
                message = "1 Point to Computer!"
                cPoint+=1;
            }else {
                message = "1 Point to YOU!"
                pPoint+=1;
            }
        }

        player.textContent = pPoint;
        comp.textContent = cPoint;

        if(pPoint===5) {
            gif.innerHTML = '<img src="giphy.gif" class="gif">';
            pointTo.textContent = "Please Restart continue your winning streak";
            mainIst.textContent = "";
        }else if(cPoint===5) {
            gif.innerHTML = '<img src="lose.gif" class="gif">';
            pointTo.textContent = "Please Restart to try again";
            mainIst.textContent = "";
        }else {
            gif.innerHTML = `
                <h3 class="res">You selected ${value} and computer selected ${compInp}</h3>
            `;
            pointTo.textContent = message;
        }
    });
});