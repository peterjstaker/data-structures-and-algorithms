# Hashtables - Left Join

## Challenge Summary - Left Join

[<--- Back to Table of Contents](../../../README.md)

### Challenge Description - Left Join

Implement a simplified LEFT JOIN for 2 Hashmaps.

* Write a function that LEFT JOINs two hashmaps into a single data structure.

* The first parameter is a hashmap that has word strings as keys, and a synonym of the key as values.

* The second parameter is a hashmap that has word strings as keys, and antonyms of the key as values.

* Combine the key and corresponding values (if they exist) into a new data structure according to LEFT JOIN logic.

* LEFT JOIN means all the values in the first hashmap are returned, and if values exist in the “right” hashmap, they are appended to the result row. If no values exist in the right hashmap, then some flavor of NULL should be appended to the result row.

* The returned data structure that holds the results is up to you. It doesn’t need to exactly match the output below, so long as it achieves the LEFT JOIN logic.

* Avoid utilizing any of the library methods available to your language.

### Approach & Efficiency - Left Join

* Declare a function that takes in two hashmaps

* iterate through the right hashmap's buckets

* if left hashmap contains the key for the current bucket, iterate through the bucket and add each value to left hashmap

* Return left hashmap

My solution is O(n).

### Solution - Left Join

View Solution: [code](./leftJoin.js)

![Left Join](./assets/left-join.jpg)
