// let head=document.head;
// console.log("head is",head)
// let body=document.body;
// console.log("body is",body)
// let title=document.title;
// console.log("title is",title)
// let h1=document.querySelector('.test');
// console.log("h1 is",h1)
// let container=document.querySelector('h1')
// console.log("container is",container)

// container.addEventListener('mouseover',function(){
//     container.style.color='green'
//     container.style.fontSize='50px'
//     container.style.backgroundColor='black'
//     container.style.padding='10px'
//     container.style.borderRadius='10px'
//     gsap.from(container,{
//         duration:1,
//         x:100,
//         y:0,
//         opacity:0,
//         scale:2,
//          delay:0.4,
//          backgroundColor:'yellow',
//         stagger:0.1
//     })
// })
// container.addEventListener('mouseleave',function(){
//     container.style.color='blue'
//     container.style.fontSize='50px'
//     container.style.backgroundColor='black'
//     container.style.padding='10px'
//     container.style.borderRadius='10px'
// })
// let counter=document.querySelector('.counter')

// let button=document.querySelector('button')

// button.addEventListener('click',function(){
//     counter.textContent=Number(counter.textContent)+1;
//     gsap.from('.counter',{
//         scale:2,
//         duration:0.3,
//         x:-100,
//         y:-100,
//         color:'white'
//     })   
// })

// let h3element=document.createElement('h3')
// h3element.textContent='I am h3 element'
// document.body.appendChild(h3element)
// // div.appendChild(h3element)    

// let num=[10,20,30];
// for(let el of num)
//     {
//         let h4=document.createElement('h4');
//         h4.textContent=el;
//         document.body.appendChild(h4)
//     }
/* let add=document.querySelector('.add-element')
add.addEventListener("click",function(){
    numbers.push(100);
    displayArray()
    numbers.length=0
});
function displayArray()
{
    for(let el of numbers)
        {
            let h4=document.createElement('h4');
            h4.textContent=el;
            document.body.appendChild(h4)
        }
} */
let arr = [1, 2, 3];

// Display the array elements
for(let i = 0; i < arr.length; i++) {
    // Create a element
    let p = document.createElement('p');
    // Add Content
    p.textContent = arr[i];
    // Append to the DOM
    document.body.appendChild(p);
}

// Click to add a New Element
function addElement() {
    // Create a element
    let p = document.createElement('p');
    // Add Content
    p.textContent = arr[arr.length - 1] + 1;
    // Append to the DOM
    document.body.appendChild(p);
    // Update the array
    arr.push(arr[arr.length - 1] + 1);
}

const btn = document.querySelector('button');

btn.addEventListener('click', () => {
    addElement();
});