let tbody = document.querySelector('tbody');
let grid = document.querySelector('.grid');

async function getpost() {
    try {
        let res = await fetch('https://jsonplaceholder.typicode.com/todos');
        data = await res.json();
        displaypost();
        displaydiv();
        console.log('data: ', data);
    } 
    catch(error) {
        console.log('error: ', error);
    }
}

function displaypost() {
    data.forEach((to) => {
        console.log('todo: ', to);
        //creating elements
        let tr = document.createElement('tr');
        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        let td3 = document.createElement('td');
        let td4 = document.createElement('td');
        //setting text content
        td1.textContent = to.userId;
        td2.textContent = to.id;
        td3.textContent = to.title;
        td4.textContent = to.completed; 
        //appending elements
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tbody.appendChild(tr);
    });
}

function displaydiv() {
    data.forEach((to) => {
        console.log('todo: ', to);
        //creating elements
        let div = document.createElement('div');
        let d1 = document.createElement('p');
        let d2 = document.createElement('p');
        let d3 = document.createElement('p');
        let d4 = document.createElement('p');
        //setting text content
        d1.textContent = `UserID: ${to.userId}`;
        d2.textContent = `ID: ${to.id}`;
        d3.textContent = `Title: ${to.title}`;
        d4.textContent = `Completed: ${to.completed}`;
        //appending elements
        
        div.appendChild(d1);
        div.appendChild(d2);
        div.appendChild(d3);
        div.appendChild(d4);
        div.style.backgroundColor = to.completed ? 'green' : 'red';

        grid.appendChild(div);  
    });
}

getpost();
