
const toggle = document.getElementById('darkToggle')
toggle.onclick = () => {
document.body.classList.toggle('dark')
}

const search = document.getElementById("search")
const tools = document.querySelectorAll(".tool-card")

search.addEventListener("input", () => {
let q = search.value.toLowerCase()

tools.forEach(t=>{
if(t.textContent.toLowerCase().includes(q)){
t.style.display="block"
}else{
t.style.display="none"
}
})
})
