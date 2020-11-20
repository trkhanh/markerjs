/* global jQuery, Marker */

(function ($) {
  "use strict";

  var PLUGIN_NAME = "textMarker";

  function wrap(fn, wrapper) {
    return function () {
      wrapper.call(this, fn);
    };
  }

  /**
   * The jQuery plugin namespace.
   * @external "jQuery.fn"
   * @see {@link http://docs.jquery.com/Plugins/Authoring The jQuery Plugin Guide}
   */

  /**
   * Returns TextMarker instance which is bound to given jQuery element.
   * @returns {TextMarker}
   * @example $('#sandbox').getTextMarker() // returns TextMarker instance
   * @function external:"jQuery.fn".getMarker
   */

  $.fn.getMarker = function () {
    return this.data(PLUGIN_NAME);
  };

  /**
   * Creates TextMarker instance and applies it to the given jQuery object.
   * @param {object} options Same as {@link TextMarker} options.
   * @returns {jQuery}
   * @example $('#sandbox').textMarker({ color: 'red' });
   * @function external:"jQuery.fn".textMarker
   */
  $.fn[PLUGIN_NAME] = function (options) {
    return this.each(function () {
      var el = this,
        tm;

      if (!$.data(el, PLUGIN_NAME)) {
        tm = new TextMarker(el, options);

        tm.destroy = wrap(tm.destroy, function (destroy) {
          destroy.call(tm);
          $(el).removeData(PLUGIN_NAME);
        });

        $.data(el, PLUGIN_NAME, tm);
      }
    });
  };
})(jQuery);
