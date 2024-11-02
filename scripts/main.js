// Navbar Js Start
 let navIcon = document.querySelector('.navIcon');
 let navIconX = document.querySelector('.navIconX');
 let navlinks = document.querySelector('.navlinks');

 navIcon.addEventListener('click', ()=>{
    navIcon.classList.add('hidden');
    navIconX.classList.remove('hidden');
    navlinks.classList.remove('hidden');
 });

 navIconX.addEventListener('click', ()=>{
    navIcon.classList.remove('hidden');
    navIconX.classList.add('hidden');
    navlinks.classList.add('hidden');
 })


// Navbar Js end