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
customize_element.addEventListener('click',function(){
    inp = document.getElementsByTagName('input')
    
   
    for(let i =0 ;i< inp.length-1;i++){
        if(inp[i].value != "" && inp[i].value != "customize" && inp[i].value != "search" ){
                a.push(inp[i].name + inp[i].value)
                
                a_string = a.join(' ') 
                
        }
    }
    
    url.value = a_string
    
})


