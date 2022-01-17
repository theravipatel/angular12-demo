```
Website:  https://angular.io/
Docs:     https://angular.io/docs
```

### 1) check angular CLI version
- ng version


### 2) check node version
- node -v

### 3) Installing Angular CLI (globally)
- npm install -g @angular/cli

### 4) Create new project
- ng new blog
- routting Yes/No and CSS/Less/SASS select

### 5) Run project - Bundling
- ng serve

### 6) Important commands
- ng generate component user-list
- ng generate module user-list

### 7) After module creation you have to register it in app.module.ts, and than you have to exports module's component in newly created module.ts file

### 8) Inline Style and Template
- ng g c user-list --inline-template (no html file will generate)
- ng g c user-list --inline-css (no css file will generate)
- ng g c user-list --inline-template --inline-css (no html & css file will generate, code will be in .ts file)

### 9) in component.ts file, AppComponent Class define class
- getName(name:string) {  }
- tsconfig.json -> strict:true so data type is must, if false than no need to give data type

### 10) Property Binding: It will work with boolean too.
- Interpolation : <input type="text" name="emp_name" value="{{emp_name}}" disabled="{{is_disabled}}" />
- Property Binding :<input type="text" name="emp_name" [value]=emp_name [disabled]=is_disabled />

### 11) If Else condition
  ```
  <h3 *ngIf="show_variable2=='Yes'; then ifblock else elseblock"></h3>
    <ng-template #ifblock>
      <p>If Block</p>
    </ng-template>
    <ng-template #elseblock>
      <p>Else Block</p>
    </ng-template>
  ```
  
### 12) If else if condition:
  ```
    <ng-template [ngIf]="color==='red'">
      <p style="color:red">Red Color</p>
    </ng-template>
    <ng-template [ngIf]="color==='blue'">
      <p style="color:blue">Blue Color</p>
    </ng-template>
    <ng-template [ngIf]="color==='green'">
      <p style="color:green">Green Color</p>
    </ng-template>
  ```

### 13) Change Base url when build for deployment
- ng build --baseHref=http://applisoft.in/hms_bvh/demo/ng/
- ng build --configuration=production --baseHref=http://applisoft.in/hms_bvh/demo/ng/

### 14) Switch Case:
  ```
  <div [ngSwitch]="switch_color">
    <h4 *ngSwitchCase="'red'" style="color:red">Red Color</h4>
    <h4 *ngSwitchCase="'green'" style="color: green">Green Color</h4>
    <h4 *ngSwitchCase="'blue'" style="color:blue">Blue Color</h4>
    <h4 *ngSwitchDefault>Unknown Color</h4>
  </div>
  ```

### 15) For Loop 1D Array:
- one_array = ['John', 'Donald', 'Rocky'];
  <p *ngFor="let item of one_array">{{item}}</p>

### 16) For Loop Array with Key=> Value:
- multi_obj_array = [
    { name:'Emma',phone:'98765443551'},
    { name:'Issac',phone:'121213342'},
    { name:'Micheal',phone:'8346472929'},
  ];
  <p *ngFor="let item of multi_obj_array">{{item.name}} -- {{item.phone}}</p>

### 17) Style Binding:
- <h3 [style.color]="style_color" [style.backgroundColor]="style_bgColor">Hello World!</h3>

### 18) Basic Form:
- import form module and register it
  - import { FormsModule } from '@angular/forms';
- import data type
  - import { NgForm } from '@angular/forms';
  ```
  <form #form_id="ngForm" (ngSubmit)="getFormData(form_id.value)">
    <input type="text" ngModel name="u_name" placeholder="User Name" />
    <br /><br />
    <input type="text" ngModel name="u_email" placeholder="User Email" />
    <br /><br />
    <input type="submit" name="u_submit" value="Register" />
  </form>

  userData: any = {};
  getFormData(data: NgForm) {
      console.warn(data);
      this.userData = data;
  }
  ```

### 19) Material UI: ref site - https://material.angular.io/
- ng add @angular/material
- add modules as required.
- Example: Slider Module
- import { MatSliderModule } from '@angular/material/slider';
  - <mat-slider min="1" max="100" step="1" value="50"></mat-slider>

### 20) Bootstrap: ref site - https://ng-bootstrap.github.io
- ng add @ng-bootstrap/ng-bootstrap
- No need to import module. it is already added.
- Example: Alert
  <p>
    <ngb-alert [dismissible]="false">
      <strong>Warning!</strong> Better check yourself, you're not looking too good.
    </ngb-alert>
  </p>

### 21) Pass Data From Parent to Child
- Define variable in parent ts file.
- Create child component
- User this in parent: <app-user-details [item]="userDetails"></app-user-details>
- Important : Add Input Decorator in ts file -> import { Component, OnInit, Input } from '@angular/core';
- and define with appropriate data type with value @Input() item = [{name:'',email:''}];

### 22) Pass Data From Child to Parent
- Define function in parent i.e. updateParentData()
- Create Child Component
- User this in parent: <app-child2 (updateParentDataEvent)="updateParentData($event)"></app-child2>
- In above code , $event is must. Use () to pass function which can any name of your choice. i.e. (updateParentDataEvent)
- Now in child2.ts file, Import - Output and EventEmitter decorator
- In child2.ts file define this function i.e. updateParentDataEvent like this :   @Output() updateParentDataEvent = new EventEmitter<string>();
- Now in child2.html add following code:
    <input type="text" #box />
    <br /><br />
    <button (click)="updateParentDataEvent.emit(box.value)">Update Parent Data</button>
- updateParentDataEvent.emit(): .emit is must when you want to pass data to Parent from child

### 23) Two Bining:
- Define variable in ts file : two_way_data:any = "";
- To use two way binding, must have to import NgForm
    <input type="text" [(ngModel)]="two_way_data" />
    <h4>{{two_way_data}}</h4>

### 24) Basic type of TypeScript
- number, string, boolean, any, define two types
- Example:
    getData(item:number | boolean){
        if(typeof item==='number'){

        }else{
          
        }
    }
  
- Define type of array:
    getData(item:{name:string,phone:number}){

    }
  item:string[] = ['Hello',"hi"];
- Deifne Object: 
    data:{name:string,phone:number} = {name:'',phone:''};

### 25) Basic of Pipes
- Pipe used in HTML file only
 	  data_pipe = "Hello World!";
  	today_pipe = Date();
  ```
  <h4>Normal no pipe : {{data_pipe}}</h4>
  <h4>'uppercase' : {{data_pipe | uppercase}}</h4>
  <h4>'lowercase' : {{data_pipe | lowercase}}</h4>
  <h4>Normal Date : {{today_pipe}}</h4>
  <h4>Normal Date : {{today_pipe}}</h4>
  <h4>'date' : {{today_pipe | date}}</h4>
  <h4>'date:fullDate' : {{today_pipe | date:'fullDate'}}</h4>
  ```
  
### 26) Advance Pipes
  ```
  <h4>Normal String : {{data_pipe_adv}}</h4>
  <h4>'Slice' : {{data_pipe_adv | slice : 3}}</h4>
  <h4>'Slice' : {{data_pipe_adv | slice : 3 : 6}}</h4>
  <h4>'json' : {{data_pipe_json | json}}</h4>
  <h4>'json | uppercase' : {{data_pipe_json | json | uppercase}}</h4>
  <h4>'number' : {{2000.3000 | number : '2.2-3'}}</h4> = 2,000.30
  ```
  
### 27) Custom Pipes
- Commad : ng generate pipe pipes/usdInr - SHould be in some folder
- in custom pipe class in transform function, put your calculations, by default it return NULL
   transform(value: number, ...args: number[]): unknown {
      console.warn(args);
      return value * args[0];
   } 

### 28) Template Driven Form:
- import form module and register it
	- import { FormsModule } from '@angular/forms';  in module file
- import data type
	- import { NgForm } from '@angular/forms'; in ts file

### 29) Template Driven Form Validation:
```
<form #loginForm2="ngForm" (ngSubmit)="userLogin2(loginForm2.value);">
  <input type="text" required email #lg2_email="ngModel"  name="lg2_email" placeholder="Enter Email" ngModel />
  <br />
  <span class="text-danger" *ngIf="lg2_email.invalid && lg2_email.touched">Please enter valid input.</span>
  <br />
  <input type="text" minlength="3" required pattern="[a-zA-Z]+$" #lg2_password="ngModel" name="lg2_password" placeholder="Enter Password" ngModel />
  <br />
  <span class="text-danger" *ngIf="lg2_password.invalid && lg2_password.touched">Please enter valid input.</span>
  <br />
  <button [disabled]="loginForm2.invalid">Login</button>
</form>
```
  
### 30) Reactive Form
- First import reactive module in module.ts
    import { ReactiveFormsModule } from '@angular/forms';
- Second import FormGroup and FormControl in component.ts
    import { FormGroup, FormControl } from '@angular/forms';

- FormGroup: it control form
- FormControl: it control individual field
```
 loginFormReactive = new FormGroup({
    lgr_email : new FormControl(''),
    lgr_password : new FormControl('')
  });
```

```
<form [formGroup]="loginFormReactive"  (ngSubmit)="userLoginReactive();">
  <input type="text" name="lgr_email" placeholder="Enter Email" formControlName="lgr_email" />
  <br />
  <br />
  <input type="text" name="lgr_password" placeholder="Enter Password" formControlName="lgr_password" />
  <br />
  <br />
  <button>Login</button>
</form>
```

### 31) Reactive Form Validation
- First import reactive module in module.ts
    import { ReactiveFormsModule } from '@angular/forms';

- Second import FormGroup and FormControl in component.ts
    import { FormGroup, FormControl } from '@angular/forms';

- Third import Validators in component.ts
    import { Validators } from '@angular/forms';

- 2nd argument of FormControl is for validators:
    loginFormReactive2 = new FormGroup({
      lgr_email2: new FormControl('', [Validators.required, Validators.email]),
      lgr_password2: new FormControl('', [Validators.required, Validators.minLength(5)])
    });

- Fourth define 'getter', getter name will be used in *ngIf in HTML form
  ```
    get lgr_email2() {
      return this.loginFormReactive2.get('lgr_email2');
    }
  ```
  
```
<form [formGroup]="loginFormReactive2" (ngSubmit)="userLoginReactive2();">
  <input type="text" name="lgr_email2" placeholder="Enter Email" formControlName="lgr_email2" />
  <br />
  <span class="text-danger" *ngIf="lgr_email2 && lgr_email2.invalid && lgr_email2.touched">This field is required with valid input.</span>
  <br />
  <input type="text" name="lgr_password2" placeholder="Enter Password" formControlName="lgr_password2" />
  <br />
  <span class="text-danger" *ngIf="lgr_password2 && lgr_password2.invalid && lgr_password2.touched">This field is required with valid input.</span>
  <br />
  <button [disabled]="loginFormReactive2.invalid">Login</button>
</form>
```

### 32) Custom Directive
- ng g directive directive/redEl
- in directive.ts file import : import {ElementRef } from '@angular/core';
- In RedElDirective Class :
  constructor(el: ElementRef) {
    el.nativeElement.style.color = "red";
  }
- <h4 appRedEl>Hello World!</h4>

### 33) Basic Routing
- Make new App --> Routing should be Y when installation
- use routerLink instead of href
- add <router-outlet></router-outlet>
- in app-routing.module.ts file
  ```
  import { ContactComponent } from './contact/contact.component';
  import { HomeComponent } from './home/home.component';
  import { NoPageComponent } from './no-page/no-page.component';
  const routes: Routes = [
    {
      path: '',
      component: HomeComponent -> this should be imported 
    },
    {
      path: 'about',
      component: AboutComponent -> this should be imported 
    },
    {
      path: '**',
      component: NoPageComponent -> this should be imported 
    }
  ];
  ```
  
### 34) Dynamic & Child Routing
- put <router-outlet> where child routing link added
- child URL in href should be routerLink='company' which will look like in address bar = /about/company
    ```
    const routes: Routes = [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'about',
        component: AboutComponent,
        children: [
          {
            path: 'company',
            component: AboutCompanyComponent
          },
          {
            path: "team",
            component: AboutTeamComponent
          }
        ]
      },
      {
        path: 'contact/:id', -> This is dynamic Routing
        component: ContactComponent
      },
      {
        path: '**',
        component: NoPageComponent
      }
    ];
    ```
### 35) Basic Services
- command : ng g service services/userdataservice
- To user this:
- First make function/property in service.ts file
- Second import it in where required
    import {UserdataserviceService} from '../services/userdataservice.service';
- Third in required ts file where we imported the sevices, make constructor :
  user_service_data:any;
  constructor(private userservicevariable:UserdataserviceService) {
      this.user_service_data = userservicevariable.userdata();
  }
- now you can use service data in this file with user_service_data

### 36) Get Data from API using Service
- Make service
- In service.ts file import HttpClient
    import {HttpClient} from '@angular/common/http';
- In constructor :
    constructor(private http:HttpClient) { }

- Make function/property
  ```
  userdetails(){
    return this.http.get(this.user_detail_url);
  }
  ```
  
- Make sure to import HttpClientModule in module.ts file

- In constructor of app.compoment.ts:
  ```
  user_detail_service:any;
  constructor(private userdetailservice:UserdetailserviceService) {
      userdetailservice.userdetails().subscribe((data)=>{
        console.warn(data);
        this.user_detail_service = data;
      });
  }
  ```
  
### 37) Post Data using service
- Make service
- In service.ts file import HttpClient
  import {HttpClient} from '@angular/common/http';
- In constructor :
  constructor(private http:HttpClient) { }
- Make function/property
  ```
  saveUserDetails(data:any){
    return this.http.post(this.user_detail_url,data);
  }
  ```
- Make sure to import HttpClientModule in module.ts file
- Make form and when form submit => (ngSubmit)="regUser(regForm.value)"
- In constructor of app.compoment.ts:
  
```
  user_detail_service:any;
  constructor(private userdetailservice:UserdetailserviceService) {

  }
  regUser(data:any){
      //console.warn(data);
      this.userdetailservice.saveUserDetails(data).subscribe((result)=>{
          console.warn(result);
      });
    }
```
