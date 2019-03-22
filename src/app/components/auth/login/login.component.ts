import { AuthenticationService } from './../../../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    contactForm: FormGroup;
    submitted = false;
  
    loc;

    constructor(private formBuilder: FormBuilder,  private authService: AuthenticationService, private router: Router) { }
  
    // convenience getter for easy access to form fields
    get f() { return this.contactForm.controls; }
  
    ngOnInit() {
      this.contactForm = this.formBuilder.group({
          name: ['', Validators.required],
          password: ['', Validators.required],
      });
    }
  
    onSubmit() {
      this.submitted = true;
      // stop here if form is invalid
      if (this.contactForm.invalid) {
          return;
      }
      this.authService.login(this.contactForm.value).subscribe(
          res => console.log(res)
      )
      //alert('Merci ' + this.contactForm.value.name + ', votre message a bien été envoyé');
      this.router.navigateByUrl('');
  
      // this.contactService.sendMessage(this.contactForm.value).subscribe(() => {
      //   alert('Your message has been sent.');
      //   this.contactForm.reset();
      //   this.disabledSubmitButton = true;
      // }, error => {
      //   console.log('Error', error);
      // });
    
    this.loc = localStorage.getItem('access-token-books');
    this.loc = JSON.parse(this.loc)
    // this.loc.access_token

    }
}
