import { startTransition, useEffect } from "react"
import { useRouter } from "next/navigation"
import { useTranslation } from "next-i18next"

import { type Concept } from "@prisma/client"
import { Brain } from "lucide-react"

import { api } from "@/utils/api"

import { useToast } from "@/components/ui/use-toast"
import AnimatedButton from "@/components/common/AnimatedButton/AnimatedButton"

type ConceptTrainButtonProps = {
  concept: Pick<Concept, "id">
}

export function ConceptTrainButton({ concept }: ConceptTrainButtonProps) {
  const router = useRouter()
  const { toast } = useToast()
  const { t } = useTranslation("concepts")
  const { mutate, isLoading, isSuccess, isError, error } =
    api.concept.updateOne.useMutation()

  useEffect(() => {
    if (error) {
      console.error("train.error", concept, error)
      toast({
        variant: "destructive",
        title: "Training Error",
        description: <pre>{JSON.stringify(error, null, 2)}</pre>,
      })
    }
  }, [concept, error, toast])

  const handleClick = () => {
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

  return (
    <AnimatedButton
      icon={Brain}
      type="submit"
      loading={isLoading}
      disabled={isLoading || isSuccess || isError}
      onClick={handleClick}
      aria-label={t("buttons.train.aria-label")}
      //==========================================================
      // Row styling
      //==========================================================
      className="m-0"
      shadow={false}
    >
      {t("buttons.train.label")}
    </AnimatedButton>
  )
}
