let string  = "";
let result = document.querySelector('.answer');
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{
        if(e.target.innerHTML == '='){
            try{
                string = eval(string);
                result.value = string;
            }
            catch(e){
                result.value = "ERR";
            }
        }
        else if(e.target.innerHTML == 'AC'){
            string = ""
            result.value = string;
        }
        else if(e.target.innerHTML == "Copy"){
            copyContent();
        }
        else if(e.target.innerHTML == "Del"){
            let n = string.length;
            string = string.substring(0,n-1);
            result.value = string;
        }
        else{
            // console.log(e.target);
            string = string + e.target.innerHTML;
            result.value = string;
        }   
        
    })
})
async function copyContent(){
    try{
        await navigator.clipboard.writeText(result.value)
        console.log("copied");
    }

    catch(e){
        console.log(e);
    }
}