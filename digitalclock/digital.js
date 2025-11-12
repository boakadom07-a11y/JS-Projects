function updateclock(){
    const now=new Date();
    let hour=now.getHours().toString().padStart(2,0);
    const ampm =hour < 12 ? 'AM' :'PM';
    const min=now.getMinutes().toString().padStart(2,0);
    const sec=now.getSeconds().toString().padStart(2,0);
    const timestr=`${hour}:${min}:${sec} ${ampm}`;
    document.getElementById('clock').textContent=timestr;

}
updateclock();
setInterval(updateclock,1000);
function updatedate(){
    const now=new Date();
    const day=now.getDate().toString().padStart(2,0);
    const month=(now.getMonth() + 1).toString().padStart(2,0);
    const year=now.getFullYear();
    const date=`${day}/${month}/${year}`;
    document.getElementById('date').textContent=date;
    console.log(month)
}
updatedate()