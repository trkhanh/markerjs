wrapper here is a span HTMLElement with option
export TextMaker out-side global scope.

- For easily to manage DOM 


Ideal: on window get X,Y's scroll


this.options = defaults(options, {
        color: "#ffff7b",
        highlightedClass: "highlighted",
        contextClass: "marker-context",
        onRemoveHighlight: function () {
          return true;
        },
        onBeforeHighlight: function () {
          return true;
        },
        onAfterHighlight: function () {},
      });


TextMarker createed b
find(text, caseSensitive) : get x,y -> remove all range on element -> window.find(text, recurse) -> doHighligh

# 
# Fixtures utils
- create one _createElement 
- Use depricated lib DOMBuilder 
