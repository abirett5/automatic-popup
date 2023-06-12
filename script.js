window.addEventListener("load", function() {
    setTimeout(
        function open(event){
            document.getElementById("overlay").style.display = "block";
            document.querySelector(".popup").style.display = "block";
        },
        1000
    )
});


document.querySelector("#close").addEventListener("click", function() {
    document.getElementById("overlay").style.display = "none";
    document.querySelector(".popup").style.display = "none";
});


// Transfer Input value to inner HTML
function submit() {
    var x = document.getElementById("input").value;
    document.getElementById("username").innerHTML = x;
  }