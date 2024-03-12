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


inputs = document.querySelectorAll("#customize-content > input")

inputs.forEach(e => {
   
    
    e.oninput = () => {generateURL()}
});

function generateURL() {
    inp = document.getElementsByTagName('input')
    count = 0
    if(url.value != ""){
        url.value = ""
    }
   
    for(let i =0 ;i< inp.length;i++){
        if(inp[i].value != "" && inp[i].value != "customize" && inp[i].value != "search" ){
                a.push(inp[i].name + inp[i].value)
                count ++ 
                a_string = a.join(' ') 
            }
        }
    if(isEmpty(count)){
        url.value == ""
    }else{
        url.value = a_string

        a = []
    }
}


function isEmpty(x){
    if(x == 0){
        return true
    }
    else{
        return false
    }
}