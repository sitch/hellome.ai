/**
 * If you want to enable locale keys typechecking and enhance IDE experience.
 *
 * Requires `resolveJsonModule:true` in your tsconfig.json.
 *
 * @link https://www.i18next.com/overview/typescript
 */
import 'i18next'

// import all namespaces (for the default language, only)
import common from '@/public/locales/en/common.json'
import company from '@/public/locales/en/company.json'
import faq from '@/public/locales/en/faq.json'
import footer from '@/public/locales/en/footer.json'
import landing from '@/public/locales/en/landing.json'
import onboarding from '@/public/locales/en/onboarding.json'
import pricing from '@/public/locales/en/pricing.json'
import product from '@/public/locales/en/product.json'

interface I18nNamespaces {
  common: typeof common
  company: typeof company
  faq: typeof faq
  footer: typeof footer
  landing: typeof landing
  onboarding: typeof onboarding
  pricing: typeof pricing
  product: typeof product
}

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'common'
    resources: I18nNamespaces
  }
}
