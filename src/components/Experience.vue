<template>
    <div class="main-experience">
        <!-- content card -->
        <div class="content-card">
            <div class="card" v-for="(sect, index) in attitudes" :key="index">
                <i :class="sect.icon"></i>
                <h2>{{ sect.name }}</h2>
                <p>{{ sect.des }}</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            attitudes: [
                {
                    name: 'Vue js',
                    icon: 'fa-brands fa-vuejs',
                    des: '2 años de experiencia desarrollando con vue js'
                },
                {
                    name: 'Laravel',
                    icon: 'fa-brands fa-laravel',
                    des: '2 años de experiencia desarrollando con Laravel'
                },
                {
                    name: 'AWS',
                    icon: 'fa-brands fa-aws',
                    des: ' 1 año en el desarrollo y despliegue de aplicaciones utilizando servicios de AWS'
                },
                {
                    name: 'HTML',
                    icon: 'fa-brands fa-html5',
                    des: '3 años de experiencia desarrollando con html'
                },
                {
                    name: 'CSS',
                    icon: 'fa-brands fa-css3-alt',
                    des: '3 años de experiencia desarrollando con CSS'
                },
                {
                    name: 'JS',
                    icon: 'fa-brands fa-js',
                    des: '3 años de experiencia desarrollando con JS'
                },
                {
                    name: 'BD',
                    icon: 'fa-solid fa-database',
                    des: '3 años de experiencia desarrollando con bases de datos relacionales y no relacionales'
                },
                {
                    name: 'github',
                    icon: 'fa-brands fa-github',
                    des: '2 años colaborando de manera efectiva en proyectos de equipo utilizando GitHub'
                },
            ]
        }
    }
}
</script>
<style>
    .main-experience{
        width: 100%;
        height: 100vh;
        position: absolute;
        background-color: var(--fourth_color);
    }
    .content-card{
        width: 70%;
        height: 83vh;
        margin-left: 15%;
        margin-top: 10vh;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(20%, 1fr));
        grid-auto-rows: 1fr;
        grid-gap: 20px;
        justify-content: space-evenly;
    }
    .card{
        cursor: none;
        width: 200px;
        height: 250px;
        border-radius: 20px;
        box-shadow: 0px 0px 10px var(--primary_color);
        background-color: var(--primary_color);
        transition: box-shadow 0.2s linear,
                    scale 0.5s linear;
    }
    .card i {
        font-size: 70px;
        width: 100%;
        text-align: center;
        margin-top: 20px;
        color: var(--whoto_color);
        transition: color 0.5s linear;
    }
    .card h2{
        margin: 0px;
        text-align: center;
        font-weight: normal;
        margin-top: 20px;
        font-family: "Roboto", sans-serif;
        color: var(--whoto_color);
        transition: color 0.5s linear;
    }
    .card p{
        margin: 0px;
        width: 80%;
        margin-left: 10%;
        text-align: center;
        margin-top: 5px;
        font-family: "Roboto", sans-serif;
        color: var(--whoto_color);
        transition: color 0.5s linear;
    }
    .card:hover{
        box-shadow: 0px 0px 5px var(--fourth_color);
        background-color: var(--fourth_color);
        scale: 1.2;
    }
    .card:hover i{
        color: var(--primary_color);
    }
    .card:hover h2{
        color: var(--primary_color);
    }
    .card:hover p{
        color: var(--primary_color);
    }

    @media screen and (max-width: 800px) {
        .main-experience{
            position: absolute;
            height: 160vh;
            overflow: hidden;
        }
        .content-card {
            grid-template-columns: repeat(2, 1fr); /* Dos elementos por fila */
        }
        .card{
            width: 150px;
            height: auto;
            padding-bottom: 20px;
        }
        .card i {
            font-size: 50px;
            margin-top: 20px;
        }
        .card h2{
           font-size: 20px;
           margin-bottom: 10px;
        }
        .card p{
            font-size: 14px;
        } 
    }
</style>