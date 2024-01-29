const input1 = {
    "first-name": "First Name",
    "last-name": "Last Name",
    "country": "Country",
    "phone-number": "Phone No.",
    "state": "State",
    "city": "City",
    "village": "Village",
};

function fillDetails() {
    for (const key in input1) {
        const value = localStorage.getItem(key);

        if (value) {
            const field = document.querySelector(`#${key}`);

            field.innerHTML = `
          ${value}
          <i class="fa-solid fa-arrows-rotate" onclick="changeField('${key}')"></i>
        `;
        } else {
            const userInput = window.prompt(`Enter Your ${input1[key]}`);
            localStorage.setItem(key, userInput);
            fillDetails();
        }
    }
}

function changeField(key) {
    localStorage.removeItem(key);
    field.innerHTML = '';
}

function resetAll() {
    localStorage.clear();
    fillDetails();
}
fillDetails();

//themre

function toggleTheme() {
    const body = document.body;
    body.classList.toggle("dark-theme");
}