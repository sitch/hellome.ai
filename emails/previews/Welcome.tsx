import Welcome from "~/emails/Welcome"

export function preview() {
  return <Welcome includeUnsubscribe />
}
