import { Component, OnInit,NgZone } from '@angular/core';
// import * as Events_list from '../../assets/Events_list.json';
import {Event} from '../event.model'
import {SlidoService} from '../slido.service'
import {CalendarComponent} from '../calendar/calendar.component'
import * as Events_types from './events_types.json';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours,
  format,
} from 'date-fns';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  SelectedEvent=-1;
  ShowNewEvent=false;
  Events_types: any = (Events_types as any).default;

  constructor(public SlidoService:SlidoService,) { }

  ngOnInit(): void {
  }

  GetIcon(Event){
    return this.Events_types.filter( icon => icon.id == Event.itype )[0].icon;
  }

  GetEventType(Event){
    return this.Events_types.filter( icon => icon.id == Event.itype )[0].stype;
  }
}
