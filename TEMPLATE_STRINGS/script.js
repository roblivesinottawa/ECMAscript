const print = firstName => console.log(`hello ${firstName}`)

print("Steve Jobs")

console.log('--------------------------------------------------')

const createEmail = (firstName, price) => {
  let shipping = 5.95
  console.log(`hello ${firstName}! Thanks!
      Total: $${price}
      Shipping: $${shipping}
      Grand Total: $${price + shipping}

    `)
}

createEmail("Steve", 400)