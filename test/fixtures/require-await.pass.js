async function foo() {
    await doSomething();
}

bar(async () => {
    await doSomething();
});

function foo() {
    doSomething();
}

bar(() => {
    doSomething();
});

// Allow empty functions.
async function noop() {}
