import {Car} from './car';
import {PROSPECTS} from './mock-prospects';
import {Color} from './color';
import {Year} from './year';

export const CARS: Car[] = [
  {id: 1, personId: PROSPECTS[0].id, year: Year.years[0].value, model: 'celta', color: Color.colors[0].value},
  {id: 2, personId: PROSPECTS[1].id, year: Year.years[15].value, model: 'uno', color: Color.colors[1].value},
  {id: 3, personId: PROSPECTS[2].id, year: Year.years[10].value, model: 'palio', color: Color.colors[2].value}
];
