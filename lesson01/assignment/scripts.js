// delays DOM-dependant code from running until the DOM has finished loading
document.addEventListener("DOMContentLoaded", function(){
  // save form elems to vars
  const isInArray = document.querySelector('#is-in-array')
  const howManyHigher = document.querySelector('#how-many-higher')
  const largestNum = document.querySelector('#largest-num')
  const inputSum = document.querySelector('#input-sum')

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
      // check how many array elements are larger than the user number
      const numsHigher = data.filter(elems => elems > userNumber)
      let outputText = `There are ${numsHigher.length} numbers higher than ${userNumber} in the array.`
      document.querySelector('#largest-num .output').innerHTML = outputText
    }

    // clear the form input for reuse
    inputField.value = ''
  })

  inputSum.addEventListener('submit', function(event){
    // prevent default action
    event.preventDefault()

    // get user input information
    const inputField = document.querySelector('#input-sum .input')
    const userInput = inputField.value
    const userNumber = parseInt(userInput)

    // check if input is a num
    if(!isNaN(userNumber)){
      // check what number the user would like to add
      let numSum = data.reduce((accumulator, current) => accumulator + current, userNumber)
      let outputText = `The sum of the array elements and your chosen number is ${numSum}.`
      document.querySelector('#input-sum .output').innerHTML = outputText
    }
  })
})
