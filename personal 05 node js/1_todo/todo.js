// Import Node.js built-in File System module
const fs = require("fs");

// Path of the JSON file where tasks will be stored
const filePath = "./tasks.json";

// Function to load all tasks from tasks.json
const loadTasks = () => {
  try {
    // Read file as a Buffer
    const dataBuffer = fs.readFileSync(filePath);

    // Convert Buffer into a string
    const dataJson = dataBuffer.toString();

    // Convert JSON string into a JavaScript array
    return JSON.parse(dataJson);
  } catch (error) {
    // If file doesn't exist or is empty, return an empty array
    return [];
  }
};

// Function to save tasks into tasks.json
const saveTasks = (tasks) => {
  // Convert JavaScript array into JSON string
  const dataJson = JSON.stringify(tasks);

  // Write the JSON string into the file
  fs.writeFileSync(filePath, dataJson);
};

// Function to add a new task
const addTask = (task) => {
  // Load existing tasks
  const tasks = loadTasks();

  // Add the new task to the array
  tasks.push({ task });

  // Save updated tasks back to the file
  saveTasks(tasks);

  // Display success message
  console.log("Task added:", task);
};

// Function to display all tasks
const listTasks = () => {
  // Load all tasks
  const tasks = loadTasks();

  // Print every task with its index
  tasks.forEach((task, index) =>
    console.log(`${index + 1} - ${task.task}`)
  );
};

// Function to remove a task (currently commented out)
// const removeTask = (index) => {
//   const tasks = loadTasks();
//
//   // Check if the task number is valid
//   if (index < 1 || index > tasks.length) {
//     console.log("Invalid task number");
//     return;
//   }
//
//   // Remove one task from the array
//   const removedTask = tasks.splice(index - 1, 1);
//
//   // Save updated tasks
//   saveTasks(tasks);
//
//   // Display removed task
//   console.log("Removed:", removedTask[0].task);
// };

// Read command-line arguments
// Example: node app.js add "Learn Node"
const command = process.argv[2];   // add
const argument = process.argv[3];  // Learn Node

// Decide which function to execute
if (command === "add") {
  // Add a new task
  addTask(argument);

} else if (command === "list") {
  // Display all tasks
  listTasks();

} else if (command === "remove") {
  // Remove a task (removeTask function is currently commented out)
  removeTask(parseInt(argument));

} else {
  // Invalid command entered
  console.log("Command not found!");
}