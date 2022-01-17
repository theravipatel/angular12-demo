import { Component, OnInit } from '@angular/core';
import { NgForm, Validators } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import {UserdataserviceService} from '../services/userdataservice.service';
import {UserdetailserviceService} from '../services/userdetailservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user_service_data:any;
  user_detail_service:any;
  constructor(private userservicevariable:UserdataserviceService, private userdetailservice:UserdetailserviceService) {
    this.user_service_data = userservicevariable.userdata();
    userdetailservice.userdetails().subscribe((data)=>{
      console.warn(data);
      this.user_detail_service = data;
    });
    
  }

  ngOnInit(): void {
  }

  title = "Home";

  dis_value: string = "";

  getData(data: string) {
    alert(data);
  }
  getData2(data: string) {
    this.dis_value = data;
  }
  count = 0;
  counter(type: string) {
    type === 'plus' ? this.count++ : this.count--;
  }

  emp_name = "John Doe";
  is_disabled = false;

  show_variable = false;
  show_variable2 = 'Yes';

  color = "red";
  switch_color = "blue";

  one_array = ['John', 'Donald', 'Rocky'];
  multi_obj_array = [
    { name: 'Emma', phone: '98765443551' },
    { name: 'Issac', phone: '121213342' },
    { name: 'Micheal', phone: '8346472929' },
  ];

  user_info_arr = [
    { name: 'John', socialAccounts: ['FB', 'Insta'] },
    { name: 'Jessica', socialAccounts: ['Gmail', 'Twitter'] },
    { name: 'Jordon', socialAccounts: ['Youtube', 'LinkedIn'] },
  ];

  style_color = "blue";
  style_bgColor = "green";

  updateColor(type: string) {
    if (type == 'yellow_black') {
      this.style_color = 'yellow';
      this.style_bgColor = 'black';
    } else if (type == 'orange_pink') {
      this.style_color = 'orange';
      this.style_bgColor = 'pink';
    }

  }

  userData: any = {};

  getFormData(data: NgForm) {
    console.warn(data);
    this.userData = data;
  }

  toggle_show = true;

  toggle() {
    this.toggle_show = !this.toggle_show;
  }

  task_list: any[] = []
  addTask(item: string) {
    this.task_list.push({ id: this.task_list.length, name: item });
  }

  removeTask(id: number) {
    this.task_list = this.task_list.filter(item => item.id !== id);
  }

  parent_data = 10;

  updateChild() {
    this.parent_data = Math.floor(Math.random() * 10);
  }

  userDetails = [
    { name: 'John Doe', email: 'john@test.com' },
    { name: 'Sam', email: 'sam@test.com' },
  ];

  parent_data2 = "Updated Parent Value goes here";

  updateParentData(child_data2: string) {
    this.parent_data2 = child_data2;
  }

  two_way_data: any = "";

  data_pipe = "Hello World!";
  today_pipe = Date();

  data_pipe_adv = "Hello World!";
  data_pipe_json = { name: 'John Doe', phone: 987765443 };

  data_pipe_custom = "Hello World!";

  userLogin(item: any) {
    console.warn(item);
  }

  userLogin2(item: any) {
    console.warn(item);
  }

  loginFormReactive = new FormGroup({
    lgr_email: new FormControl(''),
    lgr_password: new FormControl('')
  });

  userLoginReactive() {
    console.warn(this.loginFormReactive.value);
  }

  loginFormReactive2 = new FormGroup({
    lgr_email2: new FormControl('', [Validators.required, Validators.email]),
    lgr_password2: new FormControl('', [Validators.required, Validators.minLength(5)])
  });

  userLoginReactive2() {
    console.warn(this.loginFormReactive2.value);
  }

  get lgr_email2() {
    return this.loginFormReactive2.get('lgr_email2');
  }
  get lgr_password2() {
    return this.loginFormReactive2.get('lgr_password2');
  }


  regUser(data:any){
    //console.warn(data);
    this.userdetailservice.saveUserDetails(data).subscribe((result)=>{
        console.warn(result);
    });
  }

}
