$(document).ready(function () {


    var schoolCounter = 0;
    var sleepCounter = 0;
    var tiredCounter = 0;
    var relieverCounter = 0;

    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();

    var today = $(".fc-today");
    var schoolIcon = $("<div class='schoolIcon'></div>");
    var sleepIcon = $("<div class='sleepIcon'></div>");
    var tiredIcon = $("<div class='tiredIcon'></div>");
    var relieverIcon = $("<div class='relieverIcon'></div>");

    $("#pen").click(function (e) {
        today = $(".fc-today");
        if (schoolCounter % 2 == 0) {
            $("#pen").attr('src', 'img/schoolFill.png');
            today.append(schoolIcon);
            schoolCounter++;
        } else {
            $("#pen").attr('src', 'img/schoolUnfill.png');
            today.find(".schoolIcon").remove();
            schoolCounter++;
        }
    });

    $("#sleep").click(function (e) {
        today = $(".fc-today");
        if (sleepCounter % 2 == 0) {
            $("#sleep").attr('src', 'img/sleepFill.png');
            console.log(today);
            today.append(sleepIcon);
            sleepCounter++;
        } else {
            $("#sleep").attr('src', 'img/sleepUnfill.png');
            today.find(".sleepIcon").remove();
            sleepCounter++;
        }
    });

    $("#tired").click(function (e) {
        today = $(".fc-today");
        if (tiredCounter % 2 == 0) {
            $("#tired").attr('src', 'img/limitFill.png');
            today.append(tiredIcon);
            tiredCounter++;
        } else {
            $("#tired").attr('src', 'img/limitUnfill.png');
            today.find(".tiredIcon").remove();
            tiredCounter++;
        }
    });

    $("#reliever").click(function (e) {
        today = $(".fc-today");
        if (relieverCounter % 2 == 0) {
            $("#reliever").attr('src', 'img/releiveFill.png');
            today.append(relieverIcon);
            relieverCounter++;
        } else {
            $("#reliever").attr('src', 'img/releiveUnfill.png');
            today.find(".relieverIcon").remove();
            relieverCounter++;
        }

    });

    // var month;
    // if(dd<10) {
    //    	dd='0'+dd
    // }

    // if(mm<10) {
    //    	mm='0'+mm
    // }

    // if (mm == 1) {
    // 	month = "January";
    // } else if (mm == 2) {
    // 	month = "February";
    // } else if (mm == 3) {
    // 	month = "March";
    // } else if (mm == 4) {
    // 	month = "April";
    // } else if (mm == 5) {
    // 	month = "May";
    // } else if (mm == 6) {
    // 	month = "June";
    // } else if (mm == 7) {
    // 	month = "July";
    // } else if (mm == 8) {
    // 	month = "August";
    // } else if (mm == 9) {
    // 	month = "September";
    // } else if (mm == 10) {
    // 	month = "October";
    // } else if (mm == 11) {
    // 	month = "November";
    // } else if (mm == 12) {
    // 	month = "December";
    // }


    // today = month + " " + yyyy;

    // var date = document.getElementById("date");
    // date.innerHTML = today;


});

function goToGreen() {
    window.location = "/GreenZone";
}

function goToYellow() {
    window.location = "/YellowZone";
}

function goToRed() {
    window.location = "/RedZone";
}
