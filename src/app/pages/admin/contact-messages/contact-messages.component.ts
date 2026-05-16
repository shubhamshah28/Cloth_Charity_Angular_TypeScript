import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../../services/api.service';

@Component({
selector:'app-contact-messages',
standalone:true,
imports:[CommonModule],
templateUrl:'./contact-messages.component.html',
styleUrl:'./contact-messages.component.css'
})

export class ContactMessagesComponent{

messages:any=[];

constructor(private srv:ApiService){}

ngOnInit(){

this.srv.getContactMessages()
.subscribe((res:any)=>{

this.messages=res;

});

}

}