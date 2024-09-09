import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup = this.fb.group({});
  submittedLogin: boolean = false;
  loginError: string | null = null;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  // Initialize form on component load
  ngOnInit(): void {
    this.formInit();
  }

  // Initialize the form group and its validation rules
  formInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]], // Email with validation
      password: ['', [Validators.required, Validators.minLength(6)]], // Password with min length validation
    });
  }

  // Reset form and submission state
  cancel() {
    this.submittedLogin = false;
    this.loginForm.reset();
  }

  // Convenience getter for accessing form controls
  get f() {
    return this.loginForm.controls;
  }

  // Handle login logic
  login() {
    this.submittedLogin = true;

  //   // Check if the form is valid before proceeding
    if (this.loginForm.invalid) {
      return;
    }

    const { email, password } = this.loginForm.value;

    // Example: Call AuthService to handle login
    const isLoggedIn = this.authService.login(email, password);

    if (isLoggedIn) {
      // Navigate to the home page after successful login
      this.router.navigate(['/home']);
    } else {
      // Show error message if login fails
      this.loginError = 'Invalid email or password';
    }
  }
}
