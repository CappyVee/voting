$(document).ready(function(){
  var age = parseInt(prompt("What is your age?"));

  if (age > 18) {
    $("#over-18").show();
  } else if (age === 18) {
    $("#over-18").show();
  } else {
    $("#under-18").show();
  }
});//doc ready function end
