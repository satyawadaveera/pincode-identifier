

  # Pin code Identifier using angular 
  Pin code component can display state, country, pin code using JSON data.
 
 
 When user enters a city name it will display all the informations like pincode,state name.
 
 It is useful to the user to find out pin code,state name and country name easily.
 
 ## Using this component in your project 
 
 Download this component to your angular project and include required components.
 
 ### Note: Please refer the JSON file in assets folder
 
 ### JSON Description
 
 • **heading** gives the idendifier pin code
 
 • **data** gives the information about entered pin code

 
 ## How it works
 
 User will pass the data in property binding format then JSON data object will store this information and give it to 
 **input decorator**
 
 ### @Input Decorator,
 
 @Input()cityname:any;
 cityname is the variable I have used to take input from the user.
 
 
 ### @Output Decorator
 
 @Output()outputdata=new EventEmitter();

 

## PincodeInfo Interface

jsonData is the type Of PincodeInfo

export interface PincodeInfo {  

    PostOffice:PostOfficeInfo;
    Status:string;
}
## PostofficeInfo Interface
export interface PostOfficeInfo {

    PINCode:number;
    State:string;
    Country:string;
}
 <P><img src="\demo-image\demoimage.PNG"></P>

  
            
