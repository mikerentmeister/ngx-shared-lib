import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'exp-common',
  template: `
    <p>{{title}}</p>
  `,
  styles: [
  ]
})
export class CommonComponent implements OnInit {
  public title = 'Common Works!';

  constructor() { }

  ngOnInit(): void {
  }

}
