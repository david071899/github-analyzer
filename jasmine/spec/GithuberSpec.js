describe("element", function() {
  var Githuber = require('../../module/Githuber.js');

  it("try try", function() {
    var davy = new Githuber("davy");
    expect(davy.id).toBe("davy");
  });
});
