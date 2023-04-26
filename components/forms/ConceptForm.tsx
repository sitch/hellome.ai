import z from 'zod'
import { makeZodI18nMap } from 'zod-i18n-map'
import { useTranslation, Trans } from 'next-i18next'
import GridLayout from 'react-grid-layout'
import Webcam from 'react-webcam'
import { Camera } from 'react-camera-pro'
import { SubmitHandler, SubmitErrorHandler, Controller } from 'react-hook-form'

import { ImageInput } from '@/components/forms/files/ImageInput'
import AnimatedButton from '../common/AnimatedButton/AnimatedButton'
import Canvas from '../canvas'
import InitWebcam from '../vision/InitWebcam'
import { useRef } from 'react'
import { trpc } from '@/utils/trpc'
import { useZodForm } from '@/lib/hooks/useZodForm'

import {
  CloudFileSchema,
  ConceptSchema,
  ConceptTypeSchema,
  PhotoSchema,
} from '@/@gen/zod'

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

  const { t } = useTranslation('concepts')
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
      type: 'person',
      // photos: [],
      // },
    },
  })

  const onSubmit: SubmitHandler<FormSchemaType> = (data) => {
    console.info('success', data)

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
    console.error('error', data, getValues())
  }

  const layout = [
    { i: 'aaa', x: 0, y: 0, w: 1, h: 2, static: true },
    { i: 'bbb', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
    { i: 'ccc', x: 4, y: 0, w: 1, h: 2 },
  ]

  const camera = useRef(null)

  if (createConcept.isLoading) {
    return <div>Loading...</div>
  }

  return (
    <>


    
    </>
  )
}
