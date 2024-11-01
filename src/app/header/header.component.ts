import { Component, HostListener, NgZone } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  showMainNavigation = false;
  mobileMenuOpen = false;
  lastScrollTop = 0;
  isNavVisible = false;

  constructor(private ngZone: NgZone) {}

  // Detect scroll direction to show/hide <nav>
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Use NgZone to run the change detection
    this.ngZone.run(() => {
      if (currentScrollTop < this.lastScrollTop) {
        this.isNavVisible = true; // Show when scrolling up
      } else {
        this.isNavVisible = false; // Hide when scrolling down
      }
    });

    this.lastScrollTop = currentScrollTop;
  }

  // Toggle mobile menu visibility
  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }
}
