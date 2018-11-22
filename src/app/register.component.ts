import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl } from '@angular/forms';

@Component({
    selector: 'register',
    templateUrl: 'register.component.html',
    styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
    registerForm:FormGroup;
    constructor() {
        this.registerForm = new FormGroup({
            name:new FormControl(),
        email:new FormControl(),
        pwd:new FormControl(),
        repwd:new FormControl()

        });
        
     }

    ngOnInit() { }
    onSubmit():void{
        
        console.log(this.registerForm.value);
    }
}