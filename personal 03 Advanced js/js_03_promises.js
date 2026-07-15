// Concept: fetchData() simulates an asynchronous operation (like an API call) using a Promise. It waits 3 seconds (via setTimeout), then either resolves (success) or rejects (failure) based on the success flag.
// Flow:

// Calling fetchData() immediately returns a pending Promise — the rest of the code doesn't wait, it just registers what to do when the promise settles.
// The first .then() runs only if the promise resolves. It logs the data, then transforms it (toLowerCase()) and returns the new value.
// Returning a value inside .then() automatically wraps it in a new resolved promise, which is what lets you chain another .then() after it.
// The second .then() receives that transformed value and logs it.
// .catch() is the safety net — it runs if the promise rejects at any point in the chain (either from the original promise or an error thrown in any .then()).

// fetchData returns a Promise that resolves/rejects after a simulated delay
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = true;

      // If success is true, the promise is fulfilled with this value
      if (success) {
        resolve("Data fetched successfully");
      } else {
        // If success is false, the promise is rejected with this error
        reject("Error fetching data");
      }
    }, 3000); // 3 second delay to mimic a real async task (e.g., API call)
  });
}

// Call the async function - returns a pending promise immediately
fetchData()
  .then((data) => {
    console.log(data); // Runs only if the promise resolved
    return data.toLowerCase(); // Returned value becomes input for the next .then()
  })
  .then((value) => {
    console.log(value); // Receives the transformed (lowercase) value
  })
  .catch((error) => console.error(error)); 
  // Catches any rejection/error from the promise chain above (single error handler for the whole chain)