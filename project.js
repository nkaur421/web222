
function validation(){
    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let stAdd = document.getElementById('stadd').value.trim();
    let pCode = document.getElementById('postalCode').value.trim();
    let pro = document.getElementById('province').value;
    let error = document.getElementById('error');
    
    
    if(name=="" || email=="" || stAdd=="" || pCode =="" ){
        error.innerHTML="Error!!!";
        return false;
    }
    else if(pCode.length!=6)
    {
        error.innerHTML="Error in PostalCode!!!";
        return false;
    }
    else if(!(pCode[0] >="A" && pCode[0]<="Z"))
    {
        error.innerHTML="Error in PostalCode!!!";
        return false;
    }
    else if(!(pCode[1] >=0 && pCode[1]<=9))
    {
        error.innerHTML="Error in PostalCode!!!";
        return false;
    }
    else if(!(pCode[2] >="A" && pCode[2]<="Z"))
    {
        error.innerHTML="Error in PostalCode!!!";
        return false;
    }
    else if(!(pCode[3] >=0 && pCode[3]<=9))
    {
        error.innerHTML="Error in PostalCode!!!";
        return false;
    }
    else if(!(pCode[4] >="A" && pCode[4]<="Z"))
    {
        error.innerHTML="Error in PostalCode!!!";
        return false;
    }
    else if(!(pCode[5] >=0 && pCode[5]<=9))
    {
        error.innerHTML="Error in PostalCode!!!";
        return false;
    }
    else if((pro[0]=='O' && pro[1]=='N') ){
        if(!(pCode[0]=='K' || pCode[0]=='L' ||pCode[0]=='M'||pCode[0]=='N'||pCode[0]=='P'))
        {
            error.innerHTML="Error in PostalCode!!!";
            return false;
        }
    }
    else if((pro[0]=='Q' && pro[1]=='C') ){
        
        if(!(pCode[0]=='G' || pCode[0]=='H' ||pCode[0]=='J'))
        {

            error.innerHTML="Error in PostalCode!!!";
            return false;
        }
    }
    
    else if(((pro[0]=='N' && pro[1]=='S'))){
        if(!(pCode[0]=='B'))
        {

            error.innerHTML="Error in PostalCode!!!";
            return false;
        }
    }
    else if(((pro[0]=='N' && pro[1]=='B'))){
        if(!(pCode[0]=='E'))
        {
            error.innerHTML="Error in PostalCode!!!";
            return false;
        }
    }
    else if(((pro[0]=='M' && pro[1]=='B'))){
        if(!(pCode[0]=='R'))
        {
            error.innerHTML="Error in PostalCode!!!";
            return false;
        }
    }
    else if(((pro[0]=='B' && pro[1]=='C'))){
        if(!(pCode[0]=='V'))
        {
            error.innerHTML="Error in PostalCode!!!";
            return false;
        }
    }
    else if((pro[0]=='P' && pro[1]=='E')){
        if(!(pCode[0]=='C'))
        {
            error.innerHTML="Error in PostalCode!!!";
            return false;
        }
    }
    else if(((pro[0]=='S' && pro[1]=='K') )){
        if(!(pCode[0]=='S'))
        {
            error.innerHTML="Error in PostalCode!!!";
            return false;
        }
    }
    else if(((pro[0]=='A' && pro[1]=='B') )){
        if(!(pCode[0]=='T'))
        {
            error.innerHTML="Error in PostalCode!!!";
            return false;
        }
    }
    else if(((pro[0]=='N' && pro[1]=='L') )){
        if(!(pCode[0]=='A'))
        {
            error.innerHTML="Error in PostalCode!!!";
            return false;
        }
    }
    else if(((pro[0]=='N' && pro[1]=='T') )){
        if(!(pCode[0]=='X'))
        {
            error.innerHTML="Error in PostalCode!!!";
            return false;
        }
    }
    else if(((pro[0]=='Y' && pro[1]=='T'))){
        if(!(pCode[0]=='Y'))
        {
            error.innerHTML="Error in PostalCode!!!";
            return false;
        }
    }
    return true;
    
}
