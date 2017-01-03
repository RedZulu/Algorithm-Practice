def longest_subsequence(arr)
    ans = 0
    h = {}
    arr.each { |value| h[value] = value }
    h.each do |key, _value|
        next if h[h[key] -= 1]
        j = hash[key]
        j += 1 while h[j]
        ans = [ans, j - hash[key]].max
    end
    ans
end

puts longest_subsequence([1, 9, 3, 10, 4, 20, 2, 5, 5, 4, 12, 13, 14, 6, 7, 14])
