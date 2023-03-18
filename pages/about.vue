<template>
  <div>
    <h2 class="mb-5 text-3xl">About</h2>
    <p class="my-5">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, enim
      iste. Dolor hic nemo natus ex esse neque enim tenetur debitis quo
      consequatur distinctio nostrum perferendis eos architecto, soluta ad!
    </p>
    <p class="my-5">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, enim
      iste. Dolor hic nemo natus ex esse neque enim tenetur debitis quo
      consequatur distinctio nostrum perferendis eos architecto, soluta ad!
    </p>
    <p>Data from api server : {{ data }}</p>
  </div>
</template>

<script setup>
const { data } = await useFetch("/api/test?text=TestText123", {
  method: "POST",
  body: { age: 30 },
});
</script>

<style scoped></style>
