// var count;


$(document).ready(function(){
	// count = 0;


	// var array = new Array();

	// 	var image = document.createElement('img');
	// 		image.className = "yellowman";
	// 		image.src = "img/yellowPersonAll-01.png";

	// 	var image2 = document.createElement('img');
	// 		image2.className = "yellowman bed";
	// 		image2.src = "img/yellowPersonAll-02.png";

	// 	var image3 = document.createElement('img');
	// 		image3.className = "yellowman";
	// 		image3.src = "img/yellowZonePerson.png";

	// 	array.push(image);
	// 	array.push(image2);
	// 	array.push(image3);	


	
	// var containerA = document.getElementById("writtenContent");
	
	//  	containerA.innerHTML = "";

	// 	var carousel = document.createElement("div");
	// 	carousel.className = "alignCenter";

	//  	var table = document.createElement("div");
	 	
	//  	carousel.appendChild(image);
	//  	changeImage();

	 	

	//  	// carousel image
	//  	function changeImage() {
	 		
	//  		if (carousel.childNodes[0] == (array[0])) {
	// 	 		$(array[0]).hide();
	// 	 		$(array[0]).fadeIn(2000);


	// 	 		setTimeout(function(){
	// 	 			$(array[0]).hide();
	// 	 			carousel.removeChild(array[0]);


	// 	 			carousel.appendChild(array[1]);
	// 	 			if (carousel.childNodes[0] == (array[1])) {
	// 	 				$(array[1]).hide();
	// 	 				$(array[1]).fadeIn(2000);

	// 	 				setTimeout(function(){
	// 	 					$(array[1]).hide();
	// 	 					carousel.removeChild(array[1]);
	// 	 					carousel.appendChild(array[2]);
	// 	 					if (carousel.childNodes[0] == (array[2])) {
	// 	 						$(array[2]).hide();
	// 	 						$(array[2]).fadeIn(2000);

	// 	 						setTimeout(function(){
	// 	 							$(array[2]).hide();
	// 	 							carousel.removeChild(array[2]);
	// 	 							carousel.appendChild(array[0]);
	// 	 							if (carousel.childNodes[0] == (array[0])) {
	// 	 								changeImage();
	// 	 							}

	// 	 						}, 2000);

	// 	 					}
	// 	 				}, 2000);
	//  			}	
	//  		}, 2000);	
	//  	}
	//  }

	//  var containerB = document.getElementById("textContent");

	//   var arrayText = new Array();

	//  	var p11 = document.createElement('p');
	//  		p11.innerHTML = 'Tight Chest';
	//  	var p21 = document.createElement('p');
	//  		p21.innerHTML = 'Wake up at Night';
	//  	var p31 = document.createElement('p');
	//  		p31.innerHTML = 'Coughing';	

	//  	arrayText.push(p11);
	//  	arrayText.push(p21);		
	//  	arrayText.push(p31);					

	 	
	// 	 	var text = document.createElement("div");
	// 	 	text.className = "text";

	// 	 	text.appendChild(p11);
	// 	 	changeText();

	// 	 	function changeText() {
	// 	 		if (text.childNodes[0] == (arrayText[0])) {
	// 	 		$(arrayText[0]).hide();
	// 	 		$(arrayText[0]).fadeIn(2000);


	// 	 		setTimeout(function(){
	// 	 			$(arrayText[0]).hide();
	// 	 			text.removeChild(arrayText[0]);
	// 	 			text.appendChild(arrayText[1]);
	// 	 			if (text.childNodes[0] == (arrayText[1])) {
	// 	 				$(arrayText[1]).hide();
	// 	 				$(arrayText[1]).fadeIn(2000);

	// 	 				setTimeout(function(){
	// 	 					$(arrayText[1]).hide();
	// 	 					text.removeChild(arrayText[1]);
	// 	 					text.appendChild(arrayText[2]);
	// 	 					if (text.childNodes[0] == (arrayText[2])) {
	// 	 						$(arrayText[2]).hide();
	// 	 						$(arrayText[2]).fadeIn(2000);

	// 	 						setTimeout(function(){
	// 	 							$(arrayText[2]).hide();
	// 	 							text.removeChild(arrayText[2]);
	// 	 							text.appendChild(arrayText[0]);
	// 	 							if (text.childNodes[0] == (arrayText[0])) {
	// 	 								changeText();
	// 	 							}

	// 	 						}, 2000);

	// 	 					}
	// 	 				}, 2000);
	//  			}	
	//  		}, 2000);	
	//  	}
	// 	 	}


	//  table.appendChild(carousel);
	//  containerA.appendChild(table);

	// containerB.appendChild(text);



});



// function greenCheck() {

// 	if (count % 2 == 0) {
// 		var container = document.getElementById("box1");


// 		var column1 = document.getElementById("col1");
// 		var column2 = document.getElementById("col2");
// 		var column3 = document.getElementById("col3");


// 		column3.className = "col-xs-4 alignCenter adjustCol3";

// 		var image = document.createElement("img");
// 		image.src = "img/greenCheck.png";
// 		image.className = "sticker";



// 		container.innerHTML = "";


// 		container.appendChild(image);
// 		container.appendChild(column1);
// 		container.appendChild(column2);
// 		container.appendChild(column3);
// 		count++;
// 	} else {
// 		var container = document.getElementById("box1");
// 		var column1 = document.getElementById("col1");
// 		var column2 = document.getElementById("col2");
// 		var column3 = document.getElementById("col3");


// 		column3.className = "col-xs-4 alignCenter";

// 		var image = document.createElement("img");
// 		image.src = "img/greenCheck.png";
// 		image.className = "sticker";


// 		container.innerHTML = "";

// 		container.appendChild(column1);
// 		container.appendChild(column2);
// 		container.appendChild(column3);
// 		count++;
		
// 	}

// 	function reset() {
// 		count++;
// 	}	
// }

//Timer function
/*var date = new Date();
var time1 = (date.getHours()+4)+":"+date.getMinutes();
var time2 = (date.getHours()+8)+":"+date.getMinutes();
var time3 = (date.getHours()+12)+":"+date.getMinutes();
var checkbox1 = '<div class="checkbox">'+time1+'<input type="checkbox"></input>'+'</div';
var checkbox2 = '<div class="checkbox">'+time2+'<input type="checkbox">'+'</div';
var checkbox3 = '<div class="checkbox">'+time3+'<input type="checkbox">'+'</div';
var reset = '<button class="reset"></button>';
$("#timerYellow").on("click", function(){
    $("#timerYellow").hide();
    $("#timer").show();
    $("#timer ul").append("<li>"+checkbox1+"</li>"+"<li>"+checkbox2+"</li>"+"<li>"+checkbox3+"</li>"+);
});
$(".reset").on("click",function(){
	$("#timer").hide();
	$("#timerYellow").show();
})*/
/*timer? does it work*/
var minutesRemaining;
var intervalHandle;

function resetPage() {
    document.getElementById("inputArea").style.display = "block";
}

function tick() {
    // grab the h1
    var timeDisplay = document.getElementById("time");
    
    // turn seconds into mm:ss
	var hour =  Math.floor(minutesRemaining/60); 
	var min = minutesRemaining;
   
    // add a leading zero (as a string value) if seconds less than 10
    if (sec < 10) {
        sec = "0" + sec;
    }
    // concatenate with colon
    var message = hour + ":" + min ;
    // now change the display
    timeDisplay.innerHTML = message;
    
    // stop if down to zero
    if (minutesRemaining === 0) {
        clearInterval(intervalHandle);
        resetPage();
    }
    // subtract from seconds remaining
    minutesRemaining--;
}

function startCountdown() {
    // get contents of the "minutes" text box
    var minutes = document.getElementById("minutes").value;
    // check if not a number
    if (isNaN(minutes)) {
        alert("Please enter a number!");
        return;
    }
    // how many minutes?
	minutesRemaining =  minutes;
    // every second, call the "tick" function
    intervalHandle = setInterval(tick, 1000);
    // hide the form
    document.getElementById("inputArea").style.display = "none";
}

// as soon as the page is loaded...
window.onload =  function () {
    // create input text box and give it an id of "minutes"
    var inputMinutes = document.createElement("input");
    inputMinutes.setAttribute("id", "minutes");
    inputMinutes.setAttribute("type", "text");
    // create a button
    var startButton = document.createElement("input");
    startButton.setAttribute("type", "button");
    startButton.setAttribute("value", "Start Countdown");
    startButton.onclick = function () {
        startCountdown();
    };
    // add to the DOM, to the div called "inputArea"
    document.getElementById("inputArea").appendChild(inputMinutes);
    document.getElementById("inputArea").appendChild(startButton);
};
/*timer end*/

function goToGreenZone() {
	window.location = "/GreenZone"
}

function goToYellowZone() {
	window.location = "/YellowZone";
}

function goToRedZone() {
	window.location = "/RedZone";
}

var replaceButton;
function goToMedPage() {
	var infoContainer = document.getElementById("yellowInfo");
	infoContainer.innerHTML = "";

	var mainBox = document.getElementById("mainBox");
	mainBox.innerHTML = "";

	var zone = document.getElementById("zones");
	zone.className = "shiftUp";
	zone.innerHTML = "";

	var body = document.getElementById("body");

	var container = document.createElement("div");
	container.className = "medicineBox";


	var arrow = document.createElement("img");
	arrow.className = "backArrow";
	arrow.src = "img/backArrow.png";

	

	var row1 = document.createElement("div");
	row1.className = "row top1";

		// create the columns for the albuterol picture and the text "Albuterol" for the first row
		var col1 = document.createElement("div");
		col1.className = "col-xs-3 alignCenter";

			var albuterol = document.createElement("img");
			albuterol.src = "img/albuterol2.png";
			albuterol.className = "albuterol";
			albuterol.id = "Albuterol-image";

		//append the image to first the column	
		col1.appendChild(albuterol);	


		var col2 = document.createElement("div");
		col2.className = "col-xs-9 textAlbuterol";
		col2.id = "Albuterol-text";
		col2.innerHTML = "Albuterol";

	row1.appendChild(col1);
	row1.appendChild(col2);


	var row2 = document.createElement("div");
	row2.className = "shiftRow2 shiftDown";

		var p1 = document.createElement("p");
			p1.innerHTML = "Use";
			p1.className = "title";

		var p2 = document.createElement("p");
			p2.innerHTML = "Quick relief from symptoms";
			p2.className = "info";

		var p3 = document.createElement("p");
			p3.innerHTML = "*Does not maintain long term symptoms";
			p3.className = "info";		

	row2.appendChild(p1);
	row2.appendChild(p2);
	row2.appendChild(p3);


	var row3 = document.createElement("div");
		row3.className = "shiftRow2 shiftDown";

	var title = document.createElement("p");
			title.innerHTML = "Other Names";
			title.className = "title";

	row3.appendChild(title);


	var row4 = document.createElement("div");
	row4.className = "row top1";

		var col1row4 = document.createElement("div");
			col1row4.className = "col-xs-3 alignCenter";

			var ventolin = document.createElement("img");
				ventolin.src = "img/Ventolin-inhaler.png";
				ventolin.className = "albuterol";
				ventolin.id = "ventolin";
			col1row4.appendChild(ventolin);	


		var col2row4 = document.createElement("div");
			col2row4.className = "col-xs-3 ventolinText";
			col2row4.id = "Ventolin-Text";
			col2row4.innerHTML = "Ventolin"

		var col3row4 = document.createElement("div");
			col3row4.className = "col-xs-6";

			 replaceButton = document.createElement("button");
				replaceButton.className = "btn replaceButton";
				replaceButton.innerHTML = "Replace";
		col3row4.appendChild(replaceButton);	



	row4.appendChild(col1row4);
	row4.appendChild(col2row4);
	row4.appendChild(col3row4);



	var row5 = document.createElement("div");
	row5.className = "row top1";

		var col1row5 = document.createElement("div");
			col1row5.className = "col-xs-3 alignCenter";

			var proventil = document.createElement("img");
				proventil.src = "img/proventil.png";
				proventil.className = "albuterol";
				proventil.id = "proventil";
			col1row5.appendChild(proventil);	


		var col2row5 = document.createElement("div");
			col2row5.className = "col-xs-3 ventolinText";
			col2row5.id = "Proventil-Text";
			col2row5.innerHTML = "Proventil";

		var col3row5 = document.createElement("div");
			col3row5.className = "col-xs-6";

			var replaceButton2 = document.createElement("button");
				replaceButton2.className = "btn replaceButton";
				replaceButton2.innerHTML = "Replace";
		col3row5.appendChild(replaceButton2);	



	row5.appendChild(col1row5);
	row5.appendChild(col2row5);
	row5.appendChild(col3row5);

// ---------------------------------------------------------------------------------
// REPLACE MEDICATIONS
	$(replaceButton).click(function(){
		var al = document.getElementById("Albuterol-image").src;
		var vent = document.getElementById("ventolin").src;
		var prov = document.getElementById("proventil").src;

		var aText = document.getElementById("Albuterol-text");
		var ventText = document.getElementById("Ventolin-Text");
		var provText = document.getElementById("Proventil-Text");

		if (albuterol.src == al && ventolin.src == vent && proventil.src == prov) {
			var save = ventolin.src;
			ventolin.src = albuterol.src;
			albuterol.src = save;

			var saveText = ventText.innerHTML;
			ventText.innerHTML = aText.innerHTML;
			aText.innerHTML = saveText; 
		}
	});

	$(replaceButton2).click(function(){
		var al = document.getElementById("Albuterol-image").src;
		var vent = document.getElementById("ventolin").src;
		var prov = document.getElementById("proventil").src;

		var aText = document.getElementById("Albuterol-text");
		var ventText = document.getElementById("Ventolin-Text");
		var provText = document.getElementById("Proventil-Text");
		if (albuterol.src == al && ventolin.src == vent && proventil.src == prov) {
			var save = proventil.src;
			proventil.src = albuterol.src;
			albuterol.src = save;

			var saveText = provText.innerHTML;
			provText.innerHTML = aText.innerHTML;
			aText.innerHTML = saveText; 
		}
	});
// END OF REPLACING MEDICATION FUNCTION	
// --------------------------------------------------------------------------------------




	$(arrow).click(function(){	
		goToYellowZone();
	});




	container.appendChild(arrow);
	container.appendChild(row1);
	container.appendChild(row2);
	container.appendChild(row3);
	container.appendChild(row4);
	container.appendChild(row5);

	body.appendChild(container);

	// fading in effect
	$(container).hide();
	$(container).fadeIn(600);


}










