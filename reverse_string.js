let reverse = (string) => {
  let o = '';
  for(let i = string.length - 1; i >= 0; i--){
    o += string[i]
  }
  return o;
}

console.log(reverse('Hey whats up, friend?'))
