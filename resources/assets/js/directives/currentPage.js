export default {
    bind(el) {
        const currentLocation = location.href;
        if (el.href === currentLocation) {
            el.classList.add('active');
        }
    }
}
