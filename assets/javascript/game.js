// Crystals should generate between 1-12
// Guessed number is 19-120

var randomResult;
var lost;
var win;
var previous = 0;

randomResult = Math.floor(Math.random() * 69) + 30;
$("#result").html('Random Result: '+ randomResult);
// console.log(randomResult)

for(var i = 0; i < 4; i++){
    

    var randomCrys = Math.floor(Math.random() * 11) + 1;
    // console.log(randomCrys);
    
    
    var crystals = $("<div>");
        crystals.attr({
            "class":'crystals',
            "data-random": randomCrys
        });

    $(".crystal").append(crystals);
}

$(".crystals").on('click', function(){
    
  var num = parseInt($(this).attr("data-random"));

    previous += num;
    console.log(previous);

    if(previous > randomResult){
        console.log("You Lost");
    }
    else if(previous === randomResult){
        console.log("you WIN");
    }
})
