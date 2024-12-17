import { store } from "~/store/store";

export default defineNuxtRouteMiddleware(() => {
  const { getToken } = store();

  if (!getToken) {
    return navigateTo("/entrar");
  }
});
