fetch('experience.json')
    .then(response => response.json())
    .then(data => {
        const experienceList = document.getElementById('experience-list');
        data.forEach(exp => {
            const div = document.createElement('div');
            div.innerHTML = `<h3>${exp.title}</h3>
                             <p><em>${exp.organization}</em> | ${exp.duration}</p>
                             <ul>${exp.details.map(item => `<li>${item}</li>`).join('')}</ul>`;
            experienceList.appendChild(div);
        });
    });

fetch('projects.json')
    .then(response => response.json())
    .then(data => {
        const projectsList = document.getElementById('projects-list');
        data.forEach(proj => {
            const div = document.createElement('div');
            div.classList.add('project');
            div.innerHTML = `<h3>${proj.name}</h3>
                             <p>${proj.description}</p>
                             <a href="${proj.link}" target="_blank">View on GitHub</a>`;
            projectsList.appendChild(div);
        });
    });
