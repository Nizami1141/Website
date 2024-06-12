// script.js

function openProject(projectId) {
    const projectDetails = {
        project1: {
            title: "Software Project 1",
            description: "Detailed description of Software Project 1.",
            github: "https://github.com/yourusername/project1",
            youtube: "https://www.youtube.com/watch?v=project1"
        },
        project2: {
            title: "Software Project 2",
            description: "Detailed description of Software Project 2.",
            github: "https://github.com/yourusername/project2",
            youtube: "https://www.youtube.com/watch?v=project2"
        },
        project3: {
            title: "Software Project 3",
            description: "Detailed description of Software Project 3.",
            github: "https://github.com/yourusername/project3",
            youtube: "https://www.youtube.com/watch?v=project3"
        },
        project4: {
            title: "Embedded Project 1",
            description: "Detailed description of Embedded Project 1.",
            github: "https://github.com/yourusername/project4",
            youtube: "https://www.youtube.com/watch?v=project4"
        },
        project5: {
            title: "Embedded Project 2",
            description: "Detailed description of Embedded Project 2.",
            github: "https://github.com/yourusername/project5",
            youtube: "https://www.youtube.com/watch?v=project5"
        },
        project6: {
            title: "Embedded Project 3",
            description: "Detailed description of Embedded Project 3.",
            github: "https://github.com/yourusername/project6",
            youtube: "https://www.youtube.com/watch?v=project6"
        },
        project7: {
            title: "Hardware Project 1",
            description: "Detailed description of Hardware Project 1.",
            github: "https://github.com/yourusername/project7",
            youtube: "https://www.youtube.com/watch?v=project7"
        },
        project8: {
            title: "Hardware Project 2",
            description: "Detailed description of Hardware Project 2.",
            github: "https://github.com/yourusername/project8",
            youtube: "https://www.youtube.com/watch?v=project8"
        },
        project9: {
            title: "Hardware Project 3",
            description: "Detailed description of Hardware Project 3.",
            github: "https://github.com/yourusername/project9",
            youtube: "https://www.youtube.com/watch?v=project9"
        }
    };

    const project = projectDetails[projectId];
    if (project) {
        const projectModal = document.createElement('div');
        projectModal.classList.add('modal', 'fade');
        projectModal.id = 'projectModal';
        projectModal.innerHTML = `
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">${project.title}</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <p>${project.description}</p>
                        <a href="${project.github}" target="_blank" class="btn btn-primary">GitHub</a>
                        <a href="${project.youtube}" target="_blank" class="btn btn-secondary">YouTube</a>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(projectModal);
        $('#projectModal').modal('show');
        $('#projectModal').on('hidden.bs.modal', function () {
            projectModal.remove();
        });
    }
}
