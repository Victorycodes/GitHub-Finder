class UI {
    constructor() {
        this.profile = document.getElementById('profile')
    }

    // Display profile and ui
    showProfile(user) {
        this.profile.innerHTML = `
            <div class="card card-body">
                <div class="main">
                    <div class="col nine">
                        <img class="img-fluid" src="${user.avatar_url}">
                        <a href="${user.html_url}" target="blank" class="btn">View Profile</a>
                    </div>
                    <div class="col">
                          <div class="flex">
                                <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
                                <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
                                <span class="badge badge-success">Followers: ${user.followers}</span>
                                <span class="badge badge-info">Following: ${user.following}</span> 
                          </div>
                        <br><br>
                        <ul class="list-group">
                            <li class="list-group-item list1">Company: ${user.company}</li>
                            <li class="list-group-item list2">Website/Blog: ${user.blog}</li>
                            <li class="list-group-item list3">Location: ${user.location}</li>
                            <li class="list-group-item list4">Member Since: ${user.created_at}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <h3 class="page-heading">Latest Repos</h3>
            <div id="repos"></div>
        `;
    }

    // Show user repos
    showRepos(repos) {
        let output = '';

        repos.forEach(function(repo) {
            output += `
            <div class="card card-body">
                <div class="row">
                    <div class="col-md-6">
                       <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                    </div>
                    <div class="col-md-6">
                       <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
                       <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
                       <span class="badge badge-success">Forks: ${repo.forms_count}</span>
                    </div>
                </div>
            </div>
            `;
        });

        // Output repos
        document.getElementById('repos').innerHTML = output;
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
        const box = document.querySelector('.searchContainer');
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