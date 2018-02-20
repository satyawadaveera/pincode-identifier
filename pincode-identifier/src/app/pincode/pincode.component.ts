import { Component, OnInit,EventEmitter,Input,Output,ViewEncapsulation} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import {PincodeInfo} from '../pincode-info'
declare var google: any;
@Component({

  selector: 'app-pincode',

  templateUrl: './pincode.component.html',

  styleUrls: ['./pincode.component.css'],
   encapsulation:ViewEncapsulation.Emulated

})

export class PincodeComponent implements OnInit 
{
  
@Input()cityname:string;

@Output()outputdata=new EventEmitter();
 private  pindata:PincodeInfo;
 private country:string;
 private state:string;

  constructor(private http: HttpClient) { }



  ngOnInit() {


  }

 private city:string;
 private pin:number;
 private errorMessage:string;
  private getLocationDetails()

  {
   if(this.city ==""||this.city==null){

   this.errorMessage="enter cityname";
   

   }else{
      
    this.http.get<PincodeInfo>('http://postalpincode.in/api/postoffice/' + this.city).subscribe(data => {
    if(data.Status=="Error"){
      this.errorMessage="pincode not found enter city"
     this.country="";
     this.state="";
     this.outputdata.emit(this.pindata);
    }else{
     this.pindata=data;
     this.displayPin();
     this.errorMessage='';
     this.outputdata.emit(this.pindata);
   }
  
  });
}
   
  }
 private displayPin(){
  
 this.country=this.pindata.PostOffice[0].Country;
 this.pin=this.pindata.PostOffice[0].PINCode;
 this.state=this.pindata.PostOffice[0].State;
  }
  
}



