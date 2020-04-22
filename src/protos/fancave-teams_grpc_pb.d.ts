// package: fancave
// file: fancave-teams.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as fancave_teams_pb from "./fancave-teams_pb";

interface ITeamServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getTeams: ITeamServiceService_IgetTeams;
}

interface ITeamServiceService_IgetTeams extends grpc.MethodDefinition<fancave_teams_pb.TeamRequest, fancave_teams_pb.TeamResponse> {
    path: string; // "/fancave.TeamService/getTeams"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<fancave_teams_pb.TeamRequest>;
    requestDeserialize: grpc.deserialize<fancave_teams_pb.TeamRequest>;
    responseSerialize: grpc.serialize<fancave_teams_pb.TeamResponse>;
    responseDeserialize: grpc.deserialize<fancave_teams_pb.TeamResponse>;
}

export const TeamServiceService: ITeamServiceService;

export interface ITeamServiceServer {
    getTeams: grpc.handleUnaryCall<fancave_teams_pb.TeamRequest, fancave_teams_pb.TeamResponse>;
}

export interface ITeamServiceClient {
    getTeams(request: fancave_teams_pb.TeamRequest, callback: (error: grpc.ServiceError | null, response: fancave_teams_pb.TeamResponse) => void): grpc.ClientUnaryCall;
    getTeams(request: fancave_teams_pb.TeamRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: fancave_teams_pb.TeamResponse) => void): grpc.ClientUnaryCall;
    getTeams(request: fancave_teams_pb.TeamRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: fancave_teams_pb.TeamResponse) => void): grpc.ClientUnaryCall;
}

export class TeamServiceClient extends grpc.Client implements ITeamServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getTeams(request: fancave_teams_pb.TeamRequest, callback: (error: grpc.ServiceError | null, response: fancave_teams_pb.TeamResponse) => void): grpc.ClientUnaryCall;
    public getTeams(request: fancave_teams_pb.TeamRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: fancave_teams_pb.TeamResponse) => void): grpc.ClientUnaryCall;
    public getTeams(request: fancave_teams_pb.TeamRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: fancave_teams_pb.TeamResponse) => void): grpc.ClientUnaryCall;
}
