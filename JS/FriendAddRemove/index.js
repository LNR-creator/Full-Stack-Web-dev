let AddFriend = document.getElementById('add');
let RemoveFrnd = document.getElementById('remove');
let Status = document.getElementById('status');

AddFriend.addEventListener('click',()=>{
    Status.innerHTML = 'Friend';
    Status.style.color = 'green';
});

RemoveFrnd.addEventListener('click',()=>{
    Status.innerHTML = 'Stranger';
    Status.style.color = 'red';
});