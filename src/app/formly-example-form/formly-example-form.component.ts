import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-formly-example-form',
  templateUrl: './formly-example-form.component.html',
  styleUrls: ['./formly-example-form.component.scss']
})
export class FormlyExampleFormComponent {
  form = new FormGroup({});
  model: any = {
    awesome: true
  };
  options: FormlyFormOptions = {
  };
  fields: FormlyFieldConfig[] = [
    {
      key: 'firstName',
      type: 'input',
      templateOptions: {
        label: 'First Name',
        placeholder: 'Please enter your first name',
        required: true,
      },
    },
    {
      key: 'lastName',
      type: 'input',
      templateOptions: {
        label: 'Last Name',
        placeholder: 'Please enter your last name',
        required: true,
      },
    },
    {
      key: 'awesome',
      type: 'checkbox',
      templateOptions: {
        label: 'Is formly awesome?'
      },
    },
    {
      key: 'whyNot',
      type: 'textarea',
      expressionProperties: {
        'templateOptions.required': '!model.awesome',
      },
      hideExpression: 'model.awesome',
      templateOptions: {
        label: 'Why not?',
        placeholder: 'Please enter your reasons',
        rows: 3,
      },
    }
  ];

  submit(): void {
    if (this.form.valid) {
      alert(JSON.stringify(this.model));
    }
  }
}
