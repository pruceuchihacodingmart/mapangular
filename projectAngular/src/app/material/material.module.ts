import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatSliderModule } from "@angular/material/slider";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatButtonModule } from "@angular/material/button";
import { MatMenuModule } from "@angular/material/menu";
import { MatIconModule } from "@angular/material/icon";
import { MatCardModule } from "@angular/material/card";

const importmodules = [
  MatSliderModule,
  MatInputModule,
  MatFormFieldModule,
  MatButtonModule,
  MatMenuModule,
  MatIconModule,
  MatCardModule
];

@NgModule({
  declarations: [],
  imports: [CommonModule, importmodules],
  exports: [importmodules]
})
export class MaterialModule {}
