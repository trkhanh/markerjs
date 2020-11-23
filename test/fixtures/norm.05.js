
fixtures.register('05', function () {
  DIV(
      HIGHLIGHT({ color: 'red', marked: true }, 'Lorem ipsum '),
      HIGHLIGHT({ color: 'red' },
          HIGHLIGHT({ color: 'red', marked: true }, 'dolor')
      ),
      HIGHLIGHT({ color: 'red', marked: true }, ' sit amet')
  )
});

fixtures.register('05.flat', function () {
  DIV(
      HIGHLIGHT({ color: 'red', marked: true }, 'Lorem ipsum '),
      HIGHLIGHT({ color: 'red', marked: true }, 'dolor'),
      HIGHLIGHT({ color: 'red', marked: true }, ' sit amet')
  )
});
