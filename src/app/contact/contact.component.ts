import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class ContactComponent implements OnInit {
  contact = {};
  message = '';
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  saveContact() {
    this.http.post('/api/contact', this.contact)
      .subscribe(res => {
        //  this.router.navigate(['about']);
        this.message = "Thanks for contacting us!";
        }, (err) => {
          console.log(err);
        }
      );
  }

}