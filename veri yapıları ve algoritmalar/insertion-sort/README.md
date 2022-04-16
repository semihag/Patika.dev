# Insertion Sort Projects

**[22, 27, 16, 2, 18, 6]**

**1) insertion sort türüne göre aşamaları**

_step 1_

[2, 27, 16, 22, 18, 6]

_step2_

[2, 6, 16, 22, 18, 27]

_step3_

[2, 6, 16, 18, 22, 27]

**2) Big-O gösterimi**

n + (n -1) + (n - 2) + ... + 1 = [n * (n + 1)] / 2 (n^2 + n) / 2 => n^2

O(n^2)

**3) Time Complexity: Average case: Aradığımız sayının ortada olması,Worst case: Aradığımız sayının sonda olması, Best case: Aradığımız sayının dizinin en başında olması.**

**4) Dizi sıralandıktan sonra 18 sayısı hangi case kapsamına girer? Yazınız.**
Average case kapsamına girer çünkü sayı ortada.

**[7,3,5,8,2,9,4,15,6]**

**insertion sorta göre ilk 4 adımı**

_step1_

[2,3,5,8,7,9,4,15,6]

_step2_

[2,3,4,8,7,9,5,15,6]

_step3_

[2,3,4,5,7,9,8,15,6]

_step4_

[2,3,4,5,6,9,8,15,7]
