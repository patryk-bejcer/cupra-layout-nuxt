<template>
  <section
    id="test-drive-form"
    class="form-section bg-whiteGray py-14 md:py-16"
  >
    <div class="container mx-auto max-w-[734px] md:py-8">
      <h2 class="mb-4 text-center font-thin">Jazda próbna</h2>
      <h3 class="mb-12 text-center text-h3">
        Umów się na bezpłatną<br />jazdę próbną
      </h3>
      <form class="text-black" @submit.prevent="submitForm">
        <div class="mb-12 md:px-10">
          <div class="mb-8">
            <SelectCar :car-options="carOptions" />
          </div>
          <div>
            <input
              id="name"
              type="text"
              required
              placeholder="Imię *"
              class="form-text-input"
            />
          </div>
          <div>
            <input
              id="surname"
              type="text"
              placeholder="Nazwisko (opcjonalnie)"
              class="form-text-input"
            />
          </div>
          <div>
            <input
              id="email"
              type="email"
              placeholder="Adres e-mail *"
              class="form-text-input"
              required
            />
          </div>
          <div>
            <input
              id="phone"
              type="tel"
              placeholder="Nr. telefonu *"
              class="form-text-input"
              required
            />
          </div>

          <p class="text-xs font-light">* Pole wymagane</p>
        </div>

        <p class="mb-6 text-xs font-light">
          Wysłanie uzupełnionego formularza oznacza Twoją zgodę na kontakt w
          celu przedstawienia informacji handlowej w wybrany przez Ciebie sposób
          w związku Czytaj więcej
          <br /><br />
          Prosimy Cię też o wyrażenie poniższych zgód w celu możliwości
          przedstawiania Ci atrakcyjnych ofert / promocji produktów, akcesoriów
          i usług marki CUPRA w przyszłości.
        </p>

        <div class="mb-4">
          <input id="consent" type="checkbox" class="form-checkbox" />
          <label for="consent">
            <span
              >Zgadzam się na przetwarzanie moich danych osobowych przez Plichta
              spółka z ograniczoną odpowiedzialnością Spółka Komandytowa w celu
              przedstawienia mi informacji marketingowych i handlowych
              dotyczących produktów i usług marki CUPRA oraz innych powiązanych
              z marką CUPRA akcesoriów, produktów i usług motoryzacyjnych za
              pomocą:</span
            >
          </label>
        </div>

        <div class="mb-4">
          <input id="consentEmail" type="checkbox" class="form-checkbox" />
          <label for="consentEmail"><span>E-mail</span></label>
        </div>

        <div class="mb-4">
          <input id="consentPhone" type="checkbox" class="form-checkbox" />
          <label for="consentPhone"><span>Telefon</span></label>
        </div>

        <div class="mb-4">
          <input id="consentSMS" type="checkbox" class="form-checkbox" />
          <label for="consentSMS"><span>Wiadomość SMS/MMS</span></label>
        </div>

        <p class="mb-10 text-xs font-light">
          Masz prawo do wglądu, modyfikacji, ograniczenia przetwarzania i
          usunięcia swoich danych oraz do wycofania w każdym momencie swojej
          zgody.
          <br /><br />
          Twoje dane będą przetwarzane tylko w stopniu umożliwiającym realizację
          wymienionego celu.
          <br /><br />
          Administratorem Twoich danych jest Plichta spółka z ograniczoną
          odpowiedzialnością Spółka Komandytowa, z siedzibą w Wejherowie przy
          ulicy Gdańskiej 13c. Zapraszamy do zapoznania się z naszą polityką
          prywatności umieszczoną pod linkiem:
          https://www.plichta.com.pl/polityka-prywatnosci
        </p>

        <div class="text-center">
          <Btn
            variant="secondary"
            href="#"
            title="Umów się na jazdę próbną"
            @click.prevent="submitForm"
          >
            Umów jazdę próbną
          </Btn>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
import SelectCar from "~/components/ui/forms/SelectCar.vue";
import Btn from "~/components/ui/Btn.vue";
import carOptions from "~/utils/carOptions";

const submitForm = () => {
  alert("Formularz został przesłany");
};
</script>
