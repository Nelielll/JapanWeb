document.getElementById("suntUnButon").addEventListener("click", function(){
fetch('http://localhost:3000/orase', {method: 'get'})
.then(
  function(response) {
    if (response.status !== 200) {
      console.log('Looks like there was a problem. Status Code: ' +
        response.status);
      return;
    }

    // Examine the text in the response
    response.json().then(function(data) {
      console.log(data);
      body = document.getElementById('body');
      var exista = document.getElementById("container");
      do
      {
          exista = document.getElementById("container");
          if(exista==null)
          break;
          exista.parentNode.removeChild(exista);}  while(exista != null);
        for(i = 0;i < data.length;i++)
            {
              var numeOras = document.getElementById("nume");
              var pretOras = document.getElementById("pret");
              let Container = document.createElement("div");
              Container.setAttribute("id","container");

                if (data[i].name.toLowerCase()==numeOras.value.toLowerCase() && data[i].price<pretOras.value)
                {
                  let Nume = document.createElement("p", "p" + i);
                  Nume.innerHTML = 'Numele orasului: ' + data[i].name;
                  Nume.setAttribute("class", "textForm");
                  let pret = document.createElement("p", "p" + i);
                  pret.innerHTML = 'Pretul este de : '+data[i].price+' Euro.';
                  pret.setAttribute("class", "textForm");
                  let Img = document.createElement("img");
                  Img.src = data[i].img;
                  let form = document.getElementById("alege");
                  
                  Container.appendChild(Nume);
                  Container.appendChild(pret);
                  Container.appendChild(Img);
                  Container.appendChild(form);
                }
                body.appendChild(Container);
            }


    });
  }
)
.catch(function(err) {
    console.log('Fetch Error :-S', err);
  });
}); 
document.getElementById("orice").addEventListener("click", function(){
  fetch('http://localhost:3000/orase', {method: 'get'})
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }
  
      // Examine the text in the response
      response.json().then(function(data) {
        console.log(data);
        body = document.getElementById('body');
        var exista = document.getElementById("container");
        while(exista != null)
        {
            exista = document.getElementById("container");
            if(exista==null)
              break;
            exista.parentNode.removeChild(exista);} 
          for(i = 0;i < data.length;i++)
              {
                let Container = document.createElement("div");
                Container.setAttribute("id","container");
                 let Nume = document.createElement("p", "p" + i);
                    Nume.innerHTML = 'Numele orasului: ' + data[i].name;
                    Nume.setAttribute("class", "textForm");
                    let pret = document.createElement("p", "p" + i);
                    pret.innerHTML = 'Pretul este de : '+data[i].price+' Euro.';
                    pret.setAttribute("class", "textForm");
                    let Img = document.createElement("img");
                    Img.src = data[i].img;
                    Container.appendChild(Nume);
                    Container.appendChild(pret);
                    Container.appendChild(Img);             
                  body.appendChild(Container);
              }
  
  
      });
    }
  )
  .catch(function(err) {
      console.log('Fetch Error :-S', err);
    });
  }); 


document.getElementById("buton").addEventListener("click", function(){
   var nume = document.getElementById("numePers");
   var prenume = document.getElementById("prenumePers");
   var oras = document.getElementById("orasPers");
   var an = document.getElementById("an");
   var luna = document.getElementById("luna");
    var obiect = {
        name:nume.value,
        surname:prenume.value,
        city:oras.value,
        year:an.value,
        month:luna.value

    };
    var ob = JSON.stringify(obiect); 

    fetch('http://localhost:3000/excursii', {
        method: 'post',
        headers: {
          "Content-type": "application/json"
        },
        body: ob
      })
      .then(function (data) {
        console.log('Request succeeded with JSON response', data);
      })
      .catch(function (error) {
        console.log('Request failed', error);
      });
}
); 

function updateExcursie(id) {
  var nume = document.getElementById("numePers");
  var prenume = document.getElementById("prenumePers");
  var oras = document.getElementById("orasPers");
  var an = document.getElementById("an");
  var luna = document.getElementById("luna");

  const obiect = {
    name:nume.value,
    surname:prenume.value,
    city:oras.value,
    year:an.value,
    month:luna.value
  }
  fetch('http://localhost:3000/excursii/'+id, {
      method: 'put',
      headers: {
          "Content-type": "application/json"
      },
      body: JSON.stringify(obiect)
  }).then(function (data) {
    console.log('Request succeeded with JSON response', data);
  })
  .catch(function (error) {
    console.log('Request failed', error);
  });
}

document.getElementById("buton2").addEventListener("click", function(){
  var id = 2;
  updateExcursie(id);
});

function deleteEcursie(id) {

  fetch('http://localhost:3000/excursii/'+id, {
      method: 'DELETE',
  }).then(function (data) {
    console.log('Request succeeded with JSON response', data);
  })
  .catch(function (error) {
    console.log('Request failed', error);
  });
}

document.getElementById("buton3").addEventListener("click", function(){
  var id = 2;
  deleteEcursie(id);
});

