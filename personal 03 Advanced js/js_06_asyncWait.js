function fetchUserData(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve({name: "chaicode",url: "https://chaicode.com"})
        }, 3000)
    })
}
async function getUserData(){
    try{
        console.log("fetching user data...")
        const userData = await fetchUserdata();//await can only be used inside an async function, it pauses the execution of the function until the promise is resolved or rejected
        conole.log("User data: ", userdata)

    }catch(error){
        console.log("Error:",error)
    }
}
getUserData()

// • async → Makes a function return a Promise.
// • await → Pauses the async function until the Promise resolves or rejects.
// • try...catch → Handles errors from async/await.
// • async/await is a cleaner alternative to .then() and .catch().