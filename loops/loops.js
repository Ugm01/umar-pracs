//for loop
for (let i = 0; i < 10; i++) {
    console.log(i)
}

// for-of loop
const users = ['max', 'anna', 'joy']
for( const user of users){
    console.log(user)
}

//for-in loop
const loggedInUser = {
    name: 'ugm',
    Age: 20,
    isAdmin: true
}

for (propertyName in loggedInUser){
    console.log(propertyName)
    console.log(loggedInUser[propertyName])
}

//while loop
let isFinished = false
while (!isFinished) {
    isFinished = confirm('Do you want to quit!')
}
console.log('done')