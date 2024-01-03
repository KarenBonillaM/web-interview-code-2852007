var highlight = document.querySelectorAll('[data-highlight-click]');

highlight.forEach(function(item) {
  item.addEventListener('click', function() {
    item.dataset.highlightClick === 'on';
      item.style.backgroundColor = 'blue';
  }, false);
}, this);