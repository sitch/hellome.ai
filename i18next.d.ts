/**
 * If you want to enable locale keys typechecking and enhance IDE experience.
 *
 * Requires `resolveJsonModule:true` in your tsconfig.json.
 *
 * @link https://www.i18next.com/overview/typescript
 */
import "i18next"
// import all namespaces (for the default language, only)
import type common from "@/public/locales/en/common.json"
import type company from "@/public/locales/en/company.json"
import type concepts from "@/public/locales/en/concepts.json"
import type faq from "@/public/locales/en/faq.json"
import type filepond from "@/public/locales/en/filepond.json"
import type footer from "@/public/locales/en/footer.json"
import type landing from "@/public/locales/en/landing.json"
import type onboarding from "@/public/locales/en/onboarding.json"
import type pricing from "@/public/locales/en/pricing.json"
import type product from "@/public/locales/en/product.json"
import type zod from "@/public/locales/en/zod.json"

interface I18nNamespaces {
  common: typeof common
  company: typeof company
  faq: typeof faq
  footer: typeof footer
  landing: typeof landing
  onboarding: typeof onboarding
  pricing: typeof pricing
  product: typeof product
  concepts: typeof concepts
  filepond: typeof filepond
  zod: typeof zod
}

export type I18nNamespace = keyof I18nNamespaces

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "common"
    resources: I18nNamespaces
  }
}
