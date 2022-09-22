function display(disp) {
    for (let index = 0; index < document.querySelector('.mobile-dropdown').children.length; index++) {
        if(!document.querySelector('.mobile-dropdown').children[index].classList.contains('products-dropdown')){
            document.querySelector('.mobile-dropdown').children[index].style.display = disp
        }
        // if(!document.querySelector('.mobile-dropdown').children[index].classList.contains('products-dropdown')) {
        //     document.querySelector('.mobile-dropdown').children[index].style.display = ''
        // } else {
        //     document.querySelector('.mobile-dropdown').children[index].style.display = 'none'
        // }
    }
}

document.querySelector('.hamburger').addEventListener('click', () => {
    console.log('test');
    if(!document.querySelector('.mobile-dropdown').classList.contains('on')) {
        document.querySelector('.mobile-dropdown').classList.add('on');
        display('flex')
        
    } else {
        document.querySelector('.mobile-dropdown').classList.remove('on')
        display('none')
        document.querySelector('.mobile-dropdown').querySelector('.products-dropdown').style.display = 'none'
    }
})

document.querySelector('.mobile-dropdown').querySelector('.products').addEventListener('click', () => {
    for (let index = 0; index < document.querySelector('.mobile-dropdown').children.length; index++) {
        if(!document.querySelector('.mobile-dropdown').children[index].classList.contains('products-dropdown')) {
            document.querySelector('.mobile-dropdown').children[index].style.display = 'none'
            // if(document.querySelector('.mobile-dropdown').children[index].style.display == 'none') {
            //     document.querySelector('.mobile-dropdown').children[index].style.display = 'flex'
            // } else {
            //     document.querySelector('.mobile-dropdown').children[index].style.display = 'none'
            // } 
        } else {
            // document.querySelector('.mobile-dropdown').children[index].style.display = 'flex'
        }
    }
    if(document.querySelector('.mobile-dropdown').querySelector('.products-dropdown').style.display == '' || document.querySelector('.mobile-dropdown').querySelector('.products-dropdown').style.display == 'none') {
        document.querySelector('.mobile-dropdown').querySelector('.products-dropdown').style.display = 'flex'
    } else {
        document.querySelector('.mobile-dropdown').querySelector('.products-dropdown').style.display = 'none'
    }
    
})

document.querySelector('.close').addEventListener('click', () => {
    document.querySelector('.mobile-dropdown').querySelector('.products-dropdown').style.display = 'none'
    for (let index = 0; index < document.querySelector('.mobile-dropdown').children.length; index++) {
        if(!document.querySelector('.mobile-dropdown').children[index].classList.contains('products-dropdown')) {
            document.querySelector('.mobile-dropdown').children[index].style.display = 'flex'
        } else {
            document.querySelector('.mobile-dropdown').children[index].style.display = 'none'
        }
    }
})
