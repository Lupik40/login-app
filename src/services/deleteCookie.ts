import setCookie from "./setCookie";

export default function deleteCookie(name: string) {
  setCookie(name, "");
}
