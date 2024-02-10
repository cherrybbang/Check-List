const change = document.querySelectorAll('.check > div');

change.forEach(function(div){
  div.addEventListener('click', function(){
    div.classList.toggle('delete')
  })
})