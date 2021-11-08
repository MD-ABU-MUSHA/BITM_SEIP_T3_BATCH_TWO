var submit = document.getElementById('submit');
    submit.onclick= function(){
        var startingNumber = document.getElementById('firstNumber').value;
        var endingNumber = document.getElementById('endingNumber').value;
        var result = document.getElementById('result').innerHTML;
         
        var i;
        var result = ' ';
        
        for(i = startingNumber; i<=endingNumber; i++){
            result = result + i +' ';
            
             
        }
        document.getElementById('result').innerHTML= result;

    }