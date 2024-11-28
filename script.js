const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove active class from all tabs
        tabs.forEach(t => t.classList.remove('active'));
        // Add active class to clicked tab
        tab.classList.add('active');

        // Hide all tab contents
        contents.forEach(content => (content.style.display = 'none'));
        // Show content for the selected tab
        const selectedTab = tab.getAttribute('data-tab');
        document.getElementById(selectedTab).style.display = 'block';
    });
});
