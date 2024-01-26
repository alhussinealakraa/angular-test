import { NgModule } from '@angular/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTableModule} from '@angular/material/table';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatInputModule } from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';




const materialComponents = [
  MatProgressSpinnerModule,
  MatTableModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatInputModule,
  MatAutocompleteModule,
  MatFormFieldModule,
  MatButtonModule,
];
@NgModule({
  declarations: [],
  imports: [
    materialComponents,
  ],
  exports: [
    materialComponents,
  ]
})
export class MaterialModule { }
