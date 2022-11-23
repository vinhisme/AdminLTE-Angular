import { EventInput } from '@fullcalendar/angular';
import moment from 'moment';

let eventGuid = 0;
const TODAY_STR = new Date().toISOString().replace(/T.*$/, ''); // YYYY-MM-DD of today
const Date_STR = new Date('2022-12-31').toISOString()

export const INITIAL_EVENTS: EventInput[] = [
  {
    id: createEventId(),
    title: 'Project X',
    editable: true,
    start: TODAY_STR,
    end: Date_STR,
  },
  {
    id: createEventId(),
    title: 'Project A',
    start: new Date('2022-11-01').toISOString(),
    end: TODAY_STR,
    color: 'silver',
    display: "block",
    editable: true,
    exdate: ['2012-12-16']
  },
  {
    id: createEventId(),
    display: 'list-item',
    title: 'Lunch Time',
    start: new Date('2022-11-25 20:00:00').toISOString(),
    end: TODAY_STR + 'T03:00:00',
    color: 'green',
    backgroundColor: 'black',
  },
  {
    id: createEventId(),
    display: 'list-item',
    title: 'Weekly Meeting',
    start: new Date('2022-11-14 16:00:00').toISOString(),
    end: new Date('2022-11-14').toISOString() + 'T03:00:00',
    color: 'pink',
    backgroundColor: 'black',
  },
  {
    id: createEventId(),
    display: 'list-item',
    title: 'Weekly Meeting',
    start: new Date('2022-11-21 16:00:00').toISOString(),
    end: new Date('2022-11-21').toISOString() + 'T03:00:00',
    color: 'pink',
  },
  {
    id: createEventId(),
    display: 'list-item',
    title: 'Weekly Meeting',
    start: new Date('2022-11-28 16:00:00').toISOString(),
    end: new Date('2022-11-28').toISOString()+ 'T13:00:00',
    color: 'pink',
  },
  {
    title: 'Customer Review',
    groupId: 'blueEvents', // recurrent events in this group move together
    daysOfWeek: [ '4' ],
    display: 'list-item',
    startTime: '2022-11-17 10:45:00',
    endTime: '2022-11-19 12:45:00',
  },
  {
    title: 'OFF Working',
    daysOfWeek: ['0'], // these recurrent events move separately
    startTime: '2022-11-27 11:00:00',
    endTime: '2022-11-29 11:30:00',
    color: 'salmon',
    display: 'background',
    allDay: true,
    groupId: '2',
    editable: true
  }
];

export function createEventId() {
  return String(eventGuid++);
}
