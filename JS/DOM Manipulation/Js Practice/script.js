function getRandomColor(){
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
     let b = Math.floor(Math.random()*256);
     return `rgb(${r}, ${g}, ${b})`;
}

 document.getElementById('btn').addEventListener('click', () => {
      document.getElementById('title').innerHTML = "Hello, Pro Developer!";
      document.body.style.backgroundColor = getRandomColor();
    });