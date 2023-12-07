window.addEventListener('load', function () {
    let loader = this.document.getElementById("whenLoading");
    loader.classList.add("disparait");
    this.setTimeout(loader.style.display="hidden", 3000);
})