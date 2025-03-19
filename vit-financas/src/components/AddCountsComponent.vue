<template>
  <q-dialog ref="dialogRef" @hide="onDialogHide">
    <q-card class="flex justify-center">
      <q-card-section>
        <span>Lançamentos</span>
      </q-card-section>

      <q-card-section class="row flex justify-center q-gutter-md">
        <q-input
          class="col-5"
          rounded
          outlined
          v-model="text"
          label="Description"
          color="green"
        />
        <q-input
          class="col-5"
          rounded
          outlined
          v-model="text"
          label="Value (R$)"
          color="green"
        />
        <q-input
          class="col-5"
          rounded
          outlined
          v-model="date"
          type="date"
          hint="Due date"
        />
        <q-radio
          class="col-5"
          color="green"
          v-model="shape"
          checked-icon="task_alt"
          unchecked-icon="panorama_fish_eye"
          val="line"
          label="Effective"
        />
      </q-card-section>

      <q-card-actions class="flex justify-end q-ma-md">
        <q-btn color="green" label="Save" rounded @click="onOKClick" />
        <q-btn
          color="green"
          label="Cancel"
          rounded
          outline
          @click="onDialogCancel"
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { useDialogPluginComponent } from "quasar";

const props = defineProps({
  release_title: String,
  color_title: String,
});

defineEmits([
  // REQUIRED; need to specify some events that your
  // component will emit through useDialogPluginComponent()
  ...useDialogPluginComponent.emits,
]);

const { dialogRef, onDialogHide, onDialogOK, onDialogCancel } =
  useDialogPluginComponent();
// dialogRef      - Vue ref to be applied to QDialog
// onDialogHide   - Function to be used as handler for @hide on QDialog
// onDialogOK     - Function to call to settle dialog with "ok" outcome
//                    example: onDialogOK() - no payload
//                    example: onDialogOK({ /*...*/ }) - with payload
// onDialogCancel - Function to call to settle dialog with "cancel" outcome

// this is part of our example (so not required)
function onOKClick() {
  // on OK, it is REQUIRED to
  // call onDialogOK (with optional payload)
  onDialogOK();
  // or with payload: onDialogOK({ ... })
  // ...and it will also hide the dialog automatically
}
</script>
