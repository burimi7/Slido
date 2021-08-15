
export class Event {
    title: string ='New event';
    slocation: string = '';
    start: Date=new Date();
    end: Date=new Date();
    allDay: boolean = false;
    sdescription: string = '';
    itype: number = 1;
    draggable: boolean =false;
    color:any = {
      primary: '#ad2121',
      secondary: '#FAE3E3',
    };
    
  }