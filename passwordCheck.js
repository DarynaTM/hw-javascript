function checkPass (password){
    //Check if length is equal or more than 8 symbols
    const checkLength = password.length >= 8;
    
    //Check if contains number
    const checkNumber = password.match(/\d+/) !== null;

    //Check if contains upper case
    const checkUpperCase = password.match(/[A-Z]/) !== null;

    //Check if contains lower case
    const checkLowerCase = password.match(/[a-z]/) !== null;
    if (checkLength && checkNumber && checkUpperCase && checkLowerCase) {
        return "Strong";
    } else {
        return "Weak";
}
}

console.log(checkPass("111111"));
console.log(checkPass("Check123"));