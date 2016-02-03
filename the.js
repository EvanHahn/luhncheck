var htmlEl = document.documentElement
var textEl = document.querySelector('h1')
var inputEl = document.querySelector('input')

function luhn (a, b, c, d, e) {
  for (d = +a[b = a.length - 1], e = 0; b--;) {
    c = +a[b]
    d += ++e % 2 ? 2 * c % 10 + (c > 4) : c
  }
  return !(d % 10)
}

function render (status) {
  if (status === null) {
    textEl.innerHTML = 'Is a number <a href="https://en.wikipedia.org/wiki/Luhn_algorithm">Luhn valid</a>?'
    htmlEl.className = ''
  } else if (status === true) {
    textEl.innerHTML = htmlEl.className = 'yes'
  } else {
    textEl.innerHTML = htmlEl.className = 'no'
  }
}

inputEl.addEventListener('input', function () {
  var val = inputEl.value.trim()

  if (val === '') {
    render(null)
  } else {
    render(luhn(val))
  }
})
