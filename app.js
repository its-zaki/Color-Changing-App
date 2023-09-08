let body = document.querySelector("body")
let div = document.querySelector("div")
const color = ["red", "orange", "yellow", "purple", "blue", "pink",  'white','aqua']

for (i=0; i<color.length; i++){
    div.innerHTML+=`<button class="btn" style="background-color:${color[i]};" onclick="colorchange(${i})">${color[i]}</button>`
}
function colorchange(i){
    body.style.backgroundColor= color[i]
}