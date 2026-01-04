import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle } from "@angular/material/card";
import { TasksService } from "./tasks-service";
import { AsyncPipe } from "@angular/common";

@Component({
    selector: 'tsk-tasks',
    templateUrl: "tasks.html",
    imports: [
        AsyncPipe,

        MatCard,
        MatCardHeader,
        MatCardTitle,
        MatCardContent
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Tasks {
    taskService = inject(TasksService);
    tasks$ = this.taskService.getTasks();
}   