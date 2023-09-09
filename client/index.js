'use strict'

const { PeerRPCClient } = require('grenache-nodejs-http')
const Link = require('grenache-nodejs-link')

const grape_link = process.env.GRAPE_LINK;
const rpc_server_name = process.env.RPC_SERVER_NAME;

const link = new Link({
  grape: grape_link
})
link.start()

const peer = new PeerRPCClient(link, {})
peer.init()



var readline = require('readline');
var log = console.log;

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var readInputFromUser = function () {

  rl.question('ORDER Message: ', function (answer) {
    if (answer == 'exit') //we need some base case, for recursion
      return rl.close(); //closing RL and returning from function.
    log('Got it! Your answer was: "', answer, '"');
    peer.request(rpc_server_name, { msg : answer}, { timeout: 10000 }, (err, data) => {
      if (err) {
        console.error(err)
        process.exit(-1)
      }
      console.log("Message from server is -> " +  JSON.stringify(data)) // { msg: 'world' }
      //Calling this function again to ask new INPUT 
      readInputFromUser();
    }) ; 

     
  });
};

readInputFromUser();