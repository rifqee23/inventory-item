export function logger({ store }) {
  store.$subscribe((mutation, state) => {
    console.log(`Mutation: ${mutation.type}`);
    console.log(`State: `, state);
  });
}
