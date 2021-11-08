var submit = document.getElementById('submit');
    submit.onclick= function(){
        var startingNumber = Number(document.getElementById('firstNumber').value);
        var endingNumber = Number(document.getElementById('endingNumber').value);
        var result = document.getElementById('result').innerHTML;
         
        var i;
        var result = '';


         if(startingNumber<=endingNumber){
            for(i = startingNumber; i<=endingNumber; i++){
                result = result + i +' ';
                
                 
            }
            document.getElementById('result').innerHTML= result;
         }else{
            for(i = startingNumber; i>=endingNumber; i--){
                result = result + i +' ';
                
                 
            }
            document.getElementById('result').innerHTML= result;
         }
        
       

    }