async function getTodos() {
  try {
    const response = await fetch("https://jsonplacder.typicode.com/todos/1");
    const data = await response.json();
    console.log(data);
    console.log(2);
  } catch (err) {
    console.log("Something went wrong...");
    console.log(err);
  }
}

getTodos();
