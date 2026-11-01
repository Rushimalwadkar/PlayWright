const myPromise = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    resolve("Data fetched successfully");
  } else {
    reject("Error while fetching data");
  }
});

myPromise
  .then((result) => console.log("Then:", result))
  .catch((error) => console.log("Catch:", error))
  .finally(() => console.log("Finally: promise completed"));

function fetchUser() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("User: Rushi"), 1000);
  });
}

fetchUser()
  .then((user) => {
    console.log(user);
    return "User: John";
  })
  .then((user) => console.log(user));

const promise1 = Promise.resolve("Order 1");
const promise2 = Promise.resolve("Order 2");
const promise3 = new Promise((resolve) => setTimeout(() => resolve("Order 3"), 500));

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log("All orders:", values);
});

Promise.race([promise1, promise3]).then((value) => {
  console.log("Fastest order:", value);
});

async function getData() {
  try {
    const result = await fetchUser();
    console.log("Await:", result);
  } catch (error) {
    console.log("Await error:", error);
  }
}

getData();
