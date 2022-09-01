import { Component, OnInit } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { delay, from, retry, retryWhen, scan, toArray } from 'rxjs';
@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
  styleUrls: ['./retry.component.scss']
})
export class RetryComponent implements OnInit {

  constructor(private http:HttpClient) { }
  person1:any;
  fetching :boolean = false;
   status ='No data';
    
  ngOnInit(): void {
  
  }
  fetchDetails(){
     this.fetching =true;
     this.status = 'fetching data...';
    const sourse=this.http.get('https://jsonplaceholder.typicode.com/users').pipe(
      // retry(2)
      retryWhen(err=>err.pipe(delay(3000),
      scan((retryCount)=>{if(
        retryCount >=5){
        throw err;
      }else{
        retryCount = retryCount + 1;
        console.log("retryCount =>" + retryCount);
        this.status = "Retry Attampt #" + retryCount
        return retryCount
      }},0)
      )))
    // console.log("sourse",sourse)
    sourse.subscribe({next:(res)=>{
      console.log("subscribe fetch data",res);
      this.person1 = res;
      console.log("person",this.person1);
      this.status = 'data fetched';
      this.fetching= false;
    },
    error:(err)=>{console.log(err),
      this.status = 'problem  fetching data';
      this.fetching= false;
    }
  })
    }
      }

