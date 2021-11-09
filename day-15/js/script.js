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
        

            // aita on rakle uporer ta off rakbo
            // if(number%2 == 0){
            //     var result = document.getElementById('Result').innerHTML="Even";
    
            // }else{
            //     var result = document.getElementById('Result').innerHTML="Odd";

            // }

}


 




 /*
    SetInterval():
    SetTimeout():


    */



    function test(){
                    var dateTime = new Date();
            var month= ['january','February','March','Aprial','May','Jun','July','August','September','Octobor','November','December'];
            var day = ['Sunday','Monday','thursday','Wednessday','Tuesday','Friday','saterday'];

            var hour = dateTime.getHours();
            var minutes = dateTime.getMinutes();
            var second = dateTime.getSeconds();
            var year = dateTime.getFullYear();

            var result = day[dateTime.getDay()]+", "+month[dateTime.getMonth()]+", "+dateTime.getDate()+", "+year;
            var watch = hour +":"+ minutes +":"+ second;

            document.getElementById('watch').innerHTML=result+"|"+watch;
    }

    setInterval(test, 1000);



    // setTimeout(test,1000);