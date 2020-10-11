function getDataWithXMLHttp(url) {
  const xhttp = new XMLHttpRequest();
  xhttp.open("GET", url);
  xhttp.send();
  xhttp.addEventListener("load", function () {
    console.log(`Received: ${this.response}`);
  });
  xhttp.addEventListener("error", function (e) {
    console.log(`Error: ${e.type}`);
  });
}

const getDataWithCallback = (url, callback) => {
  // fetch data using a XMLHTTPRequest and pass the error/response to the
  // callback function

  const xhttp = new XMLHttpRequest();
  xhttp.open("GET", url);
  xhttp.send();
  xhttp.addEventListener("load", function () {
    callback(false, JSON.parse(this.response));
  });
  xhttp.addEventListener("error", function (e) {
    callback(true, e.type);
  });
};

const getDataWithPromise = async (url, settings) => {
  // fetch data using a XMLHTTPRequest and return a promise
  //   Update the function so that it also support different HTTP methods
  //   (POST, PUT, DELETE, etc) and request payloads.
  return await fetch(url, settings);
};

const consoleLogCallback = (err, value) => {
  if (err) {
    console.erroe(value);
  } else {
    console.log(value);
  }
};

const url = "https://jsonplaceholder.typicode.com/todos/1";

//ex 1
getDataWithCallback(url, consoleLogCallback);

const settings = {
  method: "GET", // *GET, POST, PUT, DELETE, etc.
  headers: {
    "Content-Type": "application/json",
  },
  //body: JSON.stringify({}), // body data type must match "Content-Type" header
};

//ex 2
getDataWithPromise(url, settings)
  .then((r) => r.json())
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.error(err));

// Make use of async/await and try catch to replicate the behavior of the second example
(async () => {
  const r = await getDataWithPromise(url, settings);
  if (r.status !== 200) {
    console.error("error while loading");
  } else {
    console.log(await r.json());
  }
})();
