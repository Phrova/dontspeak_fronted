document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('a[href]:not([target="_blank"]):not([href^="#"]):not([data-no-transition])');
    links.forEach(link => link.addEventListener('click', e => {
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
        const href = link.getAttribute('href');
        if (!href || href.startsWith('javascript:') || href.startsWith('mailto:')) return;
        e.preventDefault();
        document.body.classList.add('page-exiting');
        setTimeout(() => { window.location.href = href; }, 350);
    }));
});