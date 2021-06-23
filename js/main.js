let elsQA = document.querySelectorAll('.qa');
let elsQAToggler = document.querySelectorAll('.qa__toggler');

elsQAToggler.forEach(function (toggler) {
    toggler.addEventListener('click', function() {
        elsQA.forEach(function(qa) {
            qa.classList.remove('qa--active');
        })

        toggler.closest('.qa').classList.add('qa--active');
    })
})

let faqBtnLink = document.querySelector('.faq__qu--link');

faqBtnLink.addEventListener('click', (e) => {
    e.preventDefault()

    document.querySelector('.modal').classList.add('visible');
})

let modalBtnCloser = document.querySelector('.modal-btn');

modalBtnCloser.addEventListener('click', function(e) {
    e.preventDefault()

    document.querySelector('.modal').classList.remove('visible');
})