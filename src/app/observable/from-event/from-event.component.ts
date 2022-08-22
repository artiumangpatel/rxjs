import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.scss']
})
export class FromEventComponent implements OnInit,AfterViewInit {
      @ViewChild('addbtn') addbtn : ElementRef|any;
  constructor(private dataservice:DataService) { }
  ngAfterViewInit(): void {
    let counter=1;
    fromEvent(this.addbtn.nativeElement,'click').
    subscribe(res => {
      let countVal='video  '+ counter++;
      console.log (countVal)
  this.dataservice.print(countVal,'elContainer');
  this.dataservice.print(countVal,'elContainer2');
  });
  }
   

  ngOnInit(): void {
  }
  


}

