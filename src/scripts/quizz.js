function moreInfo(info, state){
    console.log("coucou");
    var infoBulle = document.getElementById(info);
    if (state == "open") {
        infoBulle.style.display = "flex";
    } else {
        infoBulle.style.display = "none";
    }
}

