export type UserType={
    firstName:string ;
    lastName:string;
    email:string;
    avatar:string;
    _id:string;    
    }

export type otherStateType={
    toastRef:null|any;
    isLoading:boolean;
}
export type DebateInitialStateType={
 activeDebate:DebateType |null;
currentDebateTab:"Upcoming"| "LiveDebates";
isUserParticipant:boolean | null;
isLive:boolean|null;
}

export type DebateType={
    _id?:string;
    topic:string;
    startTime:number;
    admin: UserType |null ;
    duration:number;
    participantsCount?:number;
    noOfRounds:number;
    updatedAt?:string;
    createdAt?:string;
    teams:DebateTeam[];
    type:string;
    endTime:number;

}


export  type DebateTeam={
    members:UserType[] ;
    _id?:string;
    vote?:number;
    name:string;
    win?:number;
    lose?:number;
}
export  type DebateTeamPayload={
    members:string[] ;
    name:string;
}
export  type DebateFormPayloadData={
    topic:string;
    startTime:number;
    duration:number;
    participantsCount?:number;
    noOfRounds:number;
    endTime:number;
    teams:DebateTeamPayload[];
    type:string;
    admin:UserType | null;
}
export enum TeamNumber{

    TEAMONE="TEAMONE",
    TEAMTWO="TEAMTWO",


}
export enum THEENUMBSS{
    UPCOMING_TAB="Upcoming",
    LIVE_DEBATE_TAB="LiveDebates"



}
export type WatchType = "AUDIENCE"|"PARTICIPANT"
export type TeamTypeByNumber=TeamNumber.TEAMONE | TeamNumber.TEAMTWO



