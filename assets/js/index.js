const propiedades= [
    {
      nombre: "Casa de campo",
      descripcion: "Un lugar ideal para descansar de la ciudad",
      src:
        "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
      cuartos: 2,
      metros: 170
    },
    {
      nombre: "Casa de playa",
      descripcion: "Despierta tus días oyendo el oceano",
      src:
        "https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg",
        cuartos: 2,
        metros: 130
    },
    {
      nombre: "Casa en el centro",
      descripcion: "Ten cerca de ti todo lo que necesitas",
      src:
        "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
        cuartos: 1,
        metros: 80
    },
    {
      nombre: "Casa rodante",
      descripcion: "Conviertete en un nómada del mundo sin salir de tu casa",
      src:
        "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
        cuartos: 1,
        metros: 6
    },
    {
      nombre: "Departamento",
      descripcion: "Desde las alturas todo se ve mejor",
      src:
        "https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg",
        cuartos: 3,
        metros: 200
    },
    {
      nombre: "Mansión",
      descripcion: "Vive una vida lujosa en la mansión de tus sueños ",
      src:
        "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
        cuartos: 5,
        metros: 500
    }
  ];
  
  
  
  
  
  
    // dibujo pro html
  const propiedadesContainer = document.getElementById('propiedadesContainer');
  propiedadesContainer.innerHTML =  "";
  var spanElement = document.getElementById("totalhtml")
  spanElement.innerText = propiedades.length
  
  let template = ""
  
  for (let prop of propiedades) {
    template = `<div class="propiedades">
    <div class="propiedad">
    <div class="img" style="background-image: url('${prop.src}')"></div>
    <section>
        <h5>${prop.nombre}</h5>
        <div class="d-flex justify-content-between">
            <p>Cuartos: ${prop.cuartos}</p>
            <p>Metros: ${prop.metros}</p>
        </div>
        <p class="my-3">${prop.descripcion}</p>
        <button class="btn btn-info">Ver más</button>
    </section>
  </div>
  </div>
  `;
    propiedadesContainer.innerHTML += template; console.log(template)
    }
  
  const templateTotal = template 
  
  function buscarPropiedades() {
    let filtroCuartos = parseInt(document.getElementById("cuartos").value);
    let filtroMetrosMin = parseInt(document.getElementById("metros-min").value);
    let filtroMetrosMax = parseInt(document.getElementById("metros-max").value);
  
    //validacion de los campos valores 
  
    if (filtroCuartos > 0 && filtroMetrosMin > 0 && filtroMetrosMax > 0){
      let total = 0
      let propiedadesContainer = document.getElementById('propiedadesContainer');
      propiedadesContainer.innerHTML =  "";
      for (let pro of propiedades) {
          if (pro.cuartos ==  filtroCuartos &&
             pro.metros >= filtroMetrosMin && 
             pro.metros <= filtroMetrosMax){
              const template2 = `<div class="propiedades">
              <div class="propiedad">
    <div class="img" style="background-image: url('${pro.src}')"></div>
    <section>
        <h5>${pro.nombre}</h5>
        <div class="d-flex justify-content-between">
            <p>Cuartos: ${pro.cuartos}</p>
            <p>Metros: ${pro.metros}</p>
        </div>
        <p class="my-3">${pro.descripcion}</p>
        <button class="btn btn-info ">Ver más</button>
    </section>
  </div>
  </div>
    `;
    propiedadesContainer.innerHTML += template2;
    
              total++
        }
      }
  
      
    
  
      if(total == 0) spanElement.innerText = 0
      else  spanElement.innerText = total
         
    }
    else {
      alert("Faltan filtros por ingresar");
      propiedadesContainer.innerHTML += templateTotal;
      spanElement.innerText = 0;
    }
  }