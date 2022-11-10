(function(){
    'use strict';


let convertType = "miles";
const heading = document.querySelector('h1');
const intro = document.querySelector('p');
const answerDiv = document.getElementById('answer');
const form = document.getElementById('convert');

document.addEventListener('keydown', function(event){
    var key = event.code;
    
    if(key === 'KeyK'){ 
        convertType = 'kilometers';
        heading.innerHTML = "Kilometers to Miles Converter";
        intro.innerHTML = "Type in a number of Kilometers and click the convert button to convert the distance to miles";


    }
    
    else if(key === 'KeyM'){
        convertType = 'miles';
        heading.innerHTML = "Miles to Kilometers Converter";
        intro.innerHTML = "Type in a number of miles and click the convert button to convert the distance to kilometers";
        
    }



});
form.addEventListener('submit', function(event){
    event.preventDefault();
    const distance = parseFloat(document.getElementById('distance').value);


    if(distance){
        if(convertType == 'miles'){
            const converted = (distance * 1.609334).toFixed(3);
            answer.innerHTML = `${distance} miles converts to ${converted} kilometeres`;
        }
        else{
            const converted = (distance * 0.621371192).toFixed(3);
            answerDiv.innerHTML = `${distance} kilometers converts to ${converted} miles`;
        }


    }

    else {
        answerDiv.innerHTML= "<h2>Please provide a number</h2>";
    }

});






})();