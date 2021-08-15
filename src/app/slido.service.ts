import { Injectable } from '@angular/core';
import * as Events_list from '../assets/Events_list.json';

@Injectable({
  providedIn: 'root'
})
export class SlidoService {

  AllEvents: any = (Events_list as any).default;

  constructor() { 
this.FormatEventsDate();
  }

  FormatEventsDate(){

    for(var i=0;i<this.AllEvents.length;i++){
      this.AllEvents[i].start = new Date(this.AllEvents[i].start)
      this.AllEvents[i].end = new Date(this.AllEvents[i].end)
    }

  }
  

  SelectedDate=new Date();
  EventsToShow=[];
}
