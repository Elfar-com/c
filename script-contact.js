document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const userName = document.getElementById('name').value;
    const userPhone = document.getElementById('phone').value;
    const userEmail = document.getElementById('email').value;
    const userMessage = document.getElementById('message').value;

    const mailtoLink = `mailto:phy.mousa@gmail.com?subject=رسالة من ${encodeURIComponent(userName)}&body=رقم الهاتف: ${encodeURIComponent(userPhone)}%0Aالبريد الإلكتروني: ${encodeURIComponent(userEmail)}%0A%0A الرسالة: ${encodeURIComponent(userMessage)}`;

    window.location.href = mailtoLink;
});
