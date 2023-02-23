


let title = document.getElementById('title')
let produced = document.getElementById('produced')
console.log(produced)


localStorage.getItem("pro") 
    ar = JSON.parse(localStorage.getItem("pro"))


function show() {
    let tabl = ''
    for (i = 0; i < ar.length; i++) {
        tabl += `
        <div class="box">
            <div class='content'>
                <img id="img" src="${ar[i].img}" alt="">
                <h2 id="title">${ar[i].name}<div id="price">${ar[i].price}</div></h2>
                </div>
                <i class='del' onclick='del(${i})'></i>
            </div>
        `
    }
    produced.innerHTML = tabl
    document.getElementById('count').innerHTML = ar.length
}
show()

function del(i) {
    ar.splice(i, 1);
    localStorage.pro = JSON.stringify(ar)
    show()
}