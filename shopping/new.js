import { products } from "./import.js";
let cart = JSON.parse(localStorage.getItem("cart")) || [];
const prodiv=document.getElementById('prodiv');
const cartdiv=document.getElementById('cartdiv');
function display(){
    if (!prodiv) return;
    prodiv.textContent=''
    products.forEach((p) =>{
        const div=document.createElement('div')
        div.classList='ind'
        const image=document.createElement('img')
        image.src=`./images/${p.id}.jpg`
        image.alt=p.name
        div.appendChild(image);
         const name=document.createElement('h3');
        name.textContent=p.name;
        div.appendChild(name);
        const price=document.createElement('p');
        price.textContent=`GHC ${Number(p.price).toFixed(2)}`;
        div.appendChild(price)
        const button=document.createElement('button');
        button.textContent='Add to Cart'
        button.addEventListener('click',() => addtocart(p.id))
        div.appendChild(button);
    prodiv.appendChild(div)
    })
}
display()
function addtocart(id){
    const add=products.find((p)=>id===p.id);
    cart.push(add);
    localStorage.setItem('cart',JSON.stringify(cart));
    // window.alert(`${add.name} has been added to your cart`);  
    // console.log(cart)
    // update()
}
function update(){
    if (!cartdiv) return;
    cartdiv.textContent='';
    const saved=JSON.parse(localStorage.getItem('cart')) || []
    if (saved.length===0){
        cartdiv.innerHTML='<p>Your Cart is Empty</p>';
        return;  
    }else{
        
  saved.forEach((c) => {
    const newdiv = document.createElement("div");
    newdiv.className = "cart-item";

    const image = document.createElement("img");
    image.src = `./images/${c.id}.jpg`;
    image.alt = c.name;
    image.onerror = () => { image.src = "./images/placeholder.jpg"; };

    const name = document.createElement("h3");
    name.textContent = c.name;

    const price = document.createElement("p");
    price.textContent = `GHC ${Number(c.price).toFixed(2)}`;

    const rmbut=document.createElement('button')
    rmbut.textContent='Remove';
    rmbut.classList='remove';
    rmbut.addEventListener('click',() => removefunc(c.id))
    newdiv.appendChild(image);
    newdiv.appendChild(name);
    newdiv.appendChild(price);
    newdiv.appendChild(rmbut)
    cartdiv.appendChild(newdiv);
    })}
}
update()
function removefunc(id){
        const saved=JSON.parse(localStorage.getItem('cart')) || [] 
        const updated=saved.filter((c)=>id !==c.id)  
        localStorage.setItem('cart',JSON.stringify(updated))
        cart=updated;
        update();
        console.log(updated)
        // return updated;       
}
const showtotal=document.getElementById('show');
if (showtotal){
    showtotal.addEventListener('click',()=>totalfunc())
}
// document.getElementById('show').addEventListener('click',()=>totalfunc())
function totalfunc(){
const total=document.getElementById('total')
// if (!showtotal) return;
  let amount;
  amount=0;
   const saved=JSON.parse(localStorage.getItem('cart')) || []
   if (saved.length===0){
        total.textContent='You have no items added.'
   } else{
        saved.forEach((c) => amount += Number(c.price))
        total.textContent=`GHC ${Number(amount).toFixed(2)}`;
   }
}
// document.getElementById('show').addEventListener('click',()=>totalfunc())
// totalfunc()

 