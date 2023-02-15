(function() {
    const accordeons = document.querySelectorAll('[data-accordeon]');

    for (let accordeon of accordeons) {

        function accordeonShow(item) {
            let control = item.querySelector('.faq__control')
            let content = item.querySelector('.faq__content')

            item.classList.add('open')
            control.setAttribute('aria-expanded', 'true')
            content.setAttribute('aria-hidden', 'false')
            content.style.maxHeight = content.scrollHeight + 'px';
        }

        function accordeonHide(item) {
            let control = item.querySelector('.faq__control')
            let content = item.querySelector('.faq__content')

            item.classList.remove('open')
            control.setAttribute('aria-expanded', 'false')
            content.setAttribute('aria-hidden', 'true')
            content.style.maxHeight = null;
        }

        accordeon.querySelector('.faq__control').onclick = function() {

            if(accordeon.classList.contains('open')) {
                accordeonHide(accordeon)
            } 
            else {
                accordeons.forEach(function(item) {
                    accordeonHide(item)
                }) 
                accordeonShow(accordeon)
            }
        }
    }
})()