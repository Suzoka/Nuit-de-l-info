let step = 0;
document.querySelector('.right').addEventListener("click", sliderRight);
document.querySelector('.left').addEventListener("click", sliderLeft);

function sliderRight() {
<<<<<<< Updated upstream
    if (step == document.querySelectorAll('.slide').length - Math.trunc(window.window.innerWidth / 375)+1) {

=======
    if (step == document.querySelectorAll('.slide').length - Math.trunc(window.window.innerWidth / 375)+ 1) {
>>>>>>> Stashed changes
        return
    }
    step++;
    document.querySelector('.slider').style.left = -400 * step + 75 + "px"
}

function sliderLeft() {
    if (step == 0) {
        return;
    }
    step--;
    document.querySelector('.slider').style.left = -400 * step + 75 + "px";
}
