exports.handler = function (event, ctx, callback) {
  let ip = event.headers["client-ip"];
  console.log("someone sent a request from : " + ip);
  if (event.httpMethod == "GET") {
    let x = parseInt(Math.random() * 500, 10);
    callback(null, {
      statusCode: 200,
      body: `Random number: ${x}`,
    });
  } else if (event.httpMethod == "POST") {
    console.log("post mehtod used");
    return callback(null, { statusCode: 405, body: "Please use GET method" });
  }
};
