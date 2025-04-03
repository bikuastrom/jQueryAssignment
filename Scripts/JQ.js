//$("body").css("background-color", "lightblue");
//Excercise 1
$("body").addClass("bg-primary bodyFont");

$("#textInput").keyup(function () {
    console.log("Key Up");
    $("#appendDiv").append("<p>" + $("#textInput").val() + "</p>")
});

//Exercise 2
$("#pic1").click(function () {
    $("#pic1").hide(1000);
});
$("#pic2").click(function () {
    $("#pic1").show(1000);
});
$("#toggle").click(function () {
    $("#pic2").toggle(1000);
});

//Exercise 3
$("#addBgCol").click(function () {
    $("#styleH3").css("background-color", "purple");
});
$("#remTxtCol").click(function () {
    $("#styleH3").css("color", "white");
});
$("#toggleFont").click(function () {
    $("#styleH3").toggleClass("changeFont");
});

//Exercise 4
$("#exercise4").keydown(function (event) {
    event.preventDefault();
});
$("#exercise4").keydown(function () {
    let char = String.fromCharCode(event.which);
    $("#currentKey").text(event.which + " " + char);
});
$("#exercise4").keyup(function () {
    let char = String.fromCharCode(event.which);
    $("#lastKey").text(event.which + " " + char);
});

//Exercise 5
$("#focusEvent").find("*").focus(function () {
    $("#focusEvent").css("background-color", "green");
});
$("#focusEvent").find("*").blur(function () {
    $(this).css("background-color", "pink");
});

//Exercise 6
$("#fadeItem").fadeOut();

$("#eventTrigger").on({
    mouseenter: function () {
        $("#fadeItem").fadeIn();
    },
    mouseleave: function () {
        $("#fadeItem").fadeOut();
    }
});

//Exercise 7
$("#fadeToExc").children("img").fadeTo("fast", 0.15);
$("#fadeToExc").children("img").on({    
    mouseleave: function () {
        $(this).fadeTo("fast", 0.15);
    },
    mouseenter: function () {
        $(this).fadeTo("fast", 1.0);
    }
});

//Exercise 8
$("#navbar").animate({ marginLeft: "-200px" }, 100);

$("#navbar").on({
    mouseenter: function() {
        $("#navbar").animate({ marginLeft: "0px" }, "fast");
        $("#overlay").show();
    },  
    mouseleave: function() {
        $("#navbar").animate({ marginLeft: "-200px" }, "fast");
        $("#overlay").hide();
        $("#dropMenu").hide();
    }
});
$("#dropdown").click(function () {
    $("#dropMenu").toggle();
})