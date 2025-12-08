function submit(){
const submit=document.getElementById('sub');
const names=document.getElementById('name');
const result=document.getElementById('result');
let mess;
mess=names.value;
result.textContent=`Thanks for the submission ${mess}. I will get to you asap`
}
const bg=['black','#f4f4f4'];
const col=['black','#f4f4f4']
// console.log(newbg)
// console.log(col[0])
function newcolor(){
    const all=document.querySelector('body');
    const rand=Math.floor(Math.random() *  2)
    const newbg=bg[rand]
    // console.log(all);
    all.style.backgroundColor=newbg;
    if(newbg==='black'){
        all.style.color=col[1]
        document.querySelector('footer').style.borderTop=`1px solid ${col[1]}`
         const nav=document.getElementsByTagName('header')
        Array.from(nav).forEach((na) => {
            na.style.color=col[1]
        })
    }else{
        all.style.color=col[0]
        document.querySelector('footer').style.borderTop=`1px solid ${col[0]}`
    }
}
setInterval(newcolor,10000)