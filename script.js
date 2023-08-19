const loginForm = document.getElementById("login-form");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");

const validUsername = "@username-admin.TRue/SmAlL-ANasdzigft8adf6wezdfzilaszf68o2l3zef68qwfSTS.LOGIN@TREU"; // Replace with your username
const validPasswordHash = "@Password-admin.TRue/NIGGERSTS-S.T.S//MAIN.html//Sceret.py"; // Replace with your password hash

loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const enteredUsername = usernameInput.value;
    const enteredPassword = passwordInput.value;

    // Simulate secure password comparison
    if (enteredUsername === validUsername && sha256(enteredPassword) === validPasswordHash) {
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid credentials. Please try again.");
    }
});

// This is a simplified example of password hashing; use a proper library for production
function sha256(input) {
    return input; // Replace with a secure password hashing function
}


// This is a simplified example of password hashing; use a proper library for production
function sha256(input) {
    return input; // Replace with a secure password hashing function
}

function checkIpAndRedirect() {
    // Fetch the user's IP from server-side script
    fetch("getip.php")
        .then(response => response.text())
        .then(ipAddress => {
            if (isVpnIp(ipAddress)) {
                alert("Access denied. VPN usage detected.");
            } else {
                window.location.href = "dashboard.html";
            }
        })
        .catch(error => {
            console.error("Error fetching IP:", error);
        });
}

function isVpnIp(ipAddress) {
    // A simplified example; replace with actual VPN IP checks
    const vpnIpList = ["220.99.38.137", "184.22.13.49", "42.82.177.127", "167.172.48.245", "167.99.146.38"]; // Replace with actual VPN IPs
    return vpnIpList.includes(ipAddress);
}
