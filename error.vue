<template>
  <div class="flex items-center justify-center">
    <div class="card mx-auto mt-10 px-5">
      <p class="text-7xl font-bold">
        {{ error.statusCode }}
      </p>
      <p class="text-6xl">Oooops.</p>
      <p>{{ error.message }}</p>
      <button class="btn mt-6" @click="handleClearError">Go To Home</button>
    </div>
  </div>
</template>

<script setup lang="ts">
type ErrorProp = {
  url: string;
  statusCode: number;
  statusMessage: string;
  message: string;
  description: string;
  data: any;
};

const { error } = defineProps<{ error: ErrorProp }>();

const handleClearError = () => clearError({ redirect: "/" });
</script>

<style scoped></style>
