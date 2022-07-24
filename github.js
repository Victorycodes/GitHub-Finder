class Github {
    constructor() {
        this.client_id = 'd9308accf8b204d361fd';
        this.client_secret = '844969aeef73956f4ec9e8716d1840532802bb81b';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

         const profile = await profileResponse.json();

        return {
            profile
        }
    }
}