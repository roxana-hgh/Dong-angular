import { Component } from '@angular/core';
import { SHARED_IMPORTS } from '../../shared/shared-imports';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { GroupExpenseService } from '../../service/group-expense.service';
import { GroupMember } from '../../interfaces/GroupMember';

@Component({
  selector: 'app-group-setup',
  imports: [SHARED_IMPORTS, ReactiveFormsModule],
  templateUrl: './group-setup.component.html',
  styleUrl: './group-setup.component.scss'
})
export class GroupSetupComponent {
  membersForm!: FormGroup;
  groupMembers: GroupMember[] = [];
  groupName: string = '';

  constructor(private groupExpenseService: GroupExpenseService) {}

  ngOnInit() {
    this.membersForm = new FormGroup({
      memberName: new FormControl(null, [Validators.required, Validators.pattern(/[\S]/g)]),
      memberEmail: new FormControl(null, Validators.email),
    });

    this.groupName = this.groupExpenseService.getGroupDetails().name;


    this.groupMembers = this.groupExpenseService
      .getMembers()
      .map((member) => member);
    // console.log(this.groupMembers);
    // console.log(this.groupMembers.length);
  }

  addmember() {
    const memberName = this.membersForm.value.memberName;
    const memberEmail = this.membersForm.value.memberEmail;
    if (memberName) {
      this.groupExpenseService.addMember(memberName, memberEmail);
      this.membersForm.reset();
      this.groupMembers = this.groupExpenseService
        .getMembers()
        .map((member) => member);
      console.log(this.groupMembers);
    }
  }

  removeMember(memberName: string) {
    this.groupExpenseService.removeMember(memberName);
    this.groupMembers = this.groupExpenseService
      .getMembers()
      .map((member) => member);
    console.log(this.groupMembers);
  }

}
