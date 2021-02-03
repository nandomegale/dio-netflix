function openTrailer() {
    var wrapper = document.getElementById("wrapper");
    wrapper.classList.add("dark");

    var trailer = document.getElementById("trailer");
    trailer.classList.remove("trailerHidden");
    trailer.classList.add("trailerShow");
}

document.addEventListener('keydown', function (event) {
    if (event.key === "Escape") {


        var trailer = document.getElementById("trailer");
        trailer.classList.remove("trailerShow");
        trailer.classList.add("trailerHidden");

        var wrapper = document.getElementById("wrapper");
        wrapper.classList.remove("dark");
    }
});