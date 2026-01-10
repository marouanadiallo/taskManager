import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import only the components you need
import { MatCard, MatCardHeader, MatCardTitle, MatCardContent } from '@angular/material/card';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatTable, MatHeaderCell, MatCell, MatHeaderRow, MatRow, MatColumnDef, MatHeaderCellDef, MatCellDef, MatHeaderRowDef, MatRowDef } from '@angular/material/table';
import { MatIcon } from '@angular/material/icon';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';
import { MatPaginator } from '@angular/material/paginator';
import { RouterLink } from '@angular/router';

export interface Task {
  number: number;
  ref: string;
  taskName: string;
  taskDescription: string;
  status: string;
}

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    // Card components
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardContent,
    // Button components
    MatButton,
    MatIconButton,
    // Table components
    MatTable,
    MatHeaderCell,
    MatCell,
    MatHeaderRow,
    MatRow,
    MatColumnDef,
    MatHeaderCellDef,
    MatCellDef,
    MatHeaderRowDef,
    MatRowDef,
    // Other components
    MatIcon,
    MatMenu,
    MatMenuItem,
    MatMenuTrigger,
    MatPaginator
  ],
  templateUrl: './tasks.html',
  styleUrls: ['./tasks.scss']
})
export class Tasks {
  displayedColumns: string[] = ['number', 'ref', 'taskName', 'taskDescription', 'status', 'actions'];

  dataSource: Task[] = [
    {
      number: 1,
      ref: '00A1',
      taskName: 'Design UI',
      taskDescription: 'Design the user interface',
      status: 'In Progress'
    },
    {
      number: 2,
      ref: '00A2',
      taskName: 'Develop Backend',
      taskDescription: 'Implement server logic',
      status: 'Pending'
    },
    {
      number: 3,
      ref: '00A3',
      taskName: 'Testing',
      taskDescription: 'Perform unit tests',
      status: 'Completed'
    }
  ];

  getStatusClass(status: string): string {
    switch(status) {
      case 'Completed':
        return 'status-completed';
      case 'In Progress':
        return 'status-in-progress';
      case 'Pending':
        return 'status-pending';
      default:
        return '';
    }
  }
}
