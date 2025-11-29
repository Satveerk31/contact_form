const form = document.getElementById("contactForm");
const errBox = document.getElementById("error");
const successBox = document.getElementById("success");
const charCount = document.getElementById("charCount");

document.getElementById("message").addEventListener("input", function () {
    charCount.textContent = `${this.value.length} / 300`;
});

form.addEventListener("submit", function (e) {
    e.preventDefault();

    errBox.textContent = "";
    successBox.textContent = "";

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !subject || !message) {
        errBox.textContent = "Please fill all required fields.";
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        errBox.textContent = "Please enter a valid email.";
        return;
    }

    if (phone && phone.length < 10) {
        errBox.textContent = "Phone number looks too short.";
        return;
    }

    successBox.textContent = "Message sent successfully!";
    form.reset();
    charCount.textContent = "0 / 300";
});
