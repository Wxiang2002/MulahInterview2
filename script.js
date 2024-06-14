window.onload = function() {
  console.log("Page loaded");
  var name = localStorage.getItem('name');
  var birthday = localStorage.getItem('birthday');
  var email = localStorage.getItem('email');
  var phoneNumber = localStorage.getItem('phoneNumber');

  document.getElementById('name').textContent = name;
  document.getElementById('birthday').textContent = birthday;
  document.getElementById('email').textContent = email;
  document.getElementById('phoneNumber').textContent = phoneNumber;
};

function submitPage1() {
  var countryCode = document.getElementById('countryCode').value;
  var phoneNumber = document.getElementById('phoneNumber').value;
  var fullPhoneNumber = countryCode + phoneNumber;
  console.log("Full phone number retrieved:", fullPhoneNumber);
  localStorage.setItem('phoneNumber', fullPhoneNumber);
  console.log("Full phone number saved:", fullPhoneNumber);
  navigateToPage2();
}

function submitPage2() {
  var name = document.getElementById('name').value;
  var day = document.getElementById('day').value;
  var month = document.getElementById('month').value;
  var year = document.getElementById('year').value;
  var email = document.getElementById('email').value;

  console.log("Form data retrieved:", name, day, month, year, email);

  var birthday = day + '/' + month + '/' + year;

  localStorage.setItem('name', name);
  localStorage.setItem('birthday', birthday);
  localStorage.setItem('email', email);

  console.log("Name, birthday, and email saved:", name, birthday, email);
  navigateToPage3();
}

function navigateToPage2() {
  console.log("Navigating to Page 2");
  window.location.href = 'page2.html';
}

function navigateToPage3() {
  console.log("Navigating to Page 3");
  window.location.href = 'page3.html';
}
