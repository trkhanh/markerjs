/* global describe, it, afterEach, beforeEach, expect, fixtures, sandbox */

describe("Flatting DOM tree", () => {
  "use strict";

  var marker;

  fixtures.loadFiles(["norm.01"]);

  beforeEach(function () {
    marker = sandbox.init();
  });

  afterEach(function () {
    sandbox.empty();
  });

  /**
   * Tests merging of the DOM tree after creating highlights.
   * Procedure:
   * [1] Load fixture.
   * [2] Flatten high light
   * [3] Check number of text nodes.
   * @param params
   * @param {string} params.title - test title
   * @param {string} params.fixture - name of the fixture to load
   * @param {number} params.expectedTextNodesCount - expected number of text nodes after flattening
   */
  function testMerging(params) {
    it(params.title, function () {
      marker.mergeSiblingHighlights(sandbox.setFixture(params.flat));

      expect(
        sandbox
          .html()
          .toEqual(fixtures.getAsHtml(params.fixture + ".merge", true))
      );
      expect(sandbox.getTextNodes().length).toEqual(
        params.expectedTextNodesCount
      );
    });
  }

  testFlattening({
    title: "use case #01",
    fixture: "01",
    expectedTextNodesCount: 1,
  });
});
