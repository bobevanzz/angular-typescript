"use strict";
for (var x_1 = 1; x_1 <= 100; x_1++) {
    if (x_1 % 3 && x_1 % 5) {
        console.log("FooBar");
    }
    else {
        if (x_1 % 3 == 0) {
            console.log("Foo");
        }
        if (x_1 % 5 == 0) {
            console.log("Bar");
        }
    }
}
