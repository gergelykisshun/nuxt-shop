<template>
  <div>
    <Header title="Nuxt Shop" titleUrl="/" />

    <!-- Output page content -->
    <main class="mx-auto container p-5">
      <slot />
    </main>
  </div>
</template>

<script></script>

<style>
.router-link-exact-active {
  color: #12b488;
}
</style>
