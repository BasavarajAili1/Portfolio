function openMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('open');
}

document.getElementById("contactButton").addEventListener("click", function () {
  window.location.href = "mailto:basavarajaili515@gmail.com";
});


    document.getElementById('resumeButton').addEventListener('click', function() {
        // Replace 'resume.pdf' with the path to your resume file
        var resumeUrl = 'https://drive.google.com/file/d/1j4u1uzEewj4f-tk6rYaxnBXc7w22DZfJ/view?usp=sharing';
        var link = document.createElement('a');
        link.href = resumeUrl;
        link.setAttribute('download', 'Basavaraj_Aili_Resume.pdf');
        link.click();
    });

document.getElementById('scrollToTopBtn').addEventListener('click', function() {
        // Scroll to the top section
        document.getElementById('top').scrollIntoView({ behavior: 'smooth' });
    });
