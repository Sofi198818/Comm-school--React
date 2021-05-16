const profile =document.querySelector('#profileDisplay');

    fetch('https://randomuser.me/api/?results=5')
    .then((res) => {
        return res.json()
    }).then((data) => {
        showRandomUserData(data)
    })


showRandomUserData = (randomUser) => {
    const button = document.querySelector("#btn").addEventListener('click', function(){
        document.querySelector('#profileDisplay').innerHTML = `
        <ul class="list-group">
          <li class="list-group-item"><img src = "${randomUser.results[0].picture.medium}"</li>
          <br>
          <li class="list-group-item">${randomUser.results[0].name.title} ${randomUser.results[0].name.first} ${randomUser.results[0].name.last}</li>
          <br>
          <li class="list-group-item">${randomUser.results[0].email}</li>
          <br>
          <li class="list-group-item">${randomUser.results[0].location.city}</li>
        `;
    });   
}


    

