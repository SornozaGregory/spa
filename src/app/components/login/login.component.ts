import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private AuthService: AuthService, private router:Router) {}

  login(): void {
    this.AuthService.login(this.username, this.password).subscribe(
      () => {
        this.router.navigate(['/protegida']);
      },
      error => {
        console.error(error);
        // Aquí puedes mostrar un mensaje de error al usuario
      }
    );
  }

}
