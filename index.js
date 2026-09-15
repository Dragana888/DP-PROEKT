document.cookie = "lang=mk; path=/; Secure";
document.cookie = "delivery=none; path=/; Secure";
document.cookie = "name=none; path=/; Secure";
document.cookie = "email=none; path=/; Secure";
document.cookie = "tel=none; path=/; Secure";


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
    
    // window.location.href = newPath;
}


document.addEventListener('DOMContentLoaded', () => {

    const currentLang = window.location.pathname.includes('/mk/') ? 'mk' : 'en';
    
    document.cookie = `user_lang=${currentLang}; max-age=${365 * 24 * 60 * 60}; path=/; `;
});

console.log(document.cookie)
