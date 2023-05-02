
$("#top .play-button").click(function(){
   var maleName=prompt("Enter the name of the man.");
   var femaleName=prompt("Enter the name of the woman.");
   $("#middle .male h1").text(maleName.toUpperCase());
   $("#middle .female h1").text(femaleName.toUpperCase());
   $("#middle .message h1").text("Your love percentage is "+loveCalculator()+"%");
   $("#middle .message h3").text( maleName.toUpperCase() +" ❤💕❤ "+ femaleName.toUpperCase() );
   
});


function loveCalculator() {
  var love= Math.floor( (Math.random()*100) +1 );
  return love;  
}























// $("h1").addClass("big-title text-danger-emphasis");
// $("button").click(function () {
//     $("h1").removeClass("text-danger-emphasis");
//     $("h1").addClass("text-success"); 
   
// })