import { useRef } from "react"
import { useTranslation } from "next-i18next"

import {
  Controller,
  useFieldArray,
  type SubmitErrorHandler,
  type SubmitHandler,
} from "react-hook-form"
import { mergeRefs } from "react-merge-refs"
import Webcam from "react-webcam"
import { type FilePondFile } from "filepond"
import { castArray } from "lodash"
import z from "zod"

import { useZodForm } from "@/lib/hooks/useZodForm"
import { api } from "@/utils/api"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { AlertDestructive } from "@/components/ui/kit/AlertDestructive"
import { AlertFormField } from "@/components/ui/kit/AlertFormField"
import { Label } from "@/components/ui/label"
import { MultiSelect } from "@/components/ui/multi-select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
// import Canvas from "@/components/replicate/canvas"
import AnimatedButton from "@/components/common/AnimatedButton/AnimatedButton"
import { ConceptCard } from "@/components/concepts/ConceptCard"
import { FileInput } from "@/components/filepond/FileInput"
import { type AddFileCallback } from "@/components/filepond/form.types"
import {
  CreatePhotoSchema,
  castPhotoCreateInput,
} from "@/components/filepond/schema"
import { useFilePondUploader } from "@/components/filepond/useFilePondUploader"
import { SubmissionSuccess } from "@/components/forms/SubmissionSuccess"
import { SketchCanvas } from "@/components/sketch/SketchCanvas"

import { ConceptSchema, ConceptTypeSchema } from "@/@gen/zod"

//============================================================================
// Constants
//============================================================================

const ID_SUBMIT_BUTTON = "ID_SUBMIT_BUTTON"

//============================================================================
// Schema
//============================================================================

const ConceptFormSchema = ConceptSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
}).extend({
  files: z.custom<FilePondFile>().array(),
  photos: CreatePhotoSchema.array(),
  tags: z
    .object({
      value: z.string(),
    })
    .array(),
  positivePrompts: z
    .object({
      value: z.string(),
    })
    .array(),
  negativePrompts: z
    .object({
      value: z.string(),
    })
    .array(),
})

const formSchema = ConceptFormSchema
export type FormSchemaType = z.infer<typeof formSchema>

// export type FormPhotoType = z.infer<typeof CreatePhotoSchema>

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

  // const [photos, setPhotos] = useState<FormPhotoType[]>([])

  const {
    getValues,
    // getFields,
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
      name: "test",
      description: "sample...",
      type: "person",
      files: [
        // {
        //   source:
        //     "next-s3-uploads/9a043b34-51d7-4c90-bcf2-e2a694406610/IMG_5999.jpeg",
        //   options: {
        //     type: "local",
        //   },
        // },
      ],
      photos: [],
      // positivePrompts: [],
      // negativePrompts: [],
    },
  })

  const positivePrompts = useFieldArray({
    control,
    name: "positivePrompts",
  })

  const negativePrompts = useFieldArray({
    control,
    name: "negativePrompts",
  })

  const tags = useFieldArray({
    control,
    name: "tags",
  })

  const {
    ref: pondRef,
    status: filePondStatus,
    props: filePondInputProps,
  } = useFilePondUploader({
    initialFiles: [],
  })

  //============================================================================
  // Hooks (Camera)
  //============================================================================

  const camera = useRef(null)

  //============================================================================
  // Hooks (mutation)
  //============================================================================

  const createConcept = api.concept.createOne.useMutation()

  //============================================================================
  // States
  //============================================================================

  // const valid = isValid && filePondStatus.valid
  const submitting = isSubmitting || createConcept.isLoading
  const loading =
    isValidating || isLoading || submitting || filePondStatus.loading
  const disabled =
    isValidating || isLoading || submitting || filePondStatus.disabled
  const success = isSubmitSuccessful && createConcept.isSuccess

  //============================================================================
  // Callbacks
  //============================================================================
  const onSubmit: SubmitHandler<FormSchemaType> = async (
    { files = [], ...data },
    e,
  ) => {
    // Needed to prevent random buttons from firing form
    if ((e?.nativeEvent as SubmitEvent).submitter?.id !== ID_SUBMIT_BUTTON) {
      return
    }

    const args = {
      data: {
        ...data,
        negativePrompts: data.negativePrompts.map(({ value }) => value),
        positivePrompts: data.positivePrompts.map(({ value }) => value),
        tags: data.tags.map(({ value }) => value),
        photos: {
          create: await Promise.all(files.map(castPhotoCreateInput)),
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

  const handleScribbleUpload: AddFileCallback = (data, _options) => {
    // Options isn't processed correctly as per the FilePond docs
    // Should be:
    //   pondRef.current?.addFile(data, options)
    pondRef.current?.addFile(data)
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
                      aria-invalid={Boolean(errors.name)}
                      {...register("name")}
                    />
                    <AlertFormField error={errors.name} />
                  </div>
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
                            disabled={disabled}
                            aria-invalid={Boolean(errors.type)}
                            onValueChange={onChange}
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
                  <Label htmlFor="webcam">
                    {t("form.schema.photos.label")}
                  </Label>
                }
              >
                <Webcam
                  id="webcam"
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
                <div className="bg-green grid w-full gap-6 p-0 md:grid-cols-2">
                  <ConceptCard
                    title={
                      <Label htmlFor="sketch">
                        {t("form.schema.photos.label")}
                      </Label>
                    }
                  >
                    <SketchCanvas
                      id="sketch"
                      // startingPaths={[]}
                      // scribbleExists={false}
                      // onScribble={(scribble: string | null): void => {
                      //   // throw new Error('Function not implemented.')
                      // }}
                      // setScribbleExists={(exists: boolean): void => {
                      //   // throw new Error('Function not implemented.')
                      // }}
                      // aria-invalid={Boolean(errors.sketch)}

                      onUpload={handleScribbleUpload}
                    />

                    {/* <AlertFormField error={errors.sketch} /> */}
                  </ConceptCard>

                  <ConceptCard
                    title={
                      <Label htmlFor="positivePrompts">
                        {t("form.schema.positivePrompts.label")}
                      </Label>
                    }
                    showFooter={true}
                    wide={true}
                  >
                    <Controller
                      name="positivePrompts"
                      control={control}
                      render={({
                        field: { onChange, onBlur, value = [], ref, ...field },
                        formState,
                      }) => (
                        <MultiSelect
                          id="positivePrompts"
                          // {...register('positivePrompts')}

                          {...field}
                          onBlur={() => onBlur()}
                          onChange={(value = []) => onChange(castArray(value))}
                          value={value.map((option) => ({
                            label: option.value,
                            value: option.value,
                          }))}
                        ></MultiSelect>
                      )}
                    />
                  </ConceptCard>

                  <ConceptCard
                    title={
                      <Label htmlFor="positivePrompts">
                        {t("form.schema.positivePrompts.label")}
                      </Label>
                    }
                    showFooter={true}
                    wide={true}
                  >
                    {/************* concept.positivePrompts *************/}
                    {/* {getFields('positivePrompts').map((field, index) => ( */}
                    {positivePrompts.fields.map((field, index) => (
                      // <div
                      //   className="sm:col-span-4"
                      //   key={field.id} // important to include key with field's id
                      // >
                      //   <Label htmlFor={`positivePrompts.${index}.value`}>
                      //     {t("form.schema.positivePrompt.label")}
                      //   </Label>
                      //   <div className="mt-2">
                      <Textarea
                        key={field.id} // important to include key with field's id
                        id={`positivePrompts.${index}.value`}
                        autoComplete="off"
                        placeholder={t(
                          "form.schema.positivePrompt.placeholder",
                        )}
                        disabled={disabled}
                        // className="h-full"
                        // cols={35}
                        // rows={35}
                        aria-invalid={Boolean(
                          errors.positivePrompts?.[index]?.value,
                        )}
                        {...register(`positivePrompts.${index}.value`)}
                      />

                      // {/* <AlertFormField error={errors.name} /> */}
                      //   </div>
                      // </div>
                    ))}

                    <Button
                      onClick={() => positivePrompts.append([{ value: "" }])}
                    >
                      {t("form.schema.positivePrompts.append.label")}
                    </Button>

                    <AlertFormField error={errors.description} />
                  </ConceptCard>
                </div>
              </div>

              <div className="col-span-full"></div>

              {/************* concept.photos (image upload) *************/}
              <div className="col-span-full">
                <Label htmlFor="files">{t("form.schema.photos.label")}</Label>
                <div className="mt-2">
                  <Controller
                    name="files"
                    control={control}
                    render={({ field: { ref, ...formProps } }) => (
                      <FileInput
                        mode="production"
                        // mode="bypass"
                        id="files"
                        pondRef={mergeRefs([ref, pondRef])}
                        //
                        //
                        //
                        acceptedFileTypes={["image/png", "image/jpeg"]}
                        maxFiles={30}
                        // minFileSize={"1KB"}
                        // maxFileSize={"20MB"}
                        // maxTotalFileSize={"360MB"}
                        // imageValidateSizeMinWidth={512}
                        // imageValidateSizeMinHeight={512}
                        // allowFileSizeValidation={false}
                        //
                        //
                        //
                        // onStatusChange={setFilePondStatus}

                        aria-invalid={Boolean(errors.files)}
                        {...formProps}
                      />

                      // <FilePond
                      //   {...filePondInputProps}
                      //   {...formProps}
                      //   // ref={ref}
                      //   // ref={pondRef}
                      //   ref={mergeRefs([ref, pondRef])}
                      // />
                    )}
                  />

                  {/* <FileInput
                        mode="production"
                        // mode="bypass"
                        id="files"
                        pondRef={pondRef}
                        // ref={ref}
                        //
                        //
                        //
                        acceptedFileTypes={["image/png", "image/jpeg"]}
                        maxFiles={30}
                        // minFileSize={"1KB"}
                        // maxFileSize={"20MB"}
                        // maxTotalFileSize={"360MB"}
                        // imageValidateSizeMinWidth={512}
                        // imageValidateSizeMinHeight={512}
                        // allowFileSizeValidation={false}
                        //
                        //
                        //
                        // onStatusChange={setFilePondStatus}
                        aria-invalid={Boolean(errors.files)}
                        // {...formProps}

                        {...filePondInputProps}
                      /> */}

                  {/* <FilePond {...filePondInputProps} /> ref={pondRef} */}
                </div>

                <AlertFormField message={errors.files?.message} />
                {/* <AlertFormField message={errors.photos?.message} /> */}
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
          <AnimatedButton
            id={ID_SUBMIT_BUTTON}
            type="submit"
            loading={loading}
            disabled={disabled}
            onSubmit={handleSubmit(onSubmit, onErrors)}
          >
            Save
          </AnimatedButton>
        </div>
      </form>
    </>
  )
}
