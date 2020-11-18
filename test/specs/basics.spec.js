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
    expect(Marker).toBeDefined();
    expect(Marker.createWrapper).toBeDefined();
    expect($.fn.Marker).toBeDefined();
    expect($.data(sandbox.el).Marker).toBeDefined();

    expect(sandbox.$el.hasClass("Marker-context")).toBeTruthy();
  });

  it("destroying", function () {
    marker.destroy();

    expect(sandbox.$el.hasClass("Marker-context")).toBeFalsy();
    expect($.data(sandbox.el).textMarker).not.toBeDefined();
  });
});
