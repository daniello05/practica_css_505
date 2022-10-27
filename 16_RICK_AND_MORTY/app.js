const apiRick=async(pagina)=>{
    let url="https://rickandmortyapi.com/api/character/?page="+pagina;
    const api= await fetch(url);
    const data=await api.json();
    console.log(data);
    divRes=document.querySelector("#resultado")
    divRes.innerHTML=""
    data.results.map(item=>{
        divItem=document.createElement(`div`)
        divItem.innerHTML=`
    <div class="card" style="width: 18rem;">
    <img src="${item.image}" class="card-img-top" alt="...">
    <div class="card-body">
    <h5 class="card-title">${item.name}</h5>
    <p class="card-text"><b>${item.status}</b></p>
    <p class="card-text"><b>${item.species}</b></p>
    <p class="card-text"><b>${item.gender}</b></p>
    <p class="card-text"><b>${item.location.name}</b></p>
    <p class="card-text"><b>${item.origin.name}</b></p>
    <p class="card-text"><b>${item.id}</b></p>
    <p class="card-text"><b>${item.created}</b></p>
    <a href="#" class="btn btn-primary"></a>
  </div>
</div>
`
    
    divRes.appendChild(divItem);
});
}
const apiEpisodios=async(pagina)=>{
    let url="https://rickandmortyapi.com/api/episode/?page="+pagina;
    const api= await fetch(url);
    const data=await api.json();
    console.log(data);
    divRes=document.querySelector("#resultado")
    divRes.innerHTML=""
    data.results.map(item=>{
        divItem=document.createElement(`div`)
        divItem.innerHTML=`
    <div class="card" style="width: 18rem;">
    <div class="card-body">
    <h5 class="card-title">${item.name}</h5>
    <p class="card-text"><b>${item.air_date}</b></p>
    <p class="card-text"><b>${item.episode}</b></p>
    <p class="card-text"><b>${item.id}</b></p>
    <p class="card-text"><b>${item.created}</b></p>
    <a href="#" class="btn btn-primary"></a>
  </div>
</div>
`
    
    divRes.appendChild(divItem);
});
}






const apilocalizacion=async(pagina)=>{
    let url="https://rickandmortyapi.com/api/location/?page="+pagina;
    const api= await fetch(url);
    const data=await api.json();
    console.log(data);
    divRes=document.querySelector("#resultado")
    divRes.innerHTML=""
    data.results.map(item=>{
        divItem=document.createElement(`div`)
        divItem.innerHTML=`
    <div class="card" style="width: 18rem;">
    <img src="${item.image}" class="card-img-top" alt="...">
    <div class="card-body">
    <h5 class="card-title">${item.name}</h5>
    <p class="card-text"><b>${item.id}</b></p>
    <p class="card-text"><b>${item.created}</b></p>
    <p class="card-text"><b>${item.dimension}</b></p>
    <p class="card-text"><b>${item.type}</b></p>
    <a href="#" class="btn btn-primary"></a>
  </div>
</div>
`
    
    divRes.appendChild(divItem);
});
}



