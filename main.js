let number = document.querySelector("[type = number]")
let text = document.querySelector("[type = text]")
let select = document.querySelector("select")
let results = document.querySelector(".results")
let create = document.querySelector("[type = submit]") 

document.forms[0].onsubmit = function(e){
    e.preventDefault();
    results.innerHTML =""
    for(i=0;i< number.value ; i++){
        if(select.value == "Div"){
            let box =document.createElement("div")
            let content = document.createTextNode(text.value)
            box.className = "box"
            box.title ="Element"
            box.id = `id-${i+1}`
            box.appendChild(content)
            results.appendChild(box)
        }else {
            let box =document.createElement("section")
            let content = document.createTextNode(text.value)
            box.className = "box"
            box.title ="Element"
            box.id = `id-${i+1}`
            box.appendChild(content)
            results.appendChild(box)
        
    }}
}
