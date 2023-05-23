let showAll = document.getElementById('show-all');
let nature = document.getElementById('nature');
let people = document.getElementById('people');
let cars = document.getElementById('cars');
let bikes = document.getElementById('bikes');
let container = document.getElementById('container');


async function getData(){
    let response = await fetch('./data.json');
    let data = await response.json();
    return data;
   
    
};


showAll.addEventListener('click',showAllItems);
nature.addEventListener('click',showNature);
people.addEventListener('click',showPeople);
cars.addEventListener('click',showCars);
bikes.addEventListener('click',showBikes);

async function renderAllImages(){
    let data = await getData();
    let shuffelArray = [...data].sort(()=> Math.random() - 0.5);
    shuffelArray.forEach((item)=>{
      let div = document.createElement('div');
      let img = document.createElement('img');
      let h3 = document.createElement('h3');
      let p = document.createElement('p');
      h3.textContent = item.title;
      p.textContent = item.description;
      img.setAttribute('src',item.img);
      div.appendChild(img);
      div.appendChild(h3);
      div.appendChild(p)
      container.appendChild(div);
    });
};

document.body.onload = renderAllImages

async function showAllItems(){
    container.innerHTML = '';
  let data = await getData();
  let shuffelArray = [...data].sort(()=> Math.random() - 0.5);
  shuffelArray.forEach((item)=>{
    let div = document.createElement('div');
    let img = document.createElement('img');
    let h3 = document.createElement('h3');
    let p = document.createElement('p');
    h3.textContent = item.title;
    p.textContent = item.description;
    img.setAttribute('src',item.img);
    div.appendChild(img);
    div.appendChild(h3);
    div.appendChild(p)
    container.appendChild(div);
  });
  

};



 async function showNature(){
    container.innerHTML = '';
    let data = await getData();
    let filteredItem = data.filter((item)=> item.category === 'nature');
    let shuffelArray = [...filteredItem].sort(()=> Math.random() - 0.5);
    shuffelArray.forEach((item)=>{
        let img = document.createElement('img');
        let div = document.createElement('div');
        let h3 = document.createElement('h3');
        let p = document.createElement('p');
        h3.textContent = item.title;
        p.textContent = item.description;
        img.setAttribute('src',item.img);
        div.appendChild(img);
        div.appendChild(h3);
        div.appendChild(p)
        container.appendChild(div);
    });

   

};


async function showPeople(){
    container.innerHTML = '';
    let data = await getData();
    let filteredItem = data.filter((item)=> item.category === 'people');
    let shuffelArray = [...filteredItem].sort(()=> Math.random() - 0.5);
    shuffelArray.forEach((item)=>{
        let img = document.createElement('img');
        let div = document.createElement('div');
        let h3 = document.createElement('h3');
        let p = document.createElement('p');
        h3.textContent = item.title;
        p.textContent = item.description;
        img.setAttribute('src',item.img);
        div.appendChild(img);
        div.appendChild(h3);
        div.appendChild(p)
        container.appendChild(div);
    });
};



async function showCars(){
    container.innerHTML = '';
    let data = await getData();
    let filteredItem = data.filter((item)=> item.category === 'car');
    let shuffelArray = [...filteredItem].sort(()=> Math.random() - 0.5);
    shuffelArray.forEach((item)=>{
        let img = document.createElement('img');
        let div = document.createElement('div');
        let h3 = document.createElement('h3');
        let p = document.createElement('p');
        h3.textContent = item.title;
        p.textContent = item.description;
        img.setAttribute('src',item.img);
        div.appendChild(img);
        div.appendChild(h3);
        div.appendChild(p)
        container.appendChild(div);
    });
};

async function showBikes(){
    container.innerHTML = '';
    let data = await getData();
    let filteredItem = data.filter((item)=> item.category === 'bike');
    let shuffelArray = [...filteredItem].sort(()=> Math.random() - 0.5);
    shuffelArray.forEach((item)=>{
        let img = document.createElement('img');
        let div = document.createElement('div');
        let h3 = document.createElement('h3');
        let p = document.createElement('p');
        h3.textContent = item.title;
        p.textContent = item.description;
        img.setAttribute('src',item.img);
        div.appendChild(img);
        div.appendChild(h3);
        div.appendChild(p)
        container.appendChild(div);
    });
};