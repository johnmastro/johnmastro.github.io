document.addEventListener('DOMContentLoaded', function () {
  var span = document.getElementById('contact-email');
  if (span == null) return;
  var addr = ['jbm', '@', 'jbm.io'].join('');
  var link = document.createElement('a');
  link.href = 'mailto:' + addr;
  link.innerHTML = addr;
  span.replaceWith(link);
});
