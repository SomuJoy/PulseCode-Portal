import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LoginFormComponent } from '@pulse-ui/login-form';

@Component({
  selector: 'login-page',
  standalone: true,
  imports: [CommonModule, LoginFormComponent, RouterOutlet],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
})
export class LoginPageComponent {}
