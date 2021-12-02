<template>
  <div class="contact">
    <h1>Contacto</h1>
    <picture class="contact__image">
      <source srcset="@/assets/img/destacada3.jpg" type="image/jpeg" />
      <img
        loading="lazy"
        src="@/assets/img/destacada3.jpg"
        alt="imagen contacto"
      />
    </picture>
    <h2>Complete el formulario de Contacto</h2>
    <form>
      <fieldset>
        <legend>Información Personal</legend>
        <app-input
          id="name"
          label="Name"
          type="text"
          v-model="name"
        ></app-input>

        <app-input
          id="email"
          label="E-mail"
          type="email"
          v-model="email"
        ></app-input>

        <app-input
          id="tel"
          label="Teléfono"
          type="tel"
          v-model="phone"
        ></app-input>

        <app-text-area id="message" label="Mensaje" :rows="5"></app-text-area>
      </fieldset>

      <fieldset>
        <legend>Información sobre Propiedad</legend>
        <app-select
          id="operation"
          label="Venta o Compra"
          :options="OPERATION_OPTIONS"
        ></app-select>
        <!-- <label for="operation">Venta o Compra</label>
        <select id="operation">
          <option value="" disabled selected>-- Seleccione --</option>
          <option value="Compra">Compra</option>
          <option value="Venta">Venta</option>
        </select> -->

        <label for="budget">Precio o Presupuesto</label>
        <input id="budget" type="number" />
      </fieldset>

      <fieldset>
        <legend>Forma de Contacto</legend>
        <p>Cómo desea ser contactado</p>

        <div class="contact-form__selection">
          <label for="contact-tel">Teléfono</label>
          <input
            name="contact-form"
            type="radio"
            value="telefono"
            id="contact-tel"
          />

          <label for="contact-email">E-mail</label>
          <input
            name="contact-form"
            type="radio"
            value="email"
            id="contact-email"
          />
        </div>

        <p>
          Si eligió teléfono, elija la fecha y hora que quiere ser contactado
        </p>

        <label for="date">Fecha</label>
        <input id="date" type="date" />

        <label for="hour">Hora</label>
        <input id="hour" type="time" min="09:00" max="18:00" />
      </fieldset>

      <button type="submit" class="green-button">Enviar</button>
    </form>
  </div>
</template>

<script>
import AppInput from '@/components/elements/AppInput.vue';
import AppSelect from '@/components/elements/AppSelect.vue';
import AppTextArea from '@/components/elements/AppTextArea.vue';

export default {
  name: 'Contact',

  components: {
    AppInput,
    AppTextArea,
    AppSelect
  },

  data() {
    return {
      name: '',
      email: '',
      phone: ''
    };
  },

  created() {
    this.OPERATION_OPTIONS = ['Venta', 'Compra'];
  },

  methods: {
    test(e) {
      console.log(e.target.value);
      this.name = e.target.value;
    }
  }
};
</script>
