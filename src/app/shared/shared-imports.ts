import { AsyncPipe } from "@angular/common";
import { RouterModule } from "@angular/router";
import { TranslatePipe } from "../pipes/Translate.pipe";

export const SHARED_IMPORTS = [
//   CommonModule,
  RouterModule,
  AsyncPipe,
  TranslatePipe
];