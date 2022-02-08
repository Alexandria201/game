function render(blockArray) {
    let markup = '';
    blockArray.forEach((row) => {
        markup += '<div class = "row">';
        Array.from(row).forEach((item) => {
            if (item === 0) {
                markup += '<div class = "item"></div>';
            } else if (item === 1) {
                markup += '<div class = "tree"></div>';
            } else if (item === 2) {
                markup += '<div class = "men"></div>';
            }
        });
        markup += '</div>';
    });
    document.getElementById('app').innerHTML = markup;
};

export default render;