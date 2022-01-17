import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emp-list',
  template: `
    <p class="custom">
      emp-list works!
    </p>
  `,
  styles: [
    ".custom{color:blue}"
  ]
})
export class EmpListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
