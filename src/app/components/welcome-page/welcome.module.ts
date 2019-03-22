import { MaterialModule } from './../../material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome/welcome.component';
import { PaginationComponent } from './pagination/pagination.component';
import { BooksListComponent } from './books-list/books-list.component';
@NgModule({
  declarations: [
      WelcomeComponent,
      PaginationComponent,
      BooksListComponent,
    ],
    imports: [
        MaterialModule,
        CommonModule
  ]
})
export class WelcomeModule { }
