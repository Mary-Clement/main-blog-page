
function toggleMenu() {
  const nav = document.querySelector('nav');
  const menuIcon = document.querySelector('.menu-icon');
  const cancelIcon = document.querySelector('.cancel-icon');

  
  nav.classList.toggle('hidden');

  
  menuIcon.classList.toggle('hidden');
  cancelIcon.classList.toggle('hidden');
}


const sidebarItems = document.querySelectorAll('.sidebar-item');

sidebarItems.forEach((item) => {
  
  item.addEventListener('mouseover', () => {
    
    item.style.cursor = 'pointer'; 
  });

  item.addEventListener('mouseout', () => {
    item.style.backgroundColor = 'transparent'; 
  });

  
  

});


