<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <p>
      Uno svantaggio tipico delle applicazioni a pagina singola (SPA) è
      l'incapacità di condividere collegamenti all'esatta "sotto" pagina
      all'interno di una pagina Web specifica. Poiché le SPA forniscono ai loro
      utenti solo una risposta basata su URL dal server (in genere serve
      index.html o index.vue), aggiungere segnalibri a determinate schermate o
      condividere collegamenti a sezioni specifiche è normalmente difficile se
      non impossibile. Per risolvere questo problema, molti router lato client
      delimitano i loro URL dinamici con un "hashbang" (#!), Ad esempio
      pagina.com/#!/. Tuttavia, con HTML5 la maggior parte dei browser moderni
      supporta il routing senza hashbang. Vue fornisce un'interfaccia per
      modificare ciò che viene visualizzato sulla pagina in base al percorso URL
      corrente, indipendentemente da come è stato modificato (tramite
      collegamento via e-mail, aggiornamento o collegamenti in-page). Inoltre,
      l'utilizzo di un router front-end consente la transizione intenzionale del
      percorso del browser quando si verificano determinati eventi del browser
      (ad esempio clic) su pulsanti o collegamenti. Vue stesso non viene fornito
      con il routing hash front-end, ma il pacchetto open source "vue-router"
      fornisce un'API per aggiornare l'URL dell'applicazione, supporta il
      pulsante Indietro (cronologia di navigazione) e reimpostazioni della
      password e-mail o collegamenti di verifica e-mail con parametri URL di
      autenticazione. Supporta il mapping di percorsi su componenti nidificati e
      offre un controllo di transizione a granularità fine. Con Vue, gli
      sviluppatori compongono applicazioni con piccoli blocchi costruendo
      componenti più grandi. Con vue-router aggiunto alla combinazione, i
      componenti devono essere semplicemente mappati alle route a cui
      appartengono e le route parent/root devono indicare dove devono essere
      eseguito il rendering degli elementi figlio.[11]
    </p>
    <!--v-btn type="submit" @click="addMsg" color="primary">test</v-btn-->
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import HelloWorld from "@/components/HelloWorld.vue";
import { ActionTypes } from "@/store/notification/actions";
import { NotificationDto } from "@/models/notification.dto";

export default Vue.extend({
  name: "Home",

  data: function() {
    return {
      n: 0
    };
  },

  components: {
    HelloWorld
  },
  methods: {
    async addMsg() {
      this.$store.dispatch(
        ActionTypes.PUSH_NOTIFICATION,
        new NotificationDto({
          message: "Ciao" + this.n++,
          type: "success",
          autoClose: true
        })
      );
    }
  }
});
</script>
