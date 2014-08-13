	
$("#entryBox").hide();
$("#exitBox").hide();

$("#addNumber").on("click", function(){
	$(".introBox").fadeOut();
	$("#entryBox").fadeIn("fast",function() {
		$("#exitBox").fadeIn();
	});
});

$("#exitBox").on("click", function(){
	$(".introBox").fadeIn();
	$("#entryBox").fadeOut("fast",function() {
		$("#exitBox").fadeOut();
	});
});





// Loop that runs the the number given
function test(choice) {
	for (var i = 1; i <= choice; i++) {
		if (i % 3 === 0 && i % 5 === 0)  {
			$("#entryList").append("<li>fizzbuzz</li>");
		} else if (i % 3 === 0) {
			$("#entryList").append("<li>fizz</li>");
		} else if (i % 5 === 0){
			$("#entryList").append("<li>buzz</li>");
		} else {
			$("#entryList").append("<li>" + i + "</li>");
		}
	}
}

test();
	