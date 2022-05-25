(function () {
    let allElements = document.body.querySelectorAll('*') || [];

    allElements = Array.from(allElements);

    const number = (7 % 10) + 1;

    console.log('Current el', allElements[number]);

    allElements[number]?.addEventListener('click', (e) => {
        e.target.style = `background: green; color: red`;
    });
    allElements[number + 1]?.addEventListener('click', (e) => {
        e.target.style = `background: black; color: white`;
    });

    const imgContEl = document.getElementById('img-cont');
    const image = document.getElementById('img');
    const addImage = document.getElementById('img-add');
    const deleteImage = document.getElementById('img-delete');
    const zoomInImage = document.getElementById('img-zoom_in');
    const zoomOutImage = document.getElementById('img-zoom_out');

    addImage.addEventListener('click', () => {
        if (image) {
            imgContEl.appendChild(image);
        }
    });

    zoomInImage.addEventListener('click', () => {
        image.style = 'zoom: 2.0;';
    });

    zoomOutImage.addEventListener('click', () => {
        image.removeAttribute('style');
    });

    deleteImage.addEventListener('click', () => {
        image.remove();
    });
})();
