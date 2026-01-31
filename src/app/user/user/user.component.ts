import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ApiserviceService } from '../../apiservice.service';
import { RouterLink } from "@angular/router";
import { ClickOutsideDirective } from '../../clickoutside.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, RouterLink,ClickOutsideDirective],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  showAddOptions = false;
  showRoleDropdown = false;
  selectedRole = 'Hostel Admins';

  statuses = ['All', 'Active', 'In-Active', 'Left Out'];
  activeStatus = 'All';

  users: any[] = [];
  filteredUsers: any[] = [];

  constructor(private apiService: ApiserviceService) {}

  ngOnInit() {
    this.apiService.getUsers().subscribe(res => {
      this.users = (res as any[]).map(user => ({
        ...user,
        active: Math.random() > 0.5
      }));
      this.filteredUsers = this.users;
    });
  }

  toggleAddOptions() {
    this.showAddOptions = !this.showAddOptions;
  }

  toggleRole() {
    this.showRoleDropdown = !this.showRoleDropdown;
  }

  closeDropdown() {
    this.showRoleDropdown = false;
     this.showAddOptions = false;
  }

  selectRole(role: string) {
    this.selectedRole = role;
    this.showRoleDropdown = false;
  }

  toggleStatus(user: any) {
    user.active = !user.active;
    this.onStatusChange(this.activeStatus);
  }

  onStatusChange(status: string) {
    this.activeStatus = status;

    if (status === 'All') {
      this.filteredUsers = this.users;
    } else if (status === 'Active') {
      this.filteredUsers = this.users.filter(u => u.active);
    } else {
      this.filteredUsers = this.users.filter(u => !u.active);
    }
  }
}
