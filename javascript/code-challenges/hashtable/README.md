# Hashtables

[<--- Back to Table of Contents](../../../README.md)

* a data structure that utilizes key value pairs

* every Node or Bucket has both a key, and a value

* basic idea of a hashtable is the ability to store the key and quickly retrieve the value through a hash

* hash is the ability to encode the key that will eventually map to a specific location

* in the data structure, we can directly retrieve the value

## Challenge

Implement a Hashtable with the following methods with add, get, contains and hash methods.

## Approach & Efficiency

My implementation uses linked lists as buckets. Each index contains a bucket. In each index of the array of the hashtable Each index is a bucket. An index could potentially contain multiple key/value pairs if a collision occurs.

* O(1) time complexity for lookups

## API

### .add(key, value)

* takes in both the key and value, hashes the key, and adds the key and value pair to the table, handling collisions as needed

### .get(key)

* takes in the key and returns the value from the table or an array of values if the key has multiple pairs

### .contains(key)

* takes in the key and returns a boolean, indicating if the key exists in the table already

### .hash(key)

* takes in an arbitrary key and returns an index in the collection

## Javascript Implementation && Testing

[Implementation](./hashtable.js)

[Tests](./__tests__/hashtable.test.js)
