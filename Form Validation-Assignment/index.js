var firstName=document.getElementById("firstName");
var lastName=document.getElementById("lastName");
var aadharInput=document.getElementById("aadharInputTag");
var email=document.getElementById("emailID");
var areaCode=document.getElementById("areaCode");
var phone=document.getElementById("phoneID");
var button = document.getElementById("btn");

var name_RE=/^[A-Za-z]+$/;
var aadhar_RE=/^[0-9]{12}$/;
var email_RE=/^[a-zA-z0-9.]+@[A-Za-z]+.com$/;
var areaCode_RE=/^[0-9]{2}$/;
var phoneID_RE=/^[0-9]{10}$/;
borderFunction(firstName,name_RE);
borderFunction(lastName,name_RE)
borderFunction(aadharInput,aadhar_RE);
borderFunction(email,email_RE);
borderFunction(areaCode,areaCode_RE);
borderFunction(phoneID,phoneID_RE);

function borderFunction(header,regEx){
    header.addEventListener('input',function(){
        var count=0;
        if(regEx.test(header.value) ){
            count=0;    
        }
        else{
            if(header.value.length>0){
                count=1;   
            }
        }
        if(count==0){
            header.style.border="1px solid black";
        }
        else{
            header.style.border="2px solid red";
        }
    })

}
