import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GroupExpenseService } from '../../services/group-expense.service';

@Component({
  selector: 'app-group-setup',
  templateUrl: './group-setup.component.html',
  styleUrl: './group-setup.component.scss',
  standalone: false,
})
export class GroupSetupComponent {
  membersForm!: FormGroup;
  groupMembers: string[] = [];
  groupName: string = '';

  constructor(private groupExpenseService: GroupExpenseService) {}

  ngOnInit() {
    this.membersForm = new FormGroup({
      memberName: new FormControl(null, Validators.required),
    });

    this.groupName = this.groupExpenseService.getGroupDetails().name;


    this.groupMembers = this.groupExpenseService
      .getMembers()
      .map((member) => member.name);
    // console.log(this.groupMembers);
    // console.log(this.groupMembers.length);
  }

  addmember() {
    const memberName = this.membersForm.value.memberName;
    if (memberName) {
      this.groupExpenseService.addMember(memberName);
      this.membersForm.reset();
      this.groupMembers = this.groupExpenseService
        .getMembers()
        .map((member) => member.name);
      console.log(this.groupMembers);
    }
  }

  removeMember(memberName: string) {
    this.groupExpenseService.removeMember(memberName);
    this.groupMembers = this.groupExpenseService
      .getMembers()
      .map((member) => member.name);
    console.log(this.groupMembers);
  }
}
