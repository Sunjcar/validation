const validition = (() => {

const form = document.getElementsByTagName('form')[0]
const email = document.getElementById('email')
const emailError = document.querySelector('#email + span.error')
const firstName = document.getElementById('firstname')
const firstNameError = document.querySelector('#firstname + span.error')
const lastName = document.getElementById('lastname')
const lastNameError = document.querySelector('#lastname + span.error')
const phoneNum = document.getElementById('phonenumber')
const phoneError = document.querySelector('#phonenumber + span.error')
const zipCode = document.getElementById('zipcode')
const zipCodeError = document.querySelector('#zipcode + span.error')
const country = document.getElementById('country')
const countryError = document.querySelector('#country + span.error')
const password = document.getElementById('password')
const passwordError = document.querySelector('#password + span.error')
const confirmPassword = document.getElementById('confirmpassword')
const confirmPasswordError = document.querySelector('#confirmpassword + span.error')

        email.addEventListener('input', () => {
            if (email.validity.valid){
                emailError.textContent = ''
                emailError.className = 'error'
            } else {
                showError();
            }
        })

        form.addEventListener('submit', (e) => {
        if (!email.validity.valid || !firstName.validity.valid){
                showError()
                showFirstNameError();
                e.preventDefault()
            }
        })

        function showError() {
        if(email.validity.valueMissing) {
            // If the field is empty,
            // display the following error message.
            emailError.textContent = 'You need to enter an e-mail address ex: 123@gmail.com';
        } else if(email.validity.typeMismatch) {
            // If the field doesn't contain an email address,
            // display the following error message.
            emailError.textContent = 'Entered value needs to be an e-mail address. DUMBO';
        }
        // Set the styling appropriately
        emailError.className = 'error active';
        }


        firstName.addEventListener('input', () => {
            if (firstName.validity.valid){
                firstNameError.textContent = ''
                firstNameError.className = 'error'
            }else {
                showFirstNameError()
            }
        })

        function showFirstNameError(){
            if (firstName.validity.valueMissing){
                firstNameError.textContent = 'Please Enter a First Name'
            }
            firstNameError.className = 'error active'
        }

        lastName.addEventListener('input', () => {
            if (lastName.validity.valid){
                lastNameError.textContent = ''
                lastNameError.className = 'error'
            }else {
                showLastNameError()
            }
        })

        function showLastNameError(){
            if (lastName.validity.valueMissing){
                lastNameError.textContent = 'Please enter a Last Name'
            }
            lastNameError.className = 'error active'
        }

        phoneNum.addEventListener('input', () => {
            if (phoneNum.validity.valid){
                phoneError.textContent = ''
                phoneError.className = 'error'
            }else {
                showPhoneError()
            }
        })

        function showPhoneError(){
            if (phoneNum.validity.valueMissing){
                phoneError.textContent = 'Please Enter a phone #'
            }else if (phoneNum.validity.tooShort){
                phoneError.textContent = 'Must be 9 digits'
            }  
                phoneError.className = 'error active'
        }

        zipCode.addEventListener('input', () => {
            if (zipCode.validity.valid && zipCode.value.search(/[0-9]/) <= 5){
                zipCodeError.textContent = ''
                zipCodeError.className = 'error'
            }else {
                showZipCodeError()
            }
        })

        function showZipCodeError(){
            if (zipCode.validity.valueMissing){
                zipCodeError.textContent = 'Please Enter a Zip Code'
            } 
            if (zipCode.validity.tooShort){
                zipCodeError.textContent = 'Must be 5 digits'
            }  
            if (zipCode.value.search(/[0-9]/) < 5){
                zipCodeError.textContent = 'Must contain #s'
            }  
                zipCodeError.className = 'error active'
        }

        country.addEventListener('select', () => {
            if (country.textContent !== 'Please Select'){
                countryError.textContent = ''
                countryError.className = 'error'
            } else {
                showCountryError()
            }
        })

        function showCountryError(){
            if(country.textContent == 'Please Select'){
                countryError.textContent = 'Select a Country'
            }
            countryError.className = 'error active'
        }

        password.addEventListener('input', () => {
            let p = password.value
            if ( /* p.search (/[a-z]/i) > 0 && p.search(/[0-9]/) > 0 */ password.validity.valid ){
                passwordError.textContent = ''
            }
            if (password.validity.valueMissing){
                'Please Enter a Password'
            }
            if (p.search (/[a-z]/i) < 0){
                passwordError.textContent = 'Your password must contain a letter'
            }
            if (p.search(/[0-9]/) < 0){
                passwordError.textContent = 'Your password must contain at least one digit'
            }
            if (p.length < 8){
                passwordError.textContent = 'Your password must be at least 8 characters long'
            }
        })    
        confirmPassword.addEventListener ('input', () => {
            if (password.value == confirmPassword.value){
                confirmPasswordError.textContent = ''
            }else {
                confirmPasswordError.textContent = 'Passwords do not match'
            }
        })
        })()