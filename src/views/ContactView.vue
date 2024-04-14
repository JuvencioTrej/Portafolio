<template>
    <div class="main-contact">
      <!-- dibujo -->
       <div class="content-img">
         <img src="@/assets/img/dibujo2.png" alt="">
       </div>
      <!-- formulario -->
      <div class="contact-form">
        <h2>Contacto</h2>
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label for="email">Correo Electrónico:</label>
            <input type="email" id="email" v-model="formData.email" required>
          </div>
          <div class="form-group">
            <label for="phone">Teléfono:</label>
            <input type="tel" id="phone" v-model="formData.phone" required>
          </div>
          <div class="form-group">
            <label for="name">Nombre Completo:</label>
            <input type="text" id="name" v-model="formData.name" required>
          </div>
          <div class="form-group">
            <label for="reason">Razón de Contacto:</label>
            <textarea id="reason" v-model="formData.reason" rows="4" required></textarea>
          </div>
          <div class="form-button">
            <button type="submit">Enviar</button>
          </div>
        </form>
      </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      formData: {
        email: '',
        phone: '',
        name: '',
        reason: ''
      }
    }
  },
  methods: {
    async submitForm() {
      try {
        const response = await fetch('https://formspree.io/f/mbjnpbwg', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.formData)
        });
        if (response.ok) {
          this.$toast.success('¡Formulario enviado correctamente!', { position: 'bottom-right' })
          this.resetForm()
        } else {
          this.$toast.error('Hubo un problema al enviar el formulario. Por favor, inténtelo de nuevo más tarde.', { position: 'bottom-right' })
        }
      } catch (error) {
        this.$toast.error('Hubo un problema al enviar el formulario. Por favor, inténtelo de nuevo más tarde.', { position: 'bottom-right' })
        console.error('Error al enviar el formulario:', error);
      }
    },
    resetForm() {
      this.formData = {
        name: '',
        email: '',
        phone: '',
        reason: ''
      };
    }
  }
}
</script>
<style scoped>
  .main-contact{
    width: 100%;
    min-height: 95vh;
    background-color: var(--primary_color);
    font-family: "Raleway", sans-serif;
  }
  .content-img{
    position: fixed;
    width: 300px;
    height: 300px;
    bottom: 0px;
    left: 3cqw;
  }
  .content-img img{
    width: 100%;
  }
  /* formulario */
  .contact-form {
    max-width: 600px;
    margin: 0 auto;
    padding-top: 60px;
  }
  .contact-form h2{
    margin: 0;
    color:var(--whoto_color);
    margin-bottom: 20px;
  }
  .form-group {
    margin-bottom: 20px;
  }

  label {
    color:var(--whoto_color);
    display: block;
    margin-bottom: 5px;
  }

  input[type="email"],
  input[type="tel"],
  input[type="text"],
  textarea {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-bottom: 15px;
  }

  .form-button {
    text-align: center;
  }

  button {
    padding: 10px 20px;
    font-size: 16px;
    background-color: var(--third_color);
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.5s linear;
  }

  button:hover {
    background-color: var(--fourth_color);
  }
</style>