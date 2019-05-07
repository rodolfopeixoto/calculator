// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
document.addEventListener('DOMContentLoaded',function(){

  const display = document.querySelector('.calculator__display');
  const calculator = document.querySelector('.calculator');
  const keys = calculator.querySelector('.calculator__keys');

  keys.addEventListener('click', event => {
    if(event.target.matches('button')){
      const key = event.target
      const action = key.dataset.action
      const keyContent = key.textContent
      const displayedNumber = display.textContent
      const previousKeyType = calculator.dataset.previousKeyType

      // Remove .is-depressed class from all keys
    Array.from(key.parentNode.children)
      .forEach(key_value => key_value.classList.remove('is-depressed'))


      if(!action){
        if(displayedNumber === '0' || previousKeyType === 'operator'){
          display.textContent = keyContent
        }else{
          display.textContent = displayedNumber + keyContent
        }

      }

      if(
        action === 'add' ||
        action === 'subtract' ||
        action === 'multiply' ||
        action === 'divide'
        ){
          key.classList.add('is-depressed');
          calculator.dataset.number1 = displayedNumber
          console.log("", action)
          calculator.dataset.previousKeyType = 'operator'
        }

        if(action === 'decimal'){
          display.textContent = displayedNumber + '.'
        }

        if(action === 'clear'){
          console.log('clear key');
        }

        if(action === 'calculate'){
          const number1 = displayedNumber
          const operator = calculator.dataset.operator
          const number2 = displayedNumber

          result_calculator = {
            calculate: {
              number1: number1,
              operator: operator,
              number2: number2,
            }
          }

            Rails.ajax({
              type: "GET",
              url: '/calculator/processing',
              data: result_calculator,
              success: function(response){
                console.log(response);
                console.log(result_calculator);
                display.textContent = response.result
              },
              error: function(response){
                console.log(response);
              }
            })

          }

        }

  })


});
