const click = document.querySelector('#click');
const change = document.querySelector('.delete');


click.onclick = function(){
  change.innerHTML = '<del>하 존나 인생이란...</del>'
}



// 클릭시 <del>을 붙인다...
// css에 따로 지정해주어도 된다. .click {backgroudn : #000} 나중에 복합 클래스로 달아주면 되니까~ 