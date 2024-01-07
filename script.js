//your JS code here. If required.
document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the form from submitting the traditional way

    const nameInput = document.getElementById('name').value;
    const ageInput = parseInt(document.getElementById('age').value, 10);

    if (!nameInput || !ageInput) {
        alert('Please fill in all fields.');
        return;
    }

    const agePromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (ageInput > 18) {
                resolve(`Welcome, ${nameInput}. You can vote.`);
            } else {
                reject(`Oh sorry ${nameInput}. You aren't old enough.`);
            }
        }, 4000);
    });

    agePromise
        .then(message => alert(message))
        .catch(errorMessage => alert(errorMessage));
});