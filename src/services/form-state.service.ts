import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormStateService {
  private formSubject = new BehaviorSubject<FormGroup>(this.fb.group({
    firstName: ['John', Validators.required],
    lastName: ['Doe', Validators.required],
    email: ['john.doe@example.com', [Validators.required, Validators.email]],
    city: ['New York', Validators.required],
    pinCode: ['10001', Validators.required],
    mobile: ['1234567890', [Validators.required, Validators.pattern('^[0-9]+$')]]
  }));
  form$ = this.formSubject.asObservable();

  constructor(private fb: FormBuilder) {}

  updateForm(form: FormGroup) {
    this.formSubject.next(form);
  }
}
