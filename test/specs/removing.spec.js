/* global describe, it, afterEach, beforeEach, expect, fixtures, sandbox */

describe("Removing highlights", () => {
  "use strict";

  var marker;

  fixtures.loadFiles(["removing.01"]);

  beforeEach(function () {
    marker = sandbox.init();
  });

  afterEach(function () {
    sandbox.empty();
  });

  /**
   * Tests removing of highlights.
   * Procedure:
   * [1] Load fixture.
   * [2] Remove proper highlights (all or from given element).
   * [3] Check number of text nodes.
   * [4] Compare HTML after removing with expected fixture.
   * @param params
   * @param {string} params.title - test title
   * @param {string} params.fixture - name of the fixture to load
   * @param {string} [params.which] - array of nodes from which highlights will be removed
   * @param {number} params.expectedTextNodesCount - expected number of text nodes after removing
   * @param {string} params.expectedHTMLFixture - name of fixture which will be used for comparing expected results
   */
  function testRemoving(params) {
    it(params.title, function () {
      var markings = sandbox.setFixture(params.fixture);

      if (params.which) {
        params.which.forEach(function (el) {
          marker.removeHighlights(markings[el][0]);
        });
      } else {
        marker.removeHighlights();
      }

      expect(sandbox.getTextNodes().length).toEqual(
        params.expectedTextNodesCount
      );
      expect(sandbox.html()).toEqual(
        fixtures.getAsHtml(params.expectedHTMLFixture, true)
      );
    });
  }
  testRemoving({
    title: "use case #01",
    fixture: "01.preremove",
    expectedTextNodesCount: 1,
    expectedHTMLFixture: "01.postremove.all",
  });
});
