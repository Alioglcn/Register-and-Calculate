function validateDate(event) {
    event.preventDefault(); // Form submission prevented

    var dateString = document.getElementById("dateInput").value;
    var dateRegex = /^(0[1-9]|[12][0-9]|3[01])[\/](0[1-9]|1[0-2])[\/](19|20)\d{2}$/; // dd/mm/yyyy formatı için

    if (!dateRegex.test(dateString)) {
        alert("Geçersiz tarih formatı! Lütfen dd/mm/yyyy formatında bir tarih girin.");
        return;
    }

    var parts = dateString.split("/");
    var day = parseInt(parts[0], 10);
    var month = parseInt(parts[1], 10);
    var year = parseInt(parts[2], 10);

    if (day < 1 || day > 31) {
        alert("Geçersiz gün değeri!");
        return;
    }

    if (month < 1 || month > 12) {
        alert("Geçersiz ay değeri!");
        return;
    }

    if (month === 2) {
        var isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
        if ((isLeapYear && day > 29) || (!isLeapYear && day > 28)) {
            alert("Geçersiz gün değeri! Şubat ayı için artık yıl kontrolü yapın.");
            return;
        }
    } else if ((month === 4 || month === 6 || month === 9 || month === 11) && day > 30) {
        alert("Geçersiz gün değeri!");
        return;
    }

    if (year < 1900 || year > 2099) {
        alert("Geçersiz yıl değeri!");
        return;
    }

    // All requirements are met, redirect to calculator page
    window.location.href = "calculator.html";
}


function validatePassword(password) {
    // Check password length
    if (password.length < 6 || password.length > 15) {
        alert("Geçersiz parola! Parolanın 6 ila 15 karakter arasında olması gerekmektedir.");
        return;
    }

    // Check for at least one uppercase letter
    if (!/[A-Z]/.test(password)) {
        alert("Geçersiz parola! Parola en az bir büyük harf içermelidir.");
        return;
    }

    // Check for at least one numeric digit
    if (!/\d/.test(password)) {
        alert("Geçersiz parola! Parola en az bir rakam içermelidir.");
        return;
    }

    // Check for at least one special character
    if (!/[!@#$%^&*]/.test(password)) {
        alert("Geçersiz parola! Parola en az bir özel karakter içermelidir (!@#$%^&*).");
        return;
    }

    // Valid password
    alert("Geçerli parola.");
}
document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();

    window.location.href = "calculator.html";
});
