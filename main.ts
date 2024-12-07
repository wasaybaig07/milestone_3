let form = document.getElementById('resume-form') as HTMLFormElement;
let generateResume = document.getElementById('resume-display') as HTMLDivElement;

form.addEventListener('submit',(event:Event) =>{
    event.preventDefault();
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLInputElement).value;
    const experience = (document.getElementById('experience') as HTMLInputElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value;

    const resumeHTML = `
    <h2><b>Resume</b></h2>
    <h3>Personal Information</h3>
    <p><b>Name</b>${name}</p>
    <p><b>Name</b>${email}</p>
    <p><b>Name</b>${phone}</p>
    
    <h3>Education</h3>
    <b>${education}</b>
    
    <h3>Experience</h3>
    <b>${experience}</b>
    
    <h3>Skills</h3>
    <b>${skills}</b>
    `;

    if(generateResume){
        generateResume.innerHTML = resumeHTML;
    } else{
        console.error("Your form data is missing!")
    }
})

