document.addEventListener('DOMContentLoaded', function() {
    var headerIcon = document.querySelector('.header-icon');

    if (headerIcon) {
        headerIcon.addEventListener('click', function() {
            
            window.location.href = 'shoppingmall.html';
        });
    }
});
