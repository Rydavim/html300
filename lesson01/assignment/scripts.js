// delays DOM-dependant code from running until the DOM has finished loading
document.addEventListener("DOMContentLoaded", function(){
  // save form elems to vars
  const isInArray = document.querySelector('#is-in-array')
  const howManyHigher = document.querySelector('#how-many-higher')
  const largestNum = document.querySelector('#largest-num')
  const keyValEntry = document.querySelector('#key-val-entry')

  // array for use in methods
  let data = [12, 13, 34, 62, 81, 84, 97]
  isInArray.addEventListener('submit', function(event){
    // prevent default action
    event.preventDefault()

    // get user input information
    const inputField = document.querySelector('#is-in-array .input')
    const userInput = inputField.value
    const userNumber = parseInt(userInput)

    // check if input is a num
    if(!isNaN(userNumber)){
      // check if the user number is in the data array
      const inArray = data.includes(userNumber)
      let outputText = `Is ${userNumber} in the array? ${inArray}`
      document.querySelector('#is-in-array .output').innerHTML = outputText
    }

    // clear the form input for reuse
    inputField.value = ''
  })

  howManyHigher.addEventListener('submit', function(event){
    // prevent default action
    event.preventDefault()

    // get user input information
    const inputField = document.querySelector('#how-many-higher .input')
    const userInput = inputField.value
    const userNumber = parseInt(userInput)

    // check if input is a num
    if(!isNaN(userNumber)){
      // check how many array elements are larger than the user number
      const numsHigher = data.filter(elems => elems > userNumber)
      let outputText = `There are ${numsHigher.length} numbers higher than ${userNumber} in the array.`
      document.querySelector('#how-many-higher .output').innerHTML = outputText
    }

    // clear the form input for reuse
    inputField.value = ''
  })

  largestNum.addEventListener('submit', function(event){
    // prevent default action
    event.preventDefault()

    // get user input information
    const inputField = document.querySelector('#largest-num .input')
    const userInput = inputField.value
    const userNumber = parseInt(userInput)

    // check if input is a num
    if(!isNaN(userNumber)){
      // check to see if the user number is the
      // check how many array elements are larger than the user number
      const numsHigher = data.filter(elems => elems > userNumber)
      let outputText = `There are ${numsHigher.length} numbers higher than ${userNumber} in the array.`
      document.querySelector('#how-many-higher .output').innerHTML = outputText
    }

    // clear the form input for reuse
    inputField.value = ''
  })
})


  // const sum = data.reduce((accumulator, currentElement) => accumulator + currentElement);
