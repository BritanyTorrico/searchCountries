import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePagesComponent } from './pages/home-pages/home-pages.component';
import { AboutPagesComponent } from './pages/about-pages/about-pages.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { ContactPagesComponent } from './pages/contact-pages/contact-pages.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { LoadingSpinerComponent } from './components/loading-spiner/loading-spiner.component';

@NgModule({
  declarations: [
    AboutPagesComponent,
    ContactPagesComponent,
    HomePagesComponent,
    LoadingSpinerComponent,
    SearchBoxComponent,
    SidebarComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    AboutPagesComponent,
    ContactPagesComponent,
    HomePagesComponent,
    LoadingSpinerComponent,
    SearchBoxComponent,
    SidebarComponent,
  ],
})
export class SharedModule {}
