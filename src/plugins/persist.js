export function persist({ store }) {
  store.$subscribe((mutation, state) => {
    localStorage.setItem("store", JSON.stringify(state));
  });

  store.$state = JSON.parse(localStorage.getItem("store")) || store.$state;
}
