
formValidate=(formArray)=>{
  console.log(formArray);
    result=true
    for (let i = 0; i < formArray.length; i++) {
        formFieldName=formArray[i]['name'];
        if( document.getElementById(formFieldName).value == "") {
            if($('#'+formFieldName).prop('required')) {
                $("#"+formFieldName).addClass('is-invalid');
                return false;
                break;
            }
        }else{
            if($("#"+formFieldName).hasClass('is-invalid')){
                $("#"+formFieldName).removeClass('is-invalid').addClass('is-valid');
            }else{
                $("#"+formFieldName).addClass('is-valid');
            }
          }
            if(i==formArray.length-1){
                return true;
            }

    } //loop end
} //end validate
    
// convert file too base64 image string--->>
function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}; //end converter

 // Preloader
 var loader=document.getElementById("preload");
 function loaderfn(){
   loader.style.display="none";
 };
// Set cookie function ----->>
function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
//  Get cookie function ---->>
function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
// custom ajax function for post data --->>
async function custom_ajax_iFunction (url, formArray){
    // loader.style.display="block";
    console.log(formArray," inside iFunction");
    iFunction=(url, formArray)=>{
      return $.ajax({
        url: url,
        type: "post",
        data: JSON.stringify(formArray),
        dataType: "json",
        contentType: "application/json",
        headers: {"Authorization": sessionStorage.getItem('auth_key')},
        success: function (data) {
      // loader.style.display="none";
         return data;
        },
      });
    }
    ret= await iFunction(url, formArray);
    return ret
    
  }; //end custom ajaxi
  // custom ajax function for get some data from db ------->>
  async function custom_ajax_gFunction(url){
    // loader.style.display="block";
    gFunction= (url)=>{
      return $.ajax({
        url: url,
        dataType: "json",
        contentType: "application/json",
        headers: {"Authorization": sessionStorage.getItem('auth_key')},
        success: function (data) {
          // loader.style.display="none";
          return data;
          
        },
      });
    } 
    ret= await gFunction(url);
    return ret;
  }; //end custom ajaxg
  
  // convert file too base64 image string--->>
  function getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }; //end converter
  
  // Refresh form using object
  function refresh_form(div,obj,ignore_cols){
    loader.style.display="block";
  
    console.log(obj);
    for (const [key, value] of Object.entries(obj)) {
    if (ignore_cols.includes(key)){
      a=1
    }else{
      $(div+' #'+key).val(value)
      loader.style.display="none";
  
    }
      
    }
  
  } //end refresh_form
  
  
  
  
  
  
  
  
  
  
  