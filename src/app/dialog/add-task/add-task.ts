import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

export interface TaskDialogData {
  name: string;
  description: string;
  isEditMode?: boolean;
}

@Component({
  selector: 'tsk-add-task',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
  ],
  templateUrl: './add-task.html',
  styleUrl: './add-task.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddTask {
  readonly dialogRef = inject(MatDialogRef<AddTask>);
  readonly data = inject<TaskDialogData>(MAT_DIALOG_DATA);
}
