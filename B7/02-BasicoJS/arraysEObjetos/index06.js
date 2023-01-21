
// loop for, array

let colors = ['white', 'red', 'yellow', 'blue']
/*
for (let n = 0; n < colors.length; n++ ) {
    console.log(colors[n])
} 
*/
colors.push('black', 'gray')

/*
for(let i in colors){
    console.log(colors[i])
}
*/
colors.unshift('pink')// inseri o elemento na 1 posicao do array
for(let color of colors) {
    console.log(color)
}