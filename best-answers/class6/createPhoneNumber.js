// https://www.codewars.com/kata/525f50e3b73515a6db000b83/train/javascript
function createPhoneNumber(numbers){

  let phoneNumber = "(xxx) xxx-xxxx";

  for (let i = 0; i < numbers.length; i++) {
    phoneNumber = phoneNumber.replace('x', numbers[i]);
  }
  return phoneNumber;
}
