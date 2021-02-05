# Project_Decoder_Ring_1
 Ciphering challenges - Caesar Shift, Polybius Square and Substitution

## Caesar Shift
* Example: *
``` caesar("Zebra Magazine", 3) => "cheud pdjdclqh"
```
* It returns false if the shift value is equal to 0, less than -25, greater than 25, or not present.
* It ignores capital letters. For example, the results of 'A SECRET' and 'a sercret' will be the same.
* It wraps around the alphabet. For example, shifting z to the right by 3 will cause z to wrap around to the front of the alphabet, z becomes c.
* It maintains spaces and other nonalphabetic symbols in the message, before and after encoding or decoding.
