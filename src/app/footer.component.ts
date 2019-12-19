import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  constructor() { }

  getDate() {
    const currentYear = new Date;
    return currentYear.getFullYear()
  }

  ngOnInit() {
  }

}
