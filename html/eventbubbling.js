const grandparent=document.querySelector('.grandparent');
const parent=document.querySelector('.parent');
const child=document.querySelector('.child');



//  event bubbling goes from child to => parent 

// grandparent.addEventListener("click",(e)=>{
//     // e.stopPropagation();
//     // console.log('grandparent bubbling');
//     alert('grandparent bubbling');

// },{once:true});
// parent.addEventListener("click",(e)=>{
//     // e.stopPropagation();
//     // console.log('parent bubbling');
//     alert('parent bubbling');
// });
// child.addEventListener("click",(e)=>{
//     // e.stopPropagation();
//     // console.log('child bubbling');
//     alert('child bubbling');
// })

    
// event capturing -trickling down...it goes from parent => to child


// grandparent.addEventListener("click",(e)=>{
//     console.log('grandparent capturing');
//     // e.stopPropagation();
// },{once:true,capture:true});


// parent.addEventListener("click",(e)=>{
//     console.log('parent capturing');
//     // e.stopPropagation();
// },{capture:true});


// child.addEventListener("click",(e)=>{
//     e.stopPropagation();
//     console.log('child capturing');
// },{capture:true});




//  to remove the element from event listener we can use remove event listner element
//  to remove element after given time


// function printGrandParent(){
//     console.log('grandParent bubbling');
// }
// grandparent.addEventListener("click",printGrandParent);

// setTimeout(()=>{
//     grandparent.removeEventListener("click",printGrandParent);
// },5000);



// to remove the element using a btn


// const button=document.querySelector('#btn');

// function printGrandParent(){

//     console.log('grandParent bubbling');
// }

// grandparent.addEventListener("click",printGrandParent);

// function removeGrandparent(){
//     setTimeout(()=>{
//         grandparent.removeEventListener("click",printGrandParent);
//     },5000);
// }

// button.addEventListener('click',removeGrandparent);





//  mouseover


// grandparent.addEventListener("mouseover",()=>{

//     console.log(" gp hovering");})



// mouseenter

// specific div pr enter krne pr hi work krega
    
// grandparent.addEventListener("mouseenter",()=>{

//         console.log("hovering");})


// mouseout

// grandparent.addEventListener("mouseout",()=>{

//             console.log("hovering");});
        
    
// mouse leave

// grandparent.addEventListener("mouseleave",()=>{

//     console.log("hovering");});
