var fs = require('fs');
var parseArgs = require('minimist');
var path = require('path');

var PROTO_PATH = __dirname + '/protos/fancave-teams.proto';
var grpc = require('grpc');
var protoLoader = require('@grpc/proto-loader');
var packageDefinition = protoLoader.loadSync(
  PROTO_PATH,
  {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true
  });
var fancave_proto = grpc.loadPackageDefinition(packageDefinition).fancave;
var teams = [];

function getTeams(call) {
  console.log('<< getTeams')
  // For each feature, check if it is in the given bounding box
  teams[call.request.league].teams.forEach(function(team) {
    // console.log('teams %s', JSON.stringify(team));
    if (call.request.team == '') {
      console.log('team found %s', JSON.stringify(team));
      call.write(team);
    }
    else if (call.request.team != '' && team.name.toLowerCase().indexOf(call.request.team.toLowerCase()) >= 0 ) {
      console.log('team found %s', JSON.stringify(team));
      call.write(team);
    } 
  });
  call.end();
  console.log('>> getTeams')
}

/**
 * Get a new server with the handler functions in this file bound to the methods
 * it serves.
 * @return {Server} The new server object
 */
function getServer() {
  var server = new grpc.Server();
  server.addProtoService(fancave_proto.TeamService.service, {
    getTeams: getTeams,
  });
  return server;
}

if (require.main === module) {
  // If this is run as a script, start a server on an unused port
  var server = getServer();
  server.bind('0.0.0.0:50051', grpc.ServerCredentials.createInsecure());
  // var argv = parseArgs(process.argv, {
  //   string: 'db_path'
  // });
  var myArgs = process.argv.slice(2);
  var db_path = myArgs[0];
  console.log('db path : %s', db_path);
  fs.readFile(db_path, function(err, data) {
    if (err) throw err;
    teams = JSON.parse(data);
    server.start();
  });
}

exports.getServer = getServer;