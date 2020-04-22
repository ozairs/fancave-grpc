// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var fancave$teams_pb = require('./fancave-teams_pb.js');

function serialize_fancave_TeamRequest(arg) {
  if (!(arg instanceof fancave$teams_pb.TeamRequest)) {
    throw new Error('Expected argument of type fancave.TeamRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_fancave_TeamRequest(buffer_arg) {
  return fancave$teams_pb.TeamRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_fancave_TeamResponse(arg) {
  if (!(arg instanceof fancave$teams_pb.TeamResponse)) {
    throw new Error('Expected argument of type fancave.TeamResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_fancave_TeamResponse(buffer_arg) {
  return fancave$teams_pb.TeamResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var TeamServiceService = exports.TeamServiceService = {
  getTeams: {
    path: '/fancave.TeamService/getTeams',
    requestStream: false,
    responseStream: false,
    requestType: fancave$teams_pb.TeamRequest,
    responseType: fancave$teams_pb.TeamResponse,
    requestSerialize: serialize_fancave_TeamRequest,
    requestDeserialize: deserialize_fancave_TeamRequest,
    responseSerialize: serialize_fancave_TeamResponse,
    responseDeserialize: deserialize_fancave_TeamResponse,
  },
};

exports.TeamServiceClient = grpc.makeGenericClientConstructor(TeamServiceService);
