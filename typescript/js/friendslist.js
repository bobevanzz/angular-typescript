"use strict";
var Friend = /** @class */ (function () {
    function Friend(name, email, years) {
        this.name = name;
        this.email = email;
        this.years = years;
    }
    Friend.prototype.printOut = function () {
        console.log("name =" + this.name + ",email=" + this.email + ", years=" + this.years);
    };
    return Friend;
}());
var frnds = [
    new Friend("Chris", "cbrown@gmail.com", 1),
    new Friend("Kevin", "kmanifold@gmail.com", 6),
    new Friend("Greg", "gmanifold@gmail.com", 3),
    new Friend("Cat", "cmitchell@gmail.com", 6),
    new Friend("Nate", "nnate@gmail.com", 1)
];
for (var _i = 0, frnds_1 = frnds; _i < frnds_1.length; _i++) {
    var friend = frnds_1[_i];
    friend.printOut();
}
