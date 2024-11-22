import { Component, inject } from '@angular/core';
import { Product } from '../../../shared/models/Product';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { IsLoadingService } from '../../../services/is-loading/is-loading.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NgFor, NgIf, ReactiveFormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  public isLoadingService = inject(IsLoadingService);
  products: Product[] = [];
  isModalOpen = false;
  isSubmitting = false;
  editingProduct: Product | null = null;

  productFormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    age: new FormControl(0, Validators.required),
  });

  constructor() {
    // Esto es solo para testear UI.
    this.products = [
      { id: 1, name: 'Product A', age: 5 },
      { id: 2, name: 'Product B', age: 3 },
    ];
  }

  openModal(): void {
    this.isModalOpen = true;
    this.editingProduct = null;
    this.productFormGroup.reset();
  }

  closeModal(): void {
    this.isModalOpen = false;
    this.editingProduct = null;
    this.productFormGroup.reset();
  }

  onSubmit() {
    console.log(this.productFormGroup.value);
  }

  editProduct(product: Product): void {
    this.editingProduct = product;
    this.productFormGroup.patchValue({
      name: product.name,
      age: product.age,
    });
    this.isModalOpen = true;
  }

  deleteProduct(id: number): void {
    this.products = this.products.filter((product) => product.id !== id);
  }
}
