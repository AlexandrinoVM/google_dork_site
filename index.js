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


inputs = document.querySelectorAll("#customize-content > input[type=text]")

inputs.forEach(e => {
   
    
    e.oninput = () => {generateURL()}
});

function generateURL() {
    inp = document.querySelectorAll('#customize-content > input[type=text]')
    inp_checkbox = document.querySelectorAll('#customize-content > input[type=checkbox]')
    count = 0
    if(url.value != ""){
        url.value = ""
    }
   
    for(let i =0 ;i< inp.length;i++){
        if(inp[i].value != "" && inp[i].value != "customize" && inp[i].value != "search" ){
            if(inp_checkbox[i].checked == true){
                a.push("-"+inp[i].name + inp[i].value)
                count ++ 
                a_string = a.join(' ')
            }
            else if(inp_checkbox[i].checked == false)
                if(inp[i].name.charAt(0) == '-'){
                    a.push(inp[i].name.substring(1) + inp[i].value)
                    count ++ 
                    a_string = a.join(' ')
                }
                else{
                a.push(inp[i].name + inp[i].value)
                count ++ 
                a_string = a.join(' ') 
                }
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