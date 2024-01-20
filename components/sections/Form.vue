<template>
  <section id="test-drive-form" class="form-section py-14 md:py-16 bg-whiteGray">
    <div class="container mx-auto max-w-[734px] p-8">
      <h2 class="mb-4 text-center font-thin">Jazda próbna</h2>
      <h3 class="text-h3 mb-12 text-center">Umów się na bezpłatną<br />jazdę próbną</h3>
      <form class="text-black" @submit.prevent="submitForm">
        <div class="md:px-10 mb-12">
          <div class="mb-8">
            <SelectCar />
          </div>
          <div>
            <input type="text" id="name" required placeholder="Imię *" class="form-input" />
          </div>
          <div>
            <input type="text" id="surname" placeholder="Nazwisko (opcjonalnie)" class="form-input" />
          </div>
          <div>
            <input type="email" id="email" placeholder="Adres e-mail *" class="form-input" required />
          </div>
          <div>
            <input type="tel" id="phone" placeholder="Nr. telefonu *" class="form-input" required />
          </div>

          <p class="text-[13px] font-light">* Pole wymagane</p>
        </div>

        <p class="text-[13px] font-light mb-6">
          Wysłanie uzupełnionego formularza oznacza Twoją zgodę na kontakt w celu przedstawienia informacji handlowej w
          wybrany przez Ciebie sposób w związku Czytaj więcej
          <br><br>
          Prosimy Cię też o wyrażenie poniższych zgód w celu możliwości przedstawiania Ci atrakcyjnych ofert / promocji
          produktów, akcesoriów i usług marki CUPRA w przyszłości.
        </p>

        <div class="mb-4">
          <input type="checkbox" id="consent" class="custom-checkbox">
          <label for="consent">
            <span>Zgadzam się na przetwarzanie moich danych osobowych przez Plichta spółka z ograniczoną odpowiedzialnością Spółka Komandytowa w celu przedstawienia mi informacji marketingowych i handlowych dotyczących produktów i usług marki CUPRA oraz innych powiązanych z marką CUPRA akcesoriów, produktów i usług motoryzacyjnych za pomocą:</span>
          </label>
        </div>

        <div class="mb-4">
          <input type="checkbox" id="consentEmail" class="custom-checkbox">
          <label for="consentEmail"><span>E-mail</span></label>
        </div>

        <div class="mb-4">
          <input type="checkbox" id="consentPhone" class="custom-checkbox">
          <label for="consentPhone"><span>Telefon</span></label>
        </div>

        <div class="mb-4">
          <input type="checkbox" id="consentSMS" class="custom-checkbox">
          <label for="consentSMS"><span>Wiadomość SMS/MMS</span></label>
        </div>

        <p class="text-[13px] font-light mb-10">
          Masz prawo do wglądu, modyfikacji, ograniczenia przetwarzania i usunięcia swoich danych oraz do wycofania w
          każdym momencie swojej zgody.
          <br><br>
          Twoje dane będą przetwarzane tylko w stopniu umożliwiającym realizację wymienionego celu.
          <br><br>
          Administratorem Twoich danych jest Plichta spółka z ograniczoną odpowiedzialnością Spółka Komandytowa, z
          siedzibą w Wejherowie przy ulicy Gdańskiej 13c. Zapraszamy do zapoznania się z naszą polityką prywatności
          umieszczoną pod linkiem: https://www.plichta.com.pl/polityka-prywatnosci
        </p>

        <div class="text-center ">
          <button type="submit" class="submit-button btn-secondary">
            Umów jazdę próbną
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup>
import SelectCar from '~/components/ui/forms/SelectCar.vue';

const submitForm = () => {
  alert('Formularz został przesłany');
};
</script>

<style scoped>
.form-input {
  background: transparent;
  border-bottom: 1px solid #cccccc;
  border-radius: 0;
  padding: 12px 0;
  font-weight: 400;
  width: 100%;
  margin-bottom: 16px;
  font-size: 16px;
}

.form-input::placeholder {
  color: #242221;
  opacity: 1;
  font-weight: 400;
}

.form-input:focus {
  outline: none;
  border-bottom: 1px solid #242221;
}

label {
  display: block;
  margin-bottom: 8px;
  color: #333;
  font-size: 14px;
}

.custom-checkbox {
  display: none;
  transition: .3s;
}

.custom-checkbox + label {
  position: relative;
  padding-left: 34px;
  cursor: pointer;
  display: inline-block;
  color: #000;
  font-size: 13px;
  font-weight: 300;
}

.custom-checkbox + label:before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 20px;
  height: 20px;
  background: transparent;
  border: 1px solid #D5D5D5;
  border-radius: 0;
  box-sizing: border-box;
}

.custom-checkbox:checked + label:after {
  content: '';
  position: absolute;
  left: 4px;
  top: 4px;
  width: 12px;
  height: 12px;
  background: #999;
  border-radius: 0;
  padding: 2px;
  box-sizing: border-box;
}

.custom-checkbox + label span {
  vertical-align: middle;
}

</style>
