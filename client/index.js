'use strict'

const { PeerRPCClient }  = require('grenache-nodejs-http')
const Link = require('grenache-nodejs-link')

const grape_link = process.env.GRAPE_LINK; 
const rpc_server_name = process.env.RPC_SERVER_NAME; 

const link = new Link({
  grape: grape_link
})
link.start()

const peer = new PeerRPCClient(link, {})
peer.init()

peer.request(rpc_server_name, { msg: 'hello' }, { timeout: 10000 }, (err, data) => {
  if (err) {
    console.error(err)
    process.exit(-1)
  }
  console.log(data) // { msg: 'world' }
})