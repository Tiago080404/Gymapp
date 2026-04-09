<template>
  <div class="flex justify-center items-center min-h-screen">
    <UForm class="space-y-4  ">
      <UFormField label="Email" name="email">
        <UInput />
      </UFormField>

      <UFormField label="Password" name="password">
        <UInput type="password" />
      </UFormField>
      <div class="flex justify-center">

          <UButton size="xl" variant="soft"> Login </UButton>
      </div>
    </UForm>
  </div>
</template>
<script setup lang="ts"></script>