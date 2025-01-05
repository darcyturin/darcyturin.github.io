document.addEventListener("DOMContentLoaded", () => {

    const headers = document.getElementsByClassName("main-header");
    window.addEventListener("scroll", () => {
        Array.from(headers).forEach(header => {
            if (window.scrollY > 0) {
                header.classList.add("scrolled");
            } else {
                header.classList.remove("scrolled");
            }
        });
    });

    // Define project data as a constant
    const PROJECTS = [
        { name: "Capstone", filename: "capstone.html" },
        { name: "Ecology Research Proposal", filename: "ecology_proposal.html" },
        { name: "StoryMap", filename: "russian_literature.html" },
    ];

    // Function to fetch project data and populate all dropdowns
    async function populateProjectsDropdowns() {
        try {
            // Find all dropdown menus with the specified class
            const dropdowns = document.querySelectorAll('.nav-item.dropdown');

            // Populate each dropdown with project links
            dropdowns.forEach(dropdown => {
                const dropdownMenu = dropdown.querySelector('.dropdown-menu');

                // Clear any existing items in the dropdown menu
                dropdownMenu.innerHTML = '';

                // console.log('menu', dropdownMenu)

                // Add project links
                PROJECTS.forEach(project => {
                    const listItem = document.createElement('li');
                    const link = document.createElement('a');
                    link.className = 'dropdown-item';
                    link.href = `/projects/${project.filename}`;
                    link.textContent = project.name;
                    listItem.appendChild(link);
                    dropdownMenu.appendChild(listItem);
                });
            });
        } catch (error) {
            console.error('Error loading projects:', error);
        }
    }
    populateProjectsDropdowns();


});

