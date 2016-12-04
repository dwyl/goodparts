async function foo() {
    doSomething();
}

bar(async () => {
    doSomething();
});
