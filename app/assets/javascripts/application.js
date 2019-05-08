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
      const operation = ''

      // Remove .is-depressed class from all keys
    Array.from(key.parentNode.children)
      .forEach(key_value => key_value.classList.remove('is-depressed'))


      if(!action){
        if(displayedNumber === '0' || previousKeyType === 'operator'){
          display.textContent = keyContent
        }else{
          display.textContent = displayedNumber + keyContent
        }

        calculator.dataset.previousKey = 'number'

      }

      if(
        action === 'add' ||
        action === 'subtract' ||
        action === 'multiply' ||
        action === 'divide'
        ){

          const number1 = calculator.dataset.number1
          const operator = calculator.dataset.operator
          const number2 = displayedNumber

          key.classList.add('is-depressed');
          calculator.dataset.number1 = displayedNumber
          calculator.dataset.previousKeyType = 'operator'
          calculator.dataset.operator = action
        }

        if(action === 'decimal'){
          display.textContent = displayedNumber + '.'
          calculator.dataset.previousKey = 'decimal'
        }

        if (action !== 'clear') {
          const clearButton = calculator.querySelector('[data-action=clear]')
          clearButton.textContent = 'CE'
        }

        if (action === 'clear') {
          if (key.textContent === 'AC') {
            calculator.dataset.firstValue = ''
            calculator.dataset.modValue = ''
            calculator.dataset.operator = ''
            calculator.dataset.previousKeyType = ''
          } else {
            key.textContent = 'AC'
          }
        display.textContent = 0
          calculator.dataset.previousKeyType = 'clear'
        }

        if(action === 'calculate'){
          const number1 = calculator.dataset.number1
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
                  console.log("Resultado: ", response);
                  console.log(result_calculator);
                  display.textContent = response.result
                },
                error: function(response){
                  console.log(response);
                }
              })

            calculator.dataset.previousKeyType = 'calculate'
          }

        }

  })


});
