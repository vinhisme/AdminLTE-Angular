import { EventInput } from '@fullcalendar/angular';

let eventGuid = 0;
const TODAY_STR = new Date().toISOString().replace(/T.*$/, ''); // YYYY-MM-DD of today
const Date_STR = new Date('2022-12-12').toISOString()

export const INITIAL_EVENTS: EventInput[] = [
  {
    id: createEventId(),
    title: 'Reserved event',
    color: 'cyan',
    editable: true,
    start: TODAY_STR,
    end: Date_STR
  },
  {
    id: createEventId(),
    title: 'Timed event',
    start: new Date('2022-11-12').toISOString(),
    end: TODAY_STR + 'T15:00:00',
    color: 'grey'
  },
  {
    id: createEventId(),
    title: 'Lunch Time',
    start: new Date('2022-11-25 20:00:00').toISOString(),
    end: TODAY_STR + 'T03:00:00',
    color: 'green'
  },
  {
    id: createEventId(),
    title: 'Weekly Meeting',
    start: new Date('2022-11-14 16:00:00').toISOString(),
    end: new Date('2022-11-14').toISOString() + 'T03:00:00',
    color: 'pink'
  },
  {
    id: createEventId(),
    title: 'Weekly Meeting',
    start: new Date('2022-11-21 16:00:00').toISOString(),
    end: new Date('2022-11-21').toISOString() + 'T03:00:00',
    color: 'pink'
  },
  {
    id: createEventId(),
    title: 'Weekly Meeting',
    start: new Date('2022-11-28 16:00:00').toISOString(),
    end: new Date('2022-11-28').toISOString()+ 'T13:00:00',
    color: 'pink'
  }
];

export function createEventId() {
  return String(eventGuid++);
}
