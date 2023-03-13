function validator(pass) {
    let isValid = true
    if (pass.length < 6 || pass.length > 10) {
        console.log('Password must be between 6 and 10 characters');
        isValid = false
    }

    if (!/^[A-Za-z0-9]+$/g.test(pass)) {
        console.log('Password must consist only of letters and digits')
        isValid = false
    } 

    if ([...pass.matchAll(/\d/g)].length < 2) {
        console.log('Password must have at least 2 digits')
        isValid = false
    }
    if (isValid) {
        console.log('Password is valid')
    }
}

// function validator(pass) {
//     const isValidLength = (pass) => pass.length >=  6 && pass.length <= 10;
//     const hasOnlyLettersAndDigits = (pass) => /^\w+$/g.test(pass);
//     const hasAtLeastTwoDigits = (pass) => [...pass.matchAll(/\d/g)].length >= 2;

//     let passIsValid = true;

//     if (!isValidLength(pass)) {
//         console.log('Password must be between 6 and 10 characters');
//         passIsValid = false;
//     }

//     if (!hasOnlyLettersAndDigits(pass)) {
//         console.log('Password must consist only of letters and digits');
//         passIsValid = false;
//     }

//     if (!hasAtLeastTwoDigits(pass)) {
//         console.log('Password must have at least 2 digits')
//         passIsValid = false
//     }

//     if (passIsValid) {
//         console.log('Password is valid')
//     }
// }

validator('logIn');
validator('MyPass123');
validator('Pa$s$s');
