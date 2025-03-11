function validateForm(){
  alert('you are in validateForm')
  let val=true;
  let nameValue = document.formName.nameId.value;
  let genderSelected = document.quretSelector('input[name=gender]:checked')
  console.log('nameValue>>',nameValue)
  if(nameValue.length <5){
      alert('entered name is less than 5 character')
      val=false;
  }
return val;
  }
// function validateForm(){
//     alert('im here')
//     console.log('here')
// }
