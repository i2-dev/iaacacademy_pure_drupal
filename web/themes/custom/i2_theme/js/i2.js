window.onload = function () {
    // /* all items Intersection */
    const allitems = document.querySelectorAll('.obs-items');

    const revealItems = function (entries, observer) {
        const [entry] = entries;

        if (!entry.isIntersecting) return;

        entry.target.classList.add('obs-active');
        observer.unobserve(entry.target);
    };

    const itemsObserver = new IntersectionObserver(revealItems, {
        root: null,
        threshold: 0.25,
    });

    allitems.forEach(function (item) {
        itemsObserver.observe(item);
    });

    /* news bubble Intersection */
    const onLoadItems = document.querySelectorAll('.onload-items');

    // //start balloom     
    onLoadItems.forEach(function (item) {
        item.classList.add('onload-active');
    });
}