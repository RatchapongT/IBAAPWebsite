$(document).ready(function(){

	var checkCounter1 = 0;
	var checkCounter2 = 0;
	var checkCounter3 = 0;

	$("#box1").click(function(e){
		var element = document.getElementById("check1");
		if (checkCounter1 % 2 == 0) {
			element.style.opacity = 1.0;
			element.style.filter  = "alpha(opacity=100)";
			checkCounter1++;
		} else {
			element.style.opacity = 0.0;
			element.style.filter  = "alpha(opacity=0)";
			checkCounter1++;
		}	
	});	

	$("#box2").click(function(e){
		var element = document.getElementById("check2");
		if (checkCounter2 % 2 == 0) {
			element.style.opacity = 1.0;
			element.style.filter  = "alpha(opacity=100)";
			checkCounter2++;
		} else {
			element.style.opacity = 0.0;
			element.style.filter  = "alpha(opacity=0)";
			checkCounter2++;
		}	
	});	

	$("#box3").click(function(e){
		var element = document.getElementById("check3");
		if (checkCounter3 % 2 == 0) {
			element.style.opacity = 1.0;
			element.style.filter  = "alpha(opacity=100)";
			checkCounter3++;
		} else {
			element.style.opacity = 0.0;
			element.style.filter  = "alpha(opacity=0)";
			checkCounter3++;
		}	
	});	
});


function goToYellowZone() {
	window.location = "/YellowZone"
}

function goToRedZone() {
	window.location = "/RedZone"
}


