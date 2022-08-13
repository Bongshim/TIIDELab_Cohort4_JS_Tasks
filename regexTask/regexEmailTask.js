const emailValidator = (email, message) => {
  // messages are only passed recursively if there is an error
  if (message !== undefined) {
    return alert(message);
  }

  const pattern = /^([\w-])+@([\w-])+\.\w{2,4}$/gi;

  // tests for pattern and either replace or passes an error message recursively
  return pattern.test(email) == true
    ? alert(email.replace(/.(?=\w*@)/gm, "*"))
    : emailValidator(email, "enter a valid email");
};

let input = prompt("Enter your email:");
emailValidator(input);
