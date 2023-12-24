const navlinks = document.querySelectorAll('.nav-item');
const menuToggle = document.getElementById('navbarText');
const bsCollapse = bootstrap.getOrCreateInstance(menuToggle, {toggle: false});
navlinks.forEach(e => {
    e.addEventListener('click', () => bsCollapse.toggle())
})