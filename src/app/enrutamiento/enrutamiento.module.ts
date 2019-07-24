import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnrutamientoRoutingModule } from './enrutamiento-routing.module';
import { StudentComponent } from './student/student.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';


@NgModule({
  declarations: [StudentComponent, StudentListComponent, StudentDetailComponent],
  imports: [
    CommonModule,
    EnrutamientoRoutingModule,

  ]
})
export class EnrutamientoModule { }
