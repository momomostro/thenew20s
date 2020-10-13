var glide = new Glide('#glide-center', {
  type: select.value,
  focusAt: 'center',
  perView: 3
})

select.addEventListener('change', function (event) {
  glide.update({
    type: event.target.value
  })
})

glide.mount()
