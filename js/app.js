
// Variable stored to remove magic numbers
var fizz = 3;
var buzz = 5;
var pause = 1200;

// Loop that runs the the number given
function test(choice) {
	for (var i = 1; i <= choice; i++) {
		if (i % fizz === 0 && i % buzz === 0)  {
			$("#entryList").append("<li>fizzbuzz</li>");
		} else if (i % fizz === 0) {
			$("#entryList").append("<li>fizz</li>");
		} else if (i % buzz === 0){
			$("#entryList").append("<li>buzz</li>");
		} else {
			$("#entryList").append("<li>" + i + "</li>");
		}
	}
}

var $inputValue = $("#userChoice");

// function isNumber() {
// 	if ($inputValue.val() === )
// }

$(".numberMessage").hide();
$("#entryBox").hide();
$("#exitBox").hide();

$("#addNumber").on("click", function(){
	if ($inputValue.val().trim() !== "" && !isNaN($inputValue.val().trim())) {
		$(".introBox").fadeOut();
		test($inputValue.val());
		$("#entryBox").fadeIn("fast",function() {
			$("#exitBox").fadeIn(function () {
			});
		});
	} else if (isNaN($inputValue.val().trim())) {
		$(".numberMessage").fadeIn("fast").delay(pause).fadeOut();
	}
});

$("#exitBox").on("click", function(){
	$(".introBox").fadeIn();
	$("#entryBox").fadeOut("fast",function() {
		$("#exitBox").fadeOut(function () {
			$("li").remove();
		});
	});
});


$(document).keyup(function(event) {
	if(event.keyCode === 13) {
		if ($inputValue.val().trim() !== "" && !isNaN($inputValue.val().trim())) {
			$(".introBox").fadeOut();
			test($inputValue.val());
			$("#entryBox").fadeIn("fast",function() {
			$("#exitBox").fadeIn(function () {
		});
	});
		} else if (isNaN($inputValue.val().trim())) {
		$(".numberMessage").fadeIn("fast").delay(pause).fadeOut();
		}
	}
});


    var counter = $('.counter');
    
    $('#userChoice').on('input keyup keydown focus', function () {
            var $this = $(this);
            var maxlength = $this.attr('maxlength');
            var value = $this.val();
    
            if(value.length > 0) {
                counter.text((maxlength - $this.val().length));
            } else {
                counter.text(maxlength);
            }   
        });


