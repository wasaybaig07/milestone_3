var form = document.getElementById('resume-form');
var generateResume = document.getElementById('resume-display');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    var resumeHTML = "\n    <h2><b>Resume</b></h2>\n    <h3>Personal Information</h3>\n    <p><b>Name</b>".concat(name, "</p>\n    <p><b>Name</b>").concat(email, "</p>\n    <p><b>Name</b>").concat(phone, "</p>\n    \n    <h3>Education</h3>\n    <b>").concat(education, "</b>\n    \n    <h3>Experience</h3>\n    <b>").concat(experience, "</b>\n    \n    <h3>Skills</h3>\n    <b>").concat(skills, "</b>\n    ");
    if (generateResume) {
        generateResume.innerHTML = resumeHTML;
    }
    else {
        console.error("Your form data is missing!");
    }
});
