var submit = document.getElementById('Submit');
        submit.onclick = function(){
            
            var number = Number(document.getElementById('Number').value);
            var result = 'prime';
            for(var i=2; i<number; i++){
                if(number%i == 0)
                {
                    result = 'Not Prime';
                    break;
                }else{
                    continue;
                }
            }


            document.getElementById('Result').innerHTML = result;
        


            // if(number%2 == 0){
            //     var result = document.getElementById('Result').innerHTML="Even";
    
            // }else{
            //     var result = document.getElementById('Result').innerHTML="Odd";

            // }



        
}
