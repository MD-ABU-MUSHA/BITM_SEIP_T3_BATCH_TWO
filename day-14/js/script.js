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

            if(temp== 'even'){
                for(i = startingNumber; i<=endingNumber; i++){
                    if(i/2 != 0){
                        result = result + i +' '; 
                    }
                      
                     
                }
            }else{

                for(i = startingNumber; i<=endingNumber; i++){
                    if(i%2 == 0){
                        result = result + i +' '; 
                    }
                       
                     
                }
            }
            
            document.getElementById('result').innerHTML= result;
         }
         
         else{
            if(temp == 'odd'){
                
                for(i = startingNumber; i>=endingNumber; i--){
                    if(i%2 != 0){
                        result = result + i +' ';
                    }
                    
            }
        }else{

                for(i = startingNumber; i>=endingNumber; i--)
                    if(i%2 == 0){
                        result = result + i +' ';
                    }
                    
            }document.getElementById('result').innerHTML= result;
         }
  }



