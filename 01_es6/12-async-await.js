function doSomething1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('doSomething1');
            resolve('doSomething1');
        }, 500)
    })
}

function doSomething2(v) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(v + ' doSomething2');
            resolve(v + ' doSomething2');
        }, 1500)
    })
}

async function asyncFunction() {
    try {
        const d1 = await doSomething1();
        const d2 = await doSomething2(d1);
    } catch (e) {

    }
}

asyncFunction();
