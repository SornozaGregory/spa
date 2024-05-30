import { Component, Inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
username: String | null =null;
constructor(private auhtService: AuthService){}
ngOnInit(): void {
  this.auhtService.getUsername().subscribe(unsername =>{
    this.username = unsername;
  });
}
salir(): void{
  this.auhtService.logout();
}
login():boolean{
return this.auhtService.isLoggedIn();
}
}
