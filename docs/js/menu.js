document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu-btn');
    const closeBtn = document.getElementById('close-btn');
    const sidebar = document.getElementById('sidebar');
    const main = document.getElementById('main');
  
    menuBtn.addEventListener('click', () => {
      sidebar.classList.add('active');
      main.classList.add('shifted');
    });
  
    closeBtn.addEventListener('click', () => {
      sidebar.classList.remove('active');
      main.classList.remove('shifted');
    });
  
    window.addEventListener('click', (e) => {
      if (
        sidebar.classList.contains('active') &&
        !sidebar.contains(e.target) &&
        e.target !== menuBtn
      ) {
        sidebar.classList.remove('active');
        main.classList.remove('shifted');
      }
    });
  });
  