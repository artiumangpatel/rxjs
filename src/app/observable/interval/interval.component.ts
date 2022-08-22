import { Component, OnInit } from '@angular/core';
import { interval, Subscription, timer } from 'rxjs';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.scss']
})
export class IntervalComponent implements OnInit {
  obsMsg:any;
  videoSubscription:Subscription | undefined;
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    // const broadcastVideo= interval(1000);
    const broadcastVideo= timer(3000,1000);

    this.videoSubscription= broadcastVideo.subscribe(res=>{
      console.log(res)
      this.obsMsg ='video ' + res;
      this.dataService.print(this.obsMsg,'elContainer');
      this.dataService.print(this.obsMsg,'elContainer2');
      this.dataService.print(this.obsMsg,'elContainer3')


      if(res >=5 ){
        this.videoSubscription?.unsubscribe()}
      })
      }


}
