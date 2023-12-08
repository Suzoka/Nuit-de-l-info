function moreInfo(info, state){
    let infoBulle = document.getElementById(info);
    if (state == "open") {
        infoBulle.style.display = "flex";
    } else {
        infoBulle.style.display = "none";
    }
}
