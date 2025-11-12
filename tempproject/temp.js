function convert(){
    const textbox=document.getElementById('textbox');
    const toFah=document.getElementById('tofah');
    const toCel=document.getElementById('tocel');
    const sub=document.getElementById('sub');
    const result=document.getElementById('result');
    let temp;

    sub.onclick=function(){
        if(toFah.checked){
           temp=Number(textbox.value);
           temp=1.8 * temp +32;
           result.textContent=`${temp.toFixed(1)} F`;
        }
        else if(toCel.checked) {
      temp = (temp - 32) / 1.8;
      result.textContent = `${temp.toFixed(1)} °C`;

        }
        else{
            result.textContent=('give me a digit')
        }
    }

}
convert()