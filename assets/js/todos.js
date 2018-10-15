
//J
$("ul").on("click","li", function(){
	$(this).toggleClass("completed");
});

$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(1000, function(){
		$(this).remove();
	});
	event.stopPropagation();
	//$(this).remove();

});

$("input[type='text']").on("keypress", function(event){
	if( event.which === 13){
		var tex = $(this).val();
		$(this).val("");
		$("ul").append("<li> <span>X</span>  " + tex + "</li>");
	}
});