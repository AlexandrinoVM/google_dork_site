url = document.getElementById('url')
urlbtn = document.getElementById('url_button')
select_commun = document.getElementById('comun-searchs')
customize_element = document.getElementById("custombtn")

let a = []
let a_string 
urlbtn.addEventListener('click',()=>{
    destino = window.localStorage.href= `https://www.google.com/search?q=${url.value}`
    window.open(destino)
})
let url_search = ''

inputs = document.querySelectorAll("#customize-content > input")

inputs.forEach(e => {
    console.log(e.value)
    e.oninput = () => {generateURL()}
});

function generateURL() {
    inp = document.getElementsByTagName('input')

    if(url.value != ""){
        url.value = ""
    }
   
    for(let i =0 ;i< inp.length;i++){
        if(inp[i].value != "" && inp[i].value != "customize" && inp[i].value != "search" ){
                a.push(inp[i].name + inp[i].value)
                
                a_string = a.join(' ') 
                
        }
    }
    
    url.value = a_string
    a = []
}


