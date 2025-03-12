document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email === "" || password === "") {
        alert("Please fill in all fields.");
    } else {
        alert("Login successful! Welcome to CollegeConnect.");
        // Redirect to another page or load user-specific data
        window.location.href = "dashboard.html";
    }
});

