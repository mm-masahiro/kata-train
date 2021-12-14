// https://www.codewars.com/kata/525f50e3b73515a6db000b83/train/javascript
function createPhoneNumber(numbers){

  let phoneNumber = "";
  for (let i = 0; i <= numbers.length -1; i++) {
    if (i === 0) {
      phoneNumber = phoneNumber + "(" + numbers[i];
    } else if (i === 2) {
      phoneNumber = phoneNumber + numbers[i] + ") ";
    } else if (i === 6) {
      phoneNumber = phoneNumber + "-" + numbers[i];
    } else if (i === numbers.length -1) {
      phoneNumber = phoneNumber + numbers[i];
    } else {
      phoneNumber = phoneNumber + numbers[i]; 
    }
  }
  return phoneNumber
}
