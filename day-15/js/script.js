var submit = document.getElementById('Submit');
        submit.onclick = function(){
            
            var number = Number(document.getElementById('Number').value);
            
        


            if(number%2 == 0){
                var result = document.getElementById('Result').innerHTML="Even";
    
            }else{
                var result = document.getElementById('Result').innerHTML="Odd";
        
        }


}