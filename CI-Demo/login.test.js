const { login } = require("./login");

test("Correct username/password", () => {

    expect(login("admin","123"))
        .toBe(true);

});

test("Wrong username", () => {

    expect(login("abc","123"))
        .toBe(false);

});

test("Wrong password", () => {

    expect(login("admin","999"))
        .toBe(false);

});

test("Wrong username/password", () => {

    expect(login("abc","999"))
        .toBe(false);

});
