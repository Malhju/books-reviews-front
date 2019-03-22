import { AuthenticationService } from './../../../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  contactForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,  private authService: AuthenticationService, private router: Router) { }

  // convenience getter for easy access to form fields
  get f() { return this.contactForm.controls; }

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
        name: ['', Validators.required],
        email: ['', Validators.compose([Validators.required, Validators.email])],
        password: ['', Validators.required],
    });
  }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.contactForm.invalid) {
        return;
    }

    
    // this.contactService.sendMessage(this.contactForm.value).subscribe(() => {
        //   alert('Your message has been sent.');
        //   this.contactForm.reset();
        //   this.disabledSubmitButton = true;
        // }, error => {
            //   console.log('Error', error);
            // });
            this.authService.register(this.contactForm.value).subscribe(
                res => { 
                    console.log(res)
                    localStorage.setItem('access-token-books', res)
                }
                );
            alert('Merci ' + this.contactForm.value.name + ', votre compte a bien été créé !');
            this.router.navigateByUrl('');
  }
}
