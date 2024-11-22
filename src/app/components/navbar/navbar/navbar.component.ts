import { NgFor, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgFor, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  router = inject(Router);

  isProfileMenuOpen = false;
  isMobileMenuOpen = false;
  userName = 'John Doe';

  navItems = [
    { label: 'Dashboard', route: '/dashboard/investments' },
    { label: 'Products', route: '/dashboard/products' },
    { label: 'Holidays', route: '/dashboard/holydays' },
    { label: 'Users', route: '/users' },
  ];

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    if (this.isMobileMenuOpen) {
      this.isProfileMenuOpen = false;
    }
  }

  toggleProfileMenu(): void {
    this.isProfileMenuOpen = !this.isProfileMenuOpen;
    if (this.isProfileMenuOpen) {
      this.isMobileMenuOpen = false;
    }
  }

  getUserInitials(): string {
    return this.userName
      .split(' ')
      .map((name) => name[0])
      .join('')
      .toUpperCase();
  }

  logout(): void {
    console.log('Logging out...');
    this.router.navigate(['/login']);
  }
}
