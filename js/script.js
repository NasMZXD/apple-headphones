const menuBtn = document.querySelector('.menu-btn');
const menuList = document.querySelector('.header__list');
const menuLink = document.querySelectorAll('.header__link');
const Btn = document.querySelector('.btn');
const headerContent = document.querySelector('.header__content');

const allColors = ['color--pink', 'color--blue', 'color--white', 'color--black', 'color--green']

menuBtn.addEventListener('click', ()=> {
    menuList.classList.toggle('open')
    menuBtn.classList.toggle('open')

});

headerContent.addEventListener('click', ()=> {
    menuList.classList.remove('open')
    menuBtn.classList.remove('open')
});


console.log(menuLink)


const choiceItem = document.querySelectorAll('.choice__item');
const headerContentImg = document.querySelectorAll('.content-item');



choiceItem.forEach(function(item) {
    item.addEventListener('click', function(evt){
        const target = evt.currentTarget;
        const buttonColor = target.dataset.button;
        const contentActive = document.querySelectorAll(`.${buttonColor}`)
        const contentActiveLink = "a." + buttonColor
        console.log(contentActiveLink)
        
        choiceItem.forEach(function(item){
            item.classList.remove('choice__item--pressed')
        })

        target.classList.add('choice__item--pressed')
        
        headerContentImg.forEach(function(element){
            element.classList.remove('img__active')
        })

        contentActive.forEach(function(item) {
            item.classList.add('img__active')
        })


        allColors.forEach(function(iColor){
            menuList.classList.remove(iColor)
        })
        menuList.classList.add(buttonColor)


        menuLink.forEach(function(i){
            allColors.forEach(function(iColor){
                i.classList.remove(iColor)
            })
        })
        menuLink.forEach(function(j){
            j.classList.add(buttonColor)
        })


        allColors.forEach(function(iColor){
            Btn.classList.remove(iColor)
        })
        
        Btn.classList.add(buttonColor)



    });
});