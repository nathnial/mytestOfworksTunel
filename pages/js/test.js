function init() {
    console.log("I am a init function")
}

console.log("here is test.js")

setTimeout(() => {
    console.log("arrow function");
}, 1000);

setTimeout(() => console.log("arrow function"), 1500);

let promise = new Promise((abc, reject) => {
    setTimeout(() => {
        abc("Operation completed successfully!");
    }, 2000);
});

promise.then(defq => {
    console.log(defq);  // 输出: "Operation completed successfully!"（2 秒后）
});

async function fetchData() {
    let result = await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data fetched with async/await!");
        }, 1000);
    });
    console.log(result);  // 输出: "Data fetched with async/await!"（1 秒后）
}

fetchData();
