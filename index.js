let cross = document.querySelector(".close");
let bar = document.querySelector(".bar");

bar.addEventListener("click", ()=>{
    console.log(event.target);
    
    bar.classList.remove("active");
    bar.classList.add("none");
    bar.style.display = "none";
    cross.style.display = "inline-block";
    
});

cross.addEventListener("click", ()=>{
    console.log(event.target)
    cross.style.display = "none";
    cross.classList.remove("active");
    bar.classList.add("active");
    cross.style.display = "none";
    bar.style.display = "inline-block";
});