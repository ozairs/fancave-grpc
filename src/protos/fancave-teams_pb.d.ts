// package: fancave
// file: fancave-teams.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class TeamRequest extends jspb.Message { 
    getLeague(): string;
    setLeague(value: string): void;

    getTeam(): string;
    setTeam(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TeamRequest.AsObject;
    static toObject(includeInstance: boolean, msg: TeamRequest): TeamRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TeamRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TeamRequest;
    static deserializeBinaryFromReader(message: TeamRequest, reader: jspb.BinaryReader): TeamRequest;
}

export namespace TeamRequest {
    export type AsObject = {
        league: string,
        team: string,
    }
}

export class TeamResponse extends jspb.Message { 
    getTeams(): string;
    setTeams(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TeamResponse.AsObject;
    static toObject(includeInstance: boolean, msg: TeamResponse): TeamResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TeamResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TeamResponse;
    static deserializeBinaryFromReader(message: TeamResponse, reader: jspb.BinaryReader): TeamResponse;
}

export namespace TeamResponse {
    export type AsObject = {
        teams: string,
    }
}
