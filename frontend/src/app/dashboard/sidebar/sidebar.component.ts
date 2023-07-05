import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit{

  userProfileImage = '../../assets/img/girl_profile_pic.jpg'; // Provide the path to the user profile image
  username = 'Wangeci'; // Provide the username
  role: string = 'Manager';
  showActions = true; // Flag to control the visibility of the actions section
  showReportsSubMenu: boolean = false;
  isSidebarHidden: boolean = false;

  constructor(private router: Router) {
  }
  toggleReportsSubMenu() {
    this.showReportsSubMenu = !this.showReportsSubMenu;
  }
  toggleSidebar(){
    this.isSidebarHidden = !this.isSidebarHidden;
  }
  ngOnInit(): void {
  }

  logout(event: Event): void {
    // Implement your logout logic here
    event.preventDefault();
    console.log("Logout Button Clicked!")

    this.router.navigate(['/login']);

  }

}
