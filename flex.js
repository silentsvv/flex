console.log(1);
console.log(2);
function flex(){
  var doc = window.document,
    docEl = doc.documentElement,
    metaEl = doc.querySelector('meta[name="viewport"]'),
    dpr = 1,
    match,
    scale;
    
  if(metaEl){
    match = metaEl.getAttribute('content');
    scale = match.match(/\binitial\-scale=([\d\.]+)/)[1];
    dpr = 1/scale;
  }
  
console.log('3');
console.log('4');

  function getScreenWidth(){
    var width = docEl.getBoundingClientRect().width;

    if (width / dpr > 540) {
        width = 540 * dpr;
    }
    var rem = width / 10;
    console.log(rem);
    docEl.style.fontSize = rem + 'px';
  }
  getScreenWidth();
}

window.onload = function(){
  flex();

  window.addEventListener('resize', function(){
    flex();
  })
}
