<template>
  <q-dialog ref="dialogRef" @hide="onDialogHide">
    <q-card class="flex justify-center q-gutter-md">
      <h3>{{ props.release_title }}</h3>
      <q-input rounded outlined v-model="text" label="Description" />
      <q-input
        rounded
        outlined
        v-model="text"
        label="Value"
        fill-mask="0"
        reverse-fill-mask
        input-class="text-right"
        hint="0.00"
      />
      <q-card-actions class="flex justify-end q-ma-md">
        <q-btn
          color="green"
          label="Save"
          rounded
          outline
          @click="onOKClick"
          icon="add"
        />
        <q-btn
          color="primary"
          label="Cancel"
          rounded
          outline
          @click="onDialogCancel"
          icon="close"
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
