const display=document.getElementById('display')
function appenddisplay(input){
    display.value +=input
}
function calculate(){
    try{
        display.value=eval(display.value);
    }catch(error){
        display.value='Error'
    }
}
function cleardisplay(){
    display.value=''
}