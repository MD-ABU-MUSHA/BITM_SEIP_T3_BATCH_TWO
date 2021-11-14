function checkFirstName(){
    var firstName = $('#firstName').val();
    var regex = /^[a-zA-Z0-9 ]{2,15}$/;
    if(regex.test(firstName))
    {
        $('#firstNameError').text(' ');
        return true;
    }else{
        $('#firstNameError').text('First Name must be in 2-15 character');
        return false;
    }
}




function checklastName(){
    var lastName = $('#lastName').val();
    var regex = /^[a-zA-Z0-9 ]{2,15}$/;
    if(regex.test(lastName))
    {
        $('#lastNameError').text(' ');
        return true;
    }else{
        $('#lastNameError').text('First Name must be in 2-15 character');
        return false;
    }
}




function checkEmail(){
    var emailValue = $('#email').val();
    var regex =  /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if(regex.test(emailValue))
    {
        $('#emailError').text(' ');
        return true;
    }else{
        $('#emailError').text('Email is not Valid');
        return false;
    }


}



function checkPassword(){
    var password = $('#password').val();
    var regex =  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    if(regex.test(password))
    {
        $('#passwordError').text(' ');
        return true;
    }else{
        $('#passwordError').text('password is not valid');
        return false;
    }
}



function checkConfirmPassword(){
    var confirmPassword = $('#confirmPassword').val();
    var password = $('#password').val();
    if(password == confirmPassword)
    {
        $('#confirmPasswordError').text(' ');
        return true;
    }else{
        $('#confirmPasswordError').text('Sorry.. Password & confirm Password are not same ');
        return false;
    }
}




function checkPhoneNumber(){
    var phoneNumber = $('#phoneNumber').val();
    var regularExpression = /^\+?(88)?0?1[3456789][0-9]{8}\b/g;
    if(regularExpression.test(phoneNumber)){
        $('#phoneNumberError').text(' ');
        return true;
    }else{
        $('#phoneNumberError').text('Sorry.. Phone number format is not valid');
        return false;
    }
}



function checkDistrict(){
    var districtName = $('EdistrictName').val();
    if(districtName = null)
    {
        $('#districtNameError').text('Sorry..District name is not valid');
        return false;
    }else{
        $('#districtNameError').text(' ');
        return true;
    }
}




function checkGender()
{
    var gender = $('input[name="gender"]:checked').val();
    if(gender.length > 0)
    {
        $('#genderError').text(' ');
        return true;
    }else{
        $('#genderError').text('Sorry..Please select your gender');
        return false;
    }
}





$('#firstName').keyup(function(){
    checkFirstName();
});



$('#lastName').keyup(function(){
    checklastName();
});



$('#email').keyup(function(){
    checkEmail();
});



$('#password').keyup(function(){
    checkPassword();
});


$('#showHide').click(function(){
  var typeValue =   $('#password').attr('type');
    if(typeValue == 'password'){
        $('#password').attr('type','text');
    }else{
        $('#password').attr('type','password');
    }
});




$('#confirmPassword').keyup(function(){
    checkConfirmPassword();
});



$('#phoneNumber').keyup(function(){
    checkPhoneNumber();
});












$('#registrationForm').submit(function(){
    if(checkFirstName() && checklastName() && checkEmail() && checkPassword() && checkPhoneNumber() &&  checkConfirmPassword() && checkDistrict() && checkGender())
    {
        return true;
    }else{
        return false;
    }
    
});