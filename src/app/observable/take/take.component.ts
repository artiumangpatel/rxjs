import { Component, OnInit } from '@angular/core';
import { from, fromEvent, interval ,take, takeLast, takeUntil, timer} from 'rxjs';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.scss']
})
export class TakeComponent implements OnInit {

  constructor(private dataservice:DataService) { }

  ngOnInit(): void {
    const sourse= from(this.dataservice.array);
   //example1 = take
    sourse.pipe(take(5)).
    subscribe(res=>{console.log(res);
    this.dataservice.print(res,'elContainer')})

    //example 2 = takeLast
    sourse.pipe(takeLast(5)).
    subscribe(res=>{console.log(res);
    this.dataservice.print(res,'elContainer2')})

    //example3 = takeUntil
    const sourse1= interval(1000);
    let condition1=timer(6000);
    let condition2=fromEvent(document,'click')
    sourse1.pipe(takeUntil(condition2)).
    subscribe(res=>{console.log(res);
    this.dataservice.print(res,'elContainer3')})


  }


}
