// import { z } from 'zod'
// import { SubmitHandler, useForm } from 'react-hook-form'
// import { zodResolver } from '@hookform/resolvers/zod'
// import { UserSchema } from '@/@gen/zod'

// const formSchema = UserSchema.merge(
//   z.object({
//     username: z.string().min(1, 'Username is required').max(100),
//     // email: z.string().email('Invalid email').min(1, 'Email is required'),
//     password: z
//       .string()
//       .min(1, 'Password is required')
//       .min(8, 'Password must have more than 8 characters'),
//     confirmPassword: z.string().min(1, 'Password confirmation is required'),
//     terms: z.literal(true, {
//       errorMap: () => ({ message: 'You must accept the terms and conditions' }),
//     }),
//   })
// ).refine((data) => data.password === data.confirmPassword, {
//   path: ['confirmPassword'],
//   message: 'Passwords do not match',
// })

// type FormSchemaType = z.infer<typeof formSchema>

// export const UserForm = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors, isSubmitting },
//   } = useForm<FormSchemaType>({
//     resolver: zodResolver(formSchema),
//   })

//   const onSubmit: SubmitHandler<FormSchemaType> = (data) => {
//     console.log(data)
//   }

//   return (
//     <section className="bg-gray-50 dark:bg-gray-900">
//       <div className="mx-auto flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0">
//         <div className="w-full rounded-lg bg-white shadow dark:border dark:border-gray-700 dark:bg-gray-800 sm:max-w-md md:mt-0 xl:p-0">
//           <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
//             <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-2xl">
//               Create and account
//             </h1>
//             <form
//               className="space-y-4 md:space-y-6"
//               onSubmit={handleSubmit(onSubmit)}
//             >
//               <div>
//                 <label
//                   htmlFor="username"
//                   className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
//                 >
//                   Your username
//                 </label>
//                 <input
//                   type="text"
//                   id="username"
//                   className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 sm:text-sm"
//                   placeholder="Your name"
//                   {...register('username')}
//                 />
//                 {errors.username && (
//                   <span className="mt-2 block text-red-800">
//                     {errors.username.message}
//                   </span>
//                 )}
//               </div>
//               <div>
//                 <label
//                   htmlFor="email"
//                   className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
//                 >
//                   Your email
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 sm:text-sm"
//                   placeholder="name@company.com"
//                   {...register('email')}
//                 />
//                 {errors.email && (
//                   <span className="mt-2 block text-red-800">
//                     {errors.email.message}
//                   </span>
//                 )}
//               </div>
//               <div>
//                 <label
//                   htmlFor="password"
//                   className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
//                 >
//                   Password
//                 </label>
//                 <input
//                   type="password"
//                   id="password"
//                   placeholder="••••••••"
//                   className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 sm:text-sm"
//                   {...register('password')}
//                 />
//                 {errors.password && (
//                   <span className="mt-2 block text-red-800">
//                     {errors.password.message}
//                   </span>
//                 )}
//               </div>
//               <div>
//                 <label
//                   htmlFor="confirmPassword"
//                   className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
//                 >
//                   Confirm password
//                 </label>
//                 <input
//                   type="password"
//                   id="confirmPassword"
//                   placeholder="••••••••"
//                   className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 sm:text-sm"
//                   {...register('confirmPassword')}
//                 />
//                 {errors.confirmPassword && (
//                   <span className="mt-2 block text-red-800">
//                     {errors.confirmPassword.message}
//                   </span>
//                 )}
//               </div>
//               <div className="flex items-start">
//                 <div className="flex h-5 items-center">
//                   <input
//                     id="terms"
//                     aria-describedby="terms"
//                     type="checkbox"
//                     className="focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 h-4 w-4 rounded border border-gray-300 bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800"
//                     {...register('terms')}
//                   />
//                 </div>
//                 <div className="ml-3 text-sm">
//                   <label
//                     htmlFor="terms"
//                     className="font-light text-gray-500 dark:text-gray-300"
//                   >
//                     I accept the{' '}
//                     <a
//                       className="text-primary-600 dark:text-primary-500 font-medium hover:underline"
//                       href="#"
//                     >
//                       Terms and Conditions
//                     </a>
//                   </label>
//                 </div>
//               </div>
//               {errors.terms && (
//                 <span className="mt-2 block text-red-800">
//                   {errors.terms.message}
//                 </span>
//               )}
//               <button
//                 type="submit"
//                 className="bg-primary-600 hover:bg-primary-700 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 w-full rounded-lg px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4"
//                 disabled={isSubmitting}
//               >
//                 Create an account
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }
