// var grpc = require('grpc');
import * as grpc from 'grpc';
import 'dotenv/config';
import fancaveHandler from './fancave-teams';

import { protoIndex } from './protos';
//trigger to import proto
protoIndex();

// var fs = require('fs');
// var parseArgs = require('minimist');
// var path = require('path');

// var teams = [];

/**
 * Get a new server with the handler functions in this file bound to the methods
 * it serves.
 * @return {Server} The new server object
 */
export function getServer(): grpc.Server {
  var server = new grpc.Server();
  server.addService(fancaveHandler.service, fancaveHandler.handler);
  return server;
}

export function main(): void {
  const port: string | number = process.env.PORT || 50051;

  if (require.main === module) {
    // var PROTO_PATH = __dirname + '/protos/fancave-teams.proto';
    // var protoLoader = require('@grpc/proto-loader');
    // var packageDefinition = protoLoader.loadSync(
    //   PROTO_PATH,
    //   {
    //     keepCase: true,
    //     longs: String,
    //     enums: String,
    //     defaults: true,
    //     oneofs: true
    //   });
    // var fancave_proto = grpc.loadPackageDefinition(packageDefinition).fancave;
    
    var server = getServer();

    // const creds = {
    //   privkey: fs.readFileSync(path.join(__dirname, `ssl/privkey`)),
    //   cert: fs.readFileSync(path.join(__dirname, `ssl/certificate`)),
    // };
    // let credentials = grpc.ServerCredentials.createSsl(fs.readFileSync('./ssl/ca.crt'), [{
    //   cert_chain: fs.readFileSync('./ssl/server.crt'),
    //   private_key: fs.readFileSync('./ssl/server.key')
    // grpc.ServerCredentials.createSsl(credentials)
    
    server.bindAsync(
        `0.0.0.0:${ port }`,
        
        grpc.ServerCredentials.createInsecure(),
        (err: Error, port: number) => {
            if (err != null) {
                return console.error(err);
            }
            console.log(`gRPC listening on ${ port }`);
        },
    );
    server.start();
    // var myArgs = process.argv.slice(2);
    // var db_path = myArgs[0];
    // console.log('db path : %s', db_path);
    // fs.readFile(db_path, function(err, data) {
    //   if (err) throw err;
    //   teams = JSON.parse(data);
    //   server.start();
    // });
  }
}

main();