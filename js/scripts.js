$(document).ready(function() {
  $("#form").submit(function(event) {
    var nameInput = $("input#name").val();
    var animalInput = $("input#animal").val();
    var colorInput = $("input#color").val();
    var foodInput = $("input#food").val();
    var hobbyInput = $("input#hobby").val();
    debugger;
    var array = [nameInput, animalInput, colorInput, foodInput, hobbyInput]
    $(".name").text(array[0].toString());
    console.log(array[0]);
    $(".animal").text(array[1]);
    $(".color").text(array[2]);
    $(".food").text(array[3]);
    $(".hobby").text(array[4]);

    var newArray = [];
    newArray.push(array[0]);
    newArray.push(array[1]);
    newArray.push(array[2]);

    $("#list").append("<li>"+newArray[0]+"</li>");
    $("#list").append("<li>"+newArray[1]+"</li>");
    $("#list").append("<li>"+newArray[2]+"</li>");



    $("#result").show();
    $("#list").show();

    event.preventDefault();
  });
 });
