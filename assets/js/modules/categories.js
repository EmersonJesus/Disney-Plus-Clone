const categoriesModule = () => {
    const categories = document.querySelectorAll('[data-category="category"]')

    const preventDefault = (event) => {
        event.preventDefault()
    }

    const setListeners  = () => {
        categories.forEach(function(slide, index) {
            const link =  slide.querySelector('.category-menu__link')
            link.addEventListener("click", preventDefault)
        })
    }

    function init() {
        setListeners()
    }
    
    return {
        init
    }
}

export default categoriesModule