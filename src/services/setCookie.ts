export default function setCookie(name: string, value: string) {
  let updatedCookie =
    encodeURIComponent(name) + "=" + encodeURIComponent(value);

  document.cookie = updatedCookie;
}
