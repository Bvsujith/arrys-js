// Write a code snippet to find the length of an array.

var a=[1,2,3,"length"];
console.log(a.length)

// How do you add an element to the end of an array?
// How do you remove the last element from an array?
// How do you add an element to the beginning of an array?
// How can you remove the first element from an array?

 var b=[1,2,3,4,"suji"]
 b.push("laya")
 console.log(b)
b.pop()
console.log(b)
b.unshift("divya")
console.log(b)
b.shift()
console.log(b)

// How do you reverse the elements in an array?
var c=[1,2,3,4,5,6,7,8,9,"suji"]
var d=c.indexOf(3)
console.log(d)
console.log(c.reverse())

// How can you sort the elements of an array in ascending order

var a=[12,13,14,,6,7,9,,1,2,3,4,]
a.sort((a,b) =>a-b)
console.log(a)

// How can you check if a certain value exists in an array?
var a=[1123,"suji",12,33,44,55,66,77,88,0]
console.log(a.includes(55))

// How can you convert an array to a string using commas as separators?
 var a=["suji","laya"]
console.log(a.join(""))

// Write a code snippet that adds an element to the end of an array, then removes the first element.

var family=["ramya","suji","laya","krish","suseela",]
family.push("divya")
console.log(family)
family.shift()
console.log(family)

// How can you reverse an array and then join the elements into a string?
var alpha=["a","b","c","d"]
 var bet=alpha.reverse().join(" ")
console.log(bet)

// Write a code that first sorts an array in ascending order, then removes the last element.
var a=["mango","banana","apple","jackfruit"]
a.pop()
console.log(a.sort())

// How do you add two elements at the beginning of an array, then remove the first element and find the length of the array?

var a=["suji","krish"]
a.unshift("laya","suseela","suchi")
a.shift()
var b=a.length
console.log(b,a)

// How do you combine two arrays, sort the combined array, and then remove the last element?
var a=["suji"]
var b=["divya","suchi"]
var c=a.concat(b)
c.sort()
console.log(c)
c.pop()
console.log(c)