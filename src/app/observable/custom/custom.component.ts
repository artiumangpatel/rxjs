import { Component, OnDestroy, OnInit } from '@angular/core';
import {  Observable, Subscription } from 'rxjs';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.scss']
})
export class CustomComponent implements OnInit,OnDestroy {
  techStatus:any;
  techStatus2:any;
  subs2:Subscription | undefined;
  names:any;
  nameStatus:any;
  constructor(private dataservice:DataService) { }

  ngOnInit(): void {
    const cusObs1 = new Observable(observer=>{
      setTimeout(() => {
        observer.next('Angular');},1000);

        setTimeout(() => {
          observer.next('TypeScript');},2000);
          
          setTimeout(() => {
            observer.next('Html');
            observer.complete();
          },3000);

      setTimeout(() => {
              observer.next('JavaScript');
              //  observer.error(new Error('limit Exceed'));
                //  this.techStatus = 'error';
               },4000);
      setTimeout(() => {
              observer.next('jquery');
              //  this.techStatus = 'completed';
            },6000);
          })

          //for use  subscribe call back function use this type
          cusObs1.subscribe({
            next:(res)=> this.dataservice.print(res,'elContainer'),
            error:(err)=> this.techStatus='error',
            complete:()=>this.techStatus='completed'
         });
  
         
         //subscribe(data,error,complete)
         
         
         
         //custom Interval Example -2
         const Array2=['angular','javaScript','Html','CSS','TypeScript']
         const cusObs2= new Observable(observer=>{
          let count =0;

          setInterval(()=>{
             observer.next(Array2[count]);
             
             
             if(count>=4){
                observer.error('error emit');
               }
              if(count>=2){
               observer.complete();
              }count++;
            },1000);
            })
            
          this.subs2= cusObs2.subscribe({
            next:(res)=> this.dataservice.print(res,'elContainer2'),
            error:(err)=> this.techStatus2='error',
            complete:()=>this.techStatus2='completed'
         });
  
         //random name
         const Array3=['meera','umang','arti','yatri']
         const cusObs3= new Observable(observer=>{
          let count =0;

          setInterval(()=>{
             observer.next(Array3[count]);
             
             
             if(count>=2){
                 observer.error('error emit');
               }
              if(count>=3){
               observer.complete();
              }count++;
            },1000);
            })
            
          cusObs3.subscribe({
            next:(res)=> this.names=res,
        
             error:(err)=> this.nameStatus='error',
             complete:()=>this.nameStatus='completed'
          });
    

     
          
 }
 ngOnDestroy(): void {

 this.subs2?.unsubscribe()
  
 }
}