import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.scss']
})
export class FromEventComponent implements OnInit,AfterViewInit {
      @ViewChild('addbtn') addbtn : ElementRef|any;
  constructor() { }
  ngAfterViewInit(): void {
    let counter=1;
    fromEvent(this.addbtn.nativeElement,'click').
    subscribe(res => {
      let countVal='video  '+ counter++;
      console.log (countVal)
  this.print(countVal);
  });
  }
    print(val:any){
//element create for li
let el = document.createElement('li');
el.innerText=val;
document.getElementById('elContainer')?.appendChild(el);
    }
  

  ngOnInit(): void {
  }
  


}

