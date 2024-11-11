const btn1 = document.getElementById("Hit Me!")
btn1.addEventListener("click", ()=>{
    const para = document.createElement("p");
    para.id = "para-1";
    para.style.color = 'red';
    para.style.backgroundColor = 'yellow'
    para.textContent = "Please sir, Im on rest. Give me holiday. Euthanasia. Orenawa Ereh Yeager"
    document.body.appendChild(para)
    para.className = 'para';
})