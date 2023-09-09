'use strict'

const { PeerRPCServer }  = require('grenache-nodejs-http')
const Link = require('grenache-nodejs-link')


const grape_link = process.env.GRAPE_LINK; 
const rpc_server_name = process.env.RPC_SERVER_NAME; 

const link = new Link({
  grape: grape_link
})
link.start()

const peer = new PeerRPCServer(link, {
  timeout: 300000
})
peer.init()

const port = 1024 + Math.floor(Math.random() * 1000)
const service = peer.transport('server')
service.listen(port)
console.log(`Started with GRAPE_LINK = ${grape_link} and RPC_SERVER_NAME = ${rpc_server_name}`)

setInterval(function () {
  link.announce(rpc_server_name, service.port, {})
}, 1000)

service.on('request', (rid, key, payload, handler) => {
  console.log(payload) //  { msg: 'hello' }
  handler.reply(null, { msg: 'world' })
});
