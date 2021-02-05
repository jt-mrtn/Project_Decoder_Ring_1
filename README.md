# Project_Decoder_Ring_1
 Ciphering challenges - Caesar Shift, Polybius Square and Substitution

## Caesar Shift
``` 
caesar("Zebra Magazine", 3) => "cheud pdjdclqh"
```
* It returns false if the shift value is equal to 0, less than -25, greater than 25, or not present.
* It ignores capital letters. For example, the results of 'A SECRET' and 'a secret' will be the same.
* It wraps around the alphabet. For example, shifting z to the right by 3 causes z to wrap around to the front of the alphabet; z becomes c.
* It maintains spaces and other nonalphabetic symbols in the message, before and after encoding or decoding.

## Polybius Square
``` 
polybius("message") => "23513434112251"
```
* When encoding, it translates the letters i and j to 42. The grid used is given Thinkful matrix.
* When decoding, it translates 42 to (i/j).
* It ignores capital letters. For example, the results of 'A SECRET' and 'a secret' will be the same.
* It maintains spaces in the message, before and after encoding or decoding.

## Substitution Cypher
``` 
substitution("message", "plmoknijbuhvygctfxrdzeswaq") => "ykrrpik"
```
* It returns false if the given alphabet isn't exactly 26 characters long.
* It correctly translates the given phrase, based on the alphabet given to the function.
* It returns false if there are any duplicate characters in the given alphabet.
* It maintains spaces in the message, before and after encoding or decoding.
* It ignores capital letters. For example, the results of 'A SECRET' and 'a secret' will be the same.
