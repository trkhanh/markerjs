/* global describe, it, afterEach, beforeEach, expect, fixtures, sandbox, $, TextHighlighter */

describe("Finding", function () {
  "use strict";

  var marker;

  fixtures.loadFiles(["lorem.01", "lorem.02"]);

  beforeEach(function () {
    marker = sandbox.init();
  });

  afterEach(function () {
    sandbox.empty();
  });
});
