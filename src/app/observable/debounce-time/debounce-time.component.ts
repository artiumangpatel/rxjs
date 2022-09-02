import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { debounceTime, distinctUntilChanged, fromEvent, map } from 'rxjs';

@Component({
  selector: 'app-debounce-time',
  templateUrl: './debounce-time.component.html',
  styleUrls: ['./debounce-time.component.scss']
})
export class DebounceTimeComponent implements OnInit,AfterViewInit {
  @ViewChild('myInput') myInput:ElementRef | undefined;
  
  reqData=null;
  @ViewChild('myInput2') myInput2:ElementRef | undefined;
  reqData2=null;
  
  
  constructor() { }

  ngOnInit(): void {}
  ngAfterViewInit(): void {
    // Example-1 debounceTime
    const searchTerm= fromEvent<any>(this.myInput?.nativeElement,'keyup')
    .pipe(map(event=>event.target.value),debounceTime(1000),distinctUntilChanged())
   searchTerm.subscribe(res=>{console.log(res);
    this.reqData=res;

    setTimeout(()=>{
      this.reqData=null;
    },1000);
  })


    // Example-2 debounceTime
    const searchTerm2= fromEvent<any>(this.myInput2?.nativeElement,'keyup')
    .pipe(map(event=>event.target.value),debounceTime(1000))
   searchTerm2.subscribe(res=>
    {console.log(res);
    this.reqData2=res;

    setTimeout(()=>{
      this.reqData2=null;
    },1000);
  })
  
  }
  }


