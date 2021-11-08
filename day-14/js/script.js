//     var submit = document.getElementById('submit');
//     submit.onclick= function(){
//         var startingNumber = Number(document.getElementById('firstNumber').value);
//         var endingNumber = Number(document.getElementById('endingNumber').value);
        
//           var i;
//         var result = '';

//         var choice = document.getElementsByName('choice');
//         var temp= '';
//         if(choice[0].checked == true){
//             temp ='odd';
//         }else{
//             temp = 'even';
//         }

//         console.log(temp);



//          if(startingNumber<=endingNumber){

//             if(temp== 'even'){
//                 for(i = startingNumber; i<=endingNumber; i++){
//                     if(i/2 != 0){
//                         result = result + i +' '; 
//                     }
                      
                     
//                 }
//             }else{

//                 for(i = startingNumber; i<=endingNumber; i++){
//                     if(i%2 == 0){
//                         result = result + i +' '; 
//                     }
//                 }
//             }
            
//             document.getElementById('result').innerHTML= result;
// }
         
//         else{
//             if(temp == 'odd'){
                
//                 for(i = startingNumber; i>=endingNumber; i--){
//                     if(i%2 != 0){
//                         result = result + i +' ';
//                     }
                    
//             }
//         }else{

//                 for(i = startingNumber; i>=endingNumber; i--)
//                     if(i%2 == 0){
//                         result = result + i +' ';
//                     }
                    
//             }document.getElementById('result').innerHTML= result;
//         }
// }









// Index2 Start

var homeBtn = document.getElementById('homeBtn');
var aboutBtn = document.getElementById('aboutBtn');
var contactBtn = document.getElementById('contactBtn');


var home = document.getElementById('home');
var about = document.getElementById('about');
var contact = document.getElementById('contact');




homeBtn.onclick = function(){
    event.preventDefault();
    home.setAttribute('class','content-wrapper');
    about.setAttribute('class','content-wrapper d-none');
    contact.setAttribute('class','content-wrapper d-none')



    homeBtn.setAttribute('class','active');
    aboutBtn.setAttribute('class','');
    contactBtn.setAttribute('class','');
}


aboutBtn.onclick = function(){
   
    event.preventDefault();
    home.setAttribute('class','content-wrapper d-none');
    about.setAttribute('class','content-wrapper');
    contact.setAttribute('class','content-wrapper d-none')


    homeBtn.setAttribute('class','');
    aboutBtn.setAttribute('class','active');
    contactBtn.setAttribute('class','');
}




contactBtn.onclick = function(){
    event.preventDefault();
    home.setAttribute('class','content-wrapper d-none');
    about.setAttribute('class','content-wrapper d-none');
    contact.setAttribute('class','content-wrapper ')


    homeBtn.setAttribute('class','');
    aboutBtn.setAttribute('class','');
    contactBtn.setAttribute('class','active');
}