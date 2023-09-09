# bitfinex

## Start Server : 
	- Go in the server folder
	- GRAPE_LINK="http://127.0.0.1:30001" RPC_SERVER_NAME=SERVER node index.js  // This is to connect to the GRAPP 3001
	- Open Another terminal and start the server connected to another grape instance. 
	- GRAPE_LINK="http://127.0.0.1:20001" RPC_SERVER_NAME=SERVER node index.js
	
	
## Start Client: 
	- Go in the client folder 
	- do NPM install
	- GRAPE_LINK="http://127.0.0.1:30001" RPC_SERVER_NAME=SERVER node index.js 
	- This will regularly ask for the message and will send it to the SERVER 3001. 
	 
	
