import { Component, OnInit ,
  ViewChild,
  TemplateRef,
  Input,
} from '@angular/core';
import { Subject } from 'rxjs';
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
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarView,
} from 'angular-calendar';
import {SlidoService} from '../slido.service'


import {Event} from '../event.model'
import * as Events_types from '../events/events_types.json';

  
const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3',
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF',
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA',
  },
};

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  // constructor() { }

  ngOnInit(): void {
  }
  
  @ViewChild('modalContent', { static: true }) modalContent: TemplateRef<any>;

  view: CalendarView = CalendarView.Month;

  CalendarView = CalendarView;

  viewDate: Date = new Date();

  ShowNewEvent=false;

  NewEvent = new Event();
  Events_types: any = (Events_types as any).default;


  modalData: {
    action: string;
    event: CalendarEvent;
  };

  public refresh: Subject<any> = new Subject();

  // events: CalendarEvent[] = this.SlidoService.AllEvents
  @Input() events: any =[];

  activeDayIsOpen: boolean = true;

  constructor( public SlidoService:SlidoService) {}

  public dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    this.refresh.next();

    this.SlidoService.SelectedDate = date;
    this.SlidoService.EventsToShow = this.SlidoService.AllEvents.filter(event => format(event.start, 'MM/dd/yyyy') == format( this.SlidoService.SelectedDate, 'MM/dd/yyyy') )

    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
      this.viewDate = date;
    }

  }

  handleEvent(action: string, event: CalendarEvent): void {
    this.modalData = { event, action };
    // this.modal.open(this.modalContent, { size: 'lg' });
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }

  
  AddNewEvent(){
    
    this.SlidoService.AllEvents.push(this.NewEvent)
    this.SlidoService.FormatEventsDate();
    
    this.dayClicked({date:new Date(), events:[]})

    this.ShowNewEvent=false;


  }


}
