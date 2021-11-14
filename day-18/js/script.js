function checkFirstName(){
    var firstName = $('#firstName').val();
    var regex = /^[a-zA-Z0-99 ]{2,15}$/;
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
    var regex = /^[a-zA-Z0-99 ]{2,15}$/;
    if(regex.test(lastName))
    {
        $('#lastNameError').text(' ');
        return true;
    }else{
        $('#lastNameError').text('First Name must be in 2-15 character');
        return false;
    }
}







$('#firstName').keyup(function(){
    checkFirstName();
});



$('#lastName').keyup(function(){
    checklastName();
});



$('#registrationForm').submit(function(){
    return false;
});