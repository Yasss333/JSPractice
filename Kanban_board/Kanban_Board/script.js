// alert('hello yash')
const todoboard = document.getElementById("todoboard");

const taskbtn = document.getElementById("button");


taskbtn.addEventListener('click',()=>{
        const input= prompt('what is the task ? ');
        if(!input) return ;

        const taskcard=document.createElement('p')
        taskcard.classList.add('item') ;
        
        taskcard.innerText=input;
        taskcard.setAttribute('draggable', true);


        todoboard.appendChild(taskcard);

        taskcard.addEventListener("dragstart", () => {
          taskcard.classList.add("flying");
        });

        taskcard.addEventListener("dragend", () => {
          taskcard.classList.remove("flying");
        });
        

    })

    const allboard = document.querySelectorAll(".board");
    const allitem=document.querySelectorAll('.item')

    allitem.forEach((item)=>{
        item.addEventListener('dragstart',()=>{
                item.classList.add('flying');
        });
        item.addEventListener('dragend',()=>{
            item.classList.remove('flying')

        })
    })

    allboard.forEach(board  => {
        board.addEventListener('dragover',()=>{
            const flyingelement=document.querySelector('.flying');
            console.log(board, 'kuch toh mere upar se gaya', flyingelement);
            board.appendChild(flyingelement);
        });
    });