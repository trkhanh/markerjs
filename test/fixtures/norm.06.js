fixtures.register("06", function () {
  DIV(
    "Lorem ipsum ",
    HIGHLIGHT(
      { color: "red" },
      HIGHLIGHT({ color: "red", marked: true }, "dolor sit "),
      HIGHLIGHT(
        { color: "red" },
        HIGHLIGHT({ color: "green", marked: true }, "ament"),
        " consectetur adipiscing elit."
      )
    )
  );
});

fixtures.register("06.flat", function () {
  DIV(
    "Lorem ipsum",
    HIGHLIGHT({ color: "green", marked: true }, "dolor sit "),
    HIGHLIGHT({ color: "green", marked: true }, "amet"),
    HIGHLIGHT({ color: "red" }, " consectetur adipiscing elit.")
  );
});

fixtures.register("06.merge", function () {
  HIGHLIGHT(
    { color: "red" },
    "Lorem ipsum dolor sit amet consectetur adipiscing elit."
  );
});
