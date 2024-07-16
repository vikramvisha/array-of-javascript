// 1.inserting a element inarray
let arr1=[5,23.54,54,12,22,56]
arr1.push(36,32)
console.log(arr1)
// 2.deleting a element from end of the array
arr1.pop()
console.log(arr1)
// 2.deleting a beginning of the array
 arr1.shift(2)
 console.log(arr1)
// 3.deleting at end  of the array
arr1.unshift(21)
console.log(arr1)
// 3.searching the elements  in the array
console.log(arr1.indexOf(12))
// 4.array Mapping and reverse the array
let newarr=arr1.map(x=> x*2)
console.log(newarr)
console.log(newarr.reverse())
let arr2=arr1.sort();
console.log(arr2)
//5.includes
let a=[1,2,3,4.6,5,7]
let c=a.includes(5)
console.log(c)
// 6.merge to array
 let b=newarr.concat(a)
 console.log(b)
 //sum of array
 let i;
 let sum=0
 for(i=0;i<arr1.length;i++)
 {
    sum=sum+arr1[i]

 }
// converting array to string

for(i=0;i<arr1.length;i++)
{
    console.log("Array Elements :",arr1[i])

}