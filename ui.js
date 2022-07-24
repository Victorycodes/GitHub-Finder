class UI {
    constructor() {
        this.profile = document.getElementById('profile')
    }

    // Display profile and ui
    showProfile(user) {
        this.profile.innerHTML = `
            <div class="card card-body">
                <div class="row">
                    <div class="col nine">
                        <img class="img-fluid" src="${user.avatar_url}">
                        <a href="${user.html_url}" target="blank" class="btn">View Profile</a>
                    </div>
                    <div class="col">
                        <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
                        <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
                        <span class="badge badge-success">Followers: ${user.followers}</span>
                        <span class="badge badge-info">Following: ${user.following}</span> 
                        <br><br>
                        <ul class="list-group">
                            <li class="list-group-item">Company: ${user.company}</li>
                            <li class="list-group-item">Website/Blog: ${user.blog}</li>
                            <li class="list-group-item">Location: ${user.location}</li>
                            <li class="list-group-item">Member Since: ${user.created_at}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <h3 class="page-heading">Latest Repos</h3>
            <div id="repos"></div>
        `;
    }

    // Show alert message
    showAlert (message, className) {
        // Clear any remaining alerts
        this.clearAlert();
        // Create div
        const div = document.createElement('div');
        // Add classes
        div.className = className;
        // Add text
        div.appendChild(document.createTextNode(message));
        // Get parent
        const container = document.querySelector('.searchContainer');
        // Get Search box
        const search = document.querySelector('.search');
        // Insert alert
        container.insertBefore(div, search);

        // Timeout after 3 secs
        setTimeout(() => {
            this.clearAlert();
        }, 3000);
    }

 
    // Clear alert message
    clearAlert() {
        const currentAlert = document.querySelector('.alert');

        if (currentAlert) {
            currentAlert.remove();
        }
    }

    // Clear profile
    clearProfile() {
        this.profile.innerHTML = '';
    }
}  