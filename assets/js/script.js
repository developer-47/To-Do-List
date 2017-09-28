//toggling line through effect
$("ul").on("click","li",function(){
	$(this).toggleClass("selected");
})

//click on X to delete todo
$("ul").on("click","span",function(event){
	 $(this).parent().fadeOut(500,function(){
	 	$(this).remove;
	 });
	 event.stopPropagation();
})

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//grabbing input
		var todoText = $(this).val();
		$(this).val("");
		//create new li
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
	}
})

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
})