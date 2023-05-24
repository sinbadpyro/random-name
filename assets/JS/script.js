let contain = document.getElementById('contain')



fetch('https://randomuser.me/api')
   .then(res => {
      return res.json();
   }).then(data => {
      console.log(data)
      contain.innerHTML = `
      <div class="card">
      <img src="${data.results[0].picture.large}" alt="Avatar" style="width:100%">
      <div class="container">
          <p>Departement: ${data.results[0].location.state}</p>
          <p>Ville: ${data.results[0].location.city}</p>
          <p>Pseudo: ${data.results[0].login.username}</p>
          <h4><b>John Doe</b></h4>
          <p>Architect & Engineer</p>
      </div>
   </div>
      `
   });


   
   
  