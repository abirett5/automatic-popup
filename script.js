window.addEventListener("load", function() {
    setTimeout(
        function open(event){
            document.querySelector(".popup").style.display = "block";
        },
        1000
    )
});


document.querySelector("#close").addEventListener("click", function() {
    document.querySelector(".popup").style.display = "none";
});

// Transfer Input value to inner HTML
function myFunction() {
    var x = document.getElementById("myText").value;
    document.getElementById("demo").innerHTML = x;
  }