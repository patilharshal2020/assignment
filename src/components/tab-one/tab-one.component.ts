import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormStateService } from '../../services/form-state.service';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-tab-one',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatInputModule, MatButtonModule ],
  templateUrl: './tab-one.component.html',
  styleUrl: './tab-one.component.css'
})
export class TabOneComponent implements OnInit {
  form: BehaviorSubject<FormGroup> = new BehaviorSubject<FormGroup>(null);
  f: FormGroup;
  formSubscription: Subscription;

  constructor(private formStateService: FormStateService, private fb: FormBuilder){}

  ngOnInit() {
    this.formSubscription = this.formStateService.form$.subscribe(form => {
      this.form.next(form);
      this.f = form;
    });

    // this.form = this.fb.group({
    //   firstName: ['John', Validators.required],
    //   lastName: ['Doe', Validators.required],
    //   email: ['john.doe@example.com', [Validators.required, Validators.email]],
    //   city: ['New York', Validators.required],
    //   pinCode: ['10001', Validators.required],
    //   mobile: ['1234567890', [Validators.required, Validators.pattern('^[0-9]+$')]]
    // })
  }

  ngOnDestroy() {
    this.formSubscription.unsubscribe();
  }

  onFormChange(){
    this.formStateService.updateForm(this.f);
  }
}
