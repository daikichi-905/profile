'use strict';

const answer = window.prompt('ホームページを見ますか？');
if(answer === '見ます') {
  window.alert('ホームページを表示します');
}

const thumbs = document.querySelectorAll('.thumb');
thumbs.forEach(function(item, index) {
  item.onclick = function() {
    document.getElementById('bigimg').src = this.dataset.image;
  }
});
