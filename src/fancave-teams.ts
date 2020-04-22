// var grpc = require('grpc');
import * as grpc from 'grpc';

import {TeamRequest, TeamResponse} from './protos/fancave-teams_pb'
import {TeamServiceService, ITeamServiceServer} from './protos/fancave-teams_grpc_pb'

var teams = require ('../db/teams.json')

interface TeamItem {
  arena: string;
  city: string;
  description: string;
  league: string;
  logo: string;
  name: string;
  shortname: string;
  lat: string;
  long: string;
  [prop: string]: any;
}

class TeamServiceHandler implements ITeamServiceServer {
    
  public getTeams(call: grpc.ServerUnaryCall<TeamRequest>, callback: grpc.sendUnaryData<TeamResponse>): void  {
    // var teams = teamsDS;
    console.log('<< getTeams')
    const data : TeamResponse = new TeamResponse();
    const items: Array<Object> = [];

    // For each feature, check if it is in the given bounding box
    teams[call.request.getLeague()].teams.forEach(function(team: TeamItem) {
      // console.log('teams %s', JSON.stringify(team));
      if (call.request.getTeam() == '') {
        // console.log('team found %s', JSON.stringify(team));
        items.push(team);
      }
      else if (call.request.getTeam() != '' && team.name.toLowerCase().indexOf(call.request.getTeam().toLowerCase()) >= 0 ) {
        // console.log('team found %s', JSON.stringify(team));
        items.push(team);
      } 
    });
    data.setTeams(JSON.stringify(items));
    callback(null, data);
    console.log('>> getTeams')
  }


//   public getTeams(call: grpc.ServerWritableStream<TeamRequest>): void  {
//     // var teams = teamsDS;
//     console.log('<< getTeams')
//     const data : TeamResponse = new TeamResponse();
//     const items: Array<Object> = [];

//     // For each feature, check if it is in the given bounding box
//     teams[call.request.getLeague()].teams.forEach(function(team: Team) {
//       // console.log('teams %s', JSON.stringify(team));
//       if (call.request.getTeam() == '') {
//         call.write(team)
//       }
//      else if (call.request.getTeam() != '' && team.getName().toLowerCase().indexOf(call.request.getTeam().toLowerCase()) >= 0 ) {
//        call.write(team)
//       } 
//     });
//     call.end();
//     console.log('>> getTeams')
//   }
}

export default {
  service: TeamServiceService,                // Service interface
  handler: new TeamServiceHandler(),          // Service interface definitions
};