import { ChangeDetectionStrategy, Component } from "@angular/core";
import { MatCard, MatCardContent } from "@angular/material/card";

@Component({
    selector: 'tsk-tasks',
    templateUrl: "tasks.html",
    imports: [
        MatCard,
        MatCardContent
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Tasks {

}   