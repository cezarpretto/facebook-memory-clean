//Author Paulo Henrique
//Clean Memory Facebook
console.log("Facebook Memory Clean Started!")

const clearMemory = () => {
  setTimeout(() => {
    Array.from(document.querySelectorAll('div'))
    .filter(x => x.getAttribute('class') === '_4ikz')
    .filter((x, idx) => idx <= 10)
    .forEach(x => x.remove())
    clearMemory()
  }, 60000)
}
clearMemory()
