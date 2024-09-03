document.addEventListener('DOMContentLoaded', () => {
    fetch('experience.json')
        .then(response => response.json())
        .then(data => {
            const experienceList = document.getElementById('experience-list');
            data.experience.forEach(exp => {
                const expItem = document.createElement('div');
                expItem.classList.add('experience-item');
                expItem.innerHTML = `
                    <h3>${exp.role}</h3>
                    <p><strong>${exp.organization}</strong></p>
                    <p><em>${exp.duration}</em></p>
                    <p>${exp.description}</p>`;
                experienceList.appendChild(expItem);
            });
        });

    fetch('projects.json')
        .then(response => response.json())
        .then(data => {
            const projectsList = document.getElementById('projects-list');
            data.projects.forEach(proj => {
                const projItem = document.createElement('div');
                projItem.classList.add('project-item');
                projItem.innerHTML = `
                    <h3>${proj.name}</h3>
                    <p>${proj.description}</p>
                    <a href="${proj.link}" target="_blank">View Project</a>`;
                projectsList.appendChild(projItem);
            });
        });

    const sections = document.querySelectorAll('.section');
    const options = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
});
