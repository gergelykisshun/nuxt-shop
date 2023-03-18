export default defineEventHandler(async (event) => {
  // using params
  const id = Number(event.context.params?.id);
  // accessing env files
  const { testKey } = useRuntimeConfig();
  console.log("test key from env config", testKey);

  const product = await $fetch(`https://fakestoreapi.com/products/${id}`);

  return { product };
});
