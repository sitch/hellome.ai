import { startTransition, useEffect } from "react"
import { useRouter } from "next/navigation"
import { useTranslation } from "next-i18next"

import { type Concept } from "@prisma/client"
import { Brain } from "lucide-react"

import { api } from "@/utils/api"

import AnimatedButton from "@/components/common/AnimatedButton/AnimatedButton"

type ConceptTrainButtonProps = {
  concept: Pick<Concept, "id">
}

export function ConceptTrainButton({ concept }: ConceptTrainButtonProps) {
  const router = useRouter()
  const { t } = useTranslation("concepts")
  const { mutate, isLoading, isSuccess, isError, error } =
    api.concept.updateOne.useMutation()

  const handleClick = () => {
    console.log("click", concept)

    const args = {
      where: {
        id: concept.id,
      },
      data: {
        // status: "TRAINED"
      },
    }

    console.info("train.mutate", concept, args)
    mutate(args)
    console.info("train.success", concept, args)

    startTransition(() => {
      router.refresh()
    })
  }

  useEffect(() => {
    if (error) {
      console.error("train.error", concept, error)
      alert(error)
      return
    }
  }, [concept, error])

  return (
    <AnimatedButton
      icon={Brain}
      type="submit"
      loading={isLoading}
      disabled={isLoading || isSuccess || isError}
      onClick={handleClick}
      aria-label={t("buttons.train.aria-label")}
    >
      {t("buttons.train.label")}
    </AnimatedButton>
  )
}
