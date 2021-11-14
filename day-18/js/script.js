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
    }else{
        $('#emailError').text('Email is not Valid');
    }


}



function checkPassword(){
    var password = $('#password').val();
    var regex =  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    if(regex.test(password))
    {
        $('#passwordError').text(' ');
    }else{
        $('#passwordError').text('password is not valid');
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



$('#registrationForm').submit(function(){
    return false;
});