;(() => {
  'use strict'
  var e,
    t = document.querySelector('.start button'),
    r = document.querySelector('.card')
  ;(e = r),
    t.addEventListener('click', function (t) {
      var r = t.target
      e.classList.contains('active')
        ? (e.classList.remove('active'), (r.innerText = 'Abrir meu perfil!'))
        : (e.classList.add('active'), (r.innerText = 'Fechar meu perfil!'))
    })
})()
//# sourceMappingURL=main.js.map
