import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { StudentListComponent } from './student-list/student-list.component';


const routes: Routes = [
  { path: 'enrutamiento', loadChildren: './enrutamiento/enrutamiento.module#EnrutamientoModule' },
  // { path: '', pathMatch: 'full', redirectTo: 'main' }
  {
    path: 'student',
    component: StudentComponent,
    children: [
      {
        path: 'list',
        component: StudentListComponent
      },
      {
        path: 'detail',
        component: StudentDetailComponent
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnrutamientoRoutingModule { }
