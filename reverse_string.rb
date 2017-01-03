def reverse(string)
  o = ''
  i = string.length - 1
  while i >= 0
    o += string[i]
    i -= 1
  end
  o
end

reverse('Hey whats up, friend?')
