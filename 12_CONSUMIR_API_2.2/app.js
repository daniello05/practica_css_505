var divresultado = document.querySelector("#resultado");

const verusers=async()=>{
    const respuesta=await fetch("https://jsonplaceholder.typicode.com/users")
    const json=await respuesta.json();
    console.log(json)
    json.map(user=>{
        let divuser=document.createElement("div");
        divuser.className="user";
        divuser.innerHTML=`
       <p>${user.id}</p>
       <p>${user.name.toUpperCase()}</p>
       <p>${user.username}[${user.email}]</p>
       <p>${user.address.street} ${user.address.suite}
       ${user.address.city} ${user.address.zipcode}
       </p>
       <p><b>Geolacalizacion: </b>Lat: ${user.address.geo.lat} lng: ${user.address.geo.lng} </p>
       <p><b>Teléfono:</b> ${user.phone}</p>
        <p><b>web:</b> ${user.website}</p>
        <p><b>-compañia:</b> ${user.company.name}
        ${user.company.catchPhrase} ${user.company.bs}</p>
        
        `;
        divresultado.appendChild(divuser);
    });
    }

const clearusers=async()=>{
divresultado.innerHTML="";

}