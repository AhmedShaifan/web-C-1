let navbar = document.querySelector(".navbar");

document.querySelector("#menu-btn").onclick = () => {
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    
}

let searchForm = document.querySelector(".search-form");

document.querySelector("#search-btn").onclick = () => {
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    
}



document.querySelector("#cart-btn").onclick = () => {
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}
console.log(slider)
let sliderImg = ['images/blog-1.jpeg', 'images/blog-2.jpeg', 'images/blog-3.jpeg']; 
let i = 2; 
function count() {
    if(i >= 0){
        document.slider.src = sliderImg[i];
        i -= 1
    }else {
        i = 2;
    }
}
setInterval(count, 2000)


let boxContainer = document.getElementById('boxContainer');



let coffee = [{
    name: 'Fresh Coffee',
    img: 'images/product-1.png',
    price:  15.99,
},{
    name: 'Fresh',
    img: 'images/product-1.png',
    price:  18.99,
},{
    name: 'Coffee',
    img: 'images/product-1.png',
    price:  13.99,
}
]

coffee.forEach((ele, i) => {
    let newEle = `
    <div class="box">
                <div class="icon">
                    <i href="" id="${i}" onclick="order(this.id)" class="fas fa-shopping-cart"></i>
                    <i href="#" class="fas fa-heart"></i>
                    <i href="#" class="fas fa-eye"></i>
                </div>
                <img src="${ele.img}" alt="">
                <h3>${ele.name}</h3>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                     <div class="price">
                     ${ele.price} <span>20.99</span>
                </div>
            </div>
    `
    boxContainer.innerHTML += newEle;
})
let or;
if (localStorage.pro != null){
    or = JSON.parse(localStorage.pro)
    
}else {
     or = []
}
function order(i){
    or.push(coffee[i]);
    localStorage.setItem('pro', JSON.stringify(or));
    count1()
}

function count1(){
    document.getElementById('count').innerHTML = or.length
}
count1()
// localStorage.clear()