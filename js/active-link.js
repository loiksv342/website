// Ten kod JS obsługuje podświetlanie się aktywnego linku w menu na podstawie bieżącej strony
document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('#nav li');
    links.forEach(link => {
        if (window.location.href === link.href) {
            link.classList.add('active');
        }
    });
});
