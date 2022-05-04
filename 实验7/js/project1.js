//jquery
$(".item").click((a) => {
    $("#big").show()
    $("#big_center").text(a.target.innerText);
})

$("#big").click(() => {
    $("#big").hide()
})


//native
var divs = document.querySelectorAll('#item');
divs.forEach((value, index, array) => {
    value.addEventListener("click", () => {
        var b = document.getElementById('big')
        var bc = document.getElementById('big_center')
        bc.innerHTML = value.innerHTML
        b.style.display = "flex"
        b.addEventListener("click", () => {
            b.style.display = "none"
        })
    })
})