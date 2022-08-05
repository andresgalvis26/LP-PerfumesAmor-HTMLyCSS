(function() {

    const openButton = document.querySelector('.nav-menu-img')
    const menu = document.querySelector('.nav-link');
    const closeMenu = document.querySelector('.nav-close-img')

    openButton.addEventListener('click', () => {

        //console.log('Funcionando');
        menu.classList.add('nav-link--show')

    })

    closeMenu.addEventListener('click', () => {
        
        // console.log('Funcionando');
        menu.classList.remove('nav-link--show')

    })

})();