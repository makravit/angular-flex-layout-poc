import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-regular-example-form',
  templateUrl: './regular-example-form.component.html',
  styleUrls: ['./regular-example-form.component.scss']
})
export class RegularExampleFormComponent implements OnInit {
  form = new FormGroup({});

  constructor() { }

  ngOnInit(): void {
  }

  submit(): void {
  }
}
