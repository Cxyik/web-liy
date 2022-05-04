//JQuery
//
var num = 3
$('#btn').click(() => {
    var cl = $('#item').clone(true)
    var clch = cl.find('#u-left')
    clch.text(++num)
    $('#main').append(cl)
})

$('body').on('click', '.u-right', (e) => {
    e.currentTarget.parentNode.remove()
    num--;
    $('.u-left').each((index, ele) => {
        ele.innerHTML = index
    })
})
//end

//native
var divs = document.querySelectorAll('#item')
var items = document.querySelectorAll('#u-right');
var num = 3
items.forEach((value, index, array) => {
    value.addEventListener("click", () => {
        var par = value.parentElement
        par.remove()
        num--
        var u_left = document.querySelectorAll('#u-left');
        for (var i = 1; i < u_left.length; i++) {
            u_left[i].innerHTML = i
        }
    })
})
var b = document.getElementById('btn')
b.addEventListener("click", () => {
    var main = document.getElementById('main')
    var a = divs[0].cloneNode(true)
    var achild = a.childNodes.item(1)
    achild.innerHTML = ++num
    var adelect = a.childNodes.item(3)
    adelect.addEventListener("click", () => {
        var par = adelect.parentElement
        par.remove()
        num--
        var u_left = document.querySelectorAll('#u-left');
        for (var i = 1; i < u_left.length; i++) {
            u_left[i].innerHTML = i
        }
    })
    main.appendChild(a)
})