/*
  Populate `data-text-content` attribute with the element's text content value.

  Automatically search for elements matching selector `[data-text-content]`.
  Attempt to keep in sync using a MutationObserver.
*/
(function(){

  // helper
  var qsa = document.querySelectorAll.bind(document);

  // attribute to match, populate and sync
  var attr = 'data-text-content';

  if (window.MutationObserver){
    // TODO: find out why contenteditable doesn't trigger MutationObserver
    var mo = new MutationObserver(function(mutations){
      mutations.forEach(function(mutation) {
        mutation.target.setAttribute(attr, mutation.target.textContent);
      });
    });
  }

  document.addEventListener('DOMContentLoaded', function(){
    var elements = Array.prototype.slice.call(qsa('['+ attr +']'));

    elements.forEach(function(el){
      el.setAttribute(attr, el.textContent);

      // if MutationObserver available, observe
      mo && mo.observe(el, { childList: true, characterData: true });
    });
  });

})();
