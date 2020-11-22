/* global describe, it, afterEach, beforeEach, expect, fixtures, sandbox */

describe("Flatting DOM tree", () => {
  "use strict";

  var marker;

  fixtures.loadFiles([
    "norm.01",
    "norm.02",
    "norm.03",
    "norm.04",
    "norm.05",
    "norm.06",
    "norm.07",
    "norm.08",
    "norm.09",
    "norm.10",
  ]);

  beforeEach(function () {
    marker = sandbox.init();
  });

  afterEach(function () {
    sandbox.empty();
  });

  /**
   * Tests flattening of the DOM tree after creating highlights.
   * Procedure:
   * [1] Load fixture.
   * [2] Flatten high light
   * [3] Check number of text nodes.
   * @param params
   * @param {string} params.title - test title
   * @param {string} params.fixture - name of the fixture to load
   * @param {number} params.expectedTextNodesCount - expected number of text nodes after flattening
   */
  function testFlattening(params) {
    it(params.title, function () {
      marker.flattenNestedHighlights(sandbox.setFixture(params.fixture));

      expect(sandbox.html()).toEqual(
        fixtures.getAsHtml(params.fixture + ".flat", true)
      );

      expect(sandbox.getTextNodes().length).toEqual(
        params.expectedTextNodesCount
      );
    });
  }

  testFlattening({
    title: "use case #01",
    fixture: "01",
    expectedTextNodesCount: 3,
  });

  testFlattening({
    title: "use case #02",
    fixture: "02",
    expectedTextNodesCount: 3,
  });

  testFlattening({
    title: "use case #03",
    fixture: "03",
    expectedTextNodesCount: 2,
  });

  testFlattening({
    title: "use case #04",
    fixture: "04",
    expectedTextNodesCount: 2,
  });

  testFlattening({
    title: "use case #05",
    fixture: "05",
    expectedTextNodesCount: 2,
  });

  testFlattening({
    title: "use case #06",
    fixture: "06",
    expectedTextNodesCount: 2,
  });

  testFlattening({
    title: "use case #07",
    fixture: "07",
    expectedTextNodesCount: 2,
  });

  testFlattening({
    title: "use case #04",
    fixture: "04",
    expectedTextNodesCount: 2,
  });

  testFlattening({
    title: "use case #08",
    fixture: "08",
    expectedTextNodesCount: 2,
  });

  testFlattening({
    title: "use case #09",
    fixture: "09",
    expectedTextNodesCount: 2,
  });

  testFlattening({
    title: "use case #10",
    fixture: "10",
    expectedTextNodesCount: 2,
  });
});
