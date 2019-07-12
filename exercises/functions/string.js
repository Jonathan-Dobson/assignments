// find the space

// capitalize the next char


// let capitalize = s => s
//     .split(' ')
//     .map(e=>
//         e[0].toUpperCase() + e.slice(1))
//     .join(' ')


let capitalize = s => s.split(' ').map(e=>e[0].toUpperCase()+e.slice(1)).join(' ')

// console.log(capitalize("hey friends! practice practice practice!"))
