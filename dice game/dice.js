function Rolldice(){
    const Button=document.getElementById('butroll');
    const NumofDice=document.getElementById('noofdice').value;
    const Result=document.getElementById('result');
    const diceimage=document.getElementById('diceimage');
    const values=[];
    const images=[];

    // Button.onclick=function(){
        // const NumInput=parseInt(NumofDice);
    for(let i=0;i < NumofDice; i++){
        const value=Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="dice images/${value}.png">`);
        }
        Result.textContent=(`Dice Results: ${values}`);
        diceimage.innerHTML=(`${images}`);
    // console.log(values); 
}
