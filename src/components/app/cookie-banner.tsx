import { useEffect, useState } from "react"
import { useTranslation } from "next-i18next"

import { useCookieConsentContext } from "@use-cookie-consent/react"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"

// This component is an example of a component that you use to
// accept/decline cookie consent, without reading any data.
export const CookieBanner = () => {
  const { t } = useTranslation()

  const { consent, acceptAllCookies, declineAllCookies, acceptCookies } =
    useCookieConsentContext()

  const [ready, setReady] = useState(false)

  // Fixes issue with hydration of `<CookieBanner />` component.
  useEffect(() => {
    if (!ready) {
      setReady(true)
    }
  }, [ready])

  if (!ready) {
    return null
  }

  // const open = consent.necessary
  const open = false

  return (
    <>
      <Sheet open={open}>
        {/* <SheetTrigger>Open</SheetTrigger> */}
        <SheetContent position="bottom" size="content">
          <SheetHeader>
            <SheetTitle>{t("cookie-banner.title")}</SheetTitle>
            <SheetDescription>
              {t("cookie-banner.description")}
            </SheetDescription>
          </SheetHeader>

          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Button onClick={acceptAllCookies}>
                {t("cookie-banner.buttons.accept-all.label")}
              </Button>
              <Button onClick={() => acceptCookies({ thirdParty: true })}>
                {t("cookie-banner.buttons.accept-third-party.label")}
              </Button>
              <Button onClick={() => acceptCookies({ firstParty: true })}>
                {t("cookie-banner.buttons.accept-first-party.label")}
              </Button>
              <Button onClick={declineAllCookies}>
                {t("cookie-banner.buttons.reject-all.label")}
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  )
}
