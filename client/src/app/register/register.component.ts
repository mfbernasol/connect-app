import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  @Output() cancelRegister = new EventEmitter();
  model: any = {};
  // user: any;

  constructor(private accounService: AccountService, private toastr: ToastrService
  ){}

  register(){
    this.accounService.register(this.model).subscribe({
      next: response => {
        console.log(response)
        this.cancel();
      },
      error: error => {
        this.toastr.error(error.error)
        console.log(error)
      }
    })
  }

  cancel(){
   this.cancelRegister.emit(false);
  }
}
