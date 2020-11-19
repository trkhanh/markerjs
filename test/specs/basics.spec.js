/* global describe, it, afterEach, beforeEach, expect, fixtures, sandbox, $, Marker */

describe("Basics", () => {
  "use strict";

  var marker;

  beforeEach(function () {
    marker = sandbox.init();
  });

  afterEach(function () {
    sandbox.empty();
  });

  it("Initialization", () => {
    const options ={
      color:'red',
      highlightedClass:'marker-context'
    }

    expect(TextMarker).toBeDefined();
    expect(TextMarker.createWrapper).toBeDefined();
    expect($.fn.textMarker).toBeDefined();
    expect($.data(sandbox.el).textMarker).toBeDefined();

    expect(sandbox.$el.hasClass("marker-context")).toBeTruthy();
  });

  it("destroying", function () {
    marker.destroy();

    expect(sandbox.$el.hasClass("marker-context")).toBeFalsy();
    expect($.data(sandbox.el).textMarker).not.toBeDefined();
  });
});
