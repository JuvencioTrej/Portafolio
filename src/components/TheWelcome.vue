<template>
  <div class="main-welcome">
    <!-- text entrada -->
    <div class="main-text-portada">
      <h4 class="span-codigo" v-html="textoVisible"></h4>
      <!-- <h4 class="span-codigo tracking-in-expand">Hello, World!</h4> -->
      <h5 class="span-nombre tracking-in-expand">Juvencio Trejo</h5>
      <h1 class="span-job tracking-in-expand">Full Stack Web Developer</h1>

      <!-- btn links -->
      <div class="btn-links-div">
          <button @click="abrirGit" class="btn-link">
            <i class="fa-brands fa-github-alt"></i>
          </button>
          <button @click="abrirLinkedIn" class="btn-link">
            <i class="fa-brands fa-linkedin"></i>
          </button>

      </div>
    </div>
    <!-- imagen portada -->
    <div class="main-img-perfil blur-in" id="poster">
      <div class="div-fondo-cuadro"></div>
      <img src="@/assets/img/perfil.png" alt="Juvencio Trejo">
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // animacion de escritura
      textos: [
        "Hello, World!",
        "Hello, I'm web developer",
        "Hello, I'm full stack"
      ],
      indiceTexto: 0,
      textoVisible: "",
      intervalo: null,
      index: 0
    }
  },
  mounted(){
    const el = document.getElementById('poster')
    const height = el.clientHeight
    const width = el.clientWidth

    el.addEventListener('mousemove', (evt)=>{
      const {layerX, layerY} = evt

      const yRotation = (
        (layerX - width / 2) / width 
      ) * 20
      const xRotation = (
        (layerY - height / 2) / height 
      ) * 20
      const string = `
        perspective(500px)
        scale(1.1)
        rotateX(${xRotation}deg)
        rotateY(${yRotation}deg)`
    
      el.style.transform = string
    })

    el.addEventListener('mouseout', ()=>{
      el.style.transform = `
      perspective(500px)
      scale(1)
      rotateX(0)
      rotateY(0)`
    })
    this.iniciarAnimacion()
  },
  methods: {
    abrirLinkedIn() {
      window.open('https://www.linkedin.com/in/juvencio-trejo-8585a72ba', '_blank');
    },
    abrirGit() {
      window.open('https://github.com/JuvencioTrej/Portafolio.git', '_blank');
    },
    iniciarAnimacion() {
      // Restablecer textoVisible al valor inicial de la primera frase
      this.textoVisible = this.textos[0].slice(0, 0);

      this.intervalo = setInterval(() => {
        const textoActual = this.textos[this.indiceTexto];
        if (this.index < textoActual.length) {
          // Agregar letra
          this.textoVisible += textoActual[this.index];
          this.index++;
        } else {
          // Borrar letra y cambiar de frase si es necesario
          setTimeout(() => {
            if (this.textoVisible.length > 0) {
              this.textoVisible = this.textoVisible.slice(0, -1);
            } else {
              // Cambiar al siguiente texto
              this.indiceTexto = (this.indiceTexto + 1) % this.textos.length;
              this.textoVisible = this.textos[this.indiceTexto].slice(0, 0);
              this.index = 0;
            }
          }, 100); // Tiempo de espera antes de borrar la letra
        }
      }, 300); // Velocidad de escritura
    }
  },
  beforeUnmount() {
    const el = document.getElementById('poster')
    el.removeEventListener('mousemove', this.handleMouseMove);
    el.removeEventListener('mouseout', this.handleMouseOut);
    clearInterval(this.intervalo);
  }
}
</script>
<style scoped>
  .main-welcome{
    width: 100%;
    height: 100vh;
    background-color: var(--primary_color);
  }
  /* text portada */
  .main-text-portada{
    position: absolute;
    top: 250px;
    left: 50px;
  }
  .span-codigo{
    min-height: 40px; /* Tamaño mínimo del contenedor */
    user-select: none;
    margin: 0px;
    font-weight: normal;
    font-size: 32px;
    color:var(--whoto_color);
    font-family: "Press Start 2P", system-ui;
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
  }
  .span-nombre{
    margin: 0px;
    margin-top: 20px;
    font-size: 35px;
    font-weight: normal;
    font-family: "Raleway", sans-serif;
    color: var(--third_color);
  }
  .span-job{
    margin: 0px;
    margin-top: 10px;
    font-size: 50px;
    font-weight: normal;
    font-family: "Public Sans", sans-serif;
    color: var(--fourth_color);

  }
  /* imagen portada */
  .main-img-perfil{
    position: absolute;
    right: 230px;
    top: 160px;
    width: 400px;
    height: 400px;
    overflow: hidden;
    transition: box-shadow 0.2s, transform 0.2s;
  }
  .main-img-perfil:hover{
    box-shadow: 0px 0px 50px rgba(0, 0, 0, 1);
  }
  .div-fondo-cuadro{
    position: absolute;
    width: 400px;
    height: 400px;
    top: 0px;
    background-color: var(--fourth_color);
    mask-image: linear-gradient(black 50%, transparent);
  }
  .main-img-perfil img{
    -moz-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    width: 400px;
    object-fit: contain;
    mask-image: linear-gradient(black 50%, transparent);
  }
  .btn-links-div{
    width: 500px;
    height: 100px;
    margin-top: 50px;
  }
  .btn-link{
    cursor: pointer;
    margin-left: 10px;
    background-color: transparent;
    border: 0px;
    padding: 10px 20px;
    color: var( --third_color);
    font-size: 50px;
    transition: color 0.5s linear,
                filter 0.5s linear;
  }
  .btn-link:hover{
    color: var(--whoto_color);
    filter: drop-shadow(0 0 5px var(--whoto_color));
  }

  @media screen and (max-width: 800px) {
    /* text portada */
    .main-text-portada{
      overflow: hidden;
      position: relative; 
      width: 80%;
      top: 20px;
      left: 10%;
    }
    .span-codigo{
      min-height: 12px;
      font-size: 12px;
      width: 100%;
      text-align: center;
    }
    .span-nombre{
      margin-top: 10px;
      font-size: 18px;
      text-align: center;
    }
    .span-job{
      margin-top: 10px;
      font-size: 20px;
      text-align: center;
    }
    /* imagen portada */
    .main-img-perfil{
      position: relative;
      overflow: hidden;
      top: 25px;
      left: 10%;
      right: 0px;
      width: 80%;
    }
    .div-fondo-cuadro{
      position: absolute;
      width: 100%;
      height: 400px;
      top: 0px;
    }
    .main-img-perfil img{
      width: 400px;
      mask-image: linear-gradient(black 50%, transparent);
    }
    .btn-links-div{
      position: relative;
      width: 100%;
      height: 100px;
      margin-top: 10px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
    }
    .btn-link{
      cursor: pointer;
      margin-left: 10px;
      background-color: transparent;
      border: 0px;
      padding: 10px 20px;
      color: var( --third_color);
      font-size: 50px;
      transition: color 0.5s linear,
                  filter 0.5s linear;
    }
    .btn-link:hover{
      color: var(--whoto_color);
      filter: drop-shadow(0 0 5px var(--whoto_color));
    }
  }
</style>