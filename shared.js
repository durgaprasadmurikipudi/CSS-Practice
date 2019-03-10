var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');

var planSelectedButtons = document.querySelectorAll('.plan .button');

for( var i = 0; i < planSelectedButtons.length; i++)
{
    planSelectedButtons[i].addEventListener('click', function() {
        backdrop.style.display = 'block';
        if(modal) modal.style.display = 'block'; 
    });
}

backdrop.addEventListener('click', function() {
    if(modal) modal.style.display= 'none';
    backdrop.style.display = 'none';
    mobileNav.style.display = 'none';
});

var modalCloseButton = document.querySelector('.modal__actions button');

if(modalCloseButton) modalCloseButton.addEventListener('click', function() {
    modal.style.display= 'none';
    backdrop.style.display = 'none';
});

var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');

toggleButton.addEventListener('click', function() { 
    mobileNav.style.display = 'block';
    backdrop.style.display = 'block';
});


