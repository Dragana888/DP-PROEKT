


function getCookie(cookieName) {
    let name = cookieName + "=";
    
    let cookieArray = document.cookie.split(';');
    
    for (let i = 0; i < cookieArray.length; i++) {
        let cookie = cookieArray[i].trim();
        
        if (cookie.indexOf(name) === 0) {
            return cookie.substring(name.length, cookie.length);
        }
    }

    return "";
}

if (!getCookie("lang")) {
    document.cookie = "lang=mk; max-age=31536000; path=/";
}

if (!getCookie("delivery")) {
    document.cookie = "delivery=none; max-age=31536000; path=/";
}
if (!getCookie("name")) {
    document.cookie = "name=none; max-age=31536000; path=/";
}
if (!getCookie("email")) {
    document.cookie = "email=none; max-age=31536000; path=/";
}
if (!getCookie("tel")) {
    document.cookie = "tel=none; max-age=31536000; path=/";
}

function changeLanguage(targetLang) {

    console.log("CHANGED TO "+targetLang)
    
    document.cookie = `lang=${targetLang}; max-age=${365 * 24 * 60 * 60}; path=/; `;

    let currentPath = window.location.pathname;
  
    let newPath;
    if (targetLang === 'mk') {
        newPath = currentPath.replace('/prevod/', '/mk/');
    } else {
        newPath = currentPath.replace('/mk/', '/prevod/');
    }
    
     window.location.href = newPath;
}


document.addEventListener('DOMContentLoaded', () => {

    const currentLang = window.location.pathname.includes('/mk/') ? 'mk' : 'en';
    
    document.cookie = `lang=${currentLang}; max-age=${365 * 24 * 60 * 60}; path=/; `;
});

console.log(document.cookie)
