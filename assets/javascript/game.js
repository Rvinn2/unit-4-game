// Crystals should generate between 1-12
// Guessed number is 19-120

var randomResult;
var lost =0;
var win = 0;
var previous = 0;

var resetAndStart = function(){
        
        $(".crystal").empty();

        var images = [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ47VAT3j5n3IBA4POfJ6Jjhxalq8A7QzOLUYsWKTy1_7kCkLaD2Q',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ47VAT3j5n3IBA4POfJ6Jjhxalq8A7QzOLUYsWKTy1_7kCkLaD2Q',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ47VAT3j5n3IBA4POfJ6Jjhxalq8A7QzOLUYsWKTy1_7kCkLaD2Q',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ47VAT3j5n3IBA4POfJ6Jjhxalq8A7QzOLUYsWKTy1_7kCkLaD2Q'];

        randomResult = Math.floor(Math.random() * 69) + 30;

        $("#result").html('Random Result: ' + randomResult);
        // console.log(randomResult)

        for(var i = 0; i < 4; i++){
            

            var randomCrys = Math.floor(Math.random() * 11) + 1;
            // console.log(randomCrys);
            
            
            var crystals = $("<div>");
                crystals.attr({
                    "class":'crystals',
                    "data-random": randomCrys
                });
                crystals.css({
                    "background-image":"url('" + images[i] + " ')",

                });

            $(".crystal").append(crystals);
        }

        $("#previous").html("Total Score: " + previous);
}



resetAndStart();

$(document).on('click', ".crystals", function(){
    
    var num = parseInt($(this).attr("data-random"));

        previous += num;

        $("#previous").html("Total Score: " + previous);    

        console.log(previous);

        if(previous > randomResult){
            lost--;
            $("#lost").html("You lost: " + lost);

            pervious = 0;
   
            resetAndStart();

        }
        else if(previous === randomResult){
            win++;
            $("#win").html("YOU WIN!" + win);

            previous = 0;

            resetAndStart();
        }
})
