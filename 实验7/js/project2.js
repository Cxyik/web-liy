//native
var btns = document.querySelectorAll('.m-each');
btns.forEach((value, index, array) => {
    value.addEventListener("click", () => {
        var items = document.querySelectorAll('.m');
        items.forEach((ele, index) => {
            ele.style.display = "none"
        })
        items[index].style.display = "block"
    })
})



//JQuery
//
$(menu)//页面滑动函数
$(init)//初始状态

function init(){
	$("#1").show();
	$("#2").hide();
	$("#3").hide();
	$("#f").css({"background-color":"grey"});
}
function menu() {
	$("body").on('click','.m-each',function(){
		if(this.id=='f'){
			$("#1").show();
			$("#2").hide();
			$("#3").hide();
			$("#s").css({"background-color":"white"});
			$(this).css({"background-color":"grey"});
			$("#t").css({"background-color":"white"});
		}
		else if(this.id=='s')
		{
			$("#1").hide();
			$("#2").show();
			$("#3").hide();
			$("#f").css({"background-color":"white"});
			$(this).css({"background-color":"grey"});
			$("#t").css({"background-color":"white"});
		}
		else if(this.id=='t'){
			$("#1").hide();
			$("#2").hide();
			$("#3").show();
			$("#f").css({"background-color":"white"});
			$(this).css({"background-color":"grey"});
			$("#s").css({"background-color":"white"});
		}
	})
}
//end


