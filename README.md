

  # Pin code Identifier using angular 
  Pin code component can display state, country, pin code using JSON data.
 
  <P><img src="\demo-image\demoimage.png"></P>
 
 To Preview Demo:- [Click Here](https://stackblitz.com/edit/angular-uwuac8?file=src%2Fapp%2Fpincode%2Fpincode.component.ts)
 
 When user enters a city name it will display all the informations like pincode,state name.
 
 It is useful to the user to find out pin code,state name and country name easily.
 

## Using the complete angular material project

Download the pincode-identifier folder into your and run the application.

### Installing

```
> npm install
```

### Run server

```
> ng serve
```

  jsonData is of type PincodeInfo interface.
 
 ## PincodeInfo Interface
```
 interface PincodeInfo {  

    PostOffice:PostOfficeInfo;
    Status:string;
}

```

PostOffice is of type PostofficeInfo interface.

## PostofficeInfo Interface
```

 interface PostOfficeInfo {

    PINCode:number;
    State:string;
    Country:string;
}
```



 ### @Input Decorator,
 
 @Input()cityname:string;
 
 cityname is the variable I have used to take input from the user.
 
 
 ### @Output Decorator
<app-pincode [cityname]="city" (outputdata)="getdata($event)"></app-pincode>

outputdata is the variable which will emit the output to user.
 ```
   getdata(pincodedata:PincodeInfo){
	  console.log(pincodedata);
}
```
 




  
            
