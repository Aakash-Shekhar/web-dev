const { readFile, writeFile } = require("fs");

// instead of below code, promises and async await can be used

console.log("start");
readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const firstText = result;
  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const secondText = result;
    writeFile(
      "./content/result-async.txt",
      `Here is the result : ${firstText}, ${secondText}`,
      { flag: "a" },
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("done with the task");
      }
    );
  });
});
console.log("starting next task");
