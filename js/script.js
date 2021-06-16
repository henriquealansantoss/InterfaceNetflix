let c = (e)=> document.querySelector(e);
let cl = (e)=> document.querySelectorAll(e);
 

JsonImages.map((item,index)=>{
    let cloneItem = document.createElement('div');
    cloneItem.setAttribute('class','item');

    let imgItem = document.createElement('img');
    
    imgItem.classList.add('box-filme');
    imgItem.src = item.img;

    cloneItem.appendChild(imgItem);
   
    c('.owl-carousel').append(cloneItem);

    console.log(cloneItem);
})



