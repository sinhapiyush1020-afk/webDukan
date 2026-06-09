console.log("WebDukan Loaded");
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close menu when a link is clicked
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});
function openWhatsApp(exampleName) {
    const text = `Hello WebDukan! 👋

I am interested in your website .

*Selected Design:* ${exampleName}

Please share more details about this design, pricing, and timeline.

Thank you!`;

    window.open(`https://wa.me/918092230776?text=${encodeURIComponent(text)}`, '_blank');
}
function sendWA(name, imgUrl) {
    const text = `Hello WebDukan! 👋

Mujhe aapki ek website design mein interest hai.

*Selected Design:* ${name}
*Design Preview:* ${imgUrl}

Kripya is style ki website ke baare mein aur details dijiye — pricing, timeline, aur customization options.

Thank you! 🙏`;

    window.open(`https://wa.me/918092230776?text=${encodeURIComponent(text)}`, '_blank');
}
// =========================
// CONTACT FORM — WHATSAPP
// =========================

document.getElementById('websiteForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const ownerName     = document.getElementById('ownerName').value.trim();
    const mobileNumber  = document.getElementById('mobileNumber').value.trim();
    const businessName  = document.getElementById('businessName').value.trim();
    const businessAddress = document.getElementById('businessAddress').value.trim();
    const websiteType   = document.getElementById('websiteType').value.trim();
    const requirements  = document.getElementById('requirements').value.trim();

    // Validation
    if (!ownerName || !mobileNumber) {
        alert('Please enter your Name and Mobile Number.');
        return;
    }

    const message = `Hello WebDukan! 👋

Mujhe ek website chahiye. Yahan meri details hain:

👤 *Owner Name:* ${ownerName}
📞 *Mobile Number:* ${mobileNumber}
🏪 *Business Name:* ${businessName || 'Not provided'}
📍 *Business Address:* ${businessAddress || 'Not provided'}
🌐 *Website Type:* ${websiteType || 'Not selected'}
📝 *Requirements:* ${requirements || 'None'}

Please contact me with pricing and timeline.

Thank you! 🙏`;

    window.open(`https://wa.me/918092230776?text=${encodeURIComponent(message)}`, '_blank');

    // Reset form after sending
    this.reset();
});
