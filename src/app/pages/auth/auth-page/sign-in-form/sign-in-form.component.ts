import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginUser } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.scss']
})
export class SignInFormComponent implements OnInit {
  public form: FormGroup;
  public errorMessage = '';
  public loading = false;
  private returnUrl: string;

  constructor(
    public authService: AuthService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.setForm();
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
  }

  setForm(): void {
    this.form = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6)]],
      remember: [true]
    });
  }

  submit(): void {
    this.loading = true;
    this.errorMessage = '';
    const loginUser: LoginUser = { ...this.form.value };
    this.authService
      .signin(loginUser)
      .subscribe(
        user => {
          this.authService.setAuthData(user, this.form.get('remember').value);
          this.router.navigateByUrl(this.returnUrl);
          this.form.reset();
        },
        e => {
          this.errorMessage = e.error;
        }
      )
      .add(() => (this.loading = false));
  }
}
