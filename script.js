$(document).ready(function() {
  var $form = $('form')

  $form.on('submit', function(e) {
    e.preventDefault()
  // $(this).serializeArray()
    var $h1 = $('h1')
    var $name = Object.values($(this).serializeArray()[0])
    var $email = Object.values($(this).serializeArray()[1])
    var $names = $name[1]
    var $emails = $email[1]
    var $namemail = $names + ' ' + $emails
    // console.log($namemail)
// console.log(Object.values($(this).serializeArray()[1]))
    $h1.text($namemail)

  })







})
