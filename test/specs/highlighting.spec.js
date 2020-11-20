/* global $, describe, it, afterEach, beforeEach, expect, fixtures, sandbox, TextMarker */

describe("Highlighting Range", () => {
  "use strict";

  var marker;

  fixtures.loadFiles(["lorem.01", "lorem.02", "lorem.03", "special-tags"]);

  beforeEach(function () {
    marker = sandbox.init();
  });

  afterEach(function () {
    sandbox.empty();
  });

  /**
   * Test highlighting or ranges
   * Procedure:
   * [1] Load fixture.
   * [2] Create range.
   * [3] Highlight range
   * [4] Check text content of created highlights.
   * @param params
   * @param {string} params.title - test title
   * @param {string} params.fixture - name of the fixture load
   * @param {function} params.rangeCreator - function which should create range object for this test
   * @param {array} params.expectedHighlights - array of text content of expected highlights
   */
  function testMarker(params) {
    it(params.title, () => {
      var markings = sandbox.setFixture(params.fixture),
        range,
        nodes;

      if (markings.node) {
        nodes = markings.node;
      }

      range = params.rangeCreator.apply(this, nodes);

      marker.highlightRange(range, TextMarker.createWrapper(marker.options));

      expect(
        marker.getHighlights({ container: sandbox.el }).map(function (h) {
          return h.textContent;
        })
      ).toEqual(params.expectedHighlights);
    });
  }

  testMarker({
    fixture: "lorem.01",
    title: "use case #01",
    expectedHighlights: ["ipsum"],
    rangeCreator: function (node) {
      return sandbox.addRange(node.childNodes[0], node.childNodes[0], 6, 11);
    },
  });
});
