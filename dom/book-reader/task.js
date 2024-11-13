const book = document.getElementById('book');

document.querySelectorAll('.font-size').forEach(control => {
    control.addEventListener('click', event => {
        event.preventDefault();
    
        document.querySelector('.font-size_active').classList.remove('font-size_active');
        control.classList.add('font-size_active');
        book.classList.remove('book_fs-small', 'book_fs-big');
        const size = control.dataset.size;
        if (size === 'small') book.classList.add('book_fs-small');
        if (size === 'big') book.classList.add('book_fs-big');
    });
});

document.querySelectorAll('.color[data-text-color]').forEach(control => {
    control.addEventListener('click', event => {
        event.preventDefault();
        document.querySelector('.color_active[data-text-color]').classList.remove('color_active');
        control.classList.add('color_active');
        book.classList.remove('book_color-gray', 'book_color-whitesmoke', 'book_color-black');
        const textColor = control.dataset.textColor;
        if (textColor) book.classList.add(`book_color-${textColor}`);
    });
});

document.querySelectorAll('.color[data-bg-color]').forEach(control => {
    control.addEventListener('click', event => {
        event.preventDefault();
        document.querySelector('.color_active[data-bg-color]').classList.remove('color_active');
        control.classList.add('color_active');
        book.classList.remove('book_bg-gray', 'book_bg-black', 'book_bg-white');
        const bgColor = control.dataset.bgColor;
        if (bgColor) book.classList.add(`book_bg-${bgColor}`);
    });
});