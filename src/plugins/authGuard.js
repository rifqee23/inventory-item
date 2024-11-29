export function authGuard({ store }) {
  store.$onAction(({ name, args, store, after, onError }) => {
    if (name === "increment" && !store.isAuthenticated) {
      throw new Error("You are not authenticated");
    }
  });
}
