require 'benchmark'

Benchmark.bm do |bm|
    interations = 500

    # Recursive_Fibonacci Function
    def recursive_fibonacci(n)
        n <= 1 ? n : recursive_fibonacci(n - 1) + recursive_fibonacci(n - 2)
    end

    # While Loop Fibonacci
    def while_fibonacci(n)
        n < 0 ? -1 : fib(n)
    end

    def fib(n)
        a = 1
        b = 0
        while n >= 0
            temp = a
            a += b
            b = temp
            n -= 1
        end
        b
    end

    bm.report ('recursive:') do
        interations.times { recursive_fibonacci(10) }
    end

    bm.report ('looping:') do
        interations.times { while_fibonacci(10) }
    end
end
