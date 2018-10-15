
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
		$("ul").append("<li><span><img class=\"garbage\" src=\"https://png.icons8.com/metro/50/000000/trash.png\"></span>  " + tex + "</li>");
	}
});

$("img.plus").click(function(){
	$("input[type='text']").fadeToggle(200);
});