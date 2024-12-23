    function setcookie(name, value, daysToLive) {
        const date = new Date();
        date.setTime(date.getTime() + daysToLive * 24 * 60 * 60 * 1000);
        let expires = "expires=" + date.toUTCString();
        document.cookie = `${name}=${value}; ${expires}; path=/`;
        }


  

        // Function to get the value of a cookie by name
        function getCookie(name) {
            const value = `; ${document.cookie}`;
            const parts = value.split(`; ${name}=`);
            if (parts.length === 2) return parts.pop().split(';').shift();
            return null;
        }

        // Function to delete a cookie by name
        function deleteCookie(name) {
            document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
        }

        // Function to handle login/logout display
        function updateLoginStatus() {
            const isLoggedIn = getCookie("is_loged_in") === "true";
            const loginLink = document.querySelector('.nav__links li:last-child');

            if (isLoggedIn) {
                loginLink.innerHTML = `<a href="#" id="logout-link">Log out</a>`;
                document.getElementById('logout-link').addEventListener('click', () => {
                    deleteCookie("is_loged_in");
                    updateLoginStatus(); // Refresh the menu
                });
            } else {
                loginLink.innerHTML = `<a href="index.html">Log in</a>`;
            }
        }
 


