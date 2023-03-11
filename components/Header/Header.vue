<template>
  <header class="shadow-sm">
    <nav class="container mx-auto flex gap-5 items-center justify-between px-5">
      <NuxtLink class="font-bold" to="/">Nuxt Shop</NuxtLink>
      <ul class="flex gap-5 p-5">
        <li>
          <NuxtLink to="/">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about">About</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/products" class="btn">Products</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
