import { Component } from '@angular/core';
import {PincodeInfo} from './pincode-info';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  cityname="pune"
  getdata(pincodedata:PincodeInfo){
	  console.log(pincodedata);
}
  
}
