const click = document.querySelector('#click');
// const change = document.querySelector('.delete');
// change.innerHTML = `<del>${}</del>`;



// click.onclick = function(){
//   change.innerHTML = '<del>하 존나 인생이란...</del>'
// }

// click.addEventListener('click', function(){
//   click.classList.toggle('delete');
// })

// function clickCheck(){
//   if(click.classList.contains('delete')){
//     click.classList.remove('delete')
//   } else {
//     click.classList.add('delete')
//   }
// }

// click.addEventListener('click', clickCheck);

click.onclick = function(){
  click.classList.toggle('delete')
}