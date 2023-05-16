import { type UseTranslationResponse } from "react-i18next"
import { UploadCloud } from "lucide-react"

export const LabelIdle = ({ t }: UseTranslationResponse<"filepond">) => {
  return (
    <div className="group:duration-700 group:ease-in-out flex h-auto w-full animate-bg-wave cursor-pointer justify-center rounded-xl border-2 border-dashed bg-accent from-emerald-400/10 via-indigo-400/10 to-rose-400/10 px-6 py-10 text-input transition-all duration-2.2s ease-in-out hover:border-gray-400 hover:bg-accent/80 hover:bg-gradient-to-r dark:hover:border-gray-600">
      <div className="text-center">
        <UploadCloud
          aria-hidden="true"
          className="mx-auto h-12 w-12 text-gray-600 transition-all duration-700 ease-in-out group-hover:text-gray-800 dark:group-hover:text-gray-400"
        />
        <div className=" mt-4 flex text-sm leading-6 text-gray-600 transition-all duration-700 ease-in-out group-hover:text-gray-800 dark:group-hover:text-gray-400">
          <span className="text-indigo-600 transition-all duration-700 ease-in-out focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 group-hover:text-indigo-800 dark:group-hover:text-indigo-400 ">
            {t("LabelIdle.upload")}
          </span>

          <p className="pl-1">{t("LabelIdle.dragDrop")}</p>
        </div>
        <p className="text-xs font-extralight leading-5  text-gray-600 transition-all duration-700 ease-in-out group-hover:text-gray-800 dark:group-hover:text-gray-400 ">
          {t("LabelIdle.filetypes")}
        </p>
      </div>
    </div>
  )
}
