// import {
//   UserFindFirstArgsSchema,
//   UserFindManyArgsSchema,
//   UserFindUniqueArgsSchema,
// } from './prisma/zod';

// const appRouter = t.router({
//   findManyUser: t.procedure.input(UserFindManyArgsSchema).query(({ input }) => {
//     return prisma.user.findMany(input);
//   }),
//   findUniqueUser: t.procedure
//     .input(UserFindUniqueArgsSchema)
//     .query(({ input }) => {
//       return prisma.user.findUnique(input);
//     }),

//   findFirstUser: t.procedure
//     .input(UserFindFirstArgsSchema)
//     .query(({ input }) => {
//       return prisma.user.findFirst(input);
//     }),
// });
