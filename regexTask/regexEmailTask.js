const emailValidator = (email, message) => {
    if (message !== undefined) {
        return alert(message);
    }
    
    const pattern = /^([\w-])+@([\w-])+\.\w{2,4}$/gi;
    
    return pattern.test(email) == true
    ? alert(email.replace(/.(?=\w*@)/gm, "*"))
    : emailValidator(email, "enter a valid email");
};

let input = prompt("Enter your email:");
emailValidator(input);