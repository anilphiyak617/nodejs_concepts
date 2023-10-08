import https from "node:https";

const postData = "This is the data I want to send in the request body";

const options = {
  method: "POST",
  hostname: "example.com",
  path: "/endpoint",
  headers: {
    "Content-Type": "text/plain",
    "Content-Length": Buffer.byteLength(postData),
  },
};

const req = https.request(
  "https://api.coindesk.com/v1/bpi/currentprice.json",
  (res) => {
    console.log("request made");

    let responseData = ""; // Variable to store the response data
    // listening to "data" event that is fired when response data is received
      res.on("data", (chunk) => {
          console.log("data event called")
          // implicitly converting buffer into String using default  UTF-8 encoding
          responseData += chunk;
          console.log(typeof responseData)
    });

    // fired when entire response is received
    res.on("end", () => {
      console.log("Response received:");
        console.log(responseData); // Log the complete response data
        console.log("response end")
    });
  }
);
req.on("error", (error) => {
  console.error(error);
});

// Write the request body data
req.write(postData);

// Signal that the request is complete and should be sent
req.end();
