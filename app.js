fetch("https://jsonplaceholder.typico")
  .then((data) => {
    return data.json();
  })
  .then((jsonedData) => {
    console.log(jsonedData);
  })
  .catch((err) => {
    console.log("Oh nooo something went wrong");
  })
  .finally(() => {
    console.log("well everything is done, we tried");
  });
