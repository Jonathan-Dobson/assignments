var input = document.getElementById("change-me");

input.addEventListener("change", function(e){ 
    document.getElementById("output").textContent = e.target.value
})
