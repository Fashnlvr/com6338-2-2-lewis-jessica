function greet() {
    const name = prompt("What is your name?");
    alert(`Hello, ${name}`)
    const age = parseInt(prompt("How old are you?"), 10);
    const hasHadBirthday = confirm("Have you had a birthday yet this year? Click 'OK' for Yes or 'Cancel' for No");
    const currentYear = new Date().getFullYear();
    const birthYear = hasHadBirthday ? currentYear - age : currentYear - age - 1;
    alert(`You were born in ${birthYear}.`);
}