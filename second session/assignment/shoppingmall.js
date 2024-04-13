document.addEventListener('DOMContentLoaded', function() {
    var sidebarBtn = document.getElementById('hamburger-icon');
    var modal = document.getElementById('myModal');
    var closeBtn = document.getElementsByClassName('close')[0];

    sidebarBtn.onclick = function() {
        modal.style.display = "block";
    }

    closeBtn.onclick = function() {
        modal.style.display = "none";
    }
});

