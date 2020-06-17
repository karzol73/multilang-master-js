let data, lang

const translate = (lang) => {
    fetch('./lang/' + lang + '.json').then((resp) => {
        return resp.json()
    }).then( (data) => {
        [...document.querySelectorAll('[data-block]')].forEach(block =>
            block.innerHTML = data[block.getAttribute('data-block')][block.getAttribute('data-txt')]
        )
    })
}

translate('hu')

document.querySelectorAll('.btn-lang').forEach(btn => {
    btn.addEventListener('click', (e) => {
        lang = e.target.getAttribute('data-lang')
        translate(lang)
    })
})