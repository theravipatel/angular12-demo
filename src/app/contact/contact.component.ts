import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  user_id1: any;
  ngOnInit(): void {
    console.warn("User Id = " , this.route.snapshot.paramMap.get("id"));
    this.user_id1 = this.route.snapshot.paramMap.get("id");
  }

}
