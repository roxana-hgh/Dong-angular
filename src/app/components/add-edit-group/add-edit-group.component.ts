import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GroupExpenseService } from '../../services/group-expense.service';

@Component({
  selector: 'app-add-edit-group',
  standalone: false,
  templateUrl: './add-edit-group.component.html',
  styleUrl: './add-edit-group.component.scss'
})
export class AddEditGroupComponent implements OnInit {
  groupForm!: FormGroup ;
  groupData!: { name: string; description?: string };
  
  constructor(
    private groupExpenseService: GroupExpenseService,
    private router: Router
  ) {
  }



  ngOnInit(): void {

    this.groupData = this.groupExpenseService.getGroupDetails();
    this.groupForm = new FormGroup({
      groupName: new FormControl(this.groupData.name ? this.groupData.name : null, Validators.required),
      groupDescription: new FormControl(this.groupData.description ? this.groupData.description : null)
    });
  }


  
  saveGroupForm() {
    if (this.groupForm.valid) {
      const groupName = this.groupForm.value.groupName;
      const groupDescription = this.groupForm.value.groupDescription;

      this.groupExpenseService.addGroupDetails(groupName, groupDescription);
      console.log('Group details saved:', groupName, groupDescription);
      
      // Navigate to the next page after successful save
      this.router.navigate(['/group-member']);
    } else {
      console.error('Form is invalid');
    }
   
  }

}
