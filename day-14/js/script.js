    var submit = document.getElementById('submit');
    submit.onclick= function(){
        var startingNumber = Number(document.getElementById('firstNumber').value);
        var endingNumber = Number(document.getElementById('endingNumber').value);
        
         
         
        var i;
        var result = '';

        var choice = document.getElementsByName('choice');
        var temp= '';
        if(choice[0].checked == true){
            temp ='odd';
        }else{
            temp = 'even';
        }

        console.log(temp);



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




