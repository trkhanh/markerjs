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

  it('set/get highlight color', ()=>{
    var wrapper
    
    expect(marker.options.color).toEqual('#ffff7b');

    marker.setColor('green')
    expect(marker.options.color).toEqual('green');

    wrapper = TextMarker.createWrapper(marker.options)
    expect(wrapper.style.backgroundColor).toEqual('green')

    expect(marker.getColor()).toEqual('green')
  })
});
