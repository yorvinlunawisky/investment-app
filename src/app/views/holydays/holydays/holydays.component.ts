import { Component, inject } from '@angular/core';
import { Holydays } from '../../../shared/models/holydays';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { IsLoadingService } from '../../../services/is-loading/is-loading.service';
@Component({
  selector: 'app-holydays',
  standalone: true,
  imports: [NgFor, NgIf, ReactiveFormsModule],
  templateUrl: './holydays.component.html',
  styleUrl: './holydays.component.scss',
})
export class HolydaysComponent {
  public isLoadingService = inject(IsLoadingService);
  holydays: Holydays[] = [];
  isModalOpen = false;
  isSubmitting = false;
  editingHolyday: Holydays | null = null;

  holydayFormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required),
  });

  constructor() {
    // Esto es solo para testear UI.
    this.holydays = [
      { id: 1, name: 'Holyday A', date: '10/12/2023' },
      { id: 2, name: 'Holyday B', date: '11/08/2024' },
    ];
  }

  openModal(): void {
    this.isModalOpen = true;
    this.editingHolyday = null;
    this.holydayFormGroup.reset();
  }

  closeModal(): void {
    this.isModalOpen = false;
    this.editingHolyday = null;
    this.holydayFormGroup.reset();
  }

  onSubmit() {
    console.log(this.holydayFormGroup.value);
  }

  editHolyday(holyday: Holydays): void {
    this.editingHolyday = holyday;
    this.holydayFormGroup.patchValue({
      name: holyday.name,
      date: holyday.date,
    });
    this.isModalOpen = true;
  }

  deleteHolyday(id: number): void {
    this.holydays = this.holydays.filter((holyday) => holyday.id !== id);
  }
}
