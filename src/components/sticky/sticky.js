$('body').scrollspy({ target: '#sticky-nav' })
$('[data-spy="scroll"]').on('activate.bs.scrollspy', function () {
    // do something...
  })