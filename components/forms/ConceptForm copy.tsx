import { useRef } from "react"
import { Trans, useTranslation } from "next-i18next"

// import { Camera } from "react-camera-pro"
import GridLayout from "react-grid-layout"
import {
  Controller,
  type SubmitErrorHandler,
  type SubmitHandler,
} from "react-hook-form"
import Webcam from "react-webcam"
import type z from "zod"
import { makeZodI18nMap } from "zod-i18n-map"

import { useZodForm } from "@/lib/hooks/useZodForm"
import { trpc } from "@/utils/trpc"

import AnimatedButton from "@/components/common/AnimatedButton/AnimatedButton"
import { ImageInput } from "@/components/filepond/ImageInput"
import Canvas from "@/components/replicate/canvas"
import InitWebcam from "@/components/vision/InitWebcam"

import {
  CloudFileSchema,
  ConceptSchema,
  ConceptTypeSchema,
  PhotoSchema,
} from "@/@gen/zod"

// See: https://zod.dev/?id=recursive-types
// const formSchema = ConceptCreateInputSchema
// type FormSchemaType = z.infer<
//   typeof formSchema & {
//     photos: z.infer<
//       typeof PhotoCreateWithoutConceptsInputSchema & {
//         file: z.infer<typeof CloudFileCreateWithoutPhotoInputSchema>
//       }
//     >
//   }
// >

const formSchema = ConceptSchema.extend({
  photos: PhotoSchema.omit({ fileId: true })
    .extend({
      file: CloudFileSchema,
    })
    .array(),
})

type FormSchemaType = z.infer<typeof formSchema>

export const ConceptForm = () => {
  const createConcept = trpc.createOneConcept.useMutation()

  const { t } = useTranslation("concepts")
  // z.setErrorMap(makeZodI18nMap({ t, handlePath: { ns: ['common', 'zod'] } }))

  const {
    getValues,
    control,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useZodForm({
    schema: formSchema,
    defaultValues: {
      // include: {
      //   photos: true,
      // },
      // data: {
      type: "person",
      // photos: [],
      // },
    },
  })

  const onSubmit: SubmitHandler<FormSchemaType> = (data) => {
    console.info("success", data)

    // debugger

    // createConcept.mutate({
    //   data: {
    //     type: 'person' as ConceptTypeType,
    //     name: 'me',
    //     description: 'hello',
    //   },
    // })

    // createConcept.mutate({
    //   data: {
    //     type: 'person',
    //     name: 'me',
    //     description: 'hello',
    //     photos: {
    //       create: [
    //         {
    //           height: 1,
    //           width: 1,
    //           tags: [],
    //           file: {
    //             create: {
    //               // metadata: {
    //               //   exif: 'ok',
    //               // },
    //               metadata: 2,
    //               filename: 'filename',
    //               resourceType: 'image',
    //               size: 100,
    //               ext: 'ext',
    //               mime: 'mime',
    //               path: 'path',
    //               signature: 'signature',
    //               privacy: 'private',
    //             },
    //           },
    //         },
    //       ],
    //     },
    //   },
    // })

    // const photos = data.photos
    createConcept.mutate({
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
    })
  }

  const onErrors: SubmitErrorHandler<FormSchemaType> = (data) => {
    console.error("error", data, getValues())
  }

  const layout = [
    { i: "aaa", x: 0, y: 0, w: 1, h: 2, static: true },
    { i: "bbb", x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
    { i: "ccc", x: 4, y: 0, w: 1, h: 2 },
  ]

  const camera = useRef(null)

  if (createConcept.isLoading) {
    return <div>Loading...</div>
  }

  return (
    <>
      {/* <GridLayout
        className="layout"
        layout={layout}
        cols={12}
        rowHeight={30}
        width={1200}
      >
        <div key="aaa" className="m-6 bg-green-100 p-6">
          a
        </div>
        <div key="bbb" className="m-6 bg-green-100 p-6">
          b
        </div>
        <div key="ccc" className="m-6 bg-green-100 p-6">
          c
        </div>
      </GridLayout> */}

      {createConcept.error && (
        <p role="alert">Something went wrong! {createConcept.error.message}</p>
      )}

      <div className=" m-0 h-full w-full flex-auto rounded-md p-0 text-center drop-shadow-xl">
        <div className=" mr-0 w-full max-w-full pr-0">
          <h1>{t("form.h1")}</h1>
          <div className="mx-auto w-full">
            <form
              className="space-y-4 md:space-y-6"
              onSubmit={handleSubmit(onSubmit, onErrors)}
            >
              <>
                <div
                  className="bg-white-50 m-8 rounded-lg border border-black bg-white p-8 drop-shadow-xl"

                  //                 style={{
                  //                   // backgroundImage: 'url("/static/images/ui/00066-3457340583.png")',
                  // // backgroundImage: 'url("/static/images/ui/00071-2742202727.png")',
                  //                   // backgroundImage: 'url("/static/images/ui/00025-1079708828.png")',
                  //                   backgroundImage: 'url("/static/images/ui/00027-1079708830.png")'
                  //                 }}
                >
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    {t("form.schema.name.label")}
                  </label>
                  <input
                    id="name"
                    aria-invalid={errors.name ? "true" : "false"}
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 sm:text-sm"
                    type="text"
                    placeholder="Concept name"
                    {...register("name")}
                  />
                  {errors.name?.message && (
                    <span role="alert" className="mt-2 block text-red-800">
                      {errors.name.message}
                    </span>
                  )}
                </div>
              </>

              <>
                <div
                  className="m-8 rounded-lg border border-black bg-zinc-50 p-8 drop-shadow-xl"

                  //  style={{
                  //   backgroundImage: 'url("/static/images/ui/00025-1079708828.png")',
                  //   // opacity: 0.5
                  // }}
                >
                  <label
                    htmlFor="type"
                    className="mb-2 block rounded-lg border border-black bg-white p-4 text-sm font-medium text-gray-900       dark:text-white"
                  >
                    {t("form.schema.type.label")}
                  </label>

                  <ul className="grid w-full list-none gap-6 p-0 md:grid-cols-3">
                    {ConceptTypeSchema.options.map((type) => (
                      <li key={type} className="flex ">
                        <input
                          type="radio"
                          id={`type-${type}`}
                          // aria-invalid={errors.type ? 'true' : 'false'}
                          // defaultValue="type-small"
                          className="peer hidden"
                          // required=""
                        />
                        <label
                          htmlFor={`type-${type}`}
                          className={`${
                            type === "person"
                              ? "bg-orange-50"
                              : type === "place"
                              ? "bg-green-50"
                              : "bg-yellow-50"
                          } inline-flex w-full cursor-pointer items-center justify-between rounded-lg border border-gray-800  p-5 text-gray-500 hover:bg-gray-100 hover:text-gray-600 peer-checked:border-blue-600 peer-checked:text-blue-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:peer-checked:text-blue-500`}
                        >
                          <div className="block">
                            <div className="w-full text-lg font-semibold">
                              {t(`form.schema.type.enum.${type}.label`)}
                            </div>
                            <div className="w-full sm:font-light">
                              {t(`form.schema.type.enum.${type}.description`)}
                            </div>
                          </div>
                          <svg
                            aria-hidden="true"
                            className="ml-3 h-6 w-6"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>
              </>

              {/* <div className="flex flex-auto"> */}
              {/* <div className=""> */}

              <div className="bg-green grid w-full gap-6 p-0 md:grid-cols-2">
                <div
                  className="flex bg-red-50"
                  style={{
                    backgroundImage:
                      'url("/static/images/ui/00066-3457340583.png")',
                    // backgroundImage: 'url("/static/images/ui/00071-2742202727.png")',
                    // backgroundImage: 'url("/static/images/ui/00025-1079708828.png")',
                    // backgroundImage: 'url("/static/images/ui/00027-1079708830.png")'

                    cursor: 'url("/static/cursors/cursor.cur")',
                  }}
                >
                  <div className="m-flex bg-green w-full flex-auto border border-black p-8 drop-shadow-xl">
                    <Canvas
                      startingPaths={[]}
                      scribbleExists={false}
                      onScribble={(scribble: string | null): void => {
                        // throw new Error('Function not implemented.')
                      }}
                      setScribbleExists={(exists: boolean): void => {
                        // throw new Error('Function not implemented.')
                      }}
                    />
                  </div>
                </div>
                <div className="flex">
                  <div className="m-flex w-full flex-auto border border-black bg-violet-50 p-16 drop-shadow-xl">
                    <div
                      className="m-auto h-full      w-full flex-auto border  border-black bg-blue-50 p-0 text-2xl text-white "
                      // style={{
                      //   backgroundImage: 'url("/static/images/ui/momo.png")',
                      //   // backgroundImage: 'url("/static/images/ui/00071-2742202727.png")',
                      //   // backgroundImage: 'url("/static/images/ui/00025-1079708828.png")',
                      //   // backgroundImage: 'url("/static/images/ui/00027-1079708830.png")'

                      //   cursor: 'url("/static/cursors/cursor.cur")',
                      // }}
                    >
                      CameraThingHere
                      {/* <Camera
                        ref={camera}
                        errorMessages={{
                          noCameraAccessible: 'ERROR: noCameraAccessible',
                          permissionDenied: 'ERROR: permissionDenied',
                          switchCamera: 'ERROR: switchCamera',
                          canvas: 'ERROR: canvas',
                        }}
                      /> */}
                      {/* <Webcam
    audio={false}
    height={720}
    screenshotFormat="image/jpeg"
    width={1280}
    videoConstraints={{
      width: 1280,
      height: 720,
      facingMode: "user"
    }}
  /> */}
                    </div>
                  </div>
                </div>
                <div className="flex">
                  {/* <div className="m-flex w-full flex-auto rounded-full border border-black drop-shadow-xl bg-violet-50 p-16">
                    <div className="m-flex h-full w-full flex-auto  rounded-full border border-black drop-shadow-xl bg-blue-50 p-8">
                      CameraThingHere
                    </div>
                  </div> */}

                  <>
                    <div
                      className=" bg-white-50 m-8 w-full rounded-lg border border-black bg-white p-8 drop-shadow-xl"

                      //                 style={{
                      //                   // backgroundImage: 'url("/static/images/ui/00066-3457340583.png")',
                      // // backgroundImage: 'url("/static/images/ui/00071-2742202727.png")',
                      //                   // backgroundImage: 'url("/static/images/ui/00025-1079708828.png")',
                      //                   backgroundImage: 'url("/static/images/ui/00027-1079708830.png")'
                      //                 }}
                    >
                      <label
                        htmlFor="description"
                        className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                      >
                        {t("form.schema.description.label")}
                      </label>
                      <textarea
                        id="description"
                        aria-invalid={errors.description ? "true" : "false"}
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 sm:text-sm"
                        placeholder={t("form.schema.description.placeholder")}
                        rows={5}
                        {...register("description")}
                      />
                      {errors.description?.message && (
                        <span role="alert" className="mt-2 block text-red-800">
                          {errors.description.message}
                        </span>
                      )}
                    </div>
                  </>
                </div>
              </div>

              <>
                <div className="m-8 rounded-lg border border-black bg-zinc-50 p-8 drop-shadow-xl">
                  <label
                    htmlFor="photos"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    {t("form.schema.photos.label")}
                  </label>

                  <Controller
                    name="photos"
                    // defaultValue={[] as PhotoUpdateManyWithoutConceptsNestedInput[]}
                    control={control}
                    render={({ field: { onChange, value } }) => (
                      <ImageInput<object>
                        // mode="development"
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
                        // cast={(file, metadata): object => {
                        //   const meta = file.getMetadata() as Record<
                        //     string,
                        //     string | number
                        //   >
                        //   const status = file.status

                        //   console.log("file", status, { file, meta })

                        //   return {
                        //     // TODO: REMOVE ID
                        //     id: file.serverId,
                        //     fileId: file.serverId,
                        //     height: metadata?.height as number,
                        //     width: metadata?.width as number,
                        //     createdAt: new Date(),
                        //     tags: [],
                        //     pageArtworks: [],
                        //     concepts: [],
                        //     file: {
                        //       // TODO: REMOVE ID
                        //       id: file.serverId,
                        //       createdAt: new Date(),
                        //       signature: "signature",
                        //       path: "path",
                        //       // updatedAt: new Date().toString(),
                        //       //
                        //       //

                        //       resourceType: "image",
                        //       privacy: "private",
                        //       filename: file.filename,
                        //       size: file.fileSize,
                        //       ext: file.fileExtension,
                        //       mime: metadata?.mime ?? file.fileType,
                        //       metadata,
                        //     },
                        //   }
                        // }}
                        // value={value}
                        // onChange={onChange}
                      />
                    )}
                  />

                  {errors.photos && (
                    <span role="alert" className="mt-2 block text-red-800">
                      {errors.photos.message}
                    </span>
                  )}
                </div>
              </>
              <div
                className="m-auto flex pt-20"
                // className="bg-slate-600"
              >
                <AnimatedButton
                  wide={true}
                  type="submit"
                  disabled={isSubmitting}
                >
                  Submit
                </AnimatedButton>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
