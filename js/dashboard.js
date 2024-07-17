// Example script to dynamically update username and recent activities
document.addEventListener('DOMContentLoaded', function() {
    // Replace with actual data retrieval logic
    const userData = {
        username: 'john_doe',
        name: 'John Doe',
        profilePic: 'profile-picture.jpg',
        progress: 75, // Example progress percentage
        recentActivities: [
            { type: 'video', title: 'Introduction to Python', date: '2024-07-18' },
            { type: 'ebook', title: 'JavaScript Basics', date: '2024-07-17' },
            { type: 'pdf', title: 'HTML5 Cheat Sheet', date: '2024-07-16' }
        ]
    };

    // Update DOM elements with user data
    document.getElementById('username').textContent = userData.username;
    document.getElementById('name').textContent = userData.name;

    // Dynamically populate recent activities
    const recentActivitiesDiv = document.getElementById('recentActivities');
    userData.recentActivities.forEach(activity => {
        let activityType = '';
        switch (activity.type) {
            case 'video':
                activityType = 'Watched Video';
                break;
            case 'ebook':
                activityType = 'Read Ebook';
                break;
            case 'pdf':
                activityType = 'Viewed PDF';
                break;
            default:
                activityType = 'Activity';
                break;
        }

        const activityCard = document.createElement('div');
        activityCard.classList.add('activity-card');
        activityCard.innerHTML = `
            <p>${activityType}: <a href="#">${activity.title}</a></p>
            <p>Date: <span class="activity-date">${formatDate(activity.date)}</span></p>
        `;
        recentActivitiesDiv.appendChild(activityCard);
    });
});

// Function to format date (Example: DD/MM/YYYY)
function formatDate(dateString) {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
}
