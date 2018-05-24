const http = require('http');

http.get('http://ec2-34-217-84-129.us-west-2.compute.amazonaws.com/', (resp) => {
  let data = '';
 
  // A chunk of data has been recieved.
  resp.on('data', (chunk) => {
    data += chunk;
  });
 
  // The whole response has been received. Print out the result.
  resp.on('end', () => {
    console.log(data);
    if (data.includes('Congratulations')) {
      console.log('Success!');
      process.exit();
    } else {
      process.exit(1);
    }
  });
 
}).on("error", (err) => {
  console.log("Error: " + err.message);
  process.exit(1);
});
