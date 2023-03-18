export default defineEventHandler(async (event) => {
  // handle query
  const { text } = getQuery(event);

  // handle post body
  const { age } = await readBody(event);

  const data = await $fetch("https://fakestoreapi.com/products");

  return { query: text, body: age, products: data };
});
