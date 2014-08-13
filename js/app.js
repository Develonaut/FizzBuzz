	
$("#entryBox").hide();

$("#addNumber").on("click", function(){
	$(".introBox").fadeOut();
	$("#entryBox").fadeIn();
});

$("#exitBox").on("click", function(){
	$(".introBox").fadeIn();
	$("#entryBox").fadeOut();
});



// Loop that runs the the number given
function test(choice) {
	for (var i = 1; i <= choice; i++) {
		if (i % 3 === 0 && i % 5 === 0)  {
			$("#entryBox").append("<p>fizzbuzz</p>");
		} else if (i % 3 === 0) {
			$("#entryBox").append("<p>fizz</p>");
		} else if (i % 5 === 0){
			$("#entryBox").append("<p>buzz</p>");
		} else {
			$("#entryBox").append("<p>" + i + "</p>");
		}
	}
}

test();
	