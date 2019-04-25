const toggle_btn = document.querySelector("#toggle-btn");
toggle_btn.addEventListener("click",function(){
    console.log("evento activado");
    document.getElementById("sidebar").classList.toggle("active");
});