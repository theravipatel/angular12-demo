import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-country-list',
  template: `
    <p class="custom">
      country-list works!
    </p>
  `,
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
