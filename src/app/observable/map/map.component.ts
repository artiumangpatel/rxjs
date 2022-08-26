import { Component, OnInit } from '@angular/core';
import { from, interval, map, Subscription } from 'rxjs';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

   sub1:Subscription | undefined;
   sub2: Subscription | undefined;
    msg1:any;
    msg2:any;
  constructor(private dataservice:DataService) { }

  ngOnInit(): void {
    const  broadCastVideos = interval(1000);

    //example-1
    this.sub1= broadCastVideos.pipe(map(data=>data)).
    subscribe(res=>{
                // console.log('Video'+res)
                this.msg1=res;
              })
              setTimeout(()=>{
                this.sub1?.unsubscribe()
              },10000 );

     //example 2 map multiply by 2       
     this.sub2= broadCastVideos.pipe(map(data=>data*2)).
     subscribe(res=>{
                 // console.log('Video'+res)
                 this.msg2=res;
               })
               setTimeout(()=>{
                 this.sub2?.unsubscribe()
               },10000 );

      //example3

      const mapObs =from([{id:1,name:"arti"},
                         {id:2,name:"umang"},
                         {id:3,name:"meera"},
                         {id:4,name:"yatri"},
                         {id:5,name:"vishv"},
                         {id:6,name:"bhoomi"},])
      mapObs.pipe(map(data=>data.name)).
      subscribe(res=>{
                 console.log(res)
                  // this.msg1=res;
                  this.dataservice.print(res,'elContainer')
                })
               
  }

}