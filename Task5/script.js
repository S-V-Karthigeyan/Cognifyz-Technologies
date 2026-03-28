function signup() {
    let user = document.getElementById("username").value.trim();
    let email = document.getElementById("email").value.trim();
    let pass = document.getElementById("password").value;
    let cpass = document.getElementById("confirm").value;
    let error = document.getElementById("error");

    error.innerText = "";

    if (user === "" || email === "" || pass === "" || cpass === "") {
        error.innerText = "All fields are required";
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        error.innerText = "Enter a valid email";
        return;
    }

    if (pass.length < 6) {
        error.innerText = "Password must be at least 6 characters";
        return;
    }

    if (pass !== cpass) {
        error.innerText = "Passwords do not match";
        return;
    }

    alert("Form submitted successfully!");
}
