function deleteCookie(key) {
    document.cookie = escape(key) + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;';
}

const cookiemgr = {
    get(name) {
        let key = name + '=';
        let cookies = document.cookie.split(';');

        for (let i = 0; i < cookies.length; i++) {
            let cookie = cookies[i];

            while (cookie.charAt(0) == ' ') {
                cookie = cookie.substring(1, cookie.length);
            }

            if (cookie.indexOf(key) == 0) {
                return cookie.substring(key.length, cookie.length);
            }
        }
        return false;
    },

    set(name, value, expiration) {
        const date = new Date(expiration);

        document.cookie = `${escape(name)}=${escape(value)}; path=/; ${expiration ? `expires=${date.toUTCString};` : ''}`;
    },

    delete(name) {
        document.cookie = escape(name) + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;';
    }
};