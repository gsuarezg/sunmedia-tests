if (typeof Object.assign !== 'function'){
  Object.assign = function (target) {
    "use strict";
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (source.hasOwnProperty(key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
}
