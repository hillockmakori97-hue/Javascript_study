let arr =[1,2,3 ,'javascript','python',true,34.73]
// console.log(arr.at(-3))
// console.log(arr.at(-2))
// console.log(arr.at(-4))
// console.log(arr.at(-5))
// console.log(arr[4])
// let subarr=arr.slice(2,4)
// console.log(subarr)
// console.log(arr.pop(arr.at(-3)))
// console.log(arr.shift())
// let gray= ['eye','knees','head',54,55,'hillock',true,false]
// let grey= ['eye','knees','head',54,55,'hillock',true,false]
// console.log(gray.pop())
// console.log(gray.shift())
// let splice_grey=(grey.splice(2,2,'fifty four','fifty five','fifty six'))
// console.log(splice_grey)
// console.log(grey.includes(54))
// console.log(grey.reverse())


// let s_array=[1,2,3,4,5,6,7,8]
// let e_array=s_array.splice(0,3,'x','y','z')




let subarr = arr.slice(2,5)
console.log(subarr)

arr.unshift(100,200,"false")
console.log(arr)//(10) [100, 200, 'false', 1, 2, 3, 'JS', 'Python', true, 34.78]

arr.push(1000,2000)
console.log(arr) //(12) [100, 200, 'false', 1, 2, 3, 'JS', 'Python', true, 34.78, 1000, 2000]

arr.pop()
console.log(arr)//(11) [100, 200, 'false', 1, 2, 3, 'JS', 'Python', true, 34.78, 1000]

arr.shift()
console.log(arr)//(10) [200, 'false', 1, 2, 3, 'JS', 'Python', true, 34.78, 1000]


//splice to add without replacement / deletion
arr.splice(5,0,"four","five","six")
console.log(arr) //(13) [200, 'false', 1, 2, 3, 'four', 'five', 'six', 'JS', 'Python', true, 34.78, 1000]

//splice to add with replacement
arr.splice(8,2,"Java","C++")
console.log(arr)//(13) [200, 'false', 1, 2, 3, 'four', 'five', 'six', 'Java', 'C++', true, 34.78, 1000]

//remove without replacement
arr.splice(4,2)
console.log(arr)//(11) [200, 'false', 1, 2, 'five', 'six', 'Java', 'C++', true, 34.78, 1000]

console.log(arr.includes('Java')) //true

let reversed = arr.reverse()
console.log(reversed) //(11) [1000, 34.78, true, 'C++', 'Java', 'six', 'five', 2, 1, 'false', 200]

let new_arr = [1,100,3,20,123]
console.log(new_arr.sort()) //(5) [1, 100, 123, 20, 3]

//join(),,,,,,,,,,converst aray elemnts into a string 

// loops 
// is a block of code that executed repeatedly as long as a specified condotion is met 
// ios used to eliminate redudnacy in code 
// types of loops 
    // for loop - used when we know the number of iterations beforehand
    // while loop - loops as long as the condition is met 

    // for loop syntax 
    // for(initialization; condition ;update )

    // initialization,,,starting point of a loop 
    // condition ,,,,,,specifies the conditionn to be met 
        // as long as the condotion is met ,,the loop keeps executing 
    // update 
        // incremen/decrement after each implement 

