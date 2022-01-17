import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdataserviceService {

  constructor() { }
  userdata(){
    return [
      {name:'Test 1',email:'test1@test.com'},
      {name:'Test 2',email:'test2@test.com'},
      {name:'Test 3',email:'test3@test.com'}
    ];
  }
}
