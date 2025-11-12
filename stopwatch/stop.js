const stopwatch=document.getElementById('stopwatch');
let timer=null;
let startTIme=0;
let elapsedTIme=0;
let isrunning=false;
function start(){
    if(!isrunning){
        startTIme=Date.now() - elapsedTIme;
        timer=setInterval(update,10);
        isrunning=true;
    }
}
function stop(){
    if(isrunning){
        clearInterval(timer);
        elapsedTIme=Date.now()-startTIme;
        isrunning=false;
    }

}
function reset(){
        clearInterval(timer);
        startTIme=0;
        elapsedTIme=0;
        isrunning=false;
        stopwatch.textContent='00:00:00:00';
       
}
function update(){
    const currenttime=Date.now()
    elapsedTIme=currenttime-startTIme;
    let hours=Math.floor(elapsedTIme/3600000).toString().padStart(2,0);
    let mins=Math.floor(elapsedTIme/60000 % 60).toString().padStart(2,0);
    let secs=Math.floor(elapsedTIme/1000 % 60).toString().padStart(2,0);
    let milli=Math.floor(elapsedTIme % 1000/10).toString().padStart(2,0);

    stopwatch.textContent=`${hours}:${mins}:${secs}:${milli}`

}