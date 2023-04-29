import { useRef } from "react"
import { useTranslation } from "next-i18next"

import { Controller, SubmitErrorHandler, SubmitHandler } from "react-hook-form"
import Webcam from "react-webcam"
import z from "zod"

import { useZodForm } from "@/lib/hooks/useZodForm"
import { trpc } from "@/utils/trpc"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { AlertDestructive } from "@/components/ui/kit/AlertDestructive"
import { AlertFormField } from "@/components/ui/kit/AlertFormField"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
// import Canvas from "@/components/replicate/canvas"
import AnimatedButton from "@/components/common/AnimatedButton/AnimatedButton"
import { ImageInput } from "@/components/filepond/ImageInput"
import { ConceptCard } from "@/components/forms/ConceptCard"
import { SubmissionSuccess } from "@/components/forms/SubmissionSuccess"
import { SketchCanvas } from "@/components/sketch/SketchCanvas"

import {
  CloudFileSchema,
  ConceptSchema,
  ConceptTypeSchema,
  PhotoSchema,
} from "@/@gen/zod"

//============================================================================
// Schema
//============================================================================

const PhotoFormSchema = PhotoSchema.omit({
  id: true,
  fileId: true,
  createdAt: true,
})

const CloudFileFormSchema = CloudFileSchema.omit({
  id: true,
  createdAt: true,
})

const formSchema = ConceptSchema.extend({
  photos: PhotoFormSchema.extend({
    file: CloudFileFormSchema,
  }).array(),
})

export type FormSchemaType = z.infer<typeof formSchema>

//============================================================================
// Props
//============================================================================

type Props = {
  // Add types here
}

export function ConceptForm(_props: Props) {
  //============================================================================
  // Hooks (i18n)
  //============================================================================

  const { t } = useTranslation("concepts")
  // z.setErrorMap(makeZodI18nMap({ t, handlePath: { ns: ['common', 'zod'] } }))

  //============================================================================
  // Hooks (form)
  //============================================================================

  const {
    getValues,
    control,
    register,
    handleSubmit,
    formState: {
      errors,
      isLoading,
      isValid,
      isValidating,
      isSubmitting,
      isSubmitSuccessful,
    },
  } = useZodForm({
    schema: formSchema,
    defaultValues: {
      type: "person",
    },
  })

  //============================================================================
  // Hooks (Camera)
  //============================================================================

  const camera = useRef(null)

  //============================================================================
  // Hooks (mutation)
  //============================================================================

  const createConcept = trpc.createOneConcept.useMutation()

  //============================================================================
  // States
  //============================================================================
  const valid = isValid
  const submitting = isSubmitting || createConcept.isLoading
  const loading = isValidating || isLoading || submitting
  const disabled = isValidating || isLoading || submitting
  const success = isSubmitSuccessful && createConcept.isSuccess

  //============================================================================
  // Callbacks
  //============================================================================
  const onSubmit: SubmitHandler<FormSchemaType> = (data) => {
    console.info("onSubmit", { values: getValues(), data })

    const args = {
      data: {
        ...data,
        photos: {
          create: data.photos.map(({ file, ...photo }) => ({
            ...photo,
            file: {
              create: file,
            },
          })),
        },
      },
      include: { photos: true },
    }
    console.info("onMutate", { values: getValues(), data, args })
    createConcept.mutate(args)
    console.info("onSuccess", { values: getValues(), data, args })
  }

  const onErrors: SubmitErrorHandler<FormSchemaType> = (data) => {
    console.error("onErrors", { values: getValues(), data })
  }

  const onCancel = () => {
    console.log("onCancel", { values: getValues() })
  }

  //============================================================================
  // Success
  //============================================================================

  if (success) {
    return <SubmissionSuccess />
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit, onErrors)}>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            {/* <h2 className="text-base font-semibold leading-7 text-gray-900 dark:text-white">
              {t("form.heading")}
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              {t("form.description")}
            </p> */}

            <div
              className="flex-space flex gap-6"
              // className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"
            >
              <ConceptCard
                wide={false}
                title={t("form.heading")}
                description={t("form.description")}
                showFooter={true}
              >
                {/* NAME */}
                {/************* concept.name *************/}
                <div className="sm:col-span-4">
                  <Label htmlFor="name">{t("form.schema.name.label")}</Label>
                  <div className="mt-2">
                    <Input
                      id="name"
                      type="text"
                      autoComplete="off"
                      placeholder="Concept name"
                      disabled={disabled}
                      aria-invalid={errors.name ? "true" : "false"}
                      {...register("name")}
                    />
                    <AlertFormField error={errors.name} />
                  </div>
                  {/* TYPE */}
                  {/************* concept.type *************/}
                  <div className="col-span-full">
                    <Label htmlFor="type">{t("form.schema.type.label")}</Label>
                    <div className="mt-2">
                      <Controller
                        name="type"
                        control={control}
                        render={({ field: { onChange, ...field } }) => (
                          <RadioGroup
                            id="type"
                            disabled={field.value !== "person" || disabled}
                            aria-invalid={
                              field.value !== "person" || errors.name
                                ? "true"
                                : "false"
                            }
                            onValueChange={
                              field.value === "person" ? undefined : onChange
                            }
                            {...field}
                          >
                            {ConceptTypeSchema.options.map((type) => (
                              <div
                                key={type}
                                className="flex items-center space-x-2"
                              >
                                <RadioGroupItem
                                  id={`type-${type}`}
                                  value={type}
                                />
                                <Label type="radio" htmlFor={`type-${type}`}>
                                  {type}
                                </Label>
                              </div>
                            ))}
                          </RadioGroup>
                        )}
                      />
                      <AlertFormField error={errors.type} />
                    </div>
                  </div>
                </div>
              </ConceptCard>

              <ConceptCard
                wide={false}
                title={
                  <Label htmlFor="photos">
                    {t("form.schema.photos.label")}
                  </Label>
                }
              >
                <Webcam
                  audio={false}
                  // height={720}
                  // width={1280}
                  screenshotFormat="image/jpeg"
                  videoConstraints={{
                    width: 1280,
                    height: 720,
                    facingMode: "user",
                  }}
                />
              </ConceptCard>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              {/************* concept.type *************/}
              {/* <div className="col-span-full">
                <Label htmlFor="type">{t("form.schema.type.label")}</Label>
                <div className="mt-2">
                  <Controller
                    name="type"
                    control={control}
                    render={({ field, formState }) => (
                      <ul className="mt-2 grid w-full list-none gap-6 p-0 md:grid-cols-3">
                        {ConceptTypeSchema.options.map((type) => (
                          <li key={type} className="flex ">
                            <input
                              id={`type-${type}`}
                              type="radio"
                              checked={field.value === type}
                              className="peer hidden"
                              disabled={disabled}
                              {...field}
                            />
                            <label
                              htmlFor={`type-${type}`}
                              className={cn(
                                type === "person"
                                  ? "bg-orange-50 dark:bg-orange-50"
                                  : type === "place"
                                  ? "bg-green-50 dark:bg-green-50"
                                  : "bg-yellow-50 dark:bg-yellow-50",
                                // "hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 ",
                                "border border-gray-800 peer-checked:border-blue-600 dark:border-gray-700",
                                "text-gray-500 hover:text-gray-600 peer-checked:text-blue-600  dark:text-gray-400 dark:hover:text-gray-300 dark:peer-checked:text-blue-500",
                                "rounded-lg",
                                "w-full p-5",
                                "cursor-pointer",
                                "inline-flex items-center justify-between",
                              )}
                            >
                              <div className="block">
                                <div className="text-md w-full font-semibold">
                                  {t(`form.schema.type.enum.${type}.label`)}
                                </div>
                                <div className="w-full sm:font-light">
                                  {t(
                                    `form.schema.type.enum.${type}.description`,
                                  )}
                                </div>
                              </div>
                            </label>
                          </li>
                        ))}
                      </ul>
                    )}
                  />

                  <AlertFormField error={errors.type} />
                </div>
              </div> */}

              <div className="col-span-full">
                <div className="bg-green grid w-full gap-6 p-0 md:grid-cols-2"></div>
              </div>

              <div className="col-span-full">
                <div className="bg-green grid w-full gap-6 p-0 md:grid-cols-2">
                  <ConceptCard
                    title={
                      <Label htmlFor="photos">
                        {t("form.schema.photos.label")}
                      </Label>
                    }
                  >
                    <SketchCanvas
                    // startingPaths={[]}
                    // scribbleExists={false}
                    // onScribble={(scribble: string | null): void => {
                    //   // throw new Error('Function not implemented.')
                    // }}
                    // setScribbleExists={(exists: boolean): void => {
                    //   // throw new Error('Function not implemented.')
                    // }}
                    />
                  </ConceptCard>

                  <ConceptCard
                    title={
                      <Label htmlFor="description">
                        {t("form.schema.description.label")}
                      </Label>
                    }
                    showFooter={true}
                    wide={true}
                  >
                    <Textarea
                      id="description"
                      placeholder={t("form.schema.description.placeholder")}
                      cols={35}
                      className="h-full"
                      rows={35}
                      disabled={disabled}
                      aria-invalid={errors.description ? "true" : "false"}
                      {...register("description")}
                    />
                    <AlertFormField error={errors.description} />
                  </ConceptCard>
                </div>
              </div>

              <div className="col-span-full"></div>

              {/************* concept.photos (image upload) *************/}
              <div className="col-span-full">
                <Label htmlFor="photos">{t("form.schema.photos.label")}</Label>
                <div className="mt-2">
                  <Controller
                    name="photos"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                      <ImageInput
                        id="photos"
                        name="photos"
                        acceptedFileTypes={["image/png", "image/jpeg"]}
                        maxFiles={30}
                        minFileSize={"1KB"}
                        maxFileSize={"12MB"}
                        maxTotalFileSize={"360MB"}
                        imageValidateSizeMinWidth={512}
                        imageValidateSizeMinHeight={512}
                        required={true}
                        // value={value}
                        // onChange={onChange}
                      />
                    )}
                  />
                </div>

                <AlertFormField message={errors.photos?.message} />
              </div>
            </div>
            {/************* end *************/}

            {/************* end *************/}
          </div>

          {/************* mutation error *************/}
          {createConcept.error?.message && (
            <AlertDestructive message={createConcept.error.message} />
          )}
        </div>

        {/************* controls *************/}
        <div className="gap x-6 mt-6 flex items-center justify-end">
          <Button
            type="button"
            variant="ghost"
            onClick={onCancel}
            disabled={loading}
          >
            Cancel
          </Button>
          <AnimatedButton type="submit" loading={loading} disabled={disabled}>
            Save
          </AnimatedButton>
        </div>
      </form>
    </>
  )
}
