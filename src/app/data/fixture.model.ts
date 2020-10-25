export interface Fixtures{ //description of how our fixture has data
  id: number;
  team1: string;
  team2: string;
  date: string;
  time: string;
  stadium: string;
  playersT1?: string[15];
  playersT2?: string[15];
  linesman1?: string[2];
  linesman2?: string[2];
  managerT1?: string;
  managerT2?: string;
  ticket_cost?: number;
  referee?: string;
}

//hard coded few data for fixtrues
export const fixtures: Fixtures[] = [
  {
    id:1,
    team1: 'Paro United FC',
    team2: 'Thimphu FC',
    date: '12/08/2020',
    time: '10:40PM',
    stadium: 'Changlimithang',
  }
]
