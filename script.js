const products=[
{id:1,name:'เสื้อยืด',price:199},
{id:2,name:'รองเท้า',price:899},
{id:3,name:'กระเป๋า',price:499}
];

let cart=JSON.parse(localStorage.getItem('cart'))||[];

function save(){localStorage.setItem('cart',JSON.stringify(cart));}

if(document.getElementById('productList')){
 products.forEach(p=>{
  productList.innerHTML+=`
  <div class="card">
   <h3>${p.name}</h3>
   <p>${p.price} บาท</p>
   <button onclick="add(${p.id})">เพิ่มลงตะกร้า</button>
  </div>`;
 });
}

function add(id){
 let p=products.find(x=>x.id===id);
 let item=cart.find(c=>c.id===id);
 if(item)item.qty++; else cart.push({...p,qty:1});
 save(); alert('เพิ่มสินค้าแล้ว');
}

if(document.getElementById('cartItems')){
 let total=0;
 cartItems.innerHTML='';
 cart.forEach(i=>{
  total+=i.price*i.qty;
  cartItems.innerHTML+=`<p>${i.name} x ${i.qty}</p>`;
 });
 total.innerText='รวม '+total+' บาท';
}

function submitOrder(){
 let id='ORD-'+Date.now();
 localStorage.setItem(id,JSON.stringify({id,cart}));
 localStorage.removeItem('cart');
 result.innerHTML='สั่งซื้อสำเร็จ<br>เลขออเดอร์: <b>'+id+'</b>';
}
