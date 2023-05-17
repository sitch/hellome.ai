import { useTranslation } from "next-i18next"

export function EmptyBanner() {
  const { t } = useTranslation("filepond")

  return (
    <div>
      <div className="pointer-events-none absolute grid h-full w-full place-items-center p-3 text-xl">
        <span className="opacity-40">
          {t("scribble.EmptyBanner.description")}
        </span>
      </div>
    </div>
  )
}
