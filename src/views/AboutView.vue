<template>
  <div class="main-about">
      <div class="content-img">
        <img src="@/assets/img/dibujo1.png" alt="">
      </div>
      <div class="content-txt">
        <h4>Juvencio Alejandro Trejo Pascacio</h4>
        <h5>23 años</h5>
        <p>Mi primer acercamiento a la programación se produjo durante mi tiempo en la preparatoria, donde cursé una carrera técnica en programación. Fue entonces cuando me di cuenta de que tenía habilidad y pasión por crear soluciones que mejoraran la vida de los demás. Desde ese momento, me he dedicado a perfeccionar mis habilidades como desarrollador, explorando una variedad de tecnologías y siendo autodidacta mediante cursos en línea para mejorar cada día más.</p>
        <p>Me he especializado en el desarrollo de aplicaciones, centrándome principalmente en JavaScript para el frontend y PHP para el backend, utilizando Vue.js y Laravel, respectivamente. Esta experiencia me ha convertido en un desarrollador full stack capaz de abordar proyectos complejos de principio a fin.</p>
      </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style>
  .main-about{
    width: 100%;
    height: 95vh;
    background-color: var(--primary_color);
    display: flex;
    flex-wrap: wrap;
    font-family: "Raleway", sans-serif;
  }
  .content-img{
    position: relative;
    width: 50%;
    height: 95vh;
    overflow: hidden;
  }
  .content-img img{
    position: absolute;
    top: -40px;
    right: -40%;
    width: 100%;
  }
  .content-txt{
    width: 50%;
    height: 95vh;
  }
  .content-txt h4{
    margin: 0px;
    color:var(--whoto_color);
    font-weight: normal;
    font-size: 28px;
    margin-top: 80px;
  }
  .content-txt h5{
    margin: 0px;
    color: var(--third_color);
    font-weight: normal;
    font-size: 25px;
    margin-top: 10px;
  }
  .content-txt p{
    margin: 0px;
    width: 80%;
    color:var(--whoto_color);
    font-size: 23px;
    margin-top: 15px;
  }

  @media screen and (max-width: 800px) {
    .main-about{
      display: block;
      height: 200vh;
      font-family: "Raleway", sans-serif;
    }
    .content-img{
      position: relative;
      width: 100%;
      height: auto;
      overflow: hidden;
    }
    .content-img img{
      position: relative;
      top: 0px;
      right: 0px;
    }
    .content-txt{
      width: 100%;
      height: auto;
      text-align: center;
    }
    .content-txt h4{
      width: 90%;
      margin-left: 5%;
      font-size: 25px;
      margin-top: 30px;
    }
    .content-txt h5{
      font-size: 20px;
    }
    .content-txt p{
      width: 90%;
      margin-left: 5%;
      font-size: 20px;
      margin-top: 20px;
    }
  }

</style>