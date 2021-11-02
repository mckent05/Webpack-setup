const capitalizeString = require('./sum');

test('should capitalize the first letter of the string', () => {
  expect(capitalizeString('898989')).toEqual('Akinlade')
});

