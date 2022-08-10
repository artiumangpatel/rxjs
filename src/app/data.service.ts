import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  dell={
  brand:'Dell',
  hardDisks:'2-TB',
  color:'black'
}

HP={
  brand:'HP',
  hardDisks:'1-TB',
  color:'silver'
}
notAvail={
  brand:'Not Available',
  status:'failed'
}


}
