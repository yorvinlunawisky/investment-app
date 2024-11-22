import { Component, inject } from '@angular/core';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { IsLoadingService } from '../../../services/is-loading/is-loading.service';
import { Investment } from '../../../shared/models/Investment';
import {
  FormGroup,
  Validators,
  FormControl,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NgClass, NgIf, NgFor, ReactiveFormsModule],
  templateUrl: './investments.component.html',
  styleUrl: './investments.component.scss',
})
export class InvestmentsComponent {
  public isLoadingService = inject(IsLoadingService);

  dashboardFormGroup = new FormGroup({
    investment: new FormControl('', Validators.required),
    amount: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required),
  });

  investments: Investment[] = [
    {
      id: 1,
      name: 'Tech Growth Fund',
      amount: 5000,
      date: '2024-03-15',
      status: 'active',
    },
    {
      id: 2,
      name: 'Real Estate Investment Trust',
      amount: 10000,
      date: '2024-03-10',
      status: 'pending',
    },
  ];

  onSubmit() {
    console.log(this.dashboardFormGroup.value);
  }

  editInvestment(investment: Investment): void {
    console.log('Editing investment:', investment);
  }

  deleteInvestment(id: number): void {
    this.investments = this.investments.filter((inv) => inv.id !== id);
  }
}
