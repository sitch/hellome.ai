import { z } from 'zod';
import { Prisma } from '@prisma/client';

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////

// JSON
//------------------------------------------------------

export type NullableJsonInput = Prisma.JsonValue | null | 'JsonNull' | 'DbNull' | Prisma.NullTypes.DbNull | Prisma.NullTypes.JsonNull;

export const transformJsonNull = (v?: NullableJsonInput) => {
  if (!v || v === 'DbNull') return Prisma.DbNull;
  if (v === 'JsonNull') return Prisma.JsonNull;
  return v;
};

export const JsonValue: z.ZodType<Prisma.JsonValue> = z.union([
  z.string(),
  z.number(),
  z.boolean(),
  z.lazy(() => z.array(JsonValue)),
  z.lazy(() => z.record(JsonValue)),
]);

export type JsonValueType = z.infer<typeof JsonValue>;

export const NullableJsonValue = z
  .union([JsonValue, z.literal('DbNull'), z.literal('JsonNull')])
  .nullable()
  .transform((v) => transformJsonNull(v));

export type NullableJsonValueType = z.infer<typeof NullableJsonValue>;

export const InputJsonValue: z.ZodType<Prisma.InputJsonValue> = z.union([
  z.string(),
  z.number(),
  z.boolean(),
  z.lazy(() => z.array(InputJsonValue.nullable())),
  z.lazy(() => z.record(InputJsonValue.nullable())),
]);

export type InputJsonValueType = z.infer<typeof InputJsonValue>;


/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const ArtistScalarFieldEnumSchema = z.enum(['id']);

export const AuthorScalarFieldEnumSchema = z.enum(['id']);

export const CloudFileScalarFieldEnumSchema = z.enum(['id','resourceType','filename','size','ext','mime','metadata','path','signature','privacy','createdAt']);

export const ConceptScalarFieldEnumSchema = z.enum(['id','name','type','description','createdAt','updatedAt','userId']);

export const EditionScalarFieldEnumSchema = z.enum(['id','createdAt','updatedAt','userId','pdfId']);

export const JsonNullValueFilterSchema = z.enum(['DbNull','JsonNull','AnyNull',]);

export const NullableJsonNullValueInputSchema = z.enum(['DbNull','JsonNull',]).transform((v) => transformJsonNull(v));

export const PDFScalarFieldEnumSchema = z.enum(['id','height','width','pages','tags','createdAt','fileId']);

export const PageArtworkScalarFieldEnumSchema = z.enum(['id','status','createdAt','updatedAt','pageId','storyId','artistId','photoId']);

export const PageScalarFieldEnumSchema = z.enum(['id','status','type','pageNumber','createdAt','updatedAt','storyId']);

export const PageTextScalarFieldEnumSchema = z.enum(['id','status','locale','text','type','createdAt','updatedAt','pageId','storyId','authorId','translatorId']);

export const PhotoScalarFieldEnumSchema = z.enum(['id','height','width','tags','createdAt','fileId']);

export const PredictionScalarFieldEnumSchema = z.enum(['id','uuid','input','output','status','created_at','started_at','completed_at','version','metrics','error','logs']);

export const QueryModeSchema = z.enum(['default','insensitive']);

export const SortOrderSchema = z.enum(['asc','desc']);

export const StoryScalarFieldEnumSchema = z.enum(['id','createdAt','updatedAt','artistId','authorId']);

export const TransactionIsolationLevelSchema = z.enum(['ReadUncommitted','ReadCommitted','RepeatableRead','Serializable']);

export const TranslatorScalarFieldEnumSchema = z.enum(['id']);

export const UserScalarFieldEnumSchema = z.enum(['id','name','email','updatedAt','createdAt']);

export const FileResourceTypeSchema = z.enum(['ckpt','image','model','pdf','safetensor','video']);

export type FileResourceTypeType = `${z.infer<typeof FileResourceTypeSchema>}`

export const FilePrivacySchema = z.enum(['public','private']);

export type FilePrivacyType = `${z.infer<typeof FilePrivacySchema>}`

export const LocaleSchema = z.enum(['en_US','en']);

export type LocaleType = `${z.infer<typeof LocaleSchema>}`

export const PageStatusSchema = z.enum(['DRAFT','PUBLISHED']);

export type PageStatusType = `${z.infer<typeof PageStatusSchema>}`

export const PageTypeSchema = z.enum(['FrontCover','Body','BackCover']);

export type PageTypeType = `${z.infer<typeof PageTypeSchema>}`

export const PageArtworkTypeSchema = z.enum(['machine_generated','user_creative_work','user_scribble']);

export type PageArtworkTypeType = `${z.infer<typeof PageArtworkTypeSchema>}`

export const PageTextTypeSchema = z.enum(['machine_generated','machine_translated','user_creative_work','user_translated']);

export type PageTextTypeType = `${z.infer<typeof PageTextTypeSchema>}`

export const ConceptTypeSchema = z.enum(['person','place','thing']);

export type ConceptTypeType = `${z.infer<typeof ConceptTypeSchema>}`

/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

/////////////////////////////////////////
// CLOUD FILE SCHEMA
/////////////////////////////////////////

export const CloudFileSchema = z.object({
  resourceType: FileResourceTypeSchema,
  /**
   * Privacy on blob store
   */
  privacy: FilePrivacySchema,
  id: z.string().cuid(),
  filename: z.string(),
  /**
   * Filesize in bytes
   */
  size: z.number().positive(),
  /**
   * File extension
   */
  ext: z.string(),
  /**
   * File MIME type
   */
  mime: z.string(),
  /**
   * Consolidated embedded metadata associated with the file. It includes exif, iptc, and xmp data.
   */
  metadata: NullableJsonValue.optional(),
  /**
   * Path on blob store
   */
  path: z.string(),
  /**
   * Signature on blob store
   */
  signature: z.string(),
  createdAt: z.coerce.date(),
})

export type CloudFile = z.infer<typeof CloudFileSchema>

// CLOUD FILE RELATION SCHEMA
//------------------------------------------------------

export type CloudFileRelations = {
  Photo?: PhotoWithRelations | null;
  PDF?: PDFWithRelations | null;
};

export type CloudFileWithRelations = Omit<z.infer<typeof CloudFileSchema>, "metadata"> & {
  metadata?: NullableJsonInput;
} & CloudFileRelations

export const CloudFileWithRelationsSchema: z.ZodType<CloudFileWithRelations> = CloudFileSchema.merge(z.object({
  Photo: z.lazy(() => PhotoWithRelationsSchema).nullable(),
  PDF: z.lazy(() => PDFWithRelationsSchema).nullable(),
}))

/////////////////////////////////////////
// PHOTO SCHEMA
/////////////////////////////////////////

export const PhotoSchema = z.object({
  id: z.string().cuid(),
  height: z.number().positive(),
  width: z.number().positive(),
  tags: z.string().array(),
  createdAt: z.coerce.date(),
  fileId: z.string().cuid(),
})

export type Photo = z.infer<typeof PhotoSchema>

// PHOTO RELATION SCHEMA
//------------------------------------------------------

export type PhotoRelations = {
  file: CloudFileWithRelations;
  pageArtworks: PageArtworkWithRelations[];
  concepts: ConceptWithRelations[];
};

export type PhotoWithRelations = z.infer<typeof PhotoSchema> & PhotoRelations

export const PhotoWithRelationsSchema: z.ZodType<PhotoWithRelations> = PhotoSchema.merge(z.object({
  file: z.lazy(() => CloudFileWithRelationsSchema),
  pageArtworks: z.lazy(() => PageArtworkWithRelationsSchema).array(),
  concepts: z.lazy(() => ConceptWithRelationsSchema).array(),
}))

/////////////////////////////////////////
// PDF SCHEMA
/////////////////////////////////////////

export const PDFSchema = z.object({
  id: z.string().cuid(),
  height: z.number().positive(),
  width: z.number().positive(),
  pages: z.number().positive(),
  tags: z.string().array(),
  createdAt: z.coerce.date(),
  fileId: z.string().cuid(),
})

export type PDF = z.infer<typeof PDFSchema>

// PDF RELATION SCHEMA
//------------------------------------------------------

export type PDFRelations = {
  file: CloudFileWithRelations;
  book?: EditionWithRelations | null;
};

export type PDFWithRelations = z.infer<typeof PDFSchema> & PDFRelations

export const PDFWithRelationsSchema: z.ZodType<PDFWithRelations> = PDFSchema.merge(z.object({
  file: z.lazy(() => CloudFileWithRelationsSchema),
  book: z.lazy(() => EditionWithRelationsSchema).nullable(),
}))

/////////////////////////////////////////
// USER SCHEMA
/////////////////////////////////////////

export const UserSchema = z.object({
  id: z.string().cuid(),
  name: z.string().min(1).max(160),
  email: z.string().email().min(3).max(160),
  updatedAt: z.coerce.date(),
  createdAt: z.coerce.date(),
})

export type User = z.infer<typeof UserSchema>

// USER RELATION SCHEMA
//------------------------------------------------------

export type UserRelations = {
  Edition: EditionWithRelations[];
  Concept?: ConceptWithRelations | null;
};

export type UserWithRelations = z.infer<typeof UserSchema> & UserRelations

export const UserWithRelationsSchema: z.ZodType<UserWithRelations> = UserSchema.merge(z.object({
  Edition: z.lazy(() => EditionWithRelationsSchema).array(),
  Concept: z.lazy(() => ConceptWithRelationsSchema).nullable(),
}))

/////////////////////////////////////////
// AUTHOR SCHEMA
/////////////////////////////////////////

export const AuthorSchema = z.object({
  id: z.string().cuid(),
})

export type Author = z.infer<typeof AuthorSchema>

// AUTHOR RELATION SCHEMA
//------------------------------------------------------

export type AuthorRelations = {
  stories: StoryWithRelations[];
  pageTexts: PageTextWithRelations[];
};

export type AuthorWithRelations = z.infer<typeof AuthorSchema> & AuthorRelations

export const AuthorWithRelationsSchema: z.ZodType<AuthorWithRelations> = AuthorSchema.merge(z.object({
  stories: z.lazy(() => StoryWithRelationsSchema).array(),
  pageTexts: z.lazy(() => PageTextWithRelationsSchema).array(),
}))

/////////////////////////////////////////
// ARTIST SCHEMA
/////////////////////////////////////////

export const ArtistSchema = z.object({
  id: z.string().cuid(),
})

export type Artist = z.infer<typeof ArtistSchema>

// ARTIST RELATION SCHEMA
//------------------------------------------------------

export type ArtistRelations = {
  stories: StoryWithRelations[];
  pageArtworks: PageArtworkWithRelations[];
};

export type ArtistWithRelations = z.infer<typeof ArtistSchema> & ArtistRelations

export const ArtistWithRelationsSchema: z.ZodType<ArtistWithRelations> = ArtistSchema.merge(z.object({
  stories: z.lazy(() => StoryWithRelationsSchema).array(),
  pageArtworks: z.lazy(() => PageArtworkWithRelationsSchema).array(),
}))

/////////////////////////////////////////
// TRANSLATOR SCHEMA
/////////////////////////////////////////

export const TranslatorSchema = z.object({
  id: z.string().cuid(),
})

export type Translator = z.infer<typeof TranslatorSchema>

// TRANSLATOR RELATION SCHEMA
//------------------------------------------------------

export type TranslatorRelations = {
  pageTexts: PageTextWithRelations[];
};

export type TranslatorWithRelations = z.infer<typeof TranslatorSchema> & TranslatorRelations

export const TranslatorWithRelationsSchema: z.ZodType<TranslatorWithRelations> = TranslatorSchema.merge(z.object({
  pageTexts: z.lazy(() => PageTextWithRelationsSchema).array(),
}))

/////////////////////////////////////////
// STORY SCHEMA
/////////////////////////////////////////

export const StorySchema = z.object({
  id: z.string().cuid(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  artistId: z.string().cuid().nullable(),
  authorId: z.string().cuid().nullable(),
})

export type Story = z.infer<typeof StorySchema>

// STORY RELATION SCHEMA
//------------------------------------------------------

export type StoryRelations = {
  artist?: ArtistWithRelations | null;
  author?: AuthorWithRelations | null;
  pages: PageWithRelations[];
  pageArtworks: PageArtworkWithRelations[];
  pageTexts: PageTextWithRelations[];
};

export type StoryWithRelations = z.infer<typeof StorySchema> & StoryRelations

export const StoryWithRelationsSchema: z.ZodType<StoryWithRelations> = StorySchema.merge(z.object({
  artist: z.lazy(() => ArtistWithRelationsSchema).nullable(),
  author: z.lazy(() => AuthorWithRelationsSchema).nullable(),
  pages: z.lazy(() => PageWithRelationsSchema).array(),
  pageArtworks: z.lazy(() => PageArtworkWithRelationsSchema).array(),
  pageTexts: z.lazy(() => PageTextWithRelationsSchema).array(),
}))

/////////////////////////////////////////
// PAGE ARTWORK SCHEMA
/////////////////////////////////////////

export const PageArtworkSchema = z.object({
  status: PageStatusSchema,
  id: z.string().cuid(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  pageId: z.string().cuid(),
  storyId: z.string().cuid(),
  artistId: z.string().cuid(),
  photoId: z.string().cuid(),
})

export type PageArtwork = z.infer<typeof PageArtworkSchema>

// PAGE ARTWORK RELATION SCHEMA
//------------------------------------------------------

export type PageArtworkRelations = {
  page: PageWithRelations;
  story: StoryWithRelations;
  artist: ArtistWithRelations;
  photo: PhotoWithRelations;
};

export type PageArtworkWithRelations = z.infer<typeof PageArtworkSchema> & PageArtworkRelations

export const PageArtworkWithRelationsSchema: z.ZodType<PageArtworkWithRelations> = PageArtworkSchema.merge(z.object({
  page: z.lazy(() => PageWithRelationsSchema),
  story: z.lazy(() => StoryWithRelationsSchema),
  artist: z.lazy(() => ArtistWithRelationsSchema),
  photo: z.lazy(() => PhotoWithRelationsSchema),
}))

/////////////////////////////////////////
// PAGE TEXT SCHEMA
/////////////////////////////////////////

export const PageTextSchema = z.object({
  status: PageStatusSchema,
  locale: LocaleSchema,
  type: PageTextTypeSchema,
  id: z.string().cuid(),
  text: z.string().min(1).max(5000),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  pageId: z.string().cuid(),
  storyId: z.string().cuid(),
  authorId: z.string().cuid().nullable(),
  translatorId: z.string().cuid().nullable(),
})

export type PageText = z.infer<typeof PageTextSchema>

// PAGE TEXT RELATION SCHEMA
//------------------------------------------------------

export type PageTextRelations = {
  page: PageWithRelations;
  story: StoryWithRelations;
  author?: AuthorWithRelations | null;
  translator?: TranslatorWithRelations | null;
};

export type PageTextWithRelations = z.infer<typeof PageTextSchema> & PageTextRelations

export const PageTextWithRelationsSchema: z.ZodType<PageTextWithRelations> = PageTextSchema.merge(z.object({
  page: z.lazy(() => PageWithRelationsSchema),
  story: z.lazy(() => StoryWithRelationsSchema),
  author: z.lazy(() => AuthorWithRelationsSchema).nullable(),
  translator: z.lazy(() => TranslatorWithRelationsSchema).nullable(),
}))

/////////////////////////////////////////
// PAGE SCHEMA
/////////////////////////////////////////

export const PageSchema = z.object({
  status: PageStatusSchema,
  type: PageTypeSchema,
  id: z.string().cuid(),
  pageNumber: z.number().gte(1).lte(100),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  storyId: z.string().cuid(),
})

export type Page = z.infer<typeof PageSchema>

// PAGE RELATION SCHEMA
//------------------------------------------------------

export type PageRelations = {
  story: StoryWithRelations;
  artworks: PageArtworkWithRelations[];
  texts: PageTextWithRelations[];
};

export type PageWithRelations = z.infer<typeof PageSchema> & PageRelations

export const PageWithRelationsSchema: z.ZodType<PageWithRelations> = PageSchema.merge(z.object({
  story: z.lazy(() => StoryWithRelationsSchema),
  artworks: z.lazy(() => PageArtworkWithRelationsSchema).array(),
  texts: z.lazy(() => PageTextWithRelationsSchema).array(),
}))

/////////////////////////////////////////
// EDITION SCHEMA
/////////////////////////////////////////

export const EditionSchema = z.object({
  id: z.string().cuid(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  userId: z.string().cuid(),
  pdfId: z.string().cuid(),
})

export type Edition = z.infer<typeof EditionSchema>

// EDITION RELATION SCHEMA
//------------------------------------------------------

export type EditionRelations = {
  user: UserWithRelations;
  pdf: PDFWithRelations;
};

export type EditionWithRelations = z.infer<typeof EditionSchema> & EditionRelations

export const EditionWithRelationsSchema: z.ZodType<EditionWithRelations> = EditionSchema.merge(z.object({
  user: z.lazy(() => UserWithRelationsSchema),
  pdf: z.lazy(() => PDFWithRelationsSchema),
}))

/////////////////////////////////////////
// CONCEPT SCHEMA
/////////////////////////////////////////

export const ConceptSchema = z.object({
  type: ConceptTypeSchema,
  id: z.string().cuid(),
  /**
   * .max(100
   */
  name: z.string().min(1),
  description: z.string().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  userId: z.string().cuid().nullable(),
})

export type Concept = z.infer<typeof ConceptSchema>

// CONCEPT RELATION SCHEMA
//------------------------------------------------------

export type ConceptRelations = {
  user?: UserWithRelations | null;
  photos: PhotoWithRelations[];
};

export type ConceptWithRelations = z.infer<typeof ConceptSchema> & ConceptRelations

export const ConceptWithRelationsSchema: z.ZodType<ConceptWithRelations> = ConceptSchema.merge(z.object({
  user: z.lazy(() => UserWithRelationsSchema).nullable(),
  photos: z.lazy(() => PhotoWithRelationsSchema).array(),
}))

/////////////////////////////////////////
// PREDICTION SCHEMA
/////////////////////////////////////////

export const PredictionSchema = z.object({
  id: z.string().cuid(),
  uuid: z.string(),
  input: NullableJsonValue.optional(),
  output: NullableJsonValue.optional(),
  status: z.string().nullable(),
  created_at: z.coerce.date().nullable(),
  started_at: z.coerce.date().nullable(),
  completed_at: z.coerce.date().nullable(),
  version: z.string().nullable(),
  metrics: NullableJsonValue.optional(),
  error: z.string().nullable(),
  logs: z.string().nullable(),
})

export type Prediction = z.infer<typeof PredictionSchema>

/////////////////////////////////////////
// SELECT & INCLUDE
/////////////////////////////////////////

// CLOUD FILE
//------------------------------------------------------

export const CloudFileIncludeSchema: z.ZodType<Prisma.CloudFileInclude> = z.object({
  Photo: z.union([z.boolean(),z.lazy(() => PhotoArgsSchema)]).optional(),
  PDF: z.union([z.boolean(),z.lazy(() => PDFArgsSchema)]).optional(),
}).strict()

export const CloudFileArgsSchema: z.ZodType<Prisma.CloudFileArgs> = z.object({
  select: z.lazy(() => CloudFileSelectSchema).optional(),
  include: z.lazy(() => CloudFileIncludeSchema).optional(),
}).strict();

export const CloudFileSelectSchema: z.ZodType<Prisma.CloudFileSelect> = z.object({
  id: z.boolean().optional(),
  resourceType: z.boolean().optional(),
  filename: z.boolean().optional(),
  size: z.boolean().optional(),
  ext: z.boolean().optional(),
  mime: z.boolean().optional(),
  metadata: z.boolean().optional(),
  path: z.boolean().optional(),
  signature: z.boolean().optional(),
  privacy: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  Photo: z.union([z.boolean(),z.lazy(() => PhotoArgsSchema)]).optional(),
  PDF: z.union([z.boolean(),z.lazy(() => PDFArgsSchema)]).optional(),
}).strict()

// PHOTO
//------------------------------------------------------

export const PhotoIncludeSchema: z.ZodType<Prisma.PhotoInclude> = z.object({
  file: z.union([z.boolean(),z.lazy(() => CloudFileArgsSchema)]).optional(),
  pageArtworks: z.union([z.boolean(),z.lazy(() => PageArtworkFindManyArgsSchema)]).optional(),
  concepts: z.union([z.boolean(),z.lazy(() => ConceptFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => PhotoCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const PhotoArgsSchema: z.ZodType<Prisma.PhotoArgs> = z.object({
  select: z.lazy(() => PhotoSelectSchema).optional(),
  include: z.lazy(() => PhotoIncludeSchema).optional(),
}).strict();

export const PhotoCountOutputTypeArgsSchema: z.ZodType<Prisma.PhotoCountOutputTypeArgs> = z.object({
  select: z.lazy(() => PhotoCountOutputTypeSelectSchema).nullish(),
}).strict();

export const PhotoCountOutputTypeSelectSchema: z.ZodType<Prisma.PhotoCountOutputTypeSelect> = z.object({
  pageArtworks: z.boolean().optional(),
  concepts: z.boolean().optional(),
}).strict();

export const PhotoSelectSchema: z.ZodType<Prisma.PhotoSelect> = z.object({
  id: z.boolean().optional(),
  height: z.boolean().optional(),
  width: z.boolean().optional(),
  tags: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  fileId: z.boolean().optional(),
  file: z.union([z.boolean(),z.lazy(() => CloudFileArgsSchema)]).optional(),
  pageArtworks: z.union([z.boolean(),z.lazy(() => PageArtworkFindManyArgsSchema)]).optional(),
  concepts: z.union([z.boolean(),z.lazy(() => ConceptFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => PhotoCountOutputTypeArgsSchema)]).optional(),
}).strict()

// PDF
//------------------------------------------------------

export const PDFIncludeSchema: z.ZodType<Prisma.PDFInclude> = z.object({
  file: z.union([z.boolean(),z.lazy(() => CloudFileArgsSchema)]).optional(),
  book: z.union([z.boolean(),z.lazy(() => EditionArgsSchema)]).optional(),
}).strict()

export const PDFArgsSchema: z.ZodType<Prisma.PDFArgs> = z.object({
  select: z.lazy(() => PDFSelectSchema).optional(),
  include: z.lazy(() => PDFIncludeSchema).optional(),
}).strict();

export const PDFSelectSchema: z.ZodType<Prisma.PDFSelect> = z.object({
  id: z.boolean().optional(),
  height: z.boolean().optional(),
  width: z.boolean().optional(),
  pages: z.boolean().optional(),
  tags: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  fileId: z.boolean().optional(),
  file: z.union([z.boolean(),z.lazy(() => CloudFileArgsSchema)]).optional(),
  book: z.union([z.boolean(),z.lazy(() => EditionArgsSchema)]).optional(),
}).strict()

// USER
//------------------------------------------------------

export const UserIncludeSchema: z.ZodType<Prisma.UserInclude> = z.object({
  Edition: z.union([z.boolean(),z.lazy(() => EditionFindManyArgsSchema)]).optional(),
  Concept: z.union([z.boolean(),z.lazy(() => ConceptArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => UserCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const UserArgsSchema: z.ZodType<Prisma.UserArgs> = z.object({
  select: z.lazy(() => UserSelectSchema).optional(),
  include: z.lazy(() => UserIncludeSchema).optional(),
}).strict();

export const UserCountOutputTypeArgsSchema: z.ZodType<Prisma.UserCountOutputTypeArgs> = z.object({
  select: z.lazy(() => UserCountOutputTypeSelectSchema).nullish(),
}).strict();

export const UserCountOutputTypeSelectSchema: z.ZodType<Prisma.UserCountOutputTypeSelect> = z.object({
  Edition: z.boolean().optional(),
}).strict();

export const UserSelectSchema: z.ZodType<Prisma.UserSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  email: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  Edition: z.union([z.boolean(),z.lazy(() => EditionFindManyArgsSchema)]).optional(),
  Concept: z.union([z.boolean(),z.lazy(() => ConceptArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => UserCountOutputTypeArgsSchema)]).optional(),
}).strict()

// AUTHOR
//------------------------------------------------------

export const AuthorIncludeSchema: z.ZodType<Prisma.AuthorInclude> = z.object({
  stories: z.union([z.boolean(),z.lazy(() => StoryFindManyArgsSchema)]).optional(),
  pageTexts: z.union([z.boolean(),z.lazy(() => PageTextFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => AuthorCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const AuthorArgsSchema: z.ZodType<Prisma.AuthorArgs> = z.object({
  select: z.lazy(() => AuthorSelectSchema).optional(),
  include: z.lazy(() => AuthorIncludeSchema).optional(),
}).strict();

export const AuthorCountOutputTypeArgsSchema: z.ZodType<Prisma.AuthorCountOutputTypeArgs> = z.object({
  select: z.lazy(() => AuthorCountOutputTypeSelectSchema).nullish(),
}).strict();

export const AuthorCountOutputTypeSelectSchema: z.ZodType<Prisma.AuthorCountOutputTypeSelect> = z.object({
  stories: z.boolean().optional(),
  pageTexts: z.boolean().optional(),
}).strict();

export const AuthorSelectSchema: z.ZodType<Prisma.AuthorSelect> = z.object({
  id: z.boolean().optional(),
  stories: z.union([z.boolean(),z.lazy(() => StoryFindManyArgsSchema)]).optional(),
  pageTexts: z.union([z.boolean(),z.lazy(() => PageTextFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => AuthorCountOutputTypeArgsSchema)]).optional(),
}).strict()

// ARTIST
//------------------------------------------------------

export const ArtistIncludeSchema: z.ZodType<Prisma.ArtistInclude> = z.object({
  stories: z.union([z.boolean(),z.lazy(() => StoryFindManyArgsSchema)]).optional(),
  pageArtworks: z.union([z.boolean(),z.lazy(() => PageArtworkFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ArtistCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const ArtistArgsSchema: z.ZodType<Prisma.ArtistArgs> = z.object({
  select: z.lazy(() => ArtistSelectSchema).optional(),
  include: z.lazy(() => ArtistIncludeSchema).optional(),
}).strict();

export const ArtistCountOutputTypeArgsSchema: z.ZodType<Prisma.ArtistCountOutputTypeArgs> = z.object({
  select: z.lazy(() => ArtistCountOutputTypeSelectSchema).nullish(),
}).strict();

export const ArtistCountOutputTypeSelectSchema: z.ZodType<Prisma.ArtistCountOutputTypeSelect> = z.object({
  stories: z.boolean().optional(),
  pageArtworks: z.boolean().optional(),
}).strict();

export const ArtistSelectSchema: z.ZodType<Prisma.ArtistSelect> = z.object({
  id: z.boolean().optional(),
  stories: z.union([z.boolean(),z.lazy(() => StoryFindManyArgsSchema)]).optional(),
  pageArtworks: z.union([z.boolean(),z.lazy(() => PageArtworkFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ArtistCountOutputTypeArgsSchema)]).optional(),
}).strict()

// TRANSLATOR
//------------------------------------------------------

export const TranslatorIncludeSchema: z.ZodType<Prisma.TranslatorInclude> = z.object({
  pageTexts: z.union([z.boolean(),z.lazy(() => PageTextFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => TranslatorCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const TranslatorArgsSchema: z.ZodType<Prisma.TranslatorArgs> = z.object({
  select: z.lazy(() => TranslatorSelectSchema).optional(),
  include: z.lazy(() => TranslatorIncludeSchema).optional(),
}).strict();

export const TranslatorCountOutputTypeArgsSchema: z.ZodType<Prisma.TranslatorCountOutputTypeArgs> = z.object({
  select: z.lazy(() => TranslatorCountOutputTypeSelectSchema).nullish(),
}).strict();

export const TranslatorCountOutputTypeSelectSchema: z.ZodType<Prisma.TranslatorCountOutputTypeSelect> = z.object({
  pageTexts: z.boolean().optional(),
}).strict();

export const TranslatorSelectSchema: z.ZodType<Prisma.TranslatorSelect> = z.object({
  id: z.boolean().optional(),
  pageTexts: z.union([z.boolean(),z.lazy(() => PageTextFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => TranslatorCountOutputTypeArgsSchema)]).optional(),
}).strict()

// STORY
//------------------------------------------------------

export const StoryIncludeSchema: z.ZodType<Prisma.StoryInclude> = z.object({
  artist: z.union([z.boolean(),z.lazy(() => ArtistArgsSchema)]).optional(),
  author: z.union([z.boolean(),z.lazy(() => AuthorArgsSchema)]).optional(),
  pages: z.union([z.boolean(),z.lazy(() => PageFindManyArgsSchema)]).optional(),
  pageArtworks: z.union([z.boolean(),z.lazy(() => PageArtworkFindManyArgsSchema)]).optional(),
  pageTexts: z.union([z.boolean(),z.lazy(() => PageTextFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => StoryCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const StoryArgsSchema: z.ZodType<Prisma.StoryArgs> = z.object({
  select: z.lazy(() => StorySelectSchema).optional(),
  include: z.lazy(() => StoryIncludeSchema).optional(),
}).strict();

export const StoryCountOutputTypeArgsSchema: z.ZodType<Prisma.StoryCountOutputTypeArgs> = z.object({
  select: z.lazy(() => StoryCountOutputTypeSelectSchema).nullish(),
}).strict();

export const StoryCountOutputTypeSelectSchema: z.ZodType<Prisma.StoryCountOutputTypeSelect> = z.object({
  pages: z.boolean().optional(),
  pageArtworks: z.boolean().optional(),
  pageTexts: z.boolean().optional(),
}).strict();

export const StorySelectSchema: z.ZodType<Prisma.StorySelect> = z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  artistId: z.boolean().optional(),
  authorId: z.boolean().optional(),
  artist: z.union([z.boolean(),z.lazy(() => ArtistArgsSchema)]).optional(),
  author: z.union([z.boolean(),z.lazy(() => AuthorArgsSchema)]).optional(),
  pages: z.union([z.boolean(),z.lazy(() => PageFindManyArgsSchema)]).optional(),
  pageArtworks: z.union([z.boolean(),z.lazy(() => PageArtworkFindManyArgsSchema)]).optional(),
  pageTexts: z.union([z.boolean(),z.lazy(() => PageTextFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => StoryCountOutputTypeArgsSchema)]).optional(),
}).strict()

// PAGE ARTWORK
//------------------------------------------------------

export const PageArtworkIncludeSchema: z.ZodType<Prisma.PageArtworkInclude> = z.object({
  page: z.union([z.boolean(),z.lazy(() => PageArgsSchema)]).optional(),
  story: z.union([z.boolean(),z.lazy(() => StoryArgsSchema)]).optional(),
  artist: z.union([z.boolean(),z.lazy(() => ArtistArgsSchema)]).optional(),
  photo: z.union([z.boolean(),z.lazy(() => PhotoArgsSchema)]).optional(),
}).strict()

export const PageArtworkArgsSchema: z.ZodType<Prisma.PageArtworkArgs> = z.object({
  select: z.lazy(() => PageArtworkSelectSchema).optional(),
  include: z.lazy(() => PageArtworkIncludeSchema).optional(),
}).strict();

export const PageArtworkSelectSchema: z.ZodType<Prisma.PageArtworkSelect> = z.object({
  id: z.boolean().optional(),
  status: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  pageId: z.boolean().optional(),
  storyId: z.boolean().optional(),
  artistId: z.boolean().optional(),
  photoId: z.boolean().optional(),
  page: z.union([z.boolean(),z.lazy(() => PageArgsSchema)]).optional(),
  story: z.union([z.boolean(),z.lazy(() => StoryArgsSchema)]).optional(),
  artist: z.union([z.boolean(),z.lazy(() => ArtistArgsSchema)]).optional(),
  photo: z.union([z.boolean(),z.lazy(() => PhotoArgsSchema)]).optional(),
}).strict()

// PAGE TEXT
//------------------------------------------------------

export const PageTextIncludeSchema: z.ZodType<Prisma.PageTextInclude> = z.object({
  page: z.union([z.boolean(),z.lazy(() => PageArgsSchema)]).optional(),
  story: z.union([z.boolean(),z.lazy(() => StoryArgsSchema)]).optional(),
  author: z.union([z.boolean(),z.lazy(() => AuthorArgsSchema)]).optional(),
  translator: z.union([z.boolean(),z.lazy(() => TranslatorArgsSchema)]).optional(),
}).strict()

export const PageTextArgsSchema: z.ZodType<Prisma.PageTextArgs> = z.object({
  select: z.lazy(() => PageTextSelectSchema).optional(),
  include: z.lazy(() => PageTextIncludeSchema).optional(),
}).strict();

export const PageTextSelectSchema: z.ZodType<Prisma.PageTextSelect> = z.object({
  id: z.boolean().optional(),
  status: z.boolean().optional(),
  locale: z.boolean().optional(),
  text: z.boolean().optional(),
  type: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  pageId: z.boolean().optional(),
  storyId: z.boolean().optional(),
  authorId: z.boolean().optional(),
  translatorId: z.boolean().optional(),
  page: z.union([z.boolean(),z.lazy(() => PageArgsSchema)]).optional(),
  story: z.union([z.boolean(),z.lazy(() => StoryArgsSchema)]).optional(),
  author: z.union([z.boolean(),z.lazy(() => AuthorArgsSchema)]).optional(),
  translator: z.union([z.boolean(),z.lazy(() => TranslatorArgsSchema)]).optional(),
}).strict()

// PAGE
//------------------------------------------------------

export const PageIncludeSchema: z.ZodType<Prisma.PageInclude> = z.object({
  story: z.union([z.boolean(),z.lazy(() => StoryArgsSchema)]).optional(),
  artworks: z.union([z.boolean(),z.lazy(() => PageArtworkFindManyArgsSchema)]).optional(),
  texts: z.union([z.boolean(),z.lazy(() => PageTextFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => PageCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const PageArgsSchema: z.ZodType<Prisma.PageArgs> = z.object({
  select: z.lazy(() => PageSelectSchema).optional(),
  include: z.lazy(() => PageIncludeSchema).optional(),
}).strict();

export const PageCountOutputTypeArgsSchema: z.ZodType<Prisma.PageCountOutputTypeArgs> = z.object({
  select: z.lazy(() => PageCountOutputTypeSelectSchema).nullish(),
}).strict();

export const PageCountOutputTypeSelectSchema: z.ZodType<Prisma.PageCountOutputTypeSelect> = z.object({
  artworks: z.boolean().optional(),
  texts: z.boolean().optional(),
}).strict();

export const PageSelectSchema: z.ZodType<Prisma.PageSelect> = z.object({
  id: z.boolean().optional(),
  status: z.boolean().optional(),
  type: z.boolean().optional(),
  pageNumber: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  storyId: z.boolean().optional(),
  story: z.union([z.boolean(),z.lazy(() => StoryArgsSchema)]).optional(),
  artworks: z.union([z.boolean(),z.lazy(() => PageArtworkFindManyArgsSchema)]).optional(),
  texts: z.union([z.boolean(),z.lazy(() => PageTextFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => PageCountOutputTypeArgsSchema)]).optional(),
}).strict()

// EDITION
//------------------------------------------------------

export const EditionIncludeSchema: z.ZodType<Prisma.EditionInclude> = z.object({
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  pdf: z.union([z.boolean(),z.lazy(() => PDFArgsSchema)]).optional(),
}).strict()

export const EditionArgsSchema: z.ZodType<Prisma.EditionArgs> = z.object({
  select: z.lazy(() => EditionSelectSchema).optional(),
  include: z.lazy(() => EditionIncludeSchema).optional(),
}).strict();

export const EditionSelectSchema: z.ZodType<Prisma.EditionSelect> = z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  userId: z.boolean().optional(),
  pdfId: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  pdf: z.union([z.boolean(),z.lazy(() => PDFArgsSchema)]).optional(),
}).strict()

// CONCEPT
//------------------------------------------------------

export const ConceptIncludeSchema: z.ZodType<Prisma.ConceptInclude> = z.object({
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  photos: z.union([z.boolean(),z.lazy(() => PhotoFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ConceptCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const ConceptArgsSchema: z.ZodType<Prisma.ConceptArgs> = z.object({
  select: z.lazy(() => ConceptSelectSchema).optional(),
  include: z.lazy(() => ConceptIncludeSchema).optional(),
}).strict();

export const ConceptCountOutputTypeArgsSchema: z.ZodType<Prisma.ConceptCountOutputTypeArgs> = z.object({
  select: z.lazy(() => ConceptCountOutputTypeSelectSchema).nullish(),
}).strict();

export const ConceptCountOutputTypeSelectSchema: z.ZodType<Prisma.ConceptCountOutputTypeSelect> = z.object({
  photos: z.boolean().optional(),
}).strict();

export const ConceptSelectSchema: z.ZodType<Prisma.ConceptSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  type: z.boolean().optional(),
  description: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  userId: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  photos: z.union([z.boolean(),z.lazy(() => PhotoFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ConceptCountOutputTypeArgsSchema)]).optional(),
}).strict()

// PREDICTION
//------------------------------------------------------

export const PredictionSelectSchema: z.ZodType<Prisma.PredictionSelect> = z.object({
  id: z.boolean().optional(),
  uuid: z.boolean().optional(),
  input: z.boolean().optional(),
  output: z.boolean().optional(),
  status: z.boolean().optional(),
  created_at: z.boolean().optional(),
  started_at: z.boolean().optional(),
  completed_at: z.boolean().optional(),
  version: z.boolean().optional(),
  metrics: z.boolean().optional(),
  error: z.boolean().optional(),
  logs: z.boolean().optional(),
}).strict()


/////////////////////////////////////////
// INPUT TYPES
/////////////////////////////////////////

export const CloudFileWhereInputSchema: z.ZodType<Prisma.CloudFileWhereInput> = z.object({
  AND: z.union([ z.lazy(() => CloudFileWhereInputSchema),z.lazy(() => CloudFileWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CloudFileWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CloudFileWhereInputSchema),z.lazy(() => CloudFileWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  resourceType: z.union([ z.lazy(() => EnumFileResourceTypeFilterSchema),z.lazy(() => FileResourceTypeSchema) ]).optional(),
  filename: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  size: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  ext: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  mime: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  metadata: z.lazy(() => JsonNullableFilterSchema).optional(),
  path: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  signature: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  privacy: z.union([ z.lazy(() => EnumFilePrivacyFilterSchema),z.lazy(() => FilePrivacySchema) ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  Photo: z.union([ z.lazy(() => PhotoRelationFilterSchema),z.lazy(() => PhotoWhereInputSchema) ]).optional().nullable(),
  PDF: z.union([ z.lazy(() => PDFRelationFilterSchema),z.lazy(() => PDFWhereInputSchema) ]).optional().nullable(),
}).strict();

export const CloudFileOrderByWithRelationInputSchema: z.ZodType<Prisma.CloudFileOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  resourceType: z.lazy(() => SortOrderSchema).optional(),
  filename: z.lazy(() => SortOrderSchema).optional(),
  size: z.lazy(() => SortOrderSchema).optional(),
  ext: z.lazy(() => SortOrderSchema).optional(),
  mime: z.lazy(() => SortOrderSchema).optional(),
  metadata: z.lazy(() => SortOrderSchema).optional(),
  path: z.lazy(() => SortOrderSchema).optional(),
  signature: z.lazy(() => SortOrderSchema).optional(),
  privacy: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  Photo: z.lazy(() => PhotoOrderByWithRelationInputSchema).optional(),
  PDF: z.lazy(() => PDFOrderByWithRelationInputSchema).optional()
}).strict();

export const CloudFileWhereUniqueInputSchema: z.ZodType<Prisma.CloudFileWhereUniqueInput> = z.object({
  id: z.string().cuid().optional(),
  path: z.string().optional(),
  signature: z.string().optional()
}).strict();

export const CloudFileOrderByWithAggregationInputSchema: z.ZodType<Prisma.CloudFileOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  resourceType: z.lazy(() => SortOrderSchema).optional(),
  filename: z.lazy(() => SortOrderSchema).optional(),
  size: z.lazy(() => SortOrderSchema).optional(),
  ext: z.lazy(() => SortOrderSchema).optional(),
  mime: z.lazy(() => SortOrderSchema).optional(),
  metadata: z.lazy(() => SortOrderSchema).optional(),
  path: z.lazy(() => SortOrderSchema).optional(),
  signature: z.lazy(() => SortOrderSchema).optional(),
  privacy: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => CloudFileCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => CloudFileAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => CloudFileMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => CloudFileMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => CloudFileSumOrderByAggregateInputSchema).optional()
}).strict();

export const CloudFileScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.CloudFileScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => CloudFileScalarWhereWithAggregatesInputSchema),z.lazy(() => CloudFileScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => CloudFileScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CloudFileScalarWhereWithAggregatesInputSchema),z.lazy(() => CloudFileScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  resourceType: z.union([ z.lazy(() => EnumFileResourceTypeWithAggregatesFilterSchema),z.lazy(() => FileResourceTypeSchema) ]).optional(),
  filename: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  size: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  ext: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  mime: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  metadata: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
  path: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  signature: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  privacy: z.union([ z.lazy(() => EnumFilePrivacyWithAggregatesFilterSchema),z.lazy(() => FilePrivacySchema) ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const PhotoWhereInputSchema: z.ZodType<Prisma.PhotoWhereInput> = z.object({
  AND: z.union([ z.lazy(() => PhotoWhereInputSchema),z.lazy(() => PhotoWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PhotoWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PhotoWhereInputSchema),z.lazy(() => PhotoWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  height: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  width: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  tags: z.lazy(() => StringNullableListFilterSchema).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  fileId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  file: z.union([ z.lazy(() => CloudFileRelationFilterSchema),z.lazy(() => CloudFileWhereInputSchema) ]).optional(),
  pageArtworks: z.lazy(() => PageArtworkListRelationFilterSchema).optional(),
  concepts: z.lazy(() => ConceptListRelationFilterSchema).optional()
}).strict();

export const PhotoOrderByWithRelationInputSchema: z.ZodType<Prisma.PhotoOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  height: z.lazy(() => SortOrderSchema).optional(),
  width: z.lazy(() => SortOrderSchema).optional(),
  tags: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  fileId: z.lazy(() => SortOrderSchema).optional(),
  file: z.lazy(() => CloudFileOrderByWithRelationInputSchema).optional(),
  pageArtworks: z.lazy(() => PageArtworkOrderByRelationAggregateInputSchema).optional(),
  concepts: z.lazy(() => ConceptOrderByRelationAggregateInputSchema).optional()
}).strict();

export const PhotoWhereUniqueInputSchema: z.ZodType<Prisma.PhotoWhereUniqueInput> = z.object({
  id: z.string().cuid().optional(),
  fileId: z.string().cuid().optional()
}).strict();

export const PhotoOrderByWithAggregationInputSchema: z.ZodType<Prisma.PhotoOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  height: z.lazy(() => SortOrderSchema).optional(),
  width: z.lazy(() => SortOrderSchema).optional(),
  tags: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  fileId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => PhotoCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => PhotoAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => PhotoMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => PhotoMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => PhotoSumOrderByAggregateInputSchema).optional()
}).strict();

export const PhotoScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.PhotoScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => PhotoScalarWhereWithAggregatesInputSchema),z.lazy(() => PhotoScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => PhotoScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PhotoScalarWhereWithAggregatesInputSchema),z.lazy(() => PhotoScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  height: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  width: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  tags: z.lazy(() => StringNullableListFilterSchema).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  fileId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const PDFWhereInputSchema: z.ZodType<Prisma.PDFWhereInput> = z.object({
  AND: z.union([ z.lazy(() => PDFWhereInputSchema),z.lazy(() => PDFWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PDFWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PDFWhereInputSchema),z.lazy(() => PDFWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  height: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  width: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  pages: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  tags: z.lazy(() => StringNullableListFilterSchema).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  fileId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  file: z.union([ z.lazy(() => CloudFileRelationFilterSchema),z.lazy(() => CloudFileWhereInputSchema) ]).optional(),
  book: z.union([ z.lazy(() => EditionRelationFilterSchema),z.lazy(() => EditionWhereInputSchema) ]).optional().nullable(),
}).strict();

export const PDFOrderByWithRelationInputSchema: z.ZodType<Prisma.PDFOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  height: z.lazy(() => SortOrderSchema).optional(),
  width: z.lazy(() => SortOrderSchema).optional(),
  pages: z.lazy(() => SortOrderSchema).optional(),
  tags: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  fileId: z.lazy(() => SortOrderSchema).optional(),
  file: z.lazy(() => CloudFileOrderByWithRelationInputSchema).optional(),
  book: z.lazy(() => EditionOrderByWithRelationInputSchema).optional()
}).strict();

export const PDFWhereUniqueInputSchema: z.ZodType<Prisma.PDFWhereUniqueInput> = z.object({
  id: z.string().cuid().optional(),
  fileId: z.string().cuid().optional()
}).strict();

export const PDFOrderByWithAggregationInputSchema: z.ZodType<Prisma.PDFOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  height: z.lazy(() => SortOrderSchema).optional(),
  width: z.lazy(() => SortOrderSchema).optional(),
  pages: z.lazy(() => SortOrderSchema).optional(),
  tags: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  fileId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => PDFCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => PDFAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => PDFMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => PDFMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => PDFSumOrderByAggregateInputSchema).optional()
}).strict();

export const PDFScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.PDFScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => PDFScalarWhereWithAggregatesInputSchema),z.lazy(() => PDFScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => PDFScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PDFScalarWhereWithAggregatesInputSchema),z.lazy(() => PDFScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  height: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  width: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  pages: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  tags: z.lazy(() => StringNullableListFilterSchema).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  fileId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const UserWhereInputSchema: z.ZodType<Prisma.UserWhereInput> = z.object({
  AND: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  email: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  Edition: z.lazy(() => EditionListRelationFilterSchema).optional(),
  Concept: z.union([ z.lazy(() => ConceptRelationFilterSchema),z.lazy(() => ConceptWhereInputSchema) ]).optional().nullable(),
}).strict();

export const UserOrderByWithRelationInputSchema: z.ZodType<Prisma.UserOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  Edition: z.lazy(() => EditionOrderByRelationAggregateInputSchema).optional(),
  Concept: z.lazy(() => ConceptOrderByWithRelationInputSchema).optional()
}).strict();

export const UserWhereUniqueInputSchema: z.ZodType<Prisma.UserWhereUniqueInput> = z.object({
  id: z.string().cuid().optional(),
  email: z.string().email().min(3).max(160).optional()
}).strict();

export const UserOrderByWithAggregationInputSchema: z.ZodType<Prisma.UserOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => UserCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => UserMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => UserMinOrderByAggregateInputSchema).optional()
}).strict();

export const UserScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.UserScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => UserScalarWhereWithAggregatesInputSchema),z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserScalarWhereWithAggregatesInputSchema),z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  email: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const AuthorWhereInputSchema: z.ZodType<Prisma.AuthorWhereInput> = z.object({
  AND: z.union([ z.lazy(() => AuthorWhereInputSchema),z.lazy(() => AuthorWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AuthorWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AuthorWhereInputSchema),z.lazy(() => AuthorWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  stories: z.lazy(() => StoryListRelationFilterSchema).optional(),
  pageTexts: z.lazy(() => PageTextListRelationFilterSchema).optional()
}).strict();

export const AuthorOrderByWithRelationInputSchema: z.ZodType<Prisma.AuthorOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  stories: z.lazy(() => StoryOrderByRelationAggregateInputSchema).optional(),
  pageTexts: z.lazy(() => PageTextOrderByRelationAggregateInputSchema).optional()
}).strict();

export const AuthorWhereUniqueInputSchema: z.ZodType<Prisma.AuthorWhereUniqueInput> = z.object({
  id: z.string().cuid().optional()
}).strict();

export const AuthorOrderByWithAggregationInputSchema: z.ZodType<Prisma.AuthorOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => AuthorCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => AuthorMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => AuthorMinOrderByAggregateInputSchema).optional()
}).strict();

export const AuthorScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.AuthorScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => AuthorScalarWhereWithAggregatesInputSchema),z.lazy(() => AuthorScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => AuthorScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AuthorScalarWhereWithAggregatesInputSchema),z.lazy(() => AuthorScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const ArtistWhereInputSchema: z.ZodType<Prisma.ArtistWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ArtistWhereInputSchema),z.lazy(() => ArtistWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ArtistWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ArtistWhereInputSchema),z.lazy(() => ArtistWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  stories: z.lazy(() => StoryListRelationFilterSchema).optional(),
  pageArtworks: z.lazy(() => PageArtworkListRelationFilterSchema).optional()
}).strict();

export const ArtistOrderByWithRelationInputSchema: z.ZodType<Prisma.ArtistOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  stories: z.lazy(() => StoryOrderByRelationAggregateInputSchema).optional(),
  pageArtworks: z.lazy(() => PageArtworkOrderByRelationAggregateInputSchema).optional()
}).strict();

export const ArtistWhereUniqueInputSchema: z.ZodType<Prisma.ArtistWhereUniqueInput> = z.object({
  id: z.string().cuid().optional()
}).strict();

export const ArtistOrderByWithAggregationInputSchema: z.ZodType<Prisma.ArtistOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ArtistCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ArtistMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ArtistMinOrderByAggregateInputSchema).optional()
}).strict();

export const ArtistScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ArtistScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => ArtistScalarWhereWithAggregatesInputSchema),z.lazy(() => ArtistScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ArtistScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ArtistScalarWhereWithAggregatesInputSchema),z.lazy(() => ArtistScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const TranslatorWhereInputSchema: z.ZodType<Prisma.TranslatorWhereInput> = z.object({
  AND: z.union([ z.lazy(() => TranslatorWhereInputSchema),z.lazy(() => TranslatorWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TranslatorWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TranslatorWhereInputSchema),z.lazy(() => TranslatorWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  pageTexts: z.lazy(() => PageTextListRelationFilterSchema).optional()
}).strict();

export const TranslatorOrderByWithRelationInputSchema: z.ZodType<Prisma.TranslatorOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  pageTexts: z.lazy(() => PageTextOrderByRelationAggregateInputSchema).optional()
}).strict();

export const TranslatorWhereUniqueInputSchema: z.ZodType<Prisma.TranslatorWhereUniqueInput> = z.object({
  id: z.string().cuid().optional()
}).strict();

export const TranslatorOrderByWithAggregationInputSchema: z.ZodType<Prisma.TranslatorOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => TranslatorCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => TranslatorMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => TranslatorMinOrderByAggregateInputSchema).optional()
}).strict();

export const TranslatorScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.TranslatorScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => TranslatorScalarWhereWithAggregatesInputSchema),z.lazy(() => TranslatorScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => TranslatorScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TranslatorScalarWhereWithAggregatesInputSchema),z.lazy(() => TranslatorScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const StoryWhereInputSchema: z.ZodType<Prisma.StoryWhereInput> = z.object({
  AND: z.union([ z.lazy(() => StoryWhereInputSchema),z.lazy(() => StoryWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => StoryWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => StoryWhereInputSchema),z.lazy(() => StoryWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  artistId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  authorId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  artist: z.union([ z.lazy(() => ArtistRelationFilterSchema),z.lazy(() => ArtistWhereInputSchema) ]).optional().nullable(),
  author: z.union([ z.lazy(() => AuthorRelationFilterSchema),z.lazy(() => AuthorWhereInputSchema) ]).optional().nullable(),
  pages: z.lazy(() => PageListRelationFilterSchema).optional(),
  pageArtworks: z.lazy(() => PageArtworkListRelationFilterSchema).optional(),
  pageTexts: z.lazy(() => PageTextListRelationFilterSchema).optional()
}).strict();

export const StoryOrderByWithRelationInputSchema: z.ZodType<Prisma.StoryOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  artistId: z.lazy(() => SortOrderSchema).optional(),
  authorId: z.lazy(() => SortOrderSchema).optional(),
  artist: z.lazy(() => ArtistOrderByWithRelationInputSchema).optional(),
  author: z.lazy(() => AuthorOrderByWithRelationInputSchema).optional(),
  pages: z.lazy(() => PageOrderByRelationAggregateInputSchema).optional(),
  pageArtworks: z.lazy(() => PageArtworkOrderByRelationAggregateInputSchema).optional(),
  pageTexts: z.lazy(() => PageTextOrderByRelationAggregateInputSchema).optional()
}).strict();

export const StoryWhereUniqueInputSchema: z.ZodType<Prisma.StoryWhereUniqueInput> = z.object({
  id: z.string().cuid().optional()
}).strict();

export const StoryOrderByWithAggregationInputSchema: z.ZodType<Prisma.StoryOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  artistId: z.lazy(() => SortOrderSchema).optional(),
  authorId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => StoryCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => StoryMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => StoryMinOrderByAggregateInputSchema).optional()
}).strict();

export const StoryScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.StoryScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => StoryScalarWhereWithAggregatesInputSchema),z.lazy(() => StoryScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => StoryScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => StoryScalarWhereWithAggregatesInputSchema),z.lazy(() => StoryScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  artistId: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  authorId: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const PageArtworkWhereInputSchema: z.ZodType<Prisma.PageArtworkWhereInput> = z.object({
  AND: z.union([ z.lazy(() => PageArtworkWhereInputSchema),z.lazy(() => PageArtworkWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PageArtworkWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PageArtworkWhereInputSchema),z.lazy(() => PageArtworkWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  status: z.union([ z.lazy(() => EnumPageStatusFilterSchema),z.lazy(() => PageStatusSchema) ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  pageId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  storyId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  artistId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  photoId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  page: z.union([ z.lazy(() => PageRelationFilterSchema),z.lazy(() => PageWhereInputSchema) ]).optional(),
  story: z.union([ z.lazy(() => StoryRelationFilterSchema),z.lazy(() => StoryWhereInputSchema) ]).optional(),
  artist: z.union([ z.lazy(() => ArtistRelationFilterSchema),z.lazy(() => ArtistWhereInputSchema) ]).optional(),
  photo: z.union([ z.lazy(() => PhotoRelationFilterSchema),z.lazy(() => PhotoWhereInputSchema) ]).optional(),
}).strict();

export const PageArtworkOrderByWithRelationInputSchema: z.ZodType<Prisma.PageArtworkOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  pageId: z.lazy(() => SortOrderSchema).optional(),
  storyId: z.lazy(() => SortOrderSchema).optional(),
  artistId: z.lazy(() => SortOrderSchema).optional(),
  photoId: z.lazy(() => SortOrderSchema).optional(),
  page: z.lazy(() => PageOrderByWithRelationInputSchema).optional(),
  story: z.lazy(() => StoryOrderByWithRelationInputSchema).optional(),
  artist: z.lazy(() => ArtistOrderByWithRelationInputSchema).optional(),
  photo: z.lazy(() => PhotoOrderByWithRelationInputSchema).optional()
}).strict();

export const PageArtworkWhereUniqueInputSchema: z.ZodType<Prisma.PageArtworkWhereUniqueInput> = z.object({
  id: z.string().cuid().optional()
}).strict();

export const PageArtworkOrderByWithAggregationInputSchema: z.ZodType<Prisma.PageArtworkOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  pageId: z.lazy(() => SortOrderSchema).optional(),
  storyId: z.lazy(() => SortOrderSchema).optional(),
  artistId: z.lazy(() => SortOrderSchema).optional(),
  photoId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => PageArtworkCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => PageArtworkMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => PageArtworkMinOrderByAggregateInputSchema).optional()
}).strict();

export const PageArtworkScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.PageArtworkScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => PageArtworkScalarWhereWithAggregatesInputSchema),z.lazy(() => PageArtworkScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => PageArtworkScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PageArtworkScalarWhereWithAggregatesInputSchema),z.lazy(() => PageArtworkScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  status: z.union([ z.lazy(() => EnumPageStatusWithAggregatesFilterSchema),z.lazy(() => PageStatusSchema) ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  pageId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  storyId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  artistId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  photoId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const PageTextWhereInputSchema: z.ZodType<Prisma.PageTextWhereInput> = z.object({
  AND: z.union([ z.lazy(() => PageTextWhereInputSchema),z.lazy(() => PageTextWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PageTextWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PageTextWhereInputSchema),z.lazy(() => PageTextWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  status: z.union([ z.lazy(() => EnumPageStatusFilterSchema),z.lazy(() => PageStatusSchema) ]).optional(),
  locale: z.union([ z.lazy(() => EnumLocaleFilterSchema),z.lazy(() => LocaleSchema) ]).optional(),
  text: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  type: z.union([ z.lazy(() => EnumPageTextTypeFilterSchema),z.lazy(() => PageTextTypeSchema) ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  pageId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  storyId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  authorId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  translatorId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  page: z.union([ z.lazy(() => PageRelationFilterSchema),z.lazy(() => PageWhereInputSchema) ]).optional(),
  story: z.union([ z.lazy(() => StoryRelationFilterSchema),z.lazy(() => StoryWhereInputSchema) ]).optional(),
  author: z.union([ z.lazy(() => AuthorRelationFilterSchema),z.lazy(() => AuthorWhereInputSchema) ]).optional().nullable(),
  translator: z.union([ z.lazy(() => TranslatorRelationFilterSchema),z.lazy(() => TranslatorWhereInputSchema) ]).optional().nullable(),
}).strict();

export const PageTextOrderByWithRelationInputSchema: z.ZodType<Prisma.PageTextOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  locale: z.lazy(() => SortOrderSchema).optional(),
  text: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  pageId: z.lazy(() => SortOrderSchema).optional(),
  storyId: z.lazy(() => SortOrderSchema).optional(),
  authorId: z.lazy(() => SortOrderSchema).optional(),
  translatorId: z.lazy(() => SortOrderSchema).optional(),
  page: z.lazy(() => PageOrderByWithRelationInputSchema).optional(),
  story: z.lazy(() => StoryOrderByWithRelationInputSchema).optional(),
  author: z.lazy(() => AuthorOrderByWithRelationInputSchema).optional(),
  translator: z.lazy(() => TranslatorOrderByWithRelationInputSchema).optional()
}).strict();

export const PageTextWhereUniqueInputSchema: z.ZodType<Prisma.PageTextWhereUniqueInput> = z.object({
  id: z.string().cuid().optional()
}).strict();

export const PageTextOrderByWithAggregationInputSchema: z.ZodType<Prisma.PageTextOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  locale: z.lazy(() => SortOrderSchema).optional(),
  text: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  pageId: z.lazy(() => SortOrderSchema).optional(),
  storyId: z.lazy(() => SortOrderSchema).optional(),
  authorId: z.lazy(() => SortOrderSchema).optional(),
  translatorId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => PageTextCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => PageTextMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => PageTextMinOrderByAggregateInputSchema).optional()
}).strict();

export const PageTextScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.PageTextScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => PageTextScalarWhereWithAggregatesInputSchema),z.lazy(() => PageTextScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => PageTextScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PageTextScalarWhereWithAggregatesInputSchema),z.lazy(() => PageTextScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  status: z.union([ z.lazy(() => EnumPageStatusWithAggregatesFilterSchema),z.lazy(() => PageStatusSchema) ]).optional(),
  locale: z.union([ z.lazy(() => EnumLocaleWithAggregatesFilterSchema),z.lazy(() => LocaleSchema) ]).optional(),
  text: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  type: z.union([ z.lazy(() => EnumPageTextTypeWithAggregatesFilterSchema),z.lazy(() => PageTextTypeSchema) ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  pageId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  storyId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  authorId: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  translatorId: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const PageWhereInputSchema: z.ZodType<Prisma.PageWhereInput> = z.object({
  AND: z.union([ z.lazy(() => PageWhereInputSchema),z.lazy(() => PageWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PageWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PageWhereInputSchema),z.lazy(() => PageWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  status: z.union([ z.lazy(() => EnumPageStatusFilterSchema),z.lazy(() => PageStatusSchema) ]).optional(),
  type: z.union([ z.lazy(() => EnumPageTypeFilterSchema),z.lazy(() => PageTypeSchema) ]).optional(),
  pageNumber: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  storyId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  story: z.union([ z.lazy(() => StoryRelationFilterSchema),z.lazy(() => StoryWhereInputSchema) ]).optional(),
  artworks: z.lazy(() => PageArtworkListRelationFilterSchema).optional(),
  texts: z.lazy(() => PageTextListRelationFilterSchema).optional()
}).strict();

export const PageOrderByWithRelationInputSchema: z.ZodType<Prisma.PageOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  pageNumber: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  storyId: z.lazy(() => SortOrderSchema).optional(),
  story: z.lazy(() => StoryOrderByWithRelationInputSchema).optional(),
  artworks: z.lazy(() => PageArtworkOrderByRelationAggregateInputSchema).optional(),
  texts: z.lazy(() => PageTextOrderByRelationAggregateInputSchema).optional()
}).strict();

export const PageWhereUniqueInputSchema: z.ZodType<Prisma.PageWhereUniqueInput> = z.object({
  id: z.string().cuid().optional()
}).strict();

export const PageOrderByWithAggregationInputSchema: z.ZodType<Prisma.PageOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  pageNumber: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  storyId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => PageCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => PageAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => PageMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => PageMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => PageSumOrderByAggregateInputSchema).optional()
}).strict();

export const PageScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.PageScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => PageScalarWhereWithAggregatesInputSchema),z.lazy(() => PageScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => PageScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PageScalarWhereWithAggregatesInputSchema),z.lazy(() => PageScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  status: z.union([ z.lazy(() => EnumPageStatusWithAggregatesFilterSchema),z.lazy(() => PageStatusSchema) ]).optional(),
  type: z.union([ z.lazy(() => EnumPageTypeWithAggregatesFilterSchema),z.lazy(() => PageTypeSchema) ]).optional(),
  pageNumber: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  storyId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const EditionWhereInputSchema: z.ZodType<Prisma.EditionWhereInput> = z.object({
  AND: z.union([ z.lazy(() => EditionWhereInputSchema),z.lazy(() => EditionWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => EditionWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => EditionWhereInputSchema),z.lazy(() => EditionWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  pdfId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  user: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
  pdf: z.union([ z.lazy(() => PDFRelationFilterSchema),z.lazy(() => PDFWhereInputSchema) ]).optional(),
}).strict();

export const EditionOrderByWithRelationInputSchema: z.ZodType<Prisma.EditionOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  pdfId: z.lazy(() => SortOrderSchema).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
  pdf: z.lazy(() => PDFOrderByWithRelationInputSchema).optional()
}).strict();

export const EditionWhereUniqueInputSchema: z.ZodType<Prisma.EditionWhereUniqueInput> = z.object({
  id: z.string().cuid().optional(),
  userId: z.string().cuid().optional(),
  pdfId: z.string().cuid().optional()
}).strict();

export const EditionOrderByWithAggregationInputSchema: z.ZodType<Prisma.EditionOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  pdfId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => EditionCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => EditionMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => EditionMinOrderByAggregateInputSchema).optional()
}).strict();

export const EditionScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.EditionScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => EditionScalarWhereWithAggregatesInputSchema),z.lazy(() => EditionScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => EditionScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => EditionScalarWhereWithAggregatesInputSchema),z.lazy(() => EditionScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  userId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  pdfId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const ConceptWhereInputSchema: z.ZodType<Prisma.ConceptWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ConceptWhereInputSchema),z.lazy(() => ConceptWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ConceptWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ConceptWhereInputSchema),z.lazy(() => ConceptWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  type: z.union([ z.lazy(() => EnumConceptTypeFilterSchema),z.lazy(() => ConceptTypeSchema) ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  userId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  user: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional().nullable(),
  photos: z.lazy(() => PhotoListRelationFilterSchema).optional()
}).strict();

export const ConceptOrderByWithRelationInputSchema: z.ZodType<Prisma.ConceptOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
  photos: z.lazy(() => PhotoOrderByRelationAggregateInputSchema).optional()
}).strict();

export const ConceptWhereUniqueInputSchema: z.ZodType<Prisma.ConceptWhereUniqueInput> = z.object({
  id: z.string().cuid().optional(),
  userId: z.string().cuid().optional()
}).strict();

export const ConceptOrderByWithAggregationInputSchema: z.ZodType<Prisma.ConceptOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ConceptCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ConceptMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ConceptMinOrderByAggregateInputSchema).optional()
}).strict();

export const ConceptScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ConceptScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => ConceptScalarWhereWithAggregatesInputSchema),z.lazy(() => ConceptScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ConceptScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ConceptScalarWhereWithAggregatesInputSchema),z.lazy(() => ConceptScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  type: z.union([ z.lazy(() => EnumConceptTypeWithAggregatesFilterSchema),z.lazy(() => ConceptTypeSchema) ]).optional(),
  description: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  userId: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const PredictionWhereInputSchema: z.ZodType<Prisma.PredictionWhereInput> = z.object({
  AND: z.union([ z.lazy(() => PredictionWhereInputSchema),z.lazy(() => PredictionWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PredictionWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PredictionWhereInputSchema),z.lazy(() => PredictionWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  uuid: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  input: z.lazy(() => JsonNullableFilterSchema).optional(),
  output: z.lazy(() => JsonNullableFilterSchema).optional(),
  status: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  created_at: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  started_at: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  completed_at: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  version: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  metrics: z.lazy(() => JsonNullableFilterSchema).optional(),
  error: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  logs: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const PredictionOrderByWithRelationInputSchema: z.ZodType<Prisma.PredictionOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  uuid: z.lazy(() => SortOrderSchema).optional(),
  input: z.lazy(() => SortOrderSchema).optional(),
  output: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  started_at: z.lazy(() => SortOrderSchema).optional(),
  completed_at: z.lazy(() => SortOrderSchema).optional(),
  version: z.lazy(() => SortOrderSchema).optional(),
  metrics: z.lazy(() => SortOrderSchema).optional(),
  error: z.lazy(() => SortOrderSchema).optional(),
  logs: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PredictionWhereUniqueInputSchema: z.ZodType<Prisma.PredictionWhereUniqueInput> = z.object({
  id: z.string().cuid().optional(),
  uuid: z.string().optional()
}).strict();

export const PredictionOrderByWithAggregationInputSchema: z.ZodType<Prisma.PredictionOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  uuid: z.lazy(() => SortOrderSchema).optional(),
  input: z.lazy(() => SortOrderSchema).optional(),
  output: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  started_at: z.lazy(() => SortOrderSchema).optional(),
  completed_at: z.lazy(() => SortOrderSchema).optional(),
  version: z.lazy(() => SortOrderSchema).optional(),
  metrics: z.lazy(() => SortOrderSchema).optional(),
  error: z.lazy(() => SortOrderSchema).optional(),
  logs: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => PredictionCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => PredictionMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => PredictionMinOrderByAggregateInputSchema).optional()
}).strict();

export const PredictionScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.PredictionScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => PredictionScalarWhereWithAggregatesInputSchema),z.lazy(() => PredictionScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => PredictionScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PredictionScalarWhereWithAggregatesInputSchema),z.lazy(() => PredictionScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  uuid: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  input: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
  output: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
  status: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  created_at: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  started_at: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  completed_at: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  version: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  metrics: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
  error: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  logs: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const CloudFileCreateInputSchema: z.ZodType<Prisma.CloudFileCreateInput> = z.object({
  id: z.string().cuid().optional(),
  resourceType: z.lazy(() => FileResourceTypeSchema),
  filename: z.string(),
  size: z.number().positive(),
  ext: z.string(),
  mime: z.string(),
  metadata: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValue ]).optional(),
  path: z.string(),
  signature: z.string(),
  privacy: z.lazy(() => FilePrivacySchema).optional(),
  createdAt: z.coerce.date().optional(),
  Photo: z.lazy(() => PhotoCreateNestedOneWithoutFileInputSchema).optional(),
  PDF: z.lazy(() => PDFCreateNestedOneWithoutFileInputSchema).optional()
}).strict();

export const CloudFileUncheckedCreateInputSchema: z.ZodType<Prisma.CloudFileUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  resourceType: z.lazy(() => FileResourceTypeSchema),
  filename: z.string(),
  size: z.number().positive(),
  ext: z.string(),
  mime: z.string(),
  metadata: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValue ]).optional(),
  path: z.string(),
  signature: z.string(),
  privacy: z.lazy(() => FilePrivacySchema).optional(),
  createdAt: z.coerce.date().optional(),
  Photo: z.lazy(() => PhotoUncheckedCreateNestedOneWithoutFileInputSchema).optional(),
  PDF: z.lazy(() => PDFUncheckedCreateNestedOneWithoutFileInputSchema).optional()
}).strict();

export const CloudFileUpdateInputSchema: z.ZodType<Prisma.CloudFileUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  resourceType: z.union([ z.lazy(() => FileResourceTypeSchema),z.lazy(() => EnumFileResourceTypeFieldUpdateOperationsInputSchema) ]).optional(),
  filename: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  size: z.union([ z.number().positive(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  ext: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  mime: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  metadata: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValue ]).optional(),
  path: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  signature: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  privacy: z.union([ z.lazy(() => FilePrivacySchema),z.lazy(() => EnumFilePrivacyFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  Photo: z.lazy(() => PhotoUpdateOneWithoutFileNestedInputSchema).optional(),
  PDF: z.lazy(() => PDFUpdateOneWithoutFileNestedInputSchema).optional()
}).strict();

export const CloudFileUncheckedUpdateInputSchema: z.ZodType<Prisma.CloudFileUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  resourceType: z.union([ z.lazy(() => FileResourceTypeSchema),z.lazy(() => EnumFileResourceTypeFieldUpdateOperationsInputSchema) ]).optional(),
  filename: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  size: z.union([ z.number().positive(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  ext: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  mime: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  metadata: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValue ]).optional(),
  path: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  signature: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  privacy: z.union([ z.lazy(() => FilePrivacySchema),z.lazy(() => EnumFilePrivacyFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  Photo: z.lazy(() => PhotoUncheckedUpdateOneWithoutFileNestedInputSchema).optional(),
  PDF: z.lazy(() => PDFUncheckedUpdateOneWithoutFileNestedInputSchema).optional()
}).strict();

export const CloudFileCreateManyInputSchema: z.ZodType<Prisma.CloudFileCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  resourceType: z.lazy(() => FileResourceTypeSchema),
  filename: z.string(),
  size: z.number().positive(),
  ext: z.string(),
  mime: z.string(),
  metadata: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValue ]).optional(),
  path: z.string(),
  signature: z.string(),
  privacy: z.lazy(() => FilePrivacySchema).optional(),
  createdAt: z.coerce.date().optional()
}).strict();

export const CloudFileUpdateManyMutationInputSchema: z.ZodType<Prisma.CloudFileUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  resourceType: z.union([ z.lazy(() => FileResourceTypeSchema),z.lazy(() => EnumFileResourceTypeFieldUpdateOperationsInputSchema) ]).optional(),
  filename: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  size: z.union([ z.number().positive(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  ext: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  mime: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  metadata: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValue ]).optional(),
  path: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  signature: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  privacy: z.union([ z.lazy(() => FilePrivacySchema),z.lazy(() => EnumFilePrivacyFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CloudFileUncheckedUpdateManyInputSchema: z.ZodType<Prisma.CloudFileUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  resourceType: z.union([ z.lazy(() => FileResourceTypeSchema),z.lazy(() => EnumFileResourceTypeFieldUpdateOperationsInputSchema) ]).optional(),
  filename: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  size: z.union([ z.number().positive(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  ext: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  mime: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  metadata: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValue ]).optional(),
  path: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  signature: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  privacy: z.union([ z.lazy(() => FilePrivacySchema),z.lazy(() => EnumFilePrivacyFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const PhotoCreateInputSchema: z.ZodType<Prisma.PhotoCreateInput> = z.object({
  id: z.string().cuid().optional(),
  height: z.number().positive(),
  width: z.number().positive(),
  tags: z.union([ z.lazy(() => PhotoCreatetagsInputSchema),z.string().array() ]).optional(),
  createdAt: z.coerce.date().optional(),
  file: z.lazy(() => CloudFileCreateNestedOneWithoutPhotoInputSchema),
  pageArtworks: z.lazy(() => PageArtworkCreateNestedManyWithoutPhotoInputSchema).optional(),
  concepts: z.lazy(() => ConceptCreateNestedManyWithoutPhotosInputSchema).optional()
}).strict();

export const PhotoUncheckedCreateInputSchema: z.ZodType<Prisma.PhotoUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  height: z.number().positive(),
  width: z.number().positive(),
  tags: z.union([ z.lazy(() => PhotoCreatetagsInputSchema),z.string().array() ]).optional(),
  createdAt: z.coerce.date().optional(),
  fileId: z.string().cuid(),
  pageArtworks: z.lazy(() => PageArtworkUncheckedCreateNestedManyWithoutPhotoInputSchema).optional(),
  concepts: z.lazy(() => ConceptUncheckedCreateNestedManyWithoutPhotosInputSchema).optional()
}).strict();

export const PhotoUpdateInputSchema: z.ZodType<Prisma.PhotoUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  height: z.union([ z.number().positive(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  width: z.union([ z.number().positive(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  tags: z.union([ z.lazy(() => PhotoUpdatetagsInputSchema),z.string().array() ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  file: z.lazy(() => CloudFileUpdateOneRequiredWithoutPhotoNestedInputSchema).optional(),
  pageArtworks: z.lazy(() => PageArtworkUpdateManyWithoutPhotoNestedInputSchema).optional(),
  concepts: z.lazy(() => ConceptUpdateManyWithoutPhotosNestedInputSchema).optional()
}).strict();

export const PhotoUncheckedUpdateInputSchema: z.ZodType<Prisma.PhotoUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  height: z.union([ z.number().positive(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  width: z.union([ z.number().positive(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  tags: z.union([ z.lazy(() => PhotoUpdatetagsInputSchema),z.string().array() ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  fileId: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  pageArtworks: z.lazy(() => PageArtworkUncheckedUpdateManyWithoutPhotoNestedInputSchema).optional(),
  concepts: z.lazy(() => ConceptUncheckedUpdateManyWithoutPhotosNestedInputSchema).optional()
}).strict();

export const PhotoCreateManyInputSchema: z.ZodType<Prisma.PhotoCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  height: z.number().positive(),
  width: z.number().positive(),
  tags: z.union([ z.lazy(() => PhotoCreatetagsInputSchema),z.string().array() ]).optional(),
  createdAt: z.coerce.date().optional(),
  fileId: z.string().cuid()
}).strict();

export const PhotoUpdateManyMutationInputSchema: z.ZodType<Prisma.PhotoUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  height: z.union([ z.number().positive(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  width: z.union([ z.number().positive(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  tags: z.union([ z.lazy(() => PhotoUpdatetagsInputSchema),z.string().array() ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const PhotoUncheckedUpdateManyInputSchema: z.ZodType<Prisma.PhotoUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  height: z.union([ z.number().positive(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  width: z.union([ z.number().positive(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  tags: z.union([ z.lazy(() => PhotoUpdatetagsInputSchema),z.string().array() ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  fileId: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const PDFCreateInputSchema: z.ZodType<Prisma.PDFCreateInput> = z.object({
  id: z.string().cuid().optional(),
  height: z.number().positive(),
  width: z.number().positive(),
  pages: z.number().positive(),
  tags: z.union([ z.lazy(() => PDFCreatetagsInputSchema),z.string().array() ]).optional(),
  createdAt: z.coerce.date().optional(),
  file: z.lazy(() => CloudFileCreateNestedOneWithoutPDFInputSchema),
  book: z.lazy(() => EditionCreateNestedOneWithoutPdfInputSchema).optional()
}).strict();

export const PDFUncheckedCreateInputSchema: z.ZodType<Prisma.PDFUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  height: z.number().positive(),
  width: z.number().positive(),
  pages: z.number().positive(),
  tags: z.union([ z.lazy(() => PDFCreatetagsInputSchema),z.string().array() ]).optional(),
  createdAt: z.coerce.date().optional(),
  fileId: z.string().cuid(),
  book: z.lazy(() => EditionUncheckedCreateNestedOneWithoutPdfInputSchema).optional()
}).strict();

export const PDFUpdateInputSchema: z.ZodType<Prisma.PDFUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  height: z.union([ z.number().positive(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  width: z.union([ z.number().positive(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  pages: z.union([ z.number().positive(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  tags: z.union([ z.lazy(() => PDFUpdatetagsInputSchema),z.string().array() ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  file: z.lazy(() => CloudFileUpdateOneRequiredWithoutPDFNestedInputSchema).optional(),
  book: z.lazy(() => EditionUpdateOneWithoutPdfNestedInputSchema).optional()
}).strict();

export const PDFUncheckedUpdateInputSchema: z.ZodType<Prisma.PDFUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  height: z.union([ z.number().positive(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  width: z.union([ z.number().positive(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  pages: z.union([ z.number().positive(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  tags: z.union([ z.lazy(() => PDFUpdatetagsInputSchema),z.string().array() ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  fileId: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  book: z.lazy(() => EditionUncheckedUpdateOneWithoutPdfNestedInputSchema).optional()
}).strict();

export const PDFCreateManyInputSchema: z.ZodType<Prisma.PDFCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  height: z.number().positive(),
  width: z.number().positive(),
  pages: z.number().positive(),
  tags: z.union([ z.lazy(() => PDFCreatetagsInputSchema),z.string().array() ]).optional(),
  createdAt: z.coerce.date().optional(),
  fileId: z.string().cuid()
}).strict();

export const PDFUpdateManyMutationInputSchema: z.ZodType<Prisma.PDFUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  height: z.union([ z.number().positive(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  width: z.union([ z.number().positive(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  pages: z.union([ z.number().positive(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  tags: z.union([ z.lazy(() => PDFUpdatetagsInputSchema),z.string().array() ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const PDFUncheckedUpdateManyInputSchema: z.ZodType<Prisma.PDFUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  height: z.union([ z.number().positive(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  width: z.union([ z.number().positive(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  pages: z.union([ z.number().positive(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  tags: z.union([ z.lazy(() => PDFUpdatetagsInputSchema),z.string().array() ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  fileId: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UserCreateInputSchema: z.ZodType<Prisma.UserCreateInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string().min(1).max(160),
  email: z.string().email().min(3).max(160),
  updatedAt: z.coerce.date().optional(),
  createdAt: z.coerce.date().optional(),
  Edition: z.lazy(() => EditionCreateNestedManyWithoutUserInputSchema).optional(),
  Concept: z.lazy(() => ConceptCreateNestedOneWithoutUserInputSchema).optional()
}).strict();

export const UserUncheckedCreateInputSchema: z.ZodType<Prisma.UserUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string().min(1).max(160),
  email: z.string().email().min(3).max(160),
  updatedAt: z.coerce.date().optional(),
  createdAt: z.coerce.date().optional(),
  Edition: z.lazy(() => EditionUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  Concept: z.lazy(() => ConceptUncheckedCreateNestedOneWithoutUserInputSchema).optional()
}).strict();

export const UserUpdateInputSchema: z.ZodType<Prisma.UserUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string().min(1).max(160),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string().email().min(3).max(160),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  Edition: z.lazy(() => EditionUpdateManyWithoutUserNestedInputSchema).optional(),
  Concept: z.lazy(() => ConceptUpdateOneWithoutUserNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateInputSchema: z.ZodType<Prisma.UserUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string().min(1).max(160),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string().email().min(3).max(160),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  Edition: z.lazy(() => EditionUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  Concept: z.lazy(() => ConceptUncheckedUpdateOneWithoutUserNestedInputSchema).optional()
}).strict();

export const UserCreateManyInputSchema: z.ZodType<Prisma.UserCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string().min(1).max(160),
  email: z.string().email().min(3).max(160),
  updatedAt: z.coerce.date().optional(),
  createdAt: z.coerce.date().optional()
}).strict();

export const UserUpdateManyMutationInputSchema: z.ZodType<Prisma.UserUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string().min(1).max(160),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string().email().min(3).max(160),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UserUncheckedUpdateManyInputSchema: z.ZodType<Prisma.UserUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string().min(1).max(160),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string().email().min(3).max(160),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const AuthorCreateInputSchema: z.ZodType<Prisma.AuthorCreateInput> = z.object({
  id: z.string().cuid().optional(),
  stories: z.lazy(() => StoryCreateNestedManyWithoutAuthorInputSchema).optional(),
  pageTexts: z.lazy(() => PageTextCreateNestedManyWithoutAuthorInputSchema).optional()
}).strict();

export const AuthorUncheckedCreateInputSchema: z.ZodType<Prisma.AuthorUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  stories: z.lazy(() => StoryUncheckedCreateNestedManyWithoutAuthorInputSchema).optional(),
  pageTexts: z.lazy(() => PageTextUncheckedCreateNestedManyWithoutAuthorInputSchema).optional()
}).strict();

export const AuthorUpdateInputSchema: z.ZodType<Prisma.AuthorUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  stories: z.lazy(() => StoryUpdateManyWithoutAuthorNestedInputSchema).optional(),
  pageTexts: z.lazy(() => PageTextUpdateManyWithoutAuthorNestedInputSchema).optional()
}).strict();

export const AuthorUncheckedUpdateInputSchema: z.ZodType<Prisma.AuthorUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  stories: z.lazy(() => StoryUncheckedUpdateManyWithoutAuthorNestedInputSchema).optional(),
  pageTexts: z.lazy(() => PageTextUncheckedUpdateManyWithoutAuthorNestedInputSchema).optional()
}).strict();

export const AuthorCreateManyInputSchema: z.ZodType<Prisma.AuthorCreateManyInput> = z.object({
  id: z.string().cuid().optional()
}).strict();

export const AuthorUpdateManyMutationInputSchema: z.ZodType<Prisma.AuthorUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const AuthorUncheckedUpdateManyInputSchema: z.ZodType<Prisma.AuthorUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ArtistCreateInputSchema: z.ZodType<Prisma.ArtistCreateInput> = z.object({
  id: z.string().cuid().optional(),
  stories: z.lazy(() => StoryCreateNestedManyWithoutArtistInputSchema).optional(),
  pageArtworks: z.lazy(() => PageArtworkCreateNestedManyWithoutArtistInputSchema).optional()
}).strict();

export const ArtistUncheckedCreateInputSchema: z.ZodType<Prisma.ArtistUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  stories: z.lazy(() => StoryUncheckedCreateNestedManyWithoutArtistInputSchema).optional(),
  pageArtworks: z.lazy(() => PageArtworkUncheckedCreateNestedManyWithoutArtistInputSchema).optional()
}).strict();

export const ArtistUpdateInputSchema: z.ZodType<Prisma.ArtistUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  stories: z.lazy(() => StoryUpdateManyWithoutArtistNestedInputSchema).optional(),
  pageArtworks: z.lazy(() => PageArtworkUpdateManyWithoutArtistNestedInputSchema).optional()
}).strict();

export const ArtistUncheckedUpdateInputSchema: z.ZodType<Prisma.ArtistUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  stories: z.lazy(() => StoryUncheckedUpdateManyWithoutArtistNestedInputSchema).optional(),
  pageArtworks: z.lazy(() => PageArtworkUncheckedUpdateManyWithoutArtistNestedInputSchema).optional()
}).strict();

export const ArtistCreateManyInputSchema: z.ZodType<Prisma.ArtistCreateManyInput> = z.object({
  id: z.string().cuid().optional()
}).strict();

export const ArtistUpdateManyMutationInputSchema: z.ZodType<Prisma.ArtistUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ArtistUncheckedUpdateManyInputSchema: z.ZodType<Prisma.ArtistUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TranslatorCreateInputSchema: z.ZodType<Prisma.TranslatorCreateInput> = z.object({
  id: z.string().cuid().optional(),
  pageTexts: z.lazy(() => PageTextCreateNestedManyWithoutTranslatorInputSchema).optional()
}).strict();

export const TranslatorUncheckedCreateInputSchema: z.ZodType<Prisma.TranslatorUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  pageTexts: z.lazy(() => PageTextUncheckedCreateNestedManyWithoutTranslatorInputSchema).optional()
}).strict();

export const TranslatorUpdateInputSchema: z.ZodType<Prisma.TranslatorUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  pageTexts: z.lazy(() => PageTextUpdateManyWithoutTranslatorNestedInputSchema).optional()
}).strict();

export const TranslatorUncheckedUpdateInputSchema: z.ZodType<Prisma.TranslatorUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  pageTexts: z.lazy(() => PageTextUncheckedUpdateManyWithoutTranslatorNestedInputSchema).optional()
}).strict();

export const TranslatorCreateManyInputSchema: z.ZodType<Prisma.TranslatorCreateManyInput> = z.object({
  id: z.string().cuid().optional()
}).strict();

export const TranslatorUpdateManyMutationInputSchema: z.ZodType<Prisma.TranslatorUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TranslatorUncheckedUpdateManyInputSchema: z.ZodType<Prisma.TranslatorUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const StoryCreateInputSchema: z.ZodType<Prisma.StoryCreateInput> = z.object({
  id: z.string().cuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  artist: z.lazy(() => ArtistCreateNestedOneWithoutStoriesInputSchema).optional(),
  author: z.lazy(() => AuthorCreateNestedOneWithoutStoriesInputSchema).optional(),
  pages: z.lazy(() => PageCreateNestedManyWithoutStoryInputSchema).optional(),
  pageArtworks: z.lazy(() => PageArtworkCreateNestedManyWithoutStoryInputSchema).optional(),
  pageTexts: z.lazy(() => PageTextCreateNestedManyWithoutStoryInputSchema).optional()
}).strict();

export const StoryUncheckedCreateInputSchema: z.ZodType<Prisma.StoryUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  artistId: z.string().cuid().optional().nullable(),
  authorId: z.string().cuid().optional().nullable(),
  pages: z.lazy(() => PageUncheckedCreateNestedManyWithoutStoryInputSchema).optional(),
  pageArtworks: z.lazy(() => PageArtworkUncheckedCreateNestedManyWithoutStoryInputSchema).optional(),
  pageTexts: z.lazy(() => PageTextUncheckedCreateNestedManyWithoutStoryInputSchema).optional()
}).strict();

export const StoryUpdateInputSchema: z.ZodType<Prisma.StoryUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  artist: z.lazy(() => ArtistUpdateOneWithoutStoriesNestedInputSchema).optional(),
  author: z.lazy(() => AuthorUpdateOneWithoutStoriesNestedInputSchema).optional(),
  pages: z.lazy(() => PageUpdateManyWithoutStoryNestedInputSchema).optional(),
  pageArtworks: z.lazy(() => PageArtworkUpdateManyWithoutStoryNestedInputSchema).optional(),
  pageTexts: z.lazy(() => PageTextUpdateManyWithoutStoryNestedInputSchema).optional()
}).strict();

export const StoryUncheckedUpdateInputSchema: z.ZodType<Prisma.StoryUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  artistId: z.union([ z.string().cuid(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  authorId: z.union([ z.string().cuid(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  pages: z.lazy(() => PageUncheckedUpdateManyWithoutStoryNestedInputSchema).optional(),
  pageArtworks: z.lazy(() => PageArtworkUncheckedUpdateManyWithoutStoryNestedInputSchema).optional(),
  pageTexts: z.lazy(() => PageTextUncheckedUpdateManyWithoutStoryNestedInputSchema).optional()
}).strict();

export const StoryCreateManyInputSchema: z.ZodType<Prisma.StoryCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  artistId: z.string().cuid().optional().nullable(),
  authorId: z.string().cuid().optional().nullable()
}).strict();

export const StoryUpdateManyMutationInputSchema: z.ZodType<Prisma.StoryUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const StoryUncheckedUpdateManyInputSchema: z.ZodType<Prisma.StoryUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  artistId: z.union([ z.string().cuid(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  authorId: z.union([ z.string().cuid(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const PageArtworkCreateInputSchema: z.ZodType<Prisma.PageArtworkCreateInput> = z.object({
  id: z.string().cuid().optional(),
  status: z.lazy(() => PageStatusSchema).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  page: z.lazy(() => PageCreateNestedOneWithoutArtworksInputSchema),
  story: z.lazy(() => StoryCreateNestedOneWithoutPageArtworksInputSchema),
  artist: z.lazy(() => ArtistCreateNestedOneWithoutPageArtworksInputSchema),
  photo: z.lazy(() => PhotoCreateNestedOneWithoutPageArtworksInputSchema)
}).strict();

export const PageArtworkUncheckedCreateInputSchema: z.ZodType<Prisma.PageArtworkUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  status: z.lazy(() => PageStatusSchema).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  pageId: z.string().cuid(),
  storyId: z.string().cuid(),
  artistId: z.string().cuid(),
  photoId: z.string().cuid()
}).strict();

export const PageArtworkUpdateInputSchema: z.ZodType<Prisma.PageArtworkUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => PageStatusSchema),z.lazy(() => EnumPageStatusFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  page: z.lazy(() => PageUpdateOneRequiredWithoutArtworksNestedInputSchema).optional(),
  story: z.lazy(() => StoryUpdateOneRequiredWithoutPageArtworksNestedInputSchema).optional(),
  artist: z.lazy(() => ArtistUpdateOneRequiredWithoutPageArtworksNestedInputSchema).optional(),
  photo: z.lazy(() => PhotoUpdateOneRequiredWithoutPageArtworksNestedInputSchema).optional()
}).strict();

export const PageArtworkUncheckedUpdateInputSchema: z.ZodType<Prisma.PageArtworkUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => PageStatusSchema),z.lazy(() => EnumPageStatusFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  pageId: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  storyId: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  artistId: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  photoId: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const PageArtworkCreateManyInputSchema: z.ZodType<Prisma.PageArtworkCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  status: z.lazy(() => PageStatusSchema).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  pageId: z.string().cuid(),
  storyId: z.string().cuid(),
  artistId: z.string().cuid(),
  photoId: z.string().cuid()
}).strict();

export const PageArtworkUpdateManyMutationInputSchema: z.ZodType<Prisma.PageArtworkUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => PageStatusSchema),z.lazy(() => EnumPageStatusFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const PageArtworkUncheckedUpdateManyInputSchema: z.ZodType<Prisma.PageArtworkUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => PageStatusSchema),z.lazy(() => EnumPageStatusFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  pageId: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  storyId: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  artistId: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  photoId: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const PageTextCreateInputSchema: z.ZodType<Prisma.PageTextCreateInput> = z.object({
  id: z.string().cuid().optional(),
  status: z.lazy(() => PageStatusSchema).optional(),
  locale: z.lazy(() => LocaleSchema),
  text: z.string().min(1).max(5000),
  type: z.lazy(() => PageTextTypeSchema),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  page: z.lazy(() => PageCreateNestedOneWithoutTextsInputSchema),
  story: z.lazy(() => StoryCreateNestedOneWithoutPageTextsInputSchema),
  author: z.lazy(() => AuthorCreateNestedOneWithoutPageTextsInputSchema).optional(),
  translator: z.lazy(() => TranslatorCreateNestedOneWithoutPageTextsInputSchema).optional()
}).strict();

export const PageTextUncheckedCreateInputSchema: z.ZodType<Prisma.PageTextUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  status: z.lazy(() => PageStatusSchema).optional(),
  locale: z.lazy(() => LocaleSchema),
  text: z.string().min(1).max(5000),
  type: z.lazy(() => PageTextTypeSchema),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  pageId: z.string().cuid(),
  storyId: z.string().cuid(),
  authorId: z.string().cuid().optional().nullable(),
  translatorId: z.string().cuid().optional().nullable()
}).strict();

export const PageTextUpdateInputSchema: z.ZodType<Prisma.PageTextUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => PageStatusSchema),z.lazy(() => EnumPageStatusFieldUpdateOperationsInputSchema) ]).optional(),
  locale: z.union([ z.lazy(() => LocaleSchema),z.lazy(() => EnumLocaleFieldUpdateOperationsInputSchema) ]).optional(),
  text: z.union([ z.string().min(1).max(5000),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => PageTextTypeSchema),z.lazy(() => EnumPageTextTypeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  page: z.lazy(() => PageUpdateOneRequiredWithoutTextsNestedInputSchema).optional(),
  story: z.lazy(() => StoryUpdateOneRequiredWithoutPageTextsNestedInputSchema).optional(),
  author: z.lazy(() => AuthorUpdateOneWithoutPageTextsNestedInputSchema).optional(),
  translator: z.lazy(() => TranslatorUpdateOneWithoutPageTextsNestedInputSchema).optional()
}).strict();

export const PageTextUncheckedUpdateInputSchema: z.ZodType<Prisma.PageTextUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => PageStatusSchema),z.lazy(() => EnumPageStatusFieldUpdateOperationsInputSchema) ]).optional(),
  locale: z.union([ z.lazy(() => LocaleSchema),z.lazy(() => EnumLocaleFieldUpdateOperationsInputSchema) ]).optional(),
  text: z.union([ z.string().min(1).max(5000),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => PageTextTypeSchema),z.lazy(() => EnumPageTextTypeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  pageId: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  storyId: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  authorId: z.union([ z.string().cuid(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  translatorId: z.union([ z.string().cuid(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const PageTextCreateManyInputSchema: z.ZodType<Prisma.PageTextCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  status: z.lazy(() => PageStatusSchema).optional(),
  locale: z.lazy(() => LocaleSchema),
  text: z.string().min(1).max(5000),
  type: z.lazy(() => PageTextTypeSchema),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  pageId: z.string().cuid(),
  storyId: z.string().cuid(),
  authorId: z.string().cuid().optional().nullable(),
  translatorId: z.string().cuid().optional().nullable()
}).strict();

export const PageTextUpdateManyMutationInputSchema: z.ZodType<Prisma.PageTextUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => PageStatusSchema),z.lazy(() => EnumPageStatusFieldUpdateOperationsInputSchema) ]).optional(),
  locale: z.union([ z.lazy(() => LocaleSchema),z.lazy(() => EnumLocaleFieldUpdateOperationsInputSchema) ]).optional(),
  text: z.union([ z.string().min(1).max(5000),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => PageTextTypeSchema),z.lazy(() => EnumPageTextTypeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const PageTextUncheckedUpdateManyInputSchema: z.ZodType<Prisma.PageTextUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => PageStatusSchema),z.lazy(() => EnumPageStatusFieldUpdateOperationsInputSchema) ]).optional(),
  locale: z.union([ z.lazy(() => LocaleSchema),z.lazy(() => EnumLocaleFieldUpdateOperationsInputSchema) ]).optional(),
  text: z.union([ z.string().min(1).max(5000),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => PageTextTypeSchema),z.lazy(() => EnumPageTextTypeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  pageId: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  storyId: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  authorId: z.union([ z.string().cuid(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  translatorId: z.union([ z.string().cuid(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const PageCreateInputSchema: z.ZodType<Prisma.PageCreateInput> = z.object({
  id: z.string().cuid().optional(),
  status: z.lazy(() => PageStatusSchema).optional(),
  type: z.lazy(() => PageTypeSchema),
  pageNumber: z.number().gte(1).lte(100),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  story: z.lazy(() => StoryCreateNestedOneWithoutPagesInputSchema),
  artworks: z.lazy(() => PageArtworkCreateNestedManyWithoutPageInputSchema).optional(),
  texts: z.lazy(() => PageTextCreateNestedManyWithoutPageInputSchema).optional()
}).strict();

export const PageUncheckedCreateInputSchema: z.ZodType<Prisma.PageUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  status: z.lazy(() => PageStatusSchema).optional(),
  type: z.lazy(() => PageTypeSchema),
  pageNumber: z.number().gte(1).lte(100),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  storyId: z.string().cuid(),
  artworks: z.lazy(() => PageArtworkUncheckedCreateNestedManyWithoutPageInputSchema).optional(),
  texts: z.lazy(() => PageTextUncheckedCreateNestedManyWithoutPageInputSchema).optional()
}).strict();

export const PageUpdateInputSchema: z.ZodType<Prisma.PageUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => PageStatusSchema),z.lazy(() => EnumPageStatusFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => PageTypeSchema),z.lazy(() => EnumPageTypeFieldUpdateOperationsInputSchema) ]).optional(),
  pageNumber: z.union([ z.number().gte(1).lte(100),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  story: z.lazy(() => StoryUpdateOneRequiredWithoutPagesNestedInputSchema).optional(),
  artworks: z.lazy(() => PageArtworkUpdateManyWithoutPageNestedInputSchema).optional(),
  texts: z.lazy(() => PageTextUpdateManyWithoutPageNestedInputSchema).optional()
}).strict();

export const PageUncheckedUpdateInputSchema: z.ZodType<Prisma.PageUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => PageStatusSchema),z.lazy(() => EnumPageStatusFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => PageTypeSchema),z.lazy(() => EnumPageTypeFieldUpdateOperationsInputSchema) ]).optional(),
  pageNumber: z.union([ z.number().gte(1).lte(100),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  storyId: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  artworks: z.lazy(() => PageArtworkUncheckedUpdateManyWithoutPageNestedInputSchema).optional(),
  texts: z.lazy(() => PageTextUncheckedUpdateManyWithoutPageNestedInputSchema).optional()
}).strict();

export const PageCreateManyInputSchema: z.ZodType<Prisma.PageCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  status: z.lazy(() => PageStatusSchema).optional(),
  type: z.lazy(() => PageTypeSchema),
  pageNumber: z.number().gte(1).lte(100),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  storyId: z.string().cuid()
}).strict();

export const PageUpdateManyMutationInputSchema: z.ZodType<Prisma.PageUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => PageStatusSchema),z.lazy(() => EnumPageStatusFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => PageTypeSchema),z.lazy(() => EnumPageTypeFieldUpdateOperationsInputSchema) ]).optional(),
  pageNumber: z.union([ z.number().gte(1).lte(100),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const PageUncheckedUpdateManyInputSchema: z.ZodType<Prisma.PageUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => PageStatusSchema),z.lazy(() => EnumPageStatusFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => PageTypeSchema),z.lazy(() => EnumPageTypeFieldUpdateOperationsInputSchema) ]).optional(),
  pageNumber: z.union([ z.number().gte(1).lte(100),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  storyId: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const EditionCreateInputSchema: z.ZodType<Prisma.EditionCreateInput> = z.object({
  id: z.string().cuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutEditionInputSchema),
  pdf: z.lazy(() => PDFCreateNestedOneWithoutBookInputSchema)
}).strict();

export const EditionUncheckedCreateInputSchema: z.ZodType<Prisma.EditionUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  userId: z.string().cuid(),
  pdfId: z.string().cuid()
}).strict();

export const EditionUpdateInputSchema: z.ZodType<Prisma.EditionUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutEditionNestedInputSchema).optional(),
  pdf: z.lazy(() => PDFUpdateOneRequiredWithoutBookNestedInputSchema).optional()
}).strict();

export const EditionUncheckedUpdateInputSchema: z.ZodType<Prisma.EditionUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  pdfId: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const EditionCreateManyInputSchema: z.ZodType<Prisma.EditionCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  userId: z.string().cuid(),
  pdfId: z.string().cuid()
}).strict();

export const EditionUpdateManyMutationInputSchema: z.ZodType<Prisma.EditionUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const EditionUncheckedUpdateManyInputSchema: z.ZodType<Prisma.EditionUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  pdfId: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ConceptCreateInputSchema: z.ZodType<Prisma.ConceptCreateInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string().min(1),
  type: z.lazy(() => ConceptTypeSchema),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutConceptInputSchema).optional(),
  photos: z.lazy(() => PhotoCreateNestedManyWithoutConceptsInputSchema).optional()
}).strict();

export const ConceptUncheckedCreateInputSchema: z.ZodType<Prisma.ConceptUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string().min(1),
  type: z.lazy(() => ConceptTypeSchema),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  userId: z.string().cuid().optional().nullable(),
  photos: z.lazy(() => PhotoUncheckedCreateNestedManyWithoutConceptsInputSchema).optional()
}).strict();

export const ConceptUpdateInputSchema: z.ZodType<Prisma.ConceptUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string().min(1),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => ConceptTypeSchema),z.lazy(() => EnumConceptTypeFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneWithoutConceptNestedInputSchema).optional(),
  photos: z.lazy(() => PhotoUpdateManyWithoutConceptsNestedInputSchema).optional()
}).strict();

export const ConceptUncheckedUpdateInputSchema: z.ZodType<Prisma.ConceptUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string().min(1),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => ConceptTypeSchema),z.lazy(() => EnumConceptTypeFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string().cuid(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  photos: z.lazy(() => PhotoUncheckedUpdateManyWithoutConceptsNestedInputSchema).optional()
}).strict();

export const ConceptCreateManyInputSchema: z.ZodType<Prisma.ConceptCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string().min(1),
  type: z.lazy(() => ConceptTypeSchema),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  userId: z.string().cuid().optional().nullable()
}).strict();

export const ConceptUpdateManyMutationInputSchema: z.ZodType<Prisma.ConceptUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string().min(1),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => ConceptTypeSchema),z.lazy(() => EnumConceptTypeFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ConceptUncheckedUpdateManyInputSchema: z.ZodType<Prisma.ConceptUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string().min(1),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => ConceptTypeSchema),z.lazy(() => EnumConceptTypeFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string().cuid(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const PredictionCreateInputSchema: z.ZodType<Prisma.PredictionCreateInput> = z.object({
  id: z.string().cuid().optional(),
  uuid: z.string(),
  input: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValue ]).optional(),
  output: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValue ]).optional(),
  status: z.string().optional().nullable(),
  created_at: z.coerce.date().optional().nullable(),
  started_at: z.coerce.date().optional().nullable(),
  completed_at: z.coerce.date().optional().nullable(),
  version: z.string().optional().nullable(),
  metrics: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValue ]).optional(),
  error: z.string().optional().nullable(),
  logs: z.string().optional().nullable()
}).strict();

export const PredictionUncheckedCreateInputSchema: z.ZodType<Prisma.PredictionUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  uuid: z.string(),
  input: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValue ]).optional(),
  output: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValue ]).optional(),
  status: z.string().optional().nullable(),
  created_at: z.coerce.date().optional().nullable(),
  started_at: z.coerce.date().optional().nullable(),
  completed_at: z.coerce.date().optional().nullable(),
  version: z.string().optional().nullable(),
  metrics: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValue ]).optional(),
  error: z.string().optional().nullable(),
  logs: z.string().optional().nullable()
}).strict();

export const PredictionUpdateInputSchema: z.ZodType<Prisma.PredictionUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  uuid: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  input: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValue ]).optional(),
  output: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValue ]).optional(),
  status: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  started_at: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  completed_at: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  version: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  metrics: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValue ]).optional(),
  error: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  logs: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const PredictionUncheckedUpdateInputSchema: z.ZodType<Prisma.PredictionUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  uuid: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  input: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValue ]).optional(),
  output: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValue ]).optional(),
  status: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  started_at: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  completed_at: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  version: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  metrics: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValue ]).optional(),
  error: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  logs: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const PredictionCreateManyInputSchema: z.ZodType<Prisma.PredictionCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  uuid: z.string(),
  input: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValue ]).optional(),
  output: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValue ]).optional(),
  status: z.string().optional().nullable(),
  created_at: z.coerce.date().optional().nullable(),
  started_at: z.coerce.date().optional().nullable(),
  completed_at: z.coerce.date().optional().nullable(),
  version: z.string().optional().nullable(),
  metrics: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValue ]).optional(),
  error: z.string().optional().nullable(),
  logs: z.string().optional().nullable()
}).strict();

export const PredictionUpdateManyMutationInputSchema: z.ZodType<Prisma.PredictionUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  uuid: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  input: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValue ]).optional(),
  output: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValue ]).optional(),
  status: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  started_at: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  completed_at: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  version: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  metrics: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValue ]).optional(),
  error: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  logs: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const PredictionUncheckedUpdateManyInputSchema: z.ZodType<Prisma.PredictionUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  uuid: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  input: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValue ]).optional(),
  output: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValue ]).optional(),
  status: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  started_at: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  completed_at: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  version: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  metrics: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValue ]).optional(),
  error: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  logs: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const StringFilterSchema: z.ZodType<Prisma.StringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const EnumFileResourceTypeFilterSchema: z.ZodType<Prisma.EnumFileResourceTypeFilter> = z.object({
  equals: z.lazy(() => FileResourceTypeSchema).optional(),
  in: z.lazy(() => FileResourceTypeSchema).array().optional(),
  notIn: z.lazy(() => FileResourceTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => FileResourceTypeSchema),z.lazy(() => NestedEnumFileResourceTypeFilterSchema) ]).optional(),
}).strict();

export const IntFilterSchema: z.ZodType<Prisma.IntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const JsonNullableFilterSchema: z.ZodType<Prisma.JsonNullableFilter> = z.object({
  equals: z.union([ InputJsonValue,z.lazy(() => JsonNullValueFilterSchema) ]).optional(),
  path: z.string().array().optional(),
  string_contains: z.string().optional(),
  string_starts_with: z.string().optional(),
  string_ends_with: z.string().optional(),
  array_contains: InputJsonValue.optional().nullable(),
  array_starts_with: InputJsonValue.optional().nullable(),
  array_ends_with: InputJsonValue.optional().nullable(),
  lt: InputJsonValue.optional(),
  lte: InputJsonValue.optional(),
  gt: InputJsonValue.optional(),
  gte: InputJsonValue.optional(),
  not: z.union([ InputJsonValue,z.lazy(() => JsonNullValueFilterSchema) ]).optional(),
}).strict();

export const EnumFilePrivacyFilterSchema: z.ZodType<Prisma.EnumFilePrivacyFilter> = z.object({
  equals: z.lazy(() => FilePrivacySchema).optional(),
  in: z.lazy(() => FilePrivacySchema).array().optional(),
  notIn: z.lazy(() => FilePrivacySchema).array().optional(),
  not: z.union([ z.lazy(() => FilePrivacySchema),z.lazy(() => NestedEnumFilePrivacyFilterSchema) ]).optional(),
}).strict();

export const DateTimeFilterSchema: z.ZodType<Prisma.DateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict();

export const PhotoRelationFilterSchema: z.ZodType<Prisma.PhotoRelationFilter> = z.object({
  is: z.lazy(() => PhotoWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => PhotoWhereInputSchema).optional().nullable()
}).strict();

export const PDFRelationFilterSchema: z.ZodType<Prisma.PDFRelationFilter> = z.object({
  is: z.lazy(() => PDFWhereInputSchema).optional(),
  isNot: z.lazy(() => PDFWhereInputSchema).optional()
}).strict();

export const CloudFileCountOrderByAggregateInputSchema: z.ZodType<Prisma.CloudFileCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  resourceType: z.lazy(() => SortOrderSchema).optional(),
  filename: z.lazy(() => SortOrderSchema).optional(),
  size: z.lazy(() => SortOrderSchema).optional(),
  ext: z.lazy(() => SortOrderSchema).optional(),
  mime: z.lazy(() => SortOrderSchema).optional(),
  metadata: z.lazy(() => SortOrderSchema).optional(),
  path: z.lazy(() => SortOrderSchema).optional(),
  signature: z.lazy(() => SortOrderSchema).optional(),
  privacy: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CloudFileAvgOrderByAggregateInputSchema: z.ZodType<Prisma.CloudFileAvgOrderByAggregateInput> = z.object({
  size: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CloudFileMaxOrderByAggregateInputSchema: z.ZodType<Prisma.CloudFileMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  resourceType: z.lazy(() => SortOrderSchema).optional(),
  filename: z.lazy(() => SortOrderSchema).optional(),
  size: z.lazy(() => SortOrderSchema).optional(),
  ext: z.lazy(() => SortOrderSchema).optional(),
  mime: z.lazy(() => SortOrderSchema).optional(),
  path: z.lazy(() => SortOrderSchema).optional(),
  signature: z.lazy(() => SortOrderSchema).optional(),
  privacy: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CloudFileMinOrderByAggregateInputSchema: z.ZodType<Prisma.CloudFileMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  resourceType: z.lazy(() => SortOrderSchema).optional(),
  filename: z.lazy(() => SortOrderSchema).optional(),
  size: z.lazy(() => SortOrderSchema).optional(),
  ext: z.lazy(() => SortOrderSchema).optional(),
  mime: z.lazy(() => SortOrderSchema).optional(),
  path: z.lazy(() => SortOrderSchema).optional(),
  signature: z.lazy(() => SortOrderSchema).optional(),
  privacy: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CloudFileSumOrderByAggregateInputSchema: z.ZodType<Prisma.CloudFileSumOrderByAggregateInput> = z.object({
  size: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const StringWithAggregatesFilterSchema: z.ZodType<Prisma.StringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const EnumFileResourceTypeWithAggregatesFilterSchema: z.ZodType<Prisma.EnumFileResourceTypeWithAggregatesFilter> = z.object({
  equals: z.lazy(() => FileResourceTypeSchema).optional(),
  in: z.lazy(() => FileResourceTypeSchema).array().optional(),
  notIn: z.lazy(() => FileResourceTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => FileResourceTypeSchema),z.lazy(() => NestedEnumFileResourceTypeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumFileResourceTypeFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumFileResourceTypeFilterSchema).optional()
}).strict();

export const IntWithAggregatesFilterSchema: z.ZodType<Prisma.IntWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedIntFilterSchema).optional(),
  _max: z.lazy(() => NestedIntFilterSchema).optional()
}).strict();

export const JsonNullableWithAggregatesFilterSchema: z.ZodType<Prisma.JsonNullableWithAggregatesFilter> = z.object({
  equals: z.union([ InputJsonValue,z.lazy(() => JsonNullValueFilterSchema) ]).optional(),
  path: z.string().array().optional(),
  string_contains: z.string().optional(),
  string_starts_with: z.string().optional(),
  string_ends_with: z.string().optional(),
  array_contains: InputJsonValue.optional().nullable(),
  array_starts_with: InputJsonValue.optional().nullable(),
  array_ends_with: InputJsonValue.optional().nullable(),
  lt: InputJsonValue.optional(),
  lte: InputJsonValue.optional(),
  gt: InputJsonValue.optional(),
  gte: InputJsonValue.optional(),
  not: z.union([ InputJsonValue,z.lazy(() => JsonNullValueFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedJsonNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedJsonNullableFilterSchema).optional()
}).strict();

export const EnumFilePrivacyWithAggregatesFilterSchema: z.ZodType<Prisma.EnumFilePrivacyWithAggregatesFilter> = z.object({
  equals: z.lazy(() => FilePrivacySchema).optional(),
  in: z.lazy(() => FilePrivacySchema).array().optional(),
  notIn: z.lazy(() => FilePrivacySchema).array().optional(),
  not: z.union([ z.lazy(() => FilePrivacySchema),z.lazy(() => NestedEnumFilePrivacyWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumFilePrivacyFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumFilePrivacyFilterSchema).optional()
}).strict();

export const DateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.DateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

export const StringNullableListFilterSchema: z.ZodType<Prisma.StringNullableListFilter> = z.object({
  equals: z.string().array().optional().nullable(),
  has: z.string().optional().nullable(),
  hasEvery: z.string().array().optional(),
  hasSome: z.string().array().optional(),
  isEmpty: z.boolean().optional()
}).strict();

export const CloudFileRelationFilterSchema: z.ZodType<Prisma.CloudFileRelationFilter> = z.object({
  is: z.lazy(() => CloudFileWhereInputSchema).optional(),
  isNot: z.lazy(() => CloudFileWhereInputSchema).optional()
}).strict();

export const PageArtworkListRelationFilterSchema: z.ZodType<Prisma.PageArtworkListRelationFilter> = z.object({
  every: z.lazy(() => PageArtworkWhereInputSchema).optional(),
  some: z.lazy(() => PageArtworkWhereInputSchema).optional(),
  none: z.lazy(() => PageArtworkWhereInputSchema).optional()
}).strict();

export const ConceptListRelationFilterSchema: z.ZodType<Prisma.ConceptListRelationFilter> = z.object({
  every: z.lazy(() => ConceptWhereInputSchema).optional(),
  some: z.lazy(() => ConceptWhereInputSchema).optional(),
  none: z.lazy(() => ConceptWhereInputSchema).optional()
}).strict();

export const PageArtworkOrderByRelationAggregateInputSchema: z.ZodType<Prisma.PageArtworkOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ConceptOrderByRelationAggregateInputSchema: z.ZodType<Prisma.ConceptOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PhotoCountOrderByAggregateInputSchema: z.ZodType<Prisma.PhotoCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  height: z.lazy(() => SortOrderSchema).optional(),
  width: z.lazy(() => SortOrderSchema).optional(),
  tags: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  fileId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PhotoAvgOrderByAggregateInputSchema: z.ZodType<Prisma.PhotoAvgOrderByAggregateInput> = z.object({
  height: z.lazy(() => SortOrderSchema).optional(),
  width: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PhotoMaxOrderByAggregateInputSchema: z.ZodType<Prisma.PhotoMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  height: z.lazy(() => SortOrderSchema).optional(),
  width: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  fileId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PhotoMinOrderByAggregateInputSchema: z.ZodType<Prisma.PhotoMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  height: z.lazy(() => SortOrderSchema).optional(),
  width: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  fileId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PhotoSumOrderByAggregateInputSchema: z.ZodType<Prisma.PhotoSumOrderByAggregateInput> = z.object({
  height: z.lazy(() => SortOrderSchema).optional(),
  width: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const EditionRelationFilterSchema: z.ZodType<Prisma.EditionRelationFilter> = z.object({
  is: z.lazy(() => EditionWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => EditionWhereInputSchema).optional().nullable()
}).strict();

export const PDFCountOrderByAggregateInputSchema: z.ZodType<Prisma.PDFCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  height: z.lazy(() => SortOrderSchema).optional(),
  width: z.lazy(() => SortOrderSchema).optional(),
  pages: z.lazy(() => SortOrderSchema).optional(),
  tags: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  fileId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PDFAvgOrderByAggregateInputSchema: z.ZodType<Prisma.PDFAvgOrderByAggregateInput> = z.object({
  height: z.lazy(() => SortOrderSchema).optional(),
  width: z.lazy(() => SortOrderSchema).optional(),
  pages: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PDFMaxOrderByAggregateInputSchema: z.ZodType<Prisma.PDFMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  height: z.lazy(() => SortOrderSchema).optional(),
  width: z.lazy(() => SortOrderSchema).optional(),
  pages: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  fileId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PDFMinOrderByAggregateInputSchema: z.ZodType<Prisma.PDFMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  height: z.lazy(() => SortOrderSchema).optional(),
  width: z.lazy(() => SortOrderSchema).optional(),
  pages: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  fileId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PDFSumOrderByAggregateInputSchema: z.ZodType<Prisma.PDFSumOrderByAggregateInput> = z.object({
  height: z.lazy(() => SortOrderSchema).optional(),
  width: z.lazy(() => SortOrderSchema).optional(),
  pages: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const EditionListRelationFilterSchema: z.ZodType<Prisma.EditionListRelationFilter> = z.object({
  every: z.lazy(() => EditionWhereInputSchema).optional(),
  some: z.lazy(() => EditionWhereInputSchema).optional(),
  none: z.lazy(() => EditionWhereInputSchema).optional()
}).strict();

export const ConceptRelationFilterSchema: z.ZodType<Prisma.ConceptRelationFilter> = z.object({
  is: z.lazy(() => ConceptWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => ConceptWhereInputSchema).optional().nullable()
}).strict();

export const EditionOrderByRelationAggregateInputSchema: z.ZodType<Prisma.EditionOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserCountOrderByAggregateInputSchema: z.ZodType<Prisma.UserCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserMaxOrderByAggregateInputSchema: z.ZodType<Prisma.UserMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserMinOrderByAggregateInputSchema: z.ZodType<Prisma.UserMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const StoryListRelationFilterSchema: z.ZodType<Prisma.StoryListRelationFilter> = z.object({
  every: z.lazy(() => StoryWhereInputSchema).optional(),
  some: z.lazy(() => StoryWhereInputSchema).optional(),
  none: z.lazy(() => StoryWhereInputSchema).optional()
}).strict();

export const PageTextListRelationFilterSchema: z.ZodType<Prisma.PageTextListRelationFilter> = z.object({
  every: z.lazy(() => PageTextWhereInputSchema).optional(),
  some: z.lazy(() => PageTextWhereInputSchema).optional(),
  none: z.lazy(() => PageTextWhereInputSchema).optional()
}).strict();

export const StoryOrderByRelationAggregateInputSchema: z.ZodType<Prisma.StoryOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PageTextOrderByRelationAggregateInputSchema: z.ZodType<Prisma.PageTextOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AuthorCountOrderByAggregateInputSchema: z.ZodType<Prisma.AuthorCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AuthorMaxOrderByAggregateInputSchema: z.ZodType<Prisma.AuthorMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AuthorMinOrderByAggregateInputSchema: z.ZodType<Prisma.AuthorMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ArtistCountOrderByAggregateInputSchema: z.ZodType<Prisma.ArtistCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ArtistMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ArtistMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ArtistMinOrderByAggregateInputSchema: z.ZodType<Prisma.ArtistMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TranslatorCountOrderByAggregateInputSchema: z.ZodType<Prisma.TranslatorCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TranslatorMaxOrderByAggregateInputSchema: z.ZodType<Prisma.TranslatorMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TranslatorMinOrderByAggregateInputSchema: z.ZodType<Prisma.TranslatorMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const StringNullableFilterSchema: z.ZodType<Prisma.StringNullableFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const ArtistRelationFilterSchema: z.ZodType<Prisma.ArtistRelationFilter> = z.object({
  is: z.lazy(() => ArtistWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => ArtistWhereInputSchema).optional().nullable()
}).strict();

export const AuthorRelationFilterSchema: z.ZodType<Prisma.AuthorRelationFilter> = z.object({
  is: z.lazy(() => AuthorWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => AuthorWhereInputSchema).optional().nullable()
}).strict();

export const PageListRelationFilterSchema: z.ZodType<Prisma.PageListRelationFilter> = z.object({
  every: z.lazy(() => PageWhereInputSchema).optional(),
  some: z.lazy(() => PageWhereInputSchema).optional(),
  none: z.lazy(() => PageWhereInputSchema).optional()
}).strict();

export const PageOrderByRelationAggregateInputSchema: z.ZodType<Prisma.PageOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const StoryCountOrderByAggregateInputSchema: z.ZodType<Prisma.StoryCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  artistId: z.lazy(() => SortOrderSchema).optional(),
  authorId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const StoryMaxOrderByAggregateInputSchema: z.ZodType<Prisma.StoryMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  artistId: z.lazy(() => SortOrderSchema).optional(),
  authorId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const StoryMinOrderByAggregateInputSchema: z.ZodType<Prisma.StoryMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  artistId: z.lazy(() => SortOrderSchema).optional(),
  authorId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const StringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.StringNullableWithAggregatesFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional()
}).strict();

export const EnumPageStatusFilterSchema: z.ZodType<Prisma.EnumPageStatusFilter> = z.object({
  equals: z.lazy(() => PageStatusSchema).optional(),
  in: z.lazy(() => PageStatusSchema).array().optional(),
  notIn: z.lazy(() => PageStatusSchema).array().optional(),
  not: z.union([ z.lazy(() => PageStatusSchema),z.lazy(() => NestedEnumPageStatusFilterSchema) ]).optional(),
}).strict();

export const PageRelationFilterSchema: z.ZodType<Prisma.PageRelationFilter> = z.object({
  is: z.lazy(() => PageWhereInputSchema).optional(),
  isNot: z.lazy(() => PageWhereInputSchema).optional()
}).strict();

export const StoryRelationFilterSchema: z.ZodType<Prisma.StoryRelationFilter> = z.object({
  is: z.lazy(() => StoryWhereInputSchema).optional(),
  isNot: z.lazy(() => StoryWhereInputSchema).optional()
}).strict();

export const PageArtworkCountOrderByAggregateInputSchema: z.ZodType<Prisma.PageArtworkCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  pageId: z.lazy(() => SortOrderSchema).optional(),
  storyId: z.lazy(() => SortOrderSchema).optional(),
  artistId: z.lazy(() => SortOrderSchema).optional(),
  photoId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PageArtworkMaxOrderByAggregateInputSchema: z.ZodType<Prisma.PageArtworkMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  pageId: z.lazy(() => SortOrderSchema).optional(),
  storyId: z.lazy(() => SortOrderSchema).optional(),
  artistId: z.lazy(() => SortOrderSchema).optional(),
  photoId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PageArtworkMinOrderByAggregateInputSchema: z.ZodType<Prisma.PageArtworkMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  pageId: z.lazy(() => SortOrderSchema).optional(),
  storyId: z.lazy(() => SortOrderSchema).optional(),
  artistId: z.lazy(() => SortOrderSchema).optional(),
  photoId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const EnumPageStatusWithAggregatesFilterSchema: z.ZodType<Prisma.EnumPageStatusWithAggregatesFilter> = z.object({
  equals: z.lazy(() => PageStatusSchema).optional(),
  in: z.lazy(() => PageStatusSchema).array().optional(),
  notIn: z.lazy(() => PageStatusSchema).array().optional(),
  not: z.union([ z.lazy(() => PageStatusSchema),z.lazy(() => NestedEnumPageStatusWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumPageStatusFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumPageStatusFilterSchema).optional()
}).strict();

export const EnumLocaleFilterSchema: z.ZodType<Prisma.EnumLocaleFilter> = z.object({
  equals: z.lazy(() => LocaleSchema).optional(),
  in: z.lazy(() => LocaleSchema).array().optional(),
  notIn: z.lazy(() => LocaleSchema).array().optional(),
  not: z.union([ z.lazy(() => LocaleSchema),z.lazy(() => NestedEnumLocaleFilterSchema) ]).optional(),
}).strict();

export const EnumPageTextTypeFilterSchema: z.ZodType<Prisma.EnumPageTextTypeFilter> = z.object({
  equals: z.lazy(() => PageTextTypeSchema).optional(),
  in: z.lazy(() => PageTextTypeSchema).array().optional(),
  notIn: z.lazy(() => PageTextTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => PageTextTypeSchema),z.lazy(() => NestedEnumPageTextTypeFilterSchema) ]).optional(),
}).strict();

export const TranslatorRelationFilterSchema: z.ZodType<Prisma.TranslatorRelationFilter> = z.object({
  is: z.lazy(() => TranslatorWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => TranslatorWhereInputSchema).optional().nullable()
}).strict();

export const PageTextCountOrderByAggregateInputSchema: z.ZodType<Prisma.PageTextCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  locale: z.lazy(() => SortOrderSchema).optional(),
  text: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  pageId: z.lazy(() => SortOrderSchema).optional(),
  storyId: z.lazy(() => SortOrderSchema).optional(),
  authorId: z.lazy(() => SortOrderSchema).optional(),
  translatorId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PageTextMaxOrderByAggregateInputSchema: z.ZodType<Prisma.PageTextMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  locale: z.lazy(() => SortOrderSchema).optional(),
  text: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  pageId: z.lazy(() => SortOrderSchema).optional(),
  storyId: z.lazy(() => SortOrderSchema).optional(),
  authorId: z.lazy(() => SortOrderSchema).optional(),
  translatorId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PageTextMinOrderByAggregateInputSchema: z.ZodType<Prisma.PageTextMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  locale: z.lazy(() => SortOrderSchema).optional(),
  text: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  pageId: z.lazy(() => SortOrderSchema).optional(),
  storyId: z.lazy(() => SortOrderSchema).optional(),
  authorId: z.lazy(() => SortOrderSchema).optional(),
  translatorId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const EnumLocaleWithAggregatesFilterSchema: z.ZodType<Prisma.EnumLocaleWithAggregatesFilter> = z.object({
  equals: z.lazy(() => LocaleSchema).optional(),
  in: z.lazy(() => LocaleSchema).array().optional(),
  notIn: z.lazy(() => LocaleSchema).array().optional(),
  not: z.union([ z.lazy(() => LocaleSchema),z.lazy(() => NestedEnumLocaleWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumLocaleFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumLocaleFilterSchema).optional()
}).strict();

export const EnumPageTextTypeWithAggregatesFilterSchema: z.ZodType<Prisma.EnumPageTextTypeWithAggregatesFilter> = z.object({
  equals: z.lazy(() => PageTextTypeSchema).optional(),
  in: z.lazy(() => PageTextTypeSchema).array().optional(),
  notIn: z.lazy(() => PageTextTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => PageTextTypeSchema),z.lazy(() => NestedEnumPageTextTypeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumPageTextTypeFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumPageTextTypeFilterSchema).optional()
}).strict();

export const EnumPageTypeFilterSchema: z.ZodType<Prisma.EnumPageTypeFilter> = z.object({
  equals: z.lazy(() => PageTypeSchema).optional(),
  in: z.lazy(() => PageTypeSchema).array().optional(),
  notIn: z.lazy(() => PageTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => PageTypeSchema),z.lazy(() => NestedEnumPageTypeFilterSchema) ]).optional(),
}).strict();

export const PageCountOrderByAggregateInputSchema: z.ZodType<Prisma.PageCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  pageNumber: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  storyId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PageAvgOrderByAggregateInputSchema: z.ZodType<Prisma.PageAvgOrderByAggregateInput> = z.object({
  pageNumber: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PageMaxOrderByAggregateInputSchema: z.ZodType<Prisma.PageMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  pageNumber: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  storyId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PageMinOrderByAggregateInputSchema: z.ZodType<Prisma.PageMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  pageNumber: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  storyId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PageSumOrderByAggregateInputSchema: z.ZodType<Prisma.PageSumOrderByAggregateInput> = z.object({
  pageNumber: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const EnumPageTypeWithAggregatesFilterSchema: z.ZodType<Prisma.EnumPageTypeWithAggregatesFilter> = z.object({
  equals: z.lazy(() => PageTypeSchema).optional(),
  in: z.lazy(() => PageTypeSchema).array().optional(),
  notIn: z.lazy(() => PageTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => PageTypeSchema),z.lazy(() => NestedEnumPageTypeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumPageTypeFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumPageTypeFilterSchema).optional()
}).strict();

export const UserRelationFilterSchema: z.ZodType<Prisma.UserRelationFilter> = z.object({
  is: z.lazy(() => UserWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => UserWhereInputSchema).optional().nullable()
}).strict();

export const EditionCountOrderByAggregateInputSchema: z.ZodType<Prisma.EditionCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  pdfId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const EditionMaxOrderByAggregateInputSchema: z.ZodType<Prisma.EditionMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  pdfId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const EditionMinOrderByAggregateInputSchema: z.ZodType<Prisma.EditionMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  pdfId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const EnumConceptTypeFilterSchema: z.ZodType<Prisma.EnumConceptTypeFilter> = z.object({
  equals: z.lazy(() => ConceptTypeSchema).optional(),
  in: z.lazy(() => ConceptTypeSchema).array().optional(),
  notIn: z.lazy(() => ConceptTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => ConceptTypeSchema),z.lazy(() => NestedEnumConceptTypeFilterSchema) ]).optional(),
}).strict();

export const PhotoListRelationFilterSchema: z.ZodType<Prisma.PhotoListRelationFilter> = z.object({
  every: z.lazy(() => PhotoWhereInputSchema).optional(),
  some: z.lazy(() => PhotoWhereInputSchema).optional(),
  none: z.lazy(() => PhotoWhereInputSchema).optional()
}).strict();

export const PhotoOrderByRelationAggregateInputSchema: z.ZodType<Prisma.PhotoOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ConceptCountOrderByAggregateInputSchema: z.ZodType<Prisma.ConceptCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ConceptMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ConceptMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ConceptMinOrderByAggregateInputSchema: z.ZodType<Prisma.ConceptMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const EnumConceptTypeWithAggregatesFilterSchema: z.ZodType<Prisma.EnumConceptTypeWithAggregatesFilter> = z.object({
  equals: z.lazy(() => ConceptTypeSchema).optional(),
  in: z.lazy(() => ConceptTypeSchema).array().optional(),
  notIn: z.lazy(() => ConceptTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => ConceptTypeSchema),z.lazy(() => NestedEnumConceptTypeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumConceptTypeFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumConceptTypeFilterSchema).optional()
}).strict();

export const DateTimeNullableFilterSchema: z.ZodType<Prisma.DateTimeNullableFilter> = z.object({
  equals: z.coerce.date().optional().nullable(),
  in: z.coerce.date().array().optional().nullable(),
  notIn: z.coerce.date().array().optional().nullable(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const PredictionCountOrderByAggregateInputSchema: z.ZodType<Prisma.PredictionCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  uuid: z.lazy(() => SortOrderSchema).optional(),
  input: z.lazy(() => SortOrderSchema).optional(),
  output: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  started_at: z.lazy(() => SortOrderSchema).optional(),
  completed_at: z.lazy(() => SortOrderSchema).optional(),
  version: z.lazy(() => SortOrderSchema).optional(),
  metrics: z.lazy(() => SortOrderSchema).optional(),
  error: z.lazy(() => SortOrderSchema).optional(),
  logs: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PredictionMaxOrderByAggregateInputSchema: z.ZodType<Prisma.PredictionMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  uuid: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  started_at: z.lazy(() => SortOrderSchema).optional(),
  completed_at: z.lazy(() => SortOrderSchema).optional(),
  version: z.lazy(() => SortOrderSchema).optional(),
  error: z.lazy(() => SortOrderSchema).optional(),
  logs: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PredictionMinOrderByAggregateInputSchema: z.ZodType<Prisma.PredictionMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  uuid: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  started_at: z.lazy(() => SortOrderSchema).optional(),
  completed_at: z.lazy(() => SortOrderSchema).optional(),
  version: z.lazy(() => SortOrderSchema).optional(),
  error: z.lazy(() => SortOrderSchema).optional(),
  logs: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const DateTimeNullableWithAggregatesFilterSchema: z.ZodType<Prisma.DateTimeNullableWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional().nullable(),
  in: z.coerce.date().array().optional().nullable(),
  notIn: z.coerce.date().array().optional().nullable(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeNullableFilterSchema).optional()
}).strict();

export const PhotoCreateNestedOneWithoutFileInputSchema: z.ZodType<Prisma.PhotoCreateNestedOneWithoutFileInput> = z.object({
  create: z.union([ z.lazy(() => PhotoCreateWithoutFileInputSchema),z.lazy(() => PhotoUncheckedCreateWithoutFileInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PhotoCreateOrConnectWithoutFileInputSchema).optional(),
  connect: z.lazy(() => PhotoWhereUniqueInputSchema).optional()
}).strict();

export const PDFCreateNestedOneWithoutFileInputSchema: z.ZodType<Prisma.PDFCreateNestedOneWithoutFileInput> = z.object({
  create: z.union([ z.lazy(() => PDFCreateWithoutFileInputSchema),z.lazy(() => PDFUncheckedCreateWithoutFileInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PDFCreateOrConnectWithoutFileInputSchema).optional(),
  connect: z.lazy(() => PDFWhereUniqueInputSchema).optional()
}).strict();

export const PhotoUncheckedCreateNestedOneWithoutFileInputSchema: z.ZodType<Prisma.PhotoUncheckedCreateNestedOneWithoutFileInput> = z.object({
  create: z.union([ z.lazy(() => PhotoCreateWithoutFileInputSchema),z.lazy(() => PhotoUncheckedCreateWithoutFileInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PhotoCreateOrConnectWithoutFileInputSchema).optional(),
  connect: z.lazy(() => PhotoWhereUniqueInputSchema).optional()
}).strict();

export const PDFUncheckedCreateNestedOneWithoutFileInputSchema: z.ZodType<Prisma.PDFUncheckedCreateNestedOneWithoutFileInput> = z.object({
  create: z.union([ z.lazy(() => PDFCreateWithoutFileInputSchema),z.lazy(() => PDFUncheckedCreateWithoutFileInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PDFCreateOrConnectWithoutFileInputSchema).optional(),
  connect: z.lazy(() => PDFWhereUniqueInputSchema).optional()
}).strict();

export const StringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.StringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional()
}).strict();

export const EnumFileResourceTypeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumFileResourceTypeFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => FileResourceTypeSchema).optional()
}).strict();

export const IntFieldUpdateOperationsInputSchema: z.ZodType<Prisma.IntFieldUpdateOperationsInput> = z.object({
  set: z.number().optional(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional()
}).strict();

export const EnumFilePrivacyFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumFilePrivacyFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => FilePrivacySchema).optional()
}).strict();

export const DateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.DateTimeFieldUpdateOperationsInput> = z.object({
  set: z.coerce.date().optional()
}).strict();

export const PhotoUpdateOneWithoutFileNestedInputSchema: z.ZodType<Prisma.PhotoUpdateOneWithoutFileNestedInput> = z.object({
  create: z.union([ z.lazy(() => PhotoCreateWithoutFileInputSchema),z.lazy(() => PhotoUncheckedCreateWithoutFileInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PhotoCreateOrConnectWithoutFileInputSchema).optional(),
  upsert: z.lazy(() => PhotoUpsertWithoutFileInputSchema).optional(),
  disconnect: z.boolean().optional(),
  delete: z.boolean().optional(),
  connect: z.lazy(() => PhotoWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => PhotoUpdateWithoutFileInputSchema),z.lazy(() => PhotoUncheckedUpdateWithoutFileInputSchema) ]).optional(),
}).strict();

export const PDFUpdateOneWithoutFileNestedInputSchema: z.ZodType<Prisma.PDFUpdateOneWithoutFileNestedInput> = z.object({
  create: z.union([ z.lazy(() => PDFCreateWithoutFileInputSchema),z.lazy(() => PDFUncheckedCreateWithoutFileInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PDFCreateOrConnectWithoutFileInputSchema).optional(),
  upsert: z.lazy(() => PDFUpsertWithoutFileInputSchema).optional(),
  disconnect: z.boolean().optional(),
  delete: z.boolean().optional(),
  connect: z.lazy(() => PDFWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => PDFUpdateWithoutFileInputSchema),z.lazy(() => PDFUncheckedUpdateWithoutFileInputSchema) ]).optional(),
}).strict();

export const PhotoUncheckedUpdateOneWithoutFileNestedInputSchema: z.ZodType<Prisma.PhotoUncheckedUpdateOneWithoutFileNestedInput> = z.object({
  create: z.union([ z.lazy(() => PhotoCreateWithoutFileInputSchema),z.lazy(() => PhotoUncheckedCreateWithoutFileInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PhotoCreateOrConnectWithoutFileInputSchema).optional(),
  upsert: z.lazy(() => PhotoUpsertWithoutFileInputSchema).optional(),
  disconnect: z.boolean().optional(),
  delete: z.boolean().optional(),
  connect: z.lazy(() => PhotoWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => PhotoUpdateWithoutFileInputSchema),z.lazy(() => PhotoUncheckedUpdateWithoutFileInputSchema) ]).optional(),
}).strict();

export const PDFUncheckedUpdateOneWithoutFileNestedInputSchema: z.ZodType<Prisma.PDFUncheckedUpdateOneWithoutFileNestedInput> = z.object({
  create: z.union([ z.lazy(() => PDFCreateWithoutFileInputSchema),z.lazy(() => PDFUncheckedCreateWithoutFileInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PDFCreateOrConnectWithoutFileInputSchema).optional(),
  upsert: z.lazy(() => PDFUpsertWithoutFileInputSchema).optional(),
  disconnect: z.boolean().optional(),
  delete: z.boolean().optional(),
  connect: z.lazy(() => PDFWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => PDFUpdateWithoutFileInputSchema),z.lazy(() => PDFUncheckedUpdateWithoutFileInputSchema) ]).optional(),
}).strict();

export const PhotoCreatetagsInputSchema: z.ZodType<Prisma.PhotoCreatetagsInput> = z.object({
  set: z.string().array()
}).strict();

export const CloudFileCreateNestedOneWithoutPhotoInputSchema: z.ZodType<Prisma.CloudFileCreateNestedOneWithoutPhotoInput> = z.object({
  create: z.union([ z.lazy(() => CloudFileCreateWithoutPhotoInputSchema),z.lazy(() => CloudFileUncheckedCreateWithoutPhotoInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CloudFileCreateOrConnectWithoutPhotoInputSchema).optional(),
  connect: z.lazy(() => CloudFileWhereUniqueInputSchema).optional()
}).strict();

export const PageArtworkCreateNestedManyWithoutPhotoInputSchema: z.ZodType<Prisma.PageArtworkCreateNestedManyWithoutPhotoInput> = z.object({
  create: z.union([ z.lazy(() => PageArtworkCreateWithoutPhotoInputSchema),z.lazy(() => PageArtworkCreateWithoutPhotoInputSchema).array(),z.lazy(() => PageArtworkUncheckedCreateWithoutPhotoInputSchema),z.lazy(() => PageArtworkUncheckedCreateWithoutPhotoInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PageArtworkCreateOrConnectWithoutPhotoInputSchema),z.lazy(() => PageArtworkCreateOrConnectWithoutPhotoInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PageArtworkCreateManyPhotoInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => PageArtworkWhereUniqueInputSchema),z.lazy(() => PageArtworkWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const ConceptCreateNestedManyWithoutPhotosInputSchema: z.ZodType<Prisma.ConceptCreateNestedManyWithoutPhotosInput> = z.object({
  create: z.union([ z.lazy(() => ConceptCreateWithoutPhotosInputSchema),z.lazy(() => ConceptCreateWithoutPhotosInputSchema).array(),z.lazy(() => ConceptUncheckedCreateWithoutPhotosInputSchema),z.lazy(() => ConceptUncheckedCreateWithoutPhotosInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ConceptCreateOrConnectWithoutPhotosInputSchema),z.lazy(() => ConceptCreateOrConnectWithoutPhotosInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ConceptWhereUniqueInputSchema),z.lazy(() => ConceptWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const PageArtworkUncheckedCreateNestedManyWithoutPhotoInputSchema: z.ZodType<Prisma.PageArtworkUncheckedCreateNestedManyWithoutPhotoInput> = z.object({
  create: z.union([ z.lazy(() => PageArtworkCreateWithoutPhotoInputSchema),z.lazy(() => PageArtworkCreateWithoutPhotoInputSchema).array(),z.lazy(() => PageArtworkUncheckedCreateWithoutPhotoInputSchema),z.lazy(() => PageArtworkUncheckedCreateWithoutPhotoInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PageArtworkCreateOrConnectWithoutPhotoInputSchema),z.lazy(() => PageArtworkCreateOrConnectWithoutPhotoInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PageArtworkCreateManyPhotoInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => PageArtworkWhereUniqueInputSchema),z.lazy(() => PageArtworkWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const ConceptUncheckedCreateNestedManyWithoutPhotosInputSchema: z.ZodType<Prisma.ConceptUncheckedCreateNestedManyWithoutPhotosInput> = z.object({
  create: z.union([ z.lazy(() => ConceptCreateWithoutPhotosInputSchema),z.lazy(() => ConceptCreateWithoutPhotosInputSchema).array(),z.lazy(() => ConceptUncheckedCreateWithoutPhotosInputSchema),z.lazy(() => ConceptUncheckedCreateWithoutPhotosInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ConceptCreateOrConnectWithoutPhotosInputSchema),z.lazy(() => ConceptCreateOrConnectWithoutPhotosInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ConceptWhereUniqueInputSchema),z.lazy(() => ConceptWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const PhotoUpdatetagsInputSchema: z.ZodType<Prisma.PhotoUpdatetagsInput> = z.object({
  set: z.string().array().optional(),
  push: z.union([ z.string(),z.string().array() ]).optional(),
}).strict();

export const CloudFileUpdateOneRequiredWithoutPhotoNestedInputSchema: z.ZodType<Prisma.CloudFileUpdateOneRequiredWithoutPhotoNestedInput> = z.object({
  create: z.union([ z.lazy(() => CloudFileCreateWithoutPhotoInputSchema),z.lazy(() => CloudFileUncheckedCreateWithoutPhotoInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CloudFileCreateOrConnectWithoutPhotoInputSchema).optional(),
  upsert: z.lazy(() => CloudFileUpsertWithoutPhotoInputSchema).optional(),
  connect: z.lazy(() => CloudFileWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => CloudFileUpdateWithoutPhotoInputSchema),z.lazy(() => CloudFileUncheckedUpdateWithoutPhotoInputSchema) ]).optional(),
}).strict();

export const PageArtworkUpdateManyWithoutPhotoNestedInputSchema: z.ZodType<Prisma.PageArtworkUpdateManyWithoutPhotoNestedInput> = z.object({
  create: z.union([ z.lazy(() => PageArtworkCreateWithoutPhotoInputSchema),z.lazy(() => PageArtworkCreateWithoutPhotoInputSchema).array(),z.lazy(() => PageArtworkUncheckedCreateWithoutPhotoInputSchema),z.lazy(() => PageArtworkUncheckedCreateWithoutPhotoInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PageArtworkCreateOrConnectWithoutPhotoInputSchema),z.lazy(() => PageArtworkCreateOrConnectWithoutPhotoInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PageArtworkUpsertWithWhereUniqueWithoutPhotoInputSchema),z.lazy(() => PageArtworkUpsertWithWhereUniqueWithoutPhotoInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PageArtworkCreateManyPhotoInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => PageArtworkWhereUniqueInputSchema),z.lazy(() => PageArtworkWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PageArtworkWhereUniqueInputSchema),z.lazy(() => PageArtworkWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PageArtworkWhereUniqueInputSchema),z.lazy(() => PageArtworkWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PageArtworkWhereUniqueInputSchema),z.lazy(() => PageArtworkWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PageArtworkUpdateWithWhereUniqueWithoutPhotoInputSchema),z.lazy(() => PageArtworkUpdateWithWhereUniqueWithoutPhotoInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PageArtworkUpdateManyWithWhereWithoutPhotoInputSchema),z.lazy(() => PageArtworkUpdateManyWithWhereWithoutPhotoInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PageArtworkScalarWhereInputSchema),z.lazy(() => PageArtworkScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ConceptUpdateManyWithoutPhotosNestedInputSchema: z.ZodType<Prisma.ConceptUpdateManyWithoutPhotosNestedInput> = z.object({
  create: z.union([ z.lazy(() => ConceptCreateWithoutPhotosInputSchema),z.lazy(() => ConceptCreateWithoutPhotosInputSchema).array(),z.lazy(() => ConceptUncheckedCreateWithoutPhotosInputSchema),z.lazy(() => ConceptUncheckedCreateWithoutPhotosInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ConceptCreateOrConnectWithoutPhotosInputSchema),z.lazy(() => ConceptCreateOrConnectWithoutPhotosInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ConceptUpsertWithWhereUniqueWithoutPhotosInputSchema),z.lazy(() => ConceptUpsertWithWhereUniqueWithoutPhotosInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => ConceptWhereUniqueInputSchema),z.lazy(() => ConceptWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ConceptWhereUniqueInputSchema),z.lazy(() => ConceptWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ConceptWhereUniqueInputSchema),z.lazy(() => ConceptWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ConceptWhereUniqueInputSchema),z.lazy(() => ConceptWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ConceptUpdateWithWhereUniqueWithoutPhotosInputSchema),z.lazy(() => ConceptUpdateWithWhereUniqueWithoutPhotosInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ConceptUpdateManyWithWhereWithoutPhotosInputSchema),z.lazy(() => ConceptUpdateManyWithWhereWithoutPhotosInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ConceptScalarWhereInputSchema),z.lazy(() => ConceptScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const PageArtworkUncheckedUpdateManyWithoutPhotoNestedInputSchema: z.ZodType<Prisma.PageArtworkUncheckedUpdateManyWithoutPhotoNestedInput> = z.object({
  create: z.union([ z.lazy(() => PageArtworkCreateWithoutPhotoInputSchema),z.lazy(() => PageArtworkCreateWithoutPhotoInputSchema).array(),z.lazy(() => PageArtworkUncheckedCreateWithoutPhotoInputSchema),z.lazy(() => PageArtworkUncheckedCreateWithoutPhotoInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PageArtworkCreateOrConnectWithoutPhotoInputSchema),z.lazy(() => PageArtworkCreateOrConnectWithoutPhotoInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PageArtworkUpsertWithWhereUniqueWithoutPhotoInputSchema),z.lazy(() => PageArtworkUpsertWithWhereUniqueWithoutPhotoInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PageArtworkCreateManyPhotoInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => PageArtworkWhereUniqueInputSchema),z.lazy(() => PageArtworkWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PageArtworkWhereUniqueInputSchema),z.lazy(() => PageArtworkWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PageArtworkWhereUniqueInputSchema),z.lazy(() => PageArtworkWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PageArtworkWhereUniqueInputSchema),z.lazy(() => PageArtworkWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PageArtworkUpdateWithWhereUniqueWithoutPhotoInputSchema),z.lazy(() => PageArtworkUpdateWithWhereUniqueWithoutPhotoInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PageArtworkUpdateManyWithWhereWithoutPhotoInputSchema),z.lazy(() => PageArtworkUpdateManyWithWhereWithoutPhotoInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PageArtworkScalarWhereInputSchema),z.lazy(() => PageArtworkScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ConceptUncheckedUpdateManyWithoutPhotosNestedInputSchema: z.ZodType<Prisma.ConceptUncheckedUpdateManyWithoutPhotosNestedInput> = z.object({
  create: z.union([ z.lazy(() => ConceptCreateWithoutPhotosInputSchema),z.lazy(() => ConceptCreateWithoutPhotosInputSchema).array(),z.lazy(() => ConceptUncheckedCreateWithoutPhotosInputSchema),z.lazy(() => ConceptUncheckedCreateWithoutPhotosInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ConceptCreateOrConnectWithoutPhotosInputSchema),z.lazy(() => ConceptCreateOrConnectWithoutPhotosInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ConceptUpsertWithWhereUniqueWithoutPhotosInputSchema),z.lazy(() => ConceptUpsertWithWhereUniqueWithoutPhotosInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => ConceptWhereUniqueInputSchema),z.lazy(() => ConceptWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ConceptWhereUniqueInputSchema),z.lazy(() => ConceptWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ConceptWhereUniqueInputSchema),z.lazy(() => ConceptWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ConceptWhereUniqueInputSchema),z.lazy(() => ConceptWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ConceptUpdateWithWhereUniqueWithoutPhotosInputSchema),z.lazy(() => ConceptUpdateWithWhereUniqueWithoutPhotosInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ConceptUpdateManyWithWhereWithoutPhotosInputSchema),z.lazy(() => ConceptUpdateManyWithWhereWithoutPhotosInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ConceptScalarWhereInputSchema),z.lazy(() => ConceptScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const PDFCreatetagsInputSchema: z.ZodType<Prisma.PDFCreatetagsInput> = z.object({
  set: z.string().array()
}).strict();

export const CloudFileCreateNestedOneWithoutPDFInputSchema: z.ZodType<Prisma.CloudFileCreateNestedOneWithoutPDFInput> = z.object({
  create: z.union([ z.lazy(() => CloudFileCreateWithoutPDFInputSchema),z.lazy(() => CloudFileUncheckedCreateWithoutPDFInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CloudFileCreateOrConnectWithoutPDFInputSchema).optional(),
  connect: z.lazy(() => CloudFileWhereUniqueInputSchema).optional()
}).strict();

export const EditionCreateNestedOneWithoutPdfInputSchema: z.ZodType<Prisma.EditionCreateNestedOneWithoutPdfInput> = z.object({
  create: z.union([ z.lazy(() => EditionCreateWithoutPdfInputSchema),z.lazy(() => EditionUncheckedCreateWithoutPdfInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => EditionCreateOrConnectWithoutPdfInputSchema).optional(),
  connect: z.lazy(() => EditionWhereUniqueInputSchema).optional()
}).strict();

export const EditionUncheckedCreateNestedOneWithoutPdfInputSchema: z.ZodType<Prisma.EditionUncheckedCreateNestedOneWithoutPdfInput> = z.object({
  create: z.union([ z.lazy(() => EditionCreateWithoutPdfInputSchema),z.lazy(() => EditionUncheckedCreateWithoutPdfInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => EditionCreateOrConnectWithoutPdfInputSchema).optional(),
  connect: z.lazy(() => EditionWhereUniqueInputSchema).optional()
}).strict();

export const PDFUpdatetagsInputSchema: z.ZodType<Prisma.PDFUpdatetagsInput> = z.object({
  set: z.string().array().optional(),
  push: z.union([ z.string(),z.string().array() ]).optional(),
}).strict();

export const CloudFileUpdateOneRequiredWithoutPDFNestedInputSchema: z.ZodType<Prisma.CloudFileUpdateOneRequiredWithoutPDFNestedInput> = z.object({
  create: z.union([ z.lazy(() => CloudFileCreateWithoutPDFInputSchema),z.lazy(() => CloudFileUncheckedCreateWithoutPDFInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CloudFileCreateOrConnectWithoutPDFInputSchema).optional(),
  upsert: z.lazy(() => CloudFileUpsertWithoutPDFInputSchema).optional(),
  connect: z.lazy(() => CloudFileWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => CloudFileUpdateWithoutPDFInputSchema),z.lazy(() => CloudFileUncheckedUpdateWithoutPDFInputSchema) ]).optional(),
}).strict();

export const EditionUpdateOneWithoutPdfNestedInputSchema: z.ZodType<Prisma.EditionUpdateOneWithoutPdfNestedInput> = z.object({
  create: z.union([ z.lazy(() => EditionCreateWithoutPdfInputSchema),z.lazy(() => EditionUncheckedCreateWithoutPdfInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => EditionCreateOrConnectWithoutPdfInputSchema).optional(),
  upsert: z.lazy(() => EditionUpsertWithoutPdfInputSchema).optional(),
  disconnect: z.boolean().optional(),
  delete: z.boolean().optional(),
  connect: z.lazy(() => EditionWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => EditionUpdateWithoutPdfInputSchema),z.lazy(() => EditionUncheckedUpdateWithoutPdfInputSchema) ]).optional(),
}).strict();

export const EditionUncheckedUpdateOneWithoutPdfNestedInputSchema: z.ZodType<Prisma.EditionUncheckedUpdateOneWithoutPdfNestedInput> = z.object({
  create: z.union([ z.lazy(() => EditionCreateWithoutPdfInputSchema),z.lazy(() => EditionUncheckedCreateWithoutPdfInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => EditionCreateOrConnectWithoutPdfInputSchema).optional(),
  upsert: z.lazy(() => EditionUpsertWithoutPdfInputSchema).optional(),
  disconnect: z.boolean().optional(),
  delete: z.boolean().optional(),
  connect: z.lazy(() => EditionWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => EditionUpdateWithoutPdfInputSchema),z.lazy(() => EditionUncheckedUpdateWithoutPdfInputSchema) ]).optional(),
}).strict();

export const EditionCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.EditionCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => EditionCreateWithoutUserInputSchema),z.lazy(() => EditionCreateWithoutUserInputSchema).array(),z.lazy(() => EditionUncheckedCreateWithoutUserInputSchema),z.lazy(() => EditionUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => EditionCreateOrConnectWithoutUserInputSchema),z.lazy(() => EditionCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => EditionCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => EditionWhereUniqueInputSchema),z.lazy(() => EditionWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const ConceptCreateNestedOneWithoutUserInputSchema: z.ZodType<Prisma.ConceptCreateNestedOneWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => ConceptCreateWithoutUserInputSchema),z.lazy(() => ConceptUncheckedCreateWithoutUserInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ConceptCreateOrConnectWithoutUserInputSchema).optional(),
  connect: z.lazy(() => ConceptWhereUniqueInputSchema).optional()
}).strict();

export const EditionUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.EditionUncheckedCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => EditionCreateWithoutUserInputSchema),z.lazy(() => EditionCreateWithoutUserInputSchema).array(),z.lazy(() => EditionUncheckedCreateWithoutUserInputSchema),z.lazy(() => EditionUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => EditionCreateOrConnectWithoutUserInputSchema),z.lazy(() => EditionCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => EditionCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => EditionWhereUniqueInputSchema),z.lazy(() => EditionWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const ConceptUncheckedCreateNestedOneWithoutUserInputSchema: z.ZodType<Prisma.ConceptUncheckedCreateNestedOneWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => ConceptCreateWithoutUserInputSchema),z.lazy(() => ConceptUncheckedCreateWithoutUserInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ConceptCreateOrConnectWithoutUserInputSchema).optional(),
  connect: z.lazy(() => ConceptWhereUniqueInputSchema).optional()
}).strict();

export const EditionUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.EditionUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => EditionCreateWithoutUserInputSchema),z.lazy(() => EditionCreateWithoutUserInputSchema).array(),z.lazy(() => EditionUncheckedCreateWithoutUserInputSchema),z.lazy(() => EditionUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => EditionCreateOrConnectWithoutUserInputSchema),z.lazy(() => EditionCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => EditionUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => EditionUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => EditionCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => EditionWhereUniqueInputSchema),z.lazy(() => EditionWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => EditionWhereUniqueInputSchema),z.lazy(() => EditionWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => EditionWhereUniqueInputSchema),z.lazy(() => EditionWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => EditionWhereUniqueInputSchema),z.lazy(() => EditionWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => EditionUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => EditionUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => EditionUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => EditionUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => EditionScalarWhereInputSchema),z.lazy(() => EditionScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ConceptUpdateOneWithoutUserNestedInputSchema: z.ZodType<Prisma.ConceptUpdateOneWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => ConceptCreateWithoutUserInputSchema),z.lazy(() => ConceptUncheckedCreateWithoutUserInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ConceptCreateOrConnectWithoutUserInputSchema).optional(),
  upsert: z.lazy(() => ConceptUpsertWithoutUserInputSchema).optional(),
  disconnect: z.boolean().optional(),
  delete: z.boolean().optional(),
  connect: z.lazy(() => ConceptWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ConceptUpdateWithoutUserInputSchema),z.lazy(() => ConceptUncheckedUpdateWithoutUserInputSchema) ]).optional(),
}).strict();

export const EditionUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.EditionUncheckedUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => EditionCreateWithoutUserInputSchema),z.lazy(() => EditionCreateWithoutUserInputSchema).array(),z.lazy(() => EditionUncheckedCreateWithoutUserInputSchema),z.lazy(() => EditionUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => EditionCreateOrConnectWithoutUserInputSchema),z.lazy(() => EditionCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => EditionUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => EditionUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => EditionCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => EditionWhereUniqueInputSchema),z.lazy(() => EditionWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => EditionWhereUniqueInputSchema),z.lazy(() => EditionWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => EditionWhereUniqueInputSchema),z.lazy(() => EditionWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => EditionWhereUniqueInputSchema),z.lazy(() => EditionWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => EditionUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => EditionUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => EditionUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => EditionUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => EditionScalarWhereInputSchema),z.lazy(() => EditionScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ConceptUncheckedUpdateOneWithoutUserNestedInputSchema: z.ZodType<Prisma.ConceptUncheckedUpdateOneWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => ConceptCreateWithoutUserInputSchema),z.lazy(() => ConceptUncheckedCreateWithoutUserInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ConceptCreateOrConnectWithoutUserInputSchema).optional(),
  upsert: z.lazy(() => ConceptUpsertWithoutUserInputSchema).optional(),
  disconnect: z.boolean().optional(),
  delete: z.boolean().optional(),
  connect: z.lazy(() => ConceptWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ConceptUpdateWithoutUserInputSchema),z.lazy(() => ConceptUncheckedUpdateWithoutUserInputSchema) ]).optional(),
}).strict();

export const StoryCreateNestedManyWithoutAuthorInputSchema: z.ZodType<Prisma.StoryCreateNestedManyWithoutAuthorInput> = z.object({
  create: z.union([ z.lazy(() => StoryCreateWithoutAuthorInputSchema),z.lazy(() => StoryCreateWithoutAuthorInputSchema).array(),z.lazy(() => StoryUncheckedCreateWithoutAuthorInputSchema),z.lazy(() => StoryUncheckedCreateWithoutAuthorInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => StoryCreateOrConnectWithoutAuthorInputSchema),z.lazy(() => StoryCreateOrConnectWithoutAuthorInputSchema).array() ]).optional(),
  createMany: z.lazy(() => StoryCreateManyAuthorInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => StoryWhereUniqueInputSchema),z.lazy(() => StoryWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const PageTextCreateNestedManyWithoutAuthorInputSchema: z.ZodType<Prisma.PageTextCreateNestedManyWithoutAuthorInput> = z.object({
  create: z.union([ z.lazy(() => PageTextCreateWithoutAuthorInputSchema),z.lazy(() => PageTextCreateWithoutAuthorInputSchema).array(),z.lazy(() => PageTextUncheckedCreateWithoutAuthorInputSchema),z.lazy(() => PageTextUncheckedCreateWithoutAuthorInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PageTextCreateOrConnectWithoutAuthorInputSchema),z.lazy(() => PageTextCreateOrConnectWithoutAuthorInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PageTextCreateManyAuthorInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => PageTextWhereUniqueInputSchema),z.lazy(() => PageTextWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const StoryUncheckedCreateNestedManyWithoutAuthorInputSchema: z.ZodType<Prisma.StoryUncheckedCreateNestedManyWithoutAuthorInput> = z.object({
  create: z.union([ z.lazy(() => StoryCreateWithoutAuthorInputSchema),z.lazy(() => StoryCreateWithoutAuthorInputSchema).array(),z.lazy(() => StoryUncheckedCreateWithoutAuthorInputSchema),z.lazy(() => StoryUncheckedCreateWithoutAuthorInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => StoryCreateOrConnectWithoutAuthorInputSchema),z.lazy(() => StoryCreateOrConnectWithoutAuthorInputSchema).array() ]).optional(),
  createMany: z.lazy(() => StoryCreateManyAuthorInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => StoryWhereUniqueInputSchema),z.lazy(() => StoryWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const PageTextUncheckedCreateNestedManyWithoutAuthorInputSchema: z.ZodType<Prisma.PageTextUncheckedCreateNestedManyWithoutAuthorInput> = z.object({
  create: z.union([ z.lazy(() => PageTextCreateWithoutAuthorInputSchema),z.lazy(() => PageTextCreateWithoutAuthorInputSchema).array(),z.lazy(() => PageTextUncheckedCreateWithoutAuthorInputSchema),z.lazy(() => PageTextUncheckedCreateWithoutAuthorInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PageTextCreateOrConnectWithoutAuthorInputSchema),z.lazy(() => PageTextCreateOrConnectWithoutAuthorInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PageTextCreateManyAuthorInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => PageTextWhereUniqueInputSchema),z.lazy(() => PageTextWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const StoryUpdateManyWithoutAuthorNestedInputSchema: z.ZodType<Prisma.StoryUpdateManyWithoutAuthorNestedInput> = z.object({
  create: z.union([ z.lazy(() => StoryCreateWithoutAuthorInputSchema),z.lazy(() => StoryCreateWithoutAuthorInputSchema).array(),z.lazy(() => StoryUncheckedCreateWithoutAuthorInputSchema),z.lazy(() => StoryUncheckedCreateWithoutAuthorInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => StoryCreateOrConnectWithoutAuthorInputSchema),z.lazy(() => StoryCreateOrConnectWithoutAuthorInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => StoryUpsertWithWhereUniqueWithoutAuthorInputSchema),z.lazy(() => StoryUpsertWithWhereUniqueWithoutAuthorInputSchema).array() ]).optional(),
  createMany: z.lazy(() => StoryCreateManyAuthorInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => StoryWhereUniqueInputSchema),z.lazy(() => StoryWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => StoryWhereUniqueInputSchema),z.lazy(() => StoryWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => StoryWhereUniqueInputSchema),z.lazy(() => StoryWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => StoryWhereUniqueInputSchema),z.lazy(() => StoryWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => StoryUpdateWithWhereUniqueWithoutAuthorInputSchema),z.lazy(() => StoryUpdateWithWhereUniqueWithoutAuthorInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => StoryUpdateManyWithWhereWithoutAuthorInputSchema),z.lazy(() => StoryUpdateManyWithWhereWithoutAuthorInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => StoryScalarWhereInputSchema),z.lazy(() => StoryScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const PageTextUpdateManyWithoutAuthorNestedInputSchema: z.ZodType<Prisma.PageTextUpdateManyWithoutAuthorNestedInput> = z.object({
  create: z.union([ z.lazy(() => PageTextCreateWithoutAuthorInputSchema),z.lazy(() => PageTextCreateWithoutAuthorInputSchema).array(),z.lazy(() => PageTextUncheckedCreateWithoutAuthorInputSchema),z.lazy(() => PageTextUncheckedCreateWithoutAuthorInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PageTextCreateOrConnectWithoutAuthorInputSchema),z.lazy(() => PageTextCreateOrConnectWithoutAuthorInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PageTextUpsertWithWhereUniqueWithoutAuthorInputSchema),z.lazy(() => PageTextUpsertWithWhereUniqueWithoutAuthorInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PageTextCreateManyAuthorInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => PageTextWhereUniqueInputSchema),z.lazy(() => PageTextWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PageTextWhereUniqueInputSchema),z.lazy(() => PageTextWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PageTextWhereUniqueInputSchema),z.lazy(() => PageTextWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PageTextWhereUniqueInputSchema),z.lazy(() => PageTextWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PageTextUpdateWithWhereUniqueWithoutAuthorInputSchema),z.lazy(() => PageTextUpdateWithWhereUniqueWithoutAuthorInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PageTextUpdateManyWithWhereWithoutAuthorInputSchema),z.lazy(() => PageTextUpdateManyWithWhereWithoutAuthorInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PageTextScalarWhereInputSchema),z.lazy(() => PageTextScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const StoryUncheckedUpdateManyWithoutAuthorNestedInputSchema: z.ZodType<Prisma.StoryUncheckedUpdateManyWithoutAuthorNestedInput> = z.object({
  create: z.union([ z.lazy(() => StoryCreateWithoutAuthorInputSchema),z.lazy(() => StoryCreateWithoutAuthorInputSchema).array(),z.lazy(() => StoryUncheckedCreateWithoutAuthorInputSchema),z.lazy(() => StoryUncheckedCreateWithoutAuthorInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => StoryCreateOrConnectWithoutAuthorInputSchema),z.lazy(() => StoryCreateOrConnectWithoutAuthorInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => StoryUpsertWithWhereUniqueWithoutAuthorInputSchema),z.lazy(() => StoryUpsertWithWhereUniqueWithoutAuthorInputSchema).array() ]).optional(),
  createMany: z.lazy(() => StoryCreateManyAuthorInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => StoryWhereUniqueInputSchema),z.lazy(() => StoryWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => StoryWhereUniqueInputSchema),z.lazy(() => StoryWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => StoryWhereUniqueInputSchema),z.lazy(() => StoryWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => StoryWhereUniqueInputSchema),z.lazy(() => StoryWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => StoryUpdateWithWhereUniqueWithoutAuthorInputSchema),z.lazy(() => StoryUpdateWithWhereUniqueWithoutAuthorInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => StoryUpdateManyWithWhereWithoutAuthorInputSchema),z.lazy(() => StoryUpdateManyWithWhereWithoutAuthorInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => StoryScalarWhereInputSchema),z.lazy(() => StoryScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const PageTextUncheckedUpdateManyWithoutAuthorNestedInputSchema: z.ZodType<Prisma.PageTextUncheckedUpdateManyWithoutAuthorNestedInput> = z.object({
  create: z.union([ z.lazy(() => PageTextCreateWithoutAuthorInputSchema),z.lazy(() => PageTextCreateWithoutAuthorInputSchema).array(),z.lazy(() => PageTextUncheckedCreateWithoutAuthorInputSchema),z.lazy(() => PageTextUncheckedCreateWithoutAuthorInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PageTextCreateOrConnectWithoutAuthorInputSchema),z.lazy(() => PageTextCreateOrConnectWithoutAuthorInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PageTextUpsertWithWhereUniqueWithoutAuthorInputSchema),z.lazy(() => PageTextUpsertWithWhereUniqueWithoutAuthorInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PageTextCreateManyAuthorInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => PageTextWhereUniqueInputSchema),z.lazy(() => PageTextWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PageTextWhereUniqueInputSchema),z.lazy(() => PageTextWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PageTextWhereUniqueInputSchema),z.lazy(() => PageTextWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PageTextWhereUniqueInputSchema),z.lazy(() => PageTextWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PageTextUpdateWithWhereUniqueWithoutAuthorInputSchema),z.lazy(() => PageTextUpdateWithWhereUniqueWithoutAuthorInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PageTextUpdateManyWithWhereWithoutAuthorInputSchema),z.lazy(() => PageTextUpdateManyWithWhereWithoutAuthorInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PageTextScalarWhereInputSchema),z.lazy(() => PageTextScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const StoryCreateNestedManyWithoutArtistInputSchema: z.ZodType<Prisma.StoryCreateNestedManyWithoutArtistInput> = z.object({
  create: z.union([ z.lazy(() => StoryCreateWithoutArtistInputSchema),z.lazy(() => StoryCreateWithoutArtistInputSchema).array(),z.lazy(() => StoryUncheckedCreateWithoutArtistInputSchema),z.lazy(() => StoryUncheckedCreateWithoutArtistInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => StoryCreateOrConnectWithoutArtistInputSchema),z.lazy(() => StoryCreateOrConnectWithoutArtistInputSchema).array() ]).optional(),
  createMany: z.lazy(() => StoryCreateManyArtistInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => StoryWhereUniqueInputSchema),z.lazy(() => StoryWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const PageArtworkCreateNestedManyWithoutArtistInputSchema: z.ZodType<Prisma.PageArtworkCreateNestedManyWithoutArtistInput> = z.object({
  create: z.union([ z.lazy(() => PageArtworkCreateWithoutArtistInputSchema),z.lazy(() => PageArtworkCreateWithoutArtistInputSchema).array(),z.lazy(() => PageArtworkUncheckedCreateWithoutArtistInputSchema),z.lazy(() => PageArtworkUncheckedCreateWithoutArtistInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PageArtworkCreateOrConnectWithoutArtistInputSchema),z.lazy(() => PageArtworkCreateOrConnectWithoutArtistInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PageArtworkCreateManyArtistInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => PageArtworkWhereUniqueInputSchema),z.lazy(() => PageArtworkWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const StoryUncheckedCreateNestedManyWithoutArtistInputSchema: z.ZodType<Prisma.StoryUncheckedCreateNestedManyWithoutArtistInput> = z.object({
  create: z.union([ z.lazy(() => StoryCreateWithoutArtistInputSchema),z.lazy(() => StoryCreateWithoutArtistInputSchema).array(),z.lazy(() => StoryUncheckedCreateWithoutArtistInputSchema),z.lazy(() => StoryUncheckedCreateWithoutArtistInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => StoryCreateOrConnectWithoutArtistInputSchema),z.lazy(() => StoryCreateOrConnectWithoutArtistInputSchema).array() ]).optional(),
  createMany: z.lazy(() => StoryCreateManyArtistInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => StoryWhereUniqueInputSchema),z.lazy(() => StoryWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const PageArtworkUncheckedCreateNestedManyWithoutArtistInputSchema: z.ZodType<Prisma.PageArtworkUncheckedCreateNestedManyWithoutArtistInput> = z.object({
  create: z.union([ z.lazy(() => PageArtworkCreateWithoutArtistInputSchema),z.lazy(() => PageArtworkCreateWithoutArtistInputSchema).array(),z.lazy(() => PageArtworkUncheckedCreateWithoutArtistInputSchema),z.lazy(() => PageArtworkUncheckedCreateWithoutArtistInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PageArtworkCreateOrConnectWithoutArtistInputSchema),z.lazy(() => PageArtworkCreateOrConnectWithoutArtistInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PageArtworkCreateManyArtistInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => PageArtworkWhereUniqueInputSchema),z.lazy(() => PageArtworkWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const StoryUpdateManyWithoutArtistNestedInputSchema: z.ZodType<Prisma.StoryUpdateManyWithoutArtistNestedInput> = z.object({
  create: z.union([ z.lazy(() => StoryCreateWithoutArtistInputSchema),z.lazy(() => StoryCreateWithoutArtistInputSchema).array(),z.lazy(() => StoryUncheckedCreateWithoutArtistInputSchema),z.lazy(() => StoryUncheckedCreateWithoutArtistInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => StoryCreateOrConnectWithoutArtistInputSchema),z.lazy(() => StoryCreateOrConnectWithoutArtistInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => StoryUpsertWithWhereUniqueWithoutArtistInputSchema),z.lazy(() => StoryUpsertWithWhereUniqueWithoutArtistInputSchema).array() ]).optional(),
  createMany: z.lazy(() => StoryCreateManyArtistInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => StoryWhereUniqueInputSchema),z.lazy(() => StoryWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => StoryWhereUniqueInputSchema),z.lazy(() => StoryWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => StoryWhereUniqueInputSchema),z.lazy(() => StoryWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => StoryWhereUniqueInputSchema),z.lazy(() => StoryWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => StoryUpdateWithWhereUniqueWithoutArtistInputSchema),z.lazy(() => StoryUpdateWithWhereUniqueWithoutArtistInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => StoryUpdateManyWithWhereWithoutArtistInputSchema),z.lazy(() => StoryUpdateManyWithWhereWithoutArtistInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => StoryScalarWhereInputSchema),z.lazy(() => StoryScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const PageArtworkUpdateManyWithoutArtistNestedInputSchema: z.ZodType<Prisma.PageArtworkUpdateManyWithoutArtistNestedInput> = z.object({
  create: z.union([ z.lazy(() => PageArtworkCreateWithoutArtistInputSchema),z.lazy(() => PageArtworkCreateWithoutArtistInputSchema).array(),z.lazy(() => PageArtworkUncheckedCreateWithoutArtistInputSchema),z.lazy(() => PageArtworkUncheckedCreateWithoutArtistInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PageArtworkCreateOrConnectWithoutArtistInputSchema),z.lazy(() => PageArtworkCreateOrConnectWithoutArtistInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PageArtworkUpsertWithWhereUniqueWithoutArtistInputSchema),z.lazy(() => PageArtworkUpsertWithWhereUniqueWithoutArtistInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PageArtworkCreateManyArtistInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => PageArtworkWhereUniqueInputSchema),z.lazy(() => PageArtworkWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PageArtworkWhereUniqueInputSchema),z.lazy(() => PageArtworkWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PageArtworkWhereUniqueInputSchema),z.lazy(() => PageArtworkWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PageArtworkWhereUniqueInputSchema),z.lazy(() => PageArtworkWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PageArtworkUpdateWithWhereUniqueWithoutArtistInputSchema),z.lazy(() => PageArtworkUpdateWithWhereUniqueWithoutArtistInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PageArtworkUpdateManyWithWhereWithoutArtistInputSchema),z.lazy(() => PageArtworkUpdateManyWithWhereWithoutArtistInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PageArtworkScalarWhereInputSchema),z.lazy(() => PageArtworkScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const StoryUncheckedUpdateManyWithoutArtistNestedInputSchema: z.ZodType<Prisma.StoryUncheckedUpdateManyWithoutArtistNestedInput> = z.object({
  create: z.union([ z.lazy(() => StoryCreateWithoutArtistInputSchema),z.lazy(() => StoryCreateWithoutArtistInputSchema).array(),z.lazy(() => StoryUncheckedCreateWithoutArtistInputSchema),z.lazy(() => StoryUncheckedCreateWithoutArtistInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => StoryCreateOrConnectWithoutArtistInputSchema),z.lazy(() => StoryCreateOrConnectWithoutArtistInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => StoryUpsertWithWhereUniqueWithoutArtistInputSchema),z.lazy(() => StoryUpsertWithWhereUniqueWithoutArtistInputSchema).array() ]).optional(),
  createMany: z.lazy(() => StoryCreateManyArtistInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => StoryWhereUniqueInputSchema),z.lazy(() => StoryWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => StoryWhereUniqueInputSchema),z.lazy(() => StoryWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => StoryWhereUniqueInputSchema),z.lazy(() => StoryWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => StoryWhereUniqueInputSchema),z.lazy(() => StoryWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => StoryUpdateWithWhereUniqueWithoutArtistInputSchema),z.lazy(() => StoryUpdateWithWhereUniqueWithoutArtistInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => StoryUpdateManyWithWhereWithoutArtistInputSchema),z.lazy(() => StoryUpdateManyWithWhereWithoutArtistInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => StoryScalarWhereInputSchema),z.lazy(() => StoryScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const PageArtworkUncheckedUpdateManyWithoutArtistNestedInputSchema: z.ZodType<Prisma.PageArtworkUncheckedUpdateManyWithoutArtistNestedInput> = z.object({
  create: z.union([ z.lazy(() => PageArtworkCreateWithoutArtistInputSchema),z.lazy(() => PageArtworkCreateWithoutArtistInputSchema).array(),z.lazy(() => PageArtworkUncheckedCreateWithoutArtistInputSchema),z.lazy(() => PageArtworkUncheckedCreateWithoutArtistInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PageArtworkCreateOrConnectWithoutArtistInputSchema),z.lazy(() => PageArtworkCreateOrConnectWithoutArtistInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PageArtworkUpsertWithWhereUniqueWithoutArtistInputSchema),z.lazy(() => PageArtworkUpsertWithWhereUniqueWithoutArtistInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PageArtworkCreateManyArtistInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => PageArtworkWhereUniqueInputSchema),z.lazy(() => PageArtworkWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PageArtworkWhereUniqueInputSchema),z.lazy(() => PageArtworkWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PageArtworkWhereUniqueInputSchema),z.lazy(() => PageArtworkWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PageArtworkWhereUniqueInputSchema),z.lazy(() => PageArtworkWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PageArtworkUpdateWithWhereUniqueWithoutArtistInputSchema),z.lazy(() => PageArtworkUpdateWithWhereUniqueWithoutArtistInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PageArtworkUpdateManyWithWhereWithoutArtistInputSchema),z.lazy(() => PageArtworkUpdateManyWithWhereWithoutArtistInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PageArtworkScalarWhereInputSchema),z.lazy(() => PageArtworkScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const PageTextCreateNestedManyWithoutTranslatorInputSchema: z.ZodType<Prisma.PageTextCreateNestedManyWithoutTranslatorInput> = z.object({
  create: z.union([ z.lazy(() => PageTextCreateWithoutTranslatorInputSchema),z.lazy(() => PageTextCreateWithoutTranslatorInputSchema).array(),z.lazy(() => PageTextUncheckedCreateWithoutTranslatorInputSchema),z.lazy(() => PageTextUncheckedCreateWithoutTranslatorInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PageTextCreateOrConnectWithoutTranslatorInputSchema),z.lazy(() => PageTextCreateOrConnectWithoutTranslatorInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PageTextCreateManyTranslatorInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => PageTextWhereUniqueInputSchema),z.lazy(() => PageTextWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const PageTextUncheckedCreateNestedManyWithoutTranslatorInputSchema: z.ZodType<Prisma.PageTextUncheckedCreateNestedManyWithoutTranslatorInput> = z.object({
  create: z.union([ z.lazy(() => PageTextCreateWithoutTranslatorInputSchema),z.lazy(() => PageTextCreateWithoutTranslatorInputSchema).array(),z.lazy(() => PageTextUncheckedCreateWithoutTranslatorInputSchema),z.lazy(() => PageTextUncheckedCreateWithoutTranslatorInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PageTextCreateOrConnectWithoutTranslatorInputSchema),z.lazy(() => PageTextCreateOrConnectWithoutTranslatorInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PageTextCreateManyTranslatorInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => PageTextWhereUniqueInputSchema),z.lazy(() => PageTextWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const PageTextUpdateManyWithoutTranslatorNestedInputSchema: z.ZodType<Prisma.PageTextUpdateManyWithoutTranslatorNestedInput> = z.object({
  create: z.union([ z.lazy(() => PageTextCreateWithoutTranslatorInputSchema),z.lazy(() => PageTextCreateWithoutTranslatorInputSchema).array(),z.lazy(() => PageTextUncheckedCreateWithoutTranslatorInputSchema),z.lazy(() => PageTextUncheckedCreateWithoutTranslatorInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PageTextCreateOrConnectWithoutTranslatorInputSchema),z.lazy(() => PageTextCreateOrConnectWithoutTranslatorInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PageTextUpsertWithWhereUniqueWithoutTranslatorInputSchema),z.lazy(() => PageTextUpsertWithWhereUniqueWithoutTranslatorInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PageTextCreateManyTranslatorInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => PageTextWhereUniqueInputSchema),z.lazy(() => PageTextWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PageTextWhereUniqueInputSchema),z.lazy(() => PageTextWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PageTextWhereUniqueInputSchema),z.lazy(() => PageTextWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PageTextWhereUniqueInputSchema),z.lazy(() => PageTextWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PageTextUpdateWithWhereUniqueWithoutTranslatorInputSchema),z.lazy(() => PageTextUpdateWithWhereUniqueWithoutTranslatorInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PageTextUpdateManyWithWhereWithoutTranslatorInputSchema),z.lazy(() => PageTextUpdateManyWithWhereWithoutTranslatorInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PageTextScalarWhereInputSchema),z.lazy(() => PageTextScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const PageTextUncheckedUpdateManyWithoutTranslatorNestedInputSchema: z.ZodType<Prisma.PageTextUncheckedUpdateManyWithoutTranslatorNestedInput> = z.object({
  create: z.union([ z.lazy(() => PageTextCreateWithoutTranslatorInputSchema),z.lazy(() => PageTextCreateWithoutTranslatorInputSchema).array(),z.lazy(() => PageTextUncheckedCreateWithoutTranslatorInputSchema),z.lazy(() => PageTextUncheckedCreateWithoutTranslatorInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PageTextCreateOrConnectWithoutTranslatorInputSchema),z.lazy(() => PageTextCreateOrConnectWithoutTranslatorInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PageTextUpsertWithWhereUniqueWithoutTranslatorInputSchema),z.lazy(() => PageTextUpsertWithWhereUniqueWithoutTranslatorInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PageTextCreateManyTranslatorInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => PageTextWhereUniqueInputSchema),z.lazy(() => PageTextWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PageTextWhereUniqueInputSchema),z.lazy(() => PageTextWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PageTextWhereUniqueInputSchema),z.lazy(() => PageTextWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PageTextWhereUniqueInputSchema),z.lazy(() => PageTextWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PageTextUpdateWithWhereUniqueWithoutTranslatorInputSchema),z.lazy(() => PageTextUpdateWithWhereUniqueWithoutTranslatorInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PageTextUpdateManyWithWhereWithoutTranslatorInputSchema),z.lazy(() => PageTextUpdateManyWithWhereWithoutTranslatorInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PageTextScalarWhereInputSchema),z.lazy(() => PageTextScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ArtistCreateNestedOneWithoutStoriesInputSchema: z.ZodType<Prisma.ArtistCreateNestedOneWithoutStoriesInput> = z.object({
  create: z.union([ z.lazy(() => ArtistCreateWithoutStoriesInputSchema),z.lazy(() => ArtistUncheckedCreateWithoutStoriesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ArtistCreateOrConnectWithoutStoriesInputSchema).optional(),
  connect: z.lazy(() => ArtistWhereUniqueInputSchema).optional()
}).strict();

export const AuthorCreateNestedOneWithoutStoriesInputSchema: z.ZodType<Prisma.AuthorCreateNestedOneWithoutStoriesInput> = z.object({
  create: z.union([ z.lazy(() => AuthorCreateWithoutStoriesInputSchema),z.lazy(() => AuthorUncheckedCreateWithoutStoriesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => AuthorCreateOrConnectWithoutStoriesInputSchema).optional(),
  connect: z.lazy(() => AuthorWhereUniqueInputSchema).optional()
}).strict();

export const PageCreateNestedManyWithoutStoryInputSchema: z.ZodType<Prisma.PageCreateNestedManyWithoutStoryInput> = z.object({
  create: z.union([ z.lazy(() => PageCreateWithoutStoryInputSchema),z.lazy(() => PageCreateWithoutStoryInputSchema).array(),z.lazy(() => PageUncheckedCreateWithoutStoryInputSchema),z.lazy(() => PageUncheckedCreateWithoutStoryInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PageCreateOrConnectWithoutStoryInputSchema),z.lazy(() => PageCreateOrConnectWithoutStoryInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PageCreateManyStoryInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => PageWhereUniqueInputSchema),z.lazy(() => PageWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const PageArtworkCreateNestedManyWithoutStoryInputSchema: z.ZodType<Prisma.PageArtworkCreateNestedManyWithoutStoryInput> = z.object({
  create: z.union([ z.lazy(() => PageArtworkCreateWithoutStoryInputSchema),z.lazy(() => PageArtworkCreateWithoutStoryInputSchema).array(),z.lazy(() => PageArtworkUncheckedCreateWithoutStoryInputSchema),z.lazy(() => PageArtworkUncheckedCreateWithoutStoryInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PageArtworkCreateOrConnectWithoutStoryInputSchema),z.lazy(() => PageArtworkCreateOrConnectWithoutStoryInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PageArtworkCreateManyStoryInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => PageArtworkWhereUniqueInputSchema),z.lazy(() => PageArtworkWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const PageTextCreateNestedManyWithoutStoryInputSchema: z.ZodType<Prisma.PageTextCreateNestedManyWithoutStoryInput> = z.object({
  create: z.union([ z.lazy(() => PageTextCreateWithoutStoryInputSchema),z.lazy(() => PageTextCreateWithoutStoryInputSchema).array(),z.lazy(() => PageTextUncheckedCreateWithoutStoryInputSchema),z.lazy(() => PageTextUncheckedCreateWithoutStoryInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PageTextCreateOrConnectWithoutStoryInputSchema),z.lazy(() => PageTextCreateOrConnectWithoutStoryInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PageTextCreateManyStoryInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => PageTextWhereUniqueInputSchema),z.lazy(() => PageTextWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const PageUncheckedCreateNestedManyWithoutStoryInputSchema: z.ZodType<Prisma.PageUncheckedCreateNestedManyWithoutStoryInput> = z.object({
  create: z.union([ z.lazy(() => PageCreateWithoutStoryInputSchema),z.lazy(() => PageCreateWithoutStoryInputSchema).array(),z.lazy(() => PageUncheckedCreateWithoutStoryInputSchema),z.lazy(() => PageUncheckedCreateWithoutStoryInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PageCreateOrConnectWithoutStoryInputSchema),z.lazy(() => PageCreateOrConnectWithoutStoryInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PageCreateManyStoryInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => PageWhereUniqueInputSchema),z.lazy(() => PageWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const PageArtworkUncheckedCreateNestedManyWithoutStoryInputSchema: z.ZodType<Prisma.PageArtworkUncheckedCreateNestedManyWithoutStoryInput> = z.object({
  create: z.union([ z.lazy(() => PageArtworkCreateWithoutStoryInputSchema),z.lazy(() => PageArtworkCreateWithoutStoryInputSchema).array(),z.lazy(() => PageArtworkUncheckedCreateWithoutStoryInputSchema),z.lazy(() => PageArtworkUncheckedCreateWithoutStoryInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PageArtworkCreateOrConnectWithoutStoryInputSchema),z.lazy(() => PageArtworkCreateOrConnectWithoutStoryInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PageArtworkCreateManyStoryInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => PageArtworkWhereUniqueInputSchema),z.lazy(() => PageArtworkWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const PageTextUncheckedCreateNestedManyWithoutStoryInputSchema: z.ZodType<Prisma.PageTextUncheckedCreateNestedManyWithoutStoryInput> = z.object({
  create: z.union([ z.lazy(() => PageTextCreateWithoutStoryInputSchema),z.lazy(() => PageTextCreateWithoutStoryInputSchema).array(),z.lazy(() => PageTextUncheckedCreateWithoutStoryInputSchema),z.lazy(() => PageTextUncheckedCreateWithoutStoryInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PageTextCreateOrConnectWithoutStoryInputSchema),z.lazy(() => PageTextCreateOrConnectWithoutStoryInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PageTextCreateManyStoryInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => PageTextWhereUniqueInputSchema),z.lazy(() => PageTextWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const ArtistUpdateOneWithoutStoriesNestedInputSchema: z.ZodType<Prisma.ArtistUpdateOneWithoutStoriesNestedInput> = z.object({
  create: z.union([ z.lazy(() => ArtistCreateWithoutStoriesInputSchema),z.lazy(() => ArtistUncheckedCreateWithoutStoriesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ArtistCreateOrConnectWithoutStoriesInputSchema).optional(),
  upsert: z.lazy(() => ArtistUpsertWithoutStoriesInputSchema).optional(),
  disconnect: z.boolean().optional(),
  delete: z.boolean().optional(),
  connect: z.lazy(() => ArtistWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ArtistUpdateWithoutStoriesInputSchema),z.lazy(() => ArtistUncheckedUpdateWithoutStoriesInputSchema) ]).optional(),
}).strict();

export const AuthorUpdateOneWithoutStoriesNestedInputSchema: z.ZodType<Prisma.AuthorUpdateOneWithoutStoriesNestedInput> = z.object({
  create: z.union([ z.lazy(() => AuthorCreateWithoutStoriesInputSchema),z.lazy(() => AuthorUncheckedCreateWithoutStoriesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => AuthorCreateOrConnectWithoutStoriesInputSchema).optional(),
  upsert: z.lazy(() => AuthorUpsertWithoutStoriesInputSchema).optional(),
  disconnect: z.boolean().optional(),
  delete: z.boolean().optional(),
  connect: z.lazy(() => AuthorWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => AuthorUpdateWithoutStoriesInputSchema),z.lazy(() => AuthorUncheckedUpdateWithoutStoriesInputSchema) ]).optional(),
}).strict();

export const PageUpdateManyWithoutStoryNestedInputSchema: z.ZodType<Prisma.PageUpdateManyWithoutStoryNestedInput> = z.object({
  create: z.union([ z.lazy(() => PageCreateWithoutStoryInputSchema),z.lazy(() => PageCreateWithoutStoryInputSchema).array(),z.lazy(() => PageUncheckedCreateWithoutStoryInputSchema),z.lazy(() => PageUncheckedCreateWithoutStoryInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PageCreateOrConnectWithoutStoryInputSchema),z.lazy(() => PageCreateOrConnectWithoutStoryInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PageUpsertWithWhereUniqueWithoutStoryInputSchema),z.lazy(() => PageUpsertWithWhereUniqueWithoutStoryInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PageCreateManyStoryInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => PageWhereUniqueInputSchema),z.lazy(() => PageWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PageWhereUniqueInputSchema),z.lazy(() => PageWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PageWhereUniqueInputSchema),z.lazy(() => PageWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PageWhereUniqueInputSchema),z.lazy(() => PageWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PageUpdateWithWhereUniqueWithoutStoryInputSchema),z.lazy(() => PageUpdateWithWhereUniqueWithoutStoryInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PageUpdateManyWithWhereWithoutStoryInputSchema),z.lazy(() => PageUpdateManyWithWhereWithoutStoryInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PageScalarWhereInputSchema),z.lazy(() => PageScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const PageArtworkUpdateManyWithoutStoryNestedInputSchema: z.ZodType<Prisma.PageArtworkUpdateManyWithoutStoryNestedInput> = z.object({
  create: z.union([ z.lazy(() => PageArtworkCreateWithoutStoryInputSchema),z.lazy(() => PageArtworkCreateWithoutStoryInputSchema).array(),z.lazy(() => PageArtworkUncheckedCreateWithoutStoryInputSchema),z.lazy(() => PageArtworkUncheckedCreateWithoutStoryInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PageArtworkCreateOrConnectWithoutStoryInputSchema),z.lazy(() => PageArtworkCreateOrConnectWithoutStoryInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PageArtworkUpsertWithWhereUniqueWithoutStoryInputSchema),z.lazy(() => PageArtworkUpsertWithWhereUniqueWithoutStoryInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PageArtworkCreateManyStoryInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => PageArtworkWhereUniqueInputSchema),z.lazy(() => PageArtworkWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PageArtworkWhereUniqueInputSchema),z.lazy(() => PageArtworkWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PageArtworkWhereUniqueInputSchema),z.lazy(() => PageArtworkWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PageArtworkWhereUniqueInputSchema),z.lazy(() => PageArtworkWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PageArtworkUpdateWithWhereUniqueWithoutStoryInputSchema),z.lazy(() => PageArtworkUpdateWithWhereUniqueWithoutStoryInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PageArtworkUpdateManyWithWhereWithoutStoryInputSchema),z.lazy(() => PageArtworkUpdateManyWithWhereWithoutStoryInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PageArtworkScalarWhereInputSchema),z.lazy(() => PageArtworkScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const PageTextUpdateManyWithoutStoryNestedInputSchema: z.ZodType<Prisma.PageTextUpdateManyWithoutStoryNestedInput> = z.object({
  create: z.union([ z.lazy(() => PageTextCreateWithoutStoryInputSchema),z.lazy(() => PageTextCreateWithoutStoryInputSchema).array(),z.lazy(() => PageTextUncheckedCreateWithoutStoryInputSchema),z.lazy(() => PageTextUncheckedCreateWithoutStoryInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PageTextCreateOrConnectWithoutStoryInputSchema),z.lazy(() => PageTextCreateOrConnectWithoutStoryInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PageTextUpsertWithWhereUniqueWithoutStoryInputSchema),z.lazy(() => PageTextUpsertWithWhereUniqueWithoutStoryInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PageTextCreateManyStoryInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => PageTextWhereUniqueInputSchema),z.lazy(() => PageTextWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PageTextWhereUniqueInputSchema),z.lazy(() => PageTextWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PageTextWhereUniqueInputSchema),z.lazy(() => PageTextWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PageTextWhereUniqueInputSchema),z.lazy(() => PageTextWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PageTextUpdateWithWhereUniqueWithoutStoryInputSchema),z.lazy(() => PageTextUpdateWithWhereUniqueWithoutStoryInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PageTextUpdateManyWithWhereWithoutStoryInputSchema),z.lazy(() => PageTextUpdateManyWithWhereWithoutStoryInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PageTextScalarWhereInputSchema),z.lazy(() => PageTextScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const NullableStringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableStringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional().nullable()
}).strict();

export const PageUncheckedUpdateManyWithoutStoryNestedInputSchema: z.ZodType<Prisma.PageUncheckedUpdateManyWithoutStoryNestedInput> = z.object({
  create: z.union([ z.lazy(() => PageCreateWithoutStoryInputSchema),z.lazy(() => PageCreateWithoutStoryInputSchema).array(),z.lazy(() => PageUncheckedCreateWithoutStoryInputSchema),z.lazy(() => PageUncheckedCreateWithoutStoryInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PageCreateOrConnectWithoutStoryInputSchema),z.lazy(() => PageCreateOrConnectWithoutStoryInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PageUpsertWithWhereUniqueWithoutStoryInputSchema),z.lazy(() => PageUpsertWithWhereUniqueWithoutStoryInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PageCreateManyStoryInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => PageWhereUniqueInputSchema),z.lazy(() => PageWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PageWhereUniqueInputSchema),z.lazy(() => PageWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PageWhereUniqueInputSchema),z.lazy(() => PageWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PageWhereUniqueInputSchema),z.lazy(() => PageWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PageUpdateWithWhereUniqueWithoutStoryInputSchema),z.lazy(() => PageUpdateWithWhereUniqueWithoutStoryInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PageUpdateManyWithWhereWithoutStoryInputSchema),z.lazy(() => PageUpdateManyWithWhereWithoutStoryInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PageScalarWhereInputSchema),z.lazy(() => PageScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const PageArtworkUncheckedUpdateManyWithoutStoryNestedInputSchema: z.ZodType<Prisma.PageArtworkUncheckedUpdateManyWithoutStoryNestedInput> = z.object({
  create: z.union([ z.lazy(() => PageArtworkCreateWithoutStoryInputSchema),z.lazy(() => PageArtworkCreateWithoutStoryInputSchema).array(),z.lazy(() => PageArtworkUncheckedCreateWithoutStoryInputSchema),z.lazy(() => PageArtworkUncheckedCreateWithoutStoryInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PageArtworkCreateOrConnectWithoutStoryInputSchema),z.lazy(() => PageArtworkCreateOrConnectWithoutStoryInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PageArtworkUpsertWithWhereUniqueWithoutStoryInputSchema),z.lazy(() => PageArtworkUpsertWithWhereUniqueWithoutStoryInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PageArtworkCreateManyStoryInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => PageArtworkWhereUniqueInputSchema),z.lazy(() => PageArtworkWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PageArtworkWhereUniqueInputSchema),z.lazy(() => PageArtworkWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PageArtworkWhereUniqueInputSchema),z.lazy(() => PageArtworkWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PageArtworkWhereUniqueInputSchema),z.lazy(() => PageArtworkWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PageArtworkUpdateWithWhereUniqueWithoutStoryInputSchema),z.lazy(() => PageArtworkUpdateWithWhereUniqueWithoutStoryInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PageArtworkUpdateManyWithWhereWithoutStoryInputSchema),z.lazy(() => PageArtworkUpdateManyWithWhereWithoutStoryInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PageArtworkScalarWhereInputSchema),z.lazy(() => PageArtworkScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const PageTextUncheckedUpdateManyWithoutStoryNestedInputSchema: z.ZodType<Prisma.PageTextUncheckedUpdateManyWithoutStoryNestedInput> = z.object({
  create: z.union([ z.lazy(() => PageTextCreateWithoutStoryInputSchema),z.lazy(() => PageTextCreateWithoutStoryInputSchema).array(),z.lazy(() => PageTextUncheckedCreateWithoutStoryInputSchema),z.lazy(() => PageTextUncheckedCreateWithoutStoryInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PageTextCreateOrConnectWithoutStoryInputSchema),z.lazy(() => PageTextCreateOrConnectWithoutStoryInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PageTextUpsertWithWhereUniqueWithoutStoryInputSchema),z.lazy(() => PageTextUpsertWithWhereUniqueWithoutStoryInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PageTextCreateManyStoryInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => PageTextWhereUniqueInputSchema),z.lazy(() => PageTextWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PageTextWhereUniqueInputSchema),z.lazy(() => PageTextWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PageTextWhereUniqueInputSchema),z.lazy(() => PageTextWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PageTextWhereUniqueInputSchema),z.lazy(() => PageTextWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PageTextUpdateWithWhereUniqueWithoutStoryInputSchema),z.lazy(() => PageTextUpdateWithWhereUniqueWithoutStoryInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PageTextUpdateManyWithWhereWithoutStoryInputSchema),z.lazy(() => PageTextUpdateManyWithWhereWithoutStoryInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PageTextScalarWhereInputSchema),z.lazy(() => PageTextScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const PageCreateNestedOneWithoutArtworksInputSchema: z.ZodType<Prisma.PageCreateNestedOneWithoutArtworksInput> = z.object({
  create: z.union([ z.lazy(() => PageCreateWithoutArtworksInputSchema),z.lazy(() => PageUncheckedCreateWithoutArtworksInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PageCreateOrConnectWithoutArtworksInputSchema).optional(),
  connect: z.lazy(() => PageWhereUniqueInputSchema).optional()
}).strict();

export const StoryCreateNestedOneWithoutPageArtworksInputSchema: z.ZodType<Prisma.StoryCreateNestedOneWithoutPageArtworksInput> = z.object({
  create: z.union([ z.lazy(() => StoryCreateWithoutPageArtworksInputSchema),z.lazy(() => StoryUncheckedCreateWithoutPageArtworksInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => StoryCreateOrConnectWithoutPageArtworksInputSchema).optional(),
  connect: z.lazy(() => StoryWhereUniqueInputSchema).optional()
}).strict();

export const ArtistCreateNestedOneWithoutPageArtworksInputSchema: z.ZodType<Prisma.ArtistCreateNestedOneWithoutPageArtworksInput> = z.object({
  create: z.union([ z.lazy(() => ArtistCreateWithoutPageArtworksInputSchema),z.lazy(() => ArtistUncheckedCreateWithoutPageArtworksInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ArtistCreateOrConnectWithoutPageArtworksInputSchema).optional(),
  connect: z.lazy(() => ArtistWhereUniqueInputSchema).optional()
}).strict();

export const PhotoCreateNestedOneWithoutPageArtworksInputSchema: z.ZodType<Prisma.PhotoCreateNestedOneWithoutPageArtworksInput> = z.object({
  create: z.union([ z.lazy(() => PhotoCreateWithoutPageArtworksInputSchema),z.lazy(() => PhotoUncheckedCreateWithoutPageArtworksInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PhotoCreateOrConnectWithoutPageArtworksInputSchema).optional(),
  connect: z.lazy(() => PhotoWhereUniqueInputSchema).optional()
}).strict();

export const EnumPageStatusFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumPageStatusFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => PageStatusSchema).optional()
}).strict();

export const PageUpdateOneRequiredWithoutArtworksNestedInputSchema: z.ZodType<Prisma.PageUpdateOneRequiredWithoutArtworksNestedInput> = z.object({
  create: z.union([ z.lazy(() => PageCreateWithoutArtworksInputSchema),z.lazy(() => PageUncheckedCreateWithoutArtworksInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PageCreateOrConnectWithoutArtworksInputSchema).optional(),
  upsert: z.lazy(() => PageUpsertWithoutArtworksInputSchema).optional(),
  connect: z.lazy(() => PageWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => PageUpdateWithoutArtworksInputSchema),z.lazy(() => PageUncheckedUpdateWithoutArtworksInputSchema) ]).optional(),
}).strict();

export const StoryUpdateOneRequiredWithoutPageArtworksNestedInputSchema: z.ZodType<Prisma.StoryUpdateOneRequiredWithoutPageArtworksNestedInput> = z.object({
  create: z.union([ z.lazy(() => StoryCreateWithoutPageArtworksInputSchema),z.lazy(() => StoryUncheckedCreateWithoutPageArtworksInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => StoryCreateOrConnectWithoutPageArtworksInputSchema).optional(),
  upsert: z.lazy(() => StoryUpsertWithoutPageArtworksInputSchema).optional(),
  connect: z.lazy(() => StoryWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => StoryUpdateWithoutPageArtworksInputSchema),z.lazy(() => StoryUncheckedUpdateWithoutPageArtworksInputSchema) ]).optional(),
}).strict();

export const ArtistUpdateOneRequiredWithoutPageArtworksNestedInputSchema: z.ZodType<Prisma.ArtistUpdateOneRequiredWithoutPageArtworksNestedInput> = z.object({
  create: z.union([ z.lazy(() => ArtistCreateWithoutPageArtworksInputSchema),z.lazy(() => ArtistUncheckedCreateWithoutPageArtworksInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ArtistCreateOrConnectWithoutPageArtworksInputSchema).optional(),
  upsert: z.lazy(() => ArtistUpsertWithoutPageArtworksInputSchema).optional(),
  connect: z.lazy(() => ArtistWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ArtistUpdateWithoutPageArtworksInputSchema),z.lazy(() => ArtistUncheckedUpdateWithoutPageArtworksInputSchema) ]).optional(),
}).strict();

export const PhotoUpdateOneRequiredWithoutPageArtworksNestedInputSchema: z.ZodType<Prisma.PhotoUpdateOneRequiredWithoutPageArtworksNestedInput> = z.object({
  create: z.union([ z.lazy(() => PhotoCreateWithoutPageArtworksInputSchema),z.lazy(() => PhotoUncheckedCreateWithoutPageArtworksInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PhotoCreateOrConnectWithoutPageArtworksInputSchema).optional(),
  upsert: z.lazy(() => PhotoUpsertWithoutPageArtworksInputSchema).optional(),
  connect: z.lazy(() => PhotoWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => PhotoUpdateWithoutPageArtworksInputSchema),z.lazy(() => PhotoUncheckedUpdateWithoutPageArtworksInputSchema) ]).optional(),
}).strict();

export const PageCreateNestedOneWithoutTextsInputSchema: z.ZodType<Prisma.PageCreateNestedOneWithoutTextsInput> = z.object({
  create: z.union([ z.lazy(() => PageCreateWithoutTextsInputSchema),z.lazy(() => PageUncheckedCreateWithoutTextsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PageCreateOrConnectWithoutTextsInputSchema).optional(),
  connect: z.lazy(() => PageWhereUniqueInputSchema).optional()
}).strict();

export const StoryCreateNestedOneWithoutPageTextsInputSchema: z.ZodType<Prisma.StoryCreateNestedOneWithoutPageTextsInput> = z.object({
  create: z.union([ z.lazy(() => StoryCreateWithoutPageTextsInputSchema),z.lazy(() => StoryUncheckedCreateWithoutPageTextsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => StoryCreateOrConnectWithoutPageTextsInputSchema).optional(),
  connect: z.lazy(() => StoryWhereUniqueInputSchema).optional()
}).strict();

export const AuthorCreateNestedOneWithoutPageTextsInputSchema: z.ZodType<Prisma.AuthorCreateNestedOneWithoutPageTextsInput> = z.object({
  create: z.union([ z.lazy(() => AuthorCreateWithoutPageTextsInputSchema),z.lazy(() => AuthorUncheckedCreateWithoutPageTextsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => AuthorCreateOrConnectWithoutPageTextsInputSchema).optional(),
  connect: z.lazy(() => AuthorWhereUniqueInputSchema).optional()
}).strict();

export const TranslatorCreateNestedOneWithoutPageTextsInputSchema: z.ZodType<Prisma.TranslatorCreateNestedOneWithoutPageTextsInput> = z.object({
  create: z.union([ z.lazy(() => TranslatorCreateWithoutPageTextsInputSchema),z.lazy(() => TranslatorUncheckedCreateWithoutPageTextsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TranslatorCreateOrConnectWithoutPageTextsInputSchema).optional(),
  connect: z.lazy(() => TranslatorWhereUniqueInputSchema).optional()
}).strict();

export const EnumLocaleFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumLocaleFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => LocaleSchema).optional()
}).strict();

export const EnumPageTextTypeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumPageTextTypeFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => PageTextTypeSchema).optional()
}).strict();

export const PageUpdateOneRequiredWithoutTextsNestedInputSchema: z.ZodType<Prisma.PageUpdateOneRequiredWithoutTextsNestedInput> = z.object({
  create: z.union([ z.lazy(() => PageCreateWithoutTextsInputSchema),z.lazy(() => PageUncheckedCreateWithoutTextsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PageCreateOrConnectWithoutTextsInputSchema).optional(),
  upsert: z.lazy(() => PageUpsertWithoutTextsInputSchema).optional(),
  connect: z.lazy(() => PageWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => PageUpdateWithoutTextsInputSchema),z.lazy(() => PageUncheckedUpdateWithoutTextsInputSchema) ]).optional(),
}).strict();

export const StoryUpdateOneRequiredWithoutPageTextsNestedInputSchema: z.ZodType<Prisma.StoryUpdateOneRequiredWithoutPageTextsNestedInput> = z.object({
  create: z.union([ z.lazy(() => StoryCreateWithoutPageTextsInputSchema),z.lazy(() => StoryUncheckedCreateWithoutPageTextsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => StoryCreateOrConnectWithoutPageTextsInputSchema).optional(),
  upsert: z.lazy(() => StoryUpsertWithoutPageTextsInputSchema).optional(),
  connect: z.lazy(() => StoryWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => StoryUpdateWithoutPageTextsInputSchema),z.lazy(() => StoryUncheckedUpdateWithoutPageTextsInputSchema) ]).optional(),
}).strict();

export const AuthorUpdateOneWithoutPageTextsNestedInputSchema: z.ZodType<Prisma.AuthorUpdateOneWithoutPageTextsNestedInput> = z.object({
  create: z.union([ z.lazy(() => AuthorCreateWithoutPageTextsInputSchema),z.lazy(() => AuthorUncheckedCreateWithoutPageTextsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => AuthorCreateOrConnectWithoutPageTextsInputSchema).optional(),
  upsert: z.lazy(() => AuthorUpsertWithoutPageTextsInputSchema).optional(),
  disconnect: z.boolean().optional(),
  delete: z.boolean().optional(),
  connect: z.lazy(() => AuthorWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => AuthorUpdateWithoutPageTextsInputSchema),z.lazy(() => AuthorUncheckedUpdateWithoutPageTextsInputSchema) ]).optional(),
}).strict();

export const TranslatorUpdateOneWithoutPageTextsNestedInputSchema: z.ZodType<Prisma.TranslatorUpdateOneWithoutPageTextsNestedInput> = z.object({
  create: z.union([ z.lazy(() => TranslatorCreateWithoutPageTextsInputSchema),z.lazy(() => TranslatorUncheckedCreateWithoutPageTextsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TranslatorCreateOrConnectWithoutPageTextsInputSchema).optional(),
  upsert: z.lazy(() => TranslatorUpsertWithoutPageTextsInputSchema).optional(),
  disconnect: z.boolean().optional(),
  delete: z.boolean().optional(),
  connect: z.lazy(() => TranslatorWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => TranslatorUpdateWithoutPageTextsInputSchema),z.lazy(() => TranslatorUncheckedUpdateWithoutPageTextsInputSchema) ]).optional(),
}).strict();

export const StoryCreateNestedOneWithoutPagesInputSchema: z.ZodType<Prisma.StoryCreateNestedOneWithoutPagesInput> = z.object({
  create: z.union([ z.lazy(() => StoryCreateWithoutPagesInputSchema),z.lazy(() => StoryUncheckedCreateWithoutPagesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => StoryCreateOrConnectWithoutPagesInputSchema).optional(),
  connect: z.lazy(() => StoryWhereUniqueInputSchema).optional()
}).strict();

export const PageArtworkCreateNestedManyWithoutPageInputSchema: z.ZodType<Prisma.PageArtworkCreateNestedManyWithoutPageInput> = z.object({
  create: z.union([ z.lazy(() => PageArtworkCreateWithoutPageInputSchema),z.lazy(() => PageArtworkCreateWithoutPageInputSchema).array(),z.lazy(() => PageArtworkUncheckedCreateWithoutPageInputSchema),z.lazy(() => PageArtworkUncheckedCreateWithoutPageInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PageArtworkCreateOrConnectWithoutPageInputSchema),z.lazy(() => PageArtworkCreateOrConnectWithoutPageInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PageArtworkCreateManyPageInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => PageArtworkWhereUniqueInputSchema),z.lazy(() => PageArtworkWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const PageTextCreateNestedManyWithoutPageInputSchema: z.ZodType<Prisma.PageTextCreateNestedManyWithoutPageInput> = z.object({
  create: z.union([ z.lazy(() => PageTextCreateWithoutPageInputSchema),z.lazy(() => PageTextCreateWithoutPageInputSchema).array(),z.lazy(() => PageTextUncheckedCreateWithoutPageInputSchema),z.lazy(() => PageTextUncheckedCreateWithoutPageInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PageTextCreateOrConnectWithoutPageInputSchema),z.lazy(() => PageTextCreateOrConnectWithoutPageInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PageTextCreateManyPageInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => PageTextWhereUniqueInputSchema),z.lazy(() => PageTextWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const PageArtworkUncheckedCreateNestedManyWithoutPageInputSchema: z.ZodType<Prisma.PageArtworkUncheckedCreateNestedManyWithoutPageInput> = z.object({
  create: z.union([ z.lazy(() => PageArtworkCreateWithoutPageInputSchema),z.lazy(() => PageArtworkCreateWithoutPageInputSchema).array(),z.lazy(() => PageArtworkUncheckedCreateWithoutPageInputSchema),z.lazy(() => PageArtworkUncheckedCreateWithoutPageInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PageArtworkCreateOrConnectWithoutPageInputSchema),z.lazy(() => PageArtworkCreateOrConnectWithoutPageInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PageArtworkCreateManyPageInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => PageArtworkWhereUniqueInputSchema),z.lazy(() => PageArtworkWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const PageTextUncheckedCreateNestedManyWithoutPageInputSchema: z.ZodType<Prisma.PageTextUncheckedCreateNestedManyWithoutPageInput> = z.object({
  create: z.union([ z.lazy(() => PageTextCreateWithoutPageInputSchema),z.lazy(() => PageTextCreateWithoutPageInputSchema).array(),z.lazy(() => PageTextUncheckedCreateWithoutPageInputSchema),z.lazy(() => PageTextUncheckedCreateWithoutPageInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PageTextCreateOrConnectWithoutPageInputSchema),z.lazy(() => PageTextCreateOrConnectWithoutPageInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PageTextCreateManyPageInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => PageTextWhereUniqueInputSchema),z.lazy(() => PageTextWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const EnumPageTypeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumPageTypeFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => PageTypeSchema).optional()
}).strict();

export const StoryUpdateOneRequiredWithoutPagesNestedInputSchema: z.ZodType<Prisma.StoryUpdateOneRequiredWithoutPagesNestedInput> = z.object({
  create: z.union([ z.lazy(() => StoryCreateWithoutPagesInputSchema),z.lazy(() => StoryUncheckedCreateWithoutPagesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => StoryCreateOrConnectWithoutPagesInputSchema).optional(),
  upsert: z.lazy(() => StoryUpsertWithoutPagesInputSchema).optional(),
  connect: z.lazy(() => StoryWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => StoryUpdateWithoutPagesInputSchema),z.lazy(() => StoryUncheckedUpdateWithoutPagesInputSchema) ]).optional(),
}).strict();

export const PageArtworkUpdateManyWithoutPageNestedInputSchema: z.ZodType<Prisma.PageArtworkUpdateManyWithoutPageNestedInput> = z.object({
  create: z.union([ z.lazy(() => PageArtworkCreateWithoutPageInputSchema),z.lazy(() => PageArtworkCreateWithoutPageInputSchema).array(),z.lazy(() => PageArtworkUncheckedCreateWithoutPageInputSchema),z.lazy(() => PageArtworkUncheckedCreateWithoutPageInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PageArtworkCreateOrConnectWithoutPageInputSchema),z.lazy(() => PageArtworkCreateOrConnectWithoutPageInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PageArtworkUpsertWithWhereUniqueWithoutPageInputSchema),z.lazy(() => PageArtworkUpsertWithWhereUniqueWithoutPageInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PageArtworkCreateManyPageInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => PageArtworkWhereUniqueInputSchema),z.lazy(() => PageArtworkWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PageArtworkWhereUniqueInputSchema),z.lazy(() => PageArtworkWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PageArtworkWhereUniqueInputSchema),z.lazy(() => PageArtworkWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PageArtworkWhereUniqueInputSchema),z.lazy(() => PageArtworkWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PageArtworkUpdateWithWhereUniqueWithoutPageInputSchema),z.lazy(() => PageArtworkUpdateWithWhereUniqueWithoutPageInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PageArtworkUpdateManyWithWhereWithoutPageInputSchema),z.lazy(() => PageArtworkUpdateManyWithWhereWithoutPageInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PageArtworkScalarWhereInputSchema),z.lazy(() => PageArtworkScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const PageTextUpdateManyWithoutPageNestedInputSchema: z.ZodType<Prisma.PageTextUpdateManyWithoutPageNestedInput> = z.object({
  create: z.union([ z.lazy(() => PageTextCreateWithoutPageInputSchema),z.lazy(() => PageTextCreateWithoutPageInputSchema).array(),z.lazy(() => PageTextUncheckedCreateWithoutPageInputSchema),z.lazy(() => PageTextUncheckedCreateWithoutPageInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PageTextCreateOrConnectWithoutPageInputSchema),z.lazy(() => PageTextCreateOrConnectWithoutPageInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PageTextUpsertWithWhereUniqueWithoutPageInputSchema),z.lazy(() => PageTextUpsertWithWhereUniqueWithoutPageInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PageTextCreateManyPageInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => PageTextWhereUniqueInputSchema),z.lazy(() => PageTextWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PageTextWhereUniqueInputSchema),z.lazy(() => PageTextWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PageTextWhereUniqueInputSchema),z.lazy(() => PageTextWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PageTextWhereUniqueInputSchema),z.lazy(() => PageTextWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PageTextUpdateWithWhereUniqueWithoutPageInputSchema),z.lazy(() => PageTextUpdateWithWhereUniqueWithoutPageInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PageTextUpdateManyWithWhereWithoutPageInputSchema),z.lazy(() => PageTextUpdateManyWithWhereWithoutPageInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PageTextScalarWhereInputSchema),z.lazy(() => PageTextScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const PageArtworkUncheckedUpdateManyWithoutPageNestedInputSchema: z.ZodType<Prisma.PageArtworkUncheckedUpdateManyWithoutPageNestedInput> = z.object({
  create: z.union([ z.lazy(() => PageArtworkCreateWithoutPageInputSchema),z.lazy(() => PageArtworkCreateWithoutPageInputSchema).array(),z.lazy(() => PageArtworkUncheckedCreateWithoutPageInputSchema),z.lazy(() => PageArtworkUncheckedCreateWithoutPageInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PageArtworkCreateOrConnectWithoutPageInputSchema),z.lazy(() => PageArtworkCreateOrConnectWithoutPageInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PageArtworkUpsertWithWhereUniqueWithoutPageInputSchema),z.lazy(() => PageArtworkUpsertWithWhereUniqueWithoutPageInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PageArtworkCreateManyPageInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => PageArtworkWhereUniqueInputSchema),z.lazy(() => PageArtworkWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PageArtworkWhereUniqueInputSchema),z.lazy(() => PageArtworkWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PageArtworkWhereUniqueInputSchema),z.lazy(() => PageArtworkWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PageArtworkWhereUniqueInputSchema),z.lazy(() => PageArtworkWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PageArtworkUpdateWithWhereUniqueWithoutPageInputSchema),z.lazy(() => PageArtworkUpdateWithWhereUniqueWithoutPageInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PageArtworkUpdateManyWithWhereWithoutPageInputSchema),z.lazy(() => PageArtworkUpdateManyWithWhereWithoutPageInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PageArtworkScalarWhereInputSchema),z.lazy(() => PageArtworkScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const PageTextUncheckedUpdateManyWithoutPageNestedInputSchema: z.ZodType<Prisma.PageTextUncheckedUpdateManyWithoutPageNestedInput> = z.object({
  create: z.union([ z.lazy(() => PageTextCreateWithoutPageInputSchema),z.lazy(() => PageTextCreateWithoutPageInputSchema).array(),z.lazy(() => PageTextUncheckedCreateWithoutPageInputSchema),z.lazy(() => PageTextUncheckedCreateWithoutPageInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PageTextCreateOrConnectWithoutPageInputSchema),z.lazy(() => PageTextCreateOrConnectWithoutPageInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PageTextUpsertWithWhereUniqueWithoutPageInputSchema),z.lazy(() => PageTextUpsertWithWhereUniqueWithoutPageInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PageTextCreateManyPageInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => PageTextWhereUniqueInputSchema),z.lazy(() => PageTextWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PageTextWhereUniqueInputSchema),z.lazy(() => PageTextWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PageTextWhereUniqueInputSchema),z.lazy(() => PageTextWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PageTextWhereUniqueInputSchema),z.lazy(() => PageTextWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PageTextUpdateWithWhereUniqueWithoutPageInputSchema),z.lazy(() => PageTextUpdateWithWhereUniqueWithoutPageInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PageTextUpdateManyWithWhereWithoutPageInputSchema),z.lazy(() => PageTextUpdateManyWithWhereWithoutPageInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PageTextScalarWhereInputSchema),z.lazy(() => PageTextScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const UserCreateNestedOneWithoutEditionInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutEditionInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutEditionInputSchema),z.lazy(() => UserUncheckedCreateWithoutEditionInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutEditionInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export const PDFCreateNestedOneWithoutBookInputSchema: z.ZodType<Prisma.PDFCreateNestedOneWithoutBookInput> = z.object({
  create: z.union([ z.lazy(() => PDFCreateWithoutBookInputSchema),z.lazy(() => PDFUncheckedCreateWithoutBookInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PDFCreateOrConnectWithoutBookInputSchema).optional(),
  connect: z.lazy(() => PDFWhereUniqueInputSchema).optional()
}).strict();

export const UserUpdateOneRequiredWithoutEditionNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutEditionNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutEditionInputSchema),z.lazy(() => UserUncheckedCreateWithoutEditionInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutEditionInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutEditionInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateWithoutEditionInputSchema),z.lazy(() => UserUncheckedUpdateWithoutEditionInputSchema) ]).optional(),
}).strict();

export const PDFUpdateOneRequiredWithoutBookNestedInputSchema: z.ZodType<Prisma.PDFUpdateOneRequiredWithoutBookNestedInput> = z.object({
  create: z.union([ z.lazy(() => PDFCreateWithoutBookInputSchema),z.lazy(() => PDFUncheckedCreateWithoutBookInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PDFCreateOrConnectWithoutBookInputSchema).optional(),
  upsert: z.lazy(() => PDFUpsertWithoutBookInputSchema).optional(),
  connect: z.lazy(() => PDFWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => PDFUpdateWithoutBookInputSchema),z.lazy(() => PDFUncheckedUpdateWithoutBookInputSchema) ]).optional(),
}).strict();

export const UserCreateNestedOneWithoutConceptInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutConceptInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutConceptInputSchema),z.lazy(() => UserUncheckedCreateWithoutConceptInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutConceptInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export const PhotoCreateNestedManyWithoutConceptsInputSchema: z.ZodType<Prisma.PhotoCreateNestedManyWithoutConceptsInput> = z.object({
  create: z.union([ z.lazy(() => PhotoCreateWithoutConceptsInputSchema),z.lazy(() => PhotoCreateWithoutConceptsInputSchema).array(),z.lazy(() => PhotoUncheckedCreateWithoutConceptsInputSchema),z.lazy(() => PhotoUncheckedCreateWithoutConceptsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PhotoCreateOrConnectWithoutConceptsInputSchema),z.lazy(() => PhotoCreateOrConnectWithoutConceptsInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PhotoWhereUniqueInputSchema),z.lazy(() => PhotoWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const PhotoUncheckedCreateNestedManyWithoutConceptsInputSchema: z.ZodType<Prisma.PhotoUncheckedCreateNestedManyWithoutConceptsInput> = z.object({
  create: z.union([ z.lazy(() => PhotoCreateWithoutConceptsInputSchema),z.lazy(() => PhotoCreateWithoutConceptsInputSchema).array(),z.lazy(() => PhotoUncheckedCreateWithoutConceptsInputSchema),z.lazy(() => PhotoUncheckedCreateWithoutConceptsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PhotoCreateOrConnectWithoutConceptsInputSchema),z.lazy(() => PhotoCreateOrConnectWithoutConceptsInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PhotoWhereUniqueInputSchema),z.lazy(() => PhotoWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const EnumConceptTypeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumConceptTypeFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => ConceptTypeSchema).optional()
}).strict();

export const UserUpdateOneWithoutConceptNestedInputSchema: z.ZodType<Prisma.UserUpdateOneWithoutConceptNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutConceptInputSchema),z.lazy(() => UserUncheckedCreateWithoutConceptInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutConceptInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutConceptInputSchema).optional(),
  disconnect: z.boolean().optional(),
  delete: z.boolean().optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateWithoutConceptInputSchema),z.lazy(() => UserUncheckedUpdateWithoutConceptInputSchema) ]).optional(),
}).strict();

export const PhotoUpdateManyWithoutConceptsNestedInputSchema: z.ZodType<Prisma.PhotoUpdateManyWithoutConceptsNestedInput> = z.object({
  create: z.union([ z.lazy(() => PhotoCreateWithoutConceptsInputSchema),z.lazy(() => PhotoCreateWithoutConceptsInputSchema).array(),z.lazy(() => PhotoUncheckedCreateWithoutConceptsInputSchema),z.lazy(() => PhotoUncheckedCreateWithoutConceptsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PhotoCreateOrConnectWithoutConceptsInputSchema),z.lazy(() => PhotoCreateOrConnectWithoutConceptsInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PhotoUpsertWithWhereUniqueWithoutConceptsInputSchema),z.lazy(() => PhotoUpsertWithWhereUniqueWithoutConceptsInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => PhotoWhereUniqueInputSchema),z.lazy(() => PhotoWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PhotoWhereUniqueInputSchema),z.lazy(() => PhotoWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PhotoWhereUniqueInputSchema),z.lazy(() => PhotoWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PhotoWhereUniqueInputSchema),z.lazy(() => PhotoWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PhotoUpdateWithWhereUniqueWithoutConceptsInputSchema),z.lazy(() => PhotoUpdateWithWhereUniqueWithoutConceptsInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PhotoUpdateManyWithWhereWithoutConceptsInputSchema),z.lazy(() => PhotoUpdateManyWithWhereWithoutConceptsInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PhotoScalarWhereInputSchema),z.lazy(() => PhotoScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const PhotoUncheckedUpdateManyWithoutConceptsNestedInputSchema: z.ZodType<Prisma.PhotoUncheckedUpdateManyWithoutConceptsNestedInput> = z.object({
  create: z.union([ z.lazy(() => PhotoCreateWithoutConceptsInputSchema),z.lazy(() => PhotoCreateWithoutConceptsInputSchema).array(),z.lazy(() => PhotoUncheckedCreateWithoutConceptsInputSchema),z.lazy(() => PhotoUncheckedCreateWithoutConceptsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PhotoCreateOrConnectWithoutConceptsInputSchema),z.lazy(() => PhotoCreateOrConnectWithoutConceptsInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PhotoUpsertWithWhereUniqueWithoutConceptsInputSchema),z.lazy(() => PhotoUpsertWithWhereUniqueWithoutConceptsInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => PhotoWhereUniqueInputSchema),z.lazy(() => PhotoWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PhotoWhereUniqueInputSchema),z.lazy(() => PhotoWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PhotoWhereUniqueInputSchema),z.lazy(() => PhotoWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PhotoWhereUniqueInputSchema),z.lazy(() => PhotoWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PhotoUpdateWithWhereUniqueWithoutConceptsInputSchema),z.lazy(() => PhotoUpdateWithWhereUniqueWithoutConceptsInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PhotoUpdateManyWithWhereWithoutConceptsInputSchema),z.lazy(() => PhotoUpdateManyWithWhereWithoutConceptsInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PhotoScalarWhereInputSchema),z.lazy(() => PhotoScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const NullableDateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableDateTimeFieldUpdateOperationsInput> = z.object({
  set: z.coerce.date().optional().nullable()
}).strict();

export const NestedStringFilterSchema: z.ZodType<Prisma.NestedStringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const NestedEnumFileResourceTypeFilterSchema: z.ZodType<Prisma.NestedEnumFileResourceTypeFilter> = z.object({
  equals: z.lazy(() => FileResourceTypeSchema).optional(),
  in: z.lazy(() => FileResourceTypeSchema).array().optional(),
  notIn: z.lazy(() => FileResourceTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => FileResourceTypeSchema),z.lazy(() => NestedEnumFileResourceTypeFilterSchema) ]).optional(),
}).strict();

export const NestedIntFilterSchema: z.ZodType<Prisma.NestedIntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const NestedEnumFilePrivacyFilterSchema: z.ZodType<Prisma.NestedEnumFilePrivacyFilter> = z.object({
  equals: z.lazy(() => FilePrivacySchema).optional(),
  in: z.lazy(() => FilePrivacySchema).array().optional(),
  notIn: z.lazy(() => FilePrivacySchema).array().optional(),
  not: z.union([ z.lazy(() => FilePrivacySchema),z.lazy(() => NestedEnumFilePrivacyFilterSchema) ]).optional(),
}).strict();

export const NestedDateTimeFilterSchema: z.ZodType<Prisma.NestedDateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict();

export const NestedStringWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const NestedEnumFileResourceTypeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumFileResourceTypeWithAggregatesFilter> = z.object({
  equals: z.lazy(() => FileResourceTypeSchema).optional(),
  in: z.lazy(() => FileResourceTypeSchema).array().optional(),
  notIn: z.lazy(() => FileResourceTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => FileResourceTypeSchema),z.lazy(() => NestedEnumFileResourceTypeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumFileResourceTypeFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumFileResourceTypeFilterSchema).optional()
}).strict();

export const NestedIntWithAggregatesFilterSchema: z.ZodType<Prisma.NestedIntWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedIntFilterSchema).optional(),
  _max: z.lazy(() => NestedIntFilterSchema).optional()
}).strict();

export const NestedFloatFilterSchema: z.ZodType<Prisma.NestedFloatFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatFilterSchema) ]).optional(),
}).strict();

export const NestedIntNullableFilterSchema: z.ZodType<Prisma.NestedIntNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedJsonNullableFilterSchema: z.ZodType<Prisma.NestedJsonNullableFilter> = z.object({
  equals: z.union([ InputJsonValue,z.lazy(() => JsonNullValueFilterSchema) ]).optional(),
  path: z.string().array().optional(),
  string_contains: z.string().optional(),
  string_starts_with: z.string().optional(),
  string_ends_with: z.string().optional(),
  array_contains: InputJsonValue.optional().nullable(),
  array_starts_with: InputJsonValue.optional().nullable(),
  array_ends_with: InputJsonValue.optional().nullable(),
  lt: InputJsonValue.optional(),
  lte: InputJsonValue.optional(),
  gt: InputJsonValue.optional(),
  gte: InputJsonValue.optional(),
  not: z.union([ InputJsonValue,z.lazy(() => JsonNullValueFilterSchema) ]).optional(),
}).strict();

export const NestedEnumFilePrivacyWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumFilePrivacyWithAggregatesFilter> = z.object({
  equals: z.lazy(() => FilePrivacySchema).optional(),
  in: z.lazy(() => FilePrivacySchema).array().optional(),
  notIn: z.lazy(() => FilePrivacySchema).array().optional(),
  not: z.union([ z.lazy(() => FilePrivacySchema),z.lazy(() => NestedEnumFilePrivacyWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumFilePrivacyFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumFilePrivacyFilterSchema).optional()
}).strict();

export const NestedDateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedDateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

export const NestedStringNullableFilterSchema: z.ZodType<Prisma.NestedStringNullableFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedStringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringNullableWithAggregatesFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional()
}).strict();

export const NestedEnumPageStatusFilterSchema: z.ZodType<Prisma.NestedEnumPageStatusFilter> = z.object({
  equals: z.lazy(() => PageStatusSchema).optional(),
  in: z.lazy(() => PageStatusSchema).array().optional(),
  notIn: z.lazy(() => PageStatusSchema).array().optional(),
  not: z.union([ z.lazy(() => PageStatusSchema),z.lazy(() => NestedEnumPageStatusFilterSchema) ]).optional(),
}).strict();

export const NestedEnumPageStatusWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumPageStatusWithAggregatesFilter> = z.object({
  equals: z.lazy(() => PageStatusSchema).optional(),
  in: z.lazy(() => PageStatusSchema).array().optional(),
  notIn: z.lazy(() => PageStatusSchema).array().optional(),
  not: z.union([ z.lazy(() => PageStatusSchema),z.lazy(() => NestedEnumPageStatusWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumPageStatusFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumPageStatusFilterSchema).optional()
}).strict();

export const NestedEnumLocaleFilterSchema: z.ZodType<Prisma.NestedEnumLocaleFilter> = z.object({
  equals: z.lazy(() => LocaleSchema).optional(),
  in: z.lazy(() => LocaleSchema).array().optional(),
  notIn: z.lazy(() => LocaleSchema).array().optional(),
  not: z.union([ z.lazy(() => LocaleSchema),z.lazy(() => NestedEnumLocaleFilterSchema) ]).optional(),
}).strict();

export const NestedEnumPageTextTypeFilterSchema: z.ZodType<Prisma.NestedEnumPageTextTypeFilter> = z.object({
  equals: z.lazy(() => PageTextTypeSchema).optional(),
  in: z.lazy(() => PageTextTypeSchema).array().optional(),
  notIn: z.lazy(() => PageTextTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => PageTextTypeSchema),z.lazy(() => NestedEnumPageTextTypeFilterSchema) ]).optional(),
}).strict();

export const NestedEnumLocaleWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumLocaleWithAggregatesFilter> = z.object({
  equals: z.lazy(() => LocaleSchema).optional(),
  in: z.lazy(() => LocaleSchema).array().optional(),
  notIn: z.lazy(() => LocaleSchema).array().optional(),
  not: z.union([ z.lazy(() => LocaleSchema),z.lazy(() => NestedEnumLocaleWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumLocaleFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumLocaleFilterSchema).optional()
}).strict();

export const NestedEnumPageTextTypeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumPageTextTypeWithAggregatesFilter> = z.object({
  equals: z.lazy(() => PageTextTypeSchema).optional(),
  in: z.lazy(() => PageTextTypeSchema).array().optional(),
  notIn: z.lazy(() => PageTextTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => PageTextTypeSchema),z.lazy(() => NestedEnumPageTextTypeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumPageTextTypeFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumPageTextTypeFilterSchema).optional()
}).strict();

export const NestedEnumPageTypeFilterSchema: z.ZodType<Prisma.NestedEnumPageTypeFilter> = z.object({
  equals: z.lazy(() => PageTypeSchema).optional(),
  in: z.lazy(() => PageTypeSchema).array().optional(),
  notIn: z.lazy(() => PageTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => PageTypeSchema),z.lazy(() => NestedEnumPageTypeFilterSchema) ]).optional(),
}).strict();

export const NestedEnumPageTypeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumPageTypeWithAggregatesFilter> = z.object({
  equals: z.lazy(() => PageTypeSchema).optional(),
  in: z.lazy(() => PageTypeSchema).array().optional(),
  notIn: z.lazy(() => PageTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => PageTypeSchema),z.lazy(() => NestedEnumPageTypeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumPageTypeFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumPageTypeFilterSchema).optional()
}).strict();

export const NestedEnumConceptTypeFilterSchema: z.ZodType<Prisma.NestedEnumConceptTypeFilter> = z.object({
  equals: z.lazy(() => ConceptTypeSchema).optional(),
  in: z.lazy(() => ConceptTypeSchema).array().optional(),
  notIn: z.lazy(() => ConceptTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => ConceptTypeSchema),z.lazy(() => NestedEnumConceptTypeFilterSchema) ]).optional(),
}).strict();

export const NestedEnumConceptTypeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumConceptTypeWithAggregatesFilter> = z.object({
  equals: z.lazy(() => ConceptTypeSchema).optional(),
  in: z.lazy(() => ConceptTypeSchema).array().optional(),
  notIn: z.lazy(() => ConceptTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => ConceptTypeSchema),z.lazy(() => NestedEnumConceptTypeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumConceptTypeFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumConceptTypeFilterSchema).optional()
}).strict();

export const NestedDateTimeNullableFilterSchema: z.ZodType<Prisma.NestedDateTimeNullableFilter> = z.object({
  equals: z.coerce.date().optional().nullable(),
  in: z.coerce.date().array().optional().nullable(),
  notIn: z.coerce.date().array().optional().nullable(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedDateTimeNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedDateTimeNullableWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional().nullable(),
  in: z.coerce.date().array().optional().nullable(),
  notIn: z.coerce.date().array().optional().nullable(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeNullableFilterSchema).optional()
}).strict();

export const PhotoCreateWithoutFileInputSchema: z.ZodType<Prisma.PhotoCreateWithoutFileInput> = z.object({
  id: z.string().optional(),
  height: z.number(),
  width: z.number(),
  tags: z.union([ z.lazy(() => PhotoCreatetagsInputSchema),z.string().array() ]).optional(),
  createdAt: z.coerce.date().optional(),
  pageArtworks: z.lazy(() => PageArtworkCreateNestedManyWithoutPhotoInputSchema).optional(),
  concepts: z.lazy(() => ConceptCreateNestedManyWithoutPhotosInputSchema).optional()
}).strict();

export const PhotoUncheckedCreateWithoutFileInputSchema: z.ZodType<Prisma.PhotoUncheckedCreateWithoutFileInput> = z.object({
  id: z.string().optional(),
  height: z.number(),
  width: z.number(),
  tags: z.union([ z.lazy(() => PhotoCreatetagsInputSchema),z.string().array() ]).optional(),
  createdAt: z.coerce.date().optional(),
  pageArtworks: z.lazy(() => PageArtworkUncheckedCreateNestedManyWithoutPhotoInputSchema).optional(),
  concepts: z.lazy(() => ConceptUncheckedCreateNestedManyWithoutPhotosInputSchema).optional()
}).strict();

export const PhotoCreateOrConnectWithoutFileInputSchema: z.ZodType<Prisma.PhotoCreateOrConnectWithoutFileInput> = z.object({
  where: z.lazy(() => PhotoWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PhotoCreateWithoutFileInputSchema),z.lazy(() => PhotoUncheckedCreateWithoutFileInputSchema) ]),
}).strict();

export const PDFCreateWithoutFileInputSchema: z.ZodType<Prisma.PDFCreateWithoutFileInput> = z.object({
  id: z.string().optional(),
  height: z.number(),
  width: z.number(),
  pages: z.number(),
  tags: z.union([ z.lazy(() => PDFCreatetagsInputSchema),z.string().array() ]).optional(),
  createdAt: z.coerce.date().optional(),
  book: z.lazy(() => EditionCreateNestedOneWithoutPdfInputSchema).optional()
}).strict();

export const PDFUncheckedCreateWithoutFileInputSchema: z.ZodType<Prisma.PDFUncheckedCreateWithoutFileInput> = z.object({
  id: z.string().optional(),
  height: z.number(),
  width: z.number(),
  pages: z.number(),
  tags: z.union([ z.lazy(() => PDFCreatetagsInputSchema),z.string().array() ]).optional(),
  createdAt: z.coerce.date().optional(),
  book: z.lazy(() => EditionUncheckedCreateNestedOneWithoutPdfInputSchema).optional()
}).strict();

export const PDFCreateOrConnectWithoutFileInputSchema: z.ZodType<Prisma.PDFCreateOrConnectWithoutFileInput> = z.object({
  where: z.lazy(() => PDFWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PDFCreateWithoutFileInputSchema),z.lazy(() => PDFUncheckedCreateWithoutFileInputSchema) ]),
}).strict();

export const PhotoUpsertWithoutFileInputSchema: z.ZodType<Prisma.PhotoUpsertWithoutFileInput> = z.object({
  update: z.union([ z.lazy(() => PhotoUpdateWithoutFileInputSchema),z.lazy(() => PhotoUncheckedUpdateWithoutFileInputSchema) ]),
  create: z.union([ z.lazy(() => PhotoCreateWithoutFileInputSchema),z.lazy(() => PhotoUncheckedCreateWithoutFileInputSchema) ]),
}).strict();

export const PhotoUpdateWithoutFileInputSchema: z.ZodType<Prisma.PhotoUpdateWithoutFileInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  height: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  width: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  tags: z.union([ z.lazy(() => PhotoUpdatetagsInputSchema),z.string().array() ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  pageArtworks: z.lazy(() => PageArtworkUpdateManyWithoutPhotoNestedInputSchema).optional(),
  concepts: z.lazy(() => ConceptUpdateManyWithoutPhotosNestedInputSchema).optional()
}).strict();

export const PhotoUncheckedUpdateWithoutFileInputSchema: z.ZodType<Prisma.PhotoUncheckedUpdateWithoutFileInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  height: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  width: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  tags: z.union([ z.lazy(() => PhotoUpdatetagsInputSchema),z.string().array() ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  pageArtworks: z.lazy(() => PageArtworkUncheckedUpdateManyWithoutPhotoNestedInputSchema).optional(),
  concepts: z.lazy(() => ConceptUncheckedUpdateManyWithoutPhotosNestedInputSchema).optional()
}).strict();

export const PDFUpsertWithoutFileInputSchema: z.ZodType<Prisma.PDFUpsertWithoutFileInput> = z.object({
  update: z.union([ z.lazy(() => PDFUpdateWithoutFileInputSchema),z.lazy(() => PDFUncheckedUpdateWithoutFileInputSchema) ]),
  create: z.union([ z.lazy(() => PDFCreateWithoutFileInputSchema),z.lazy(() => PDFUncheckedCreateWithoutFileInputSchema) ]),
}).strict();

export const PDFUpdateWithoutFileInputSchema: z.ZodType<Prisma.PDFUpdateWithoutFileInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  height: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  width: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  pages: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  tags: z.union([ z.lazy(() => PDFUpdatetagsInputSchema),z.string().array() ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  book: z.lazy(() => EditionUpdateOneWithoutPdfNestedInputSchema).optional()
}).strict();

export const PDFUncheckedUpdateWithoutFileInputSchema: z.ZodType<Prisma.PDFUncheckedUpdateWithoutFileInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  height: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  width: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  pages: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  tags: z.union([ z.lazy(() => PDFUpdatetagsInputSchema),z.string().array() ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  book: z.lazy(() => EditionUncheckedUpdateOneWithoutPdfNestedInputSchema).optional()
}).strict();

export const CloudFileCreateWithoutPhotoInputSchema: z.ZodType<Prisma.CloudFileCreateWithoutPhotoInput> = z.object({
  id: z.string().optional(),
  resourceType: z.lazy(() => FileResourceTypeSchema),
  filename: z.string(),
  size: z.number(),
  ext: z.string(),
  mime: z.string(),
  metadata: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValue ]).optional(),
  path: z.string(),
  signature: z.string(),
  privacy: z.lazy(() => FilePrivacySchema).optional(),
  createdAt: z.coerce.date().optional(),
  PDF: z.lazy(() => PDFCreateNestedOneWithoutFileInputSchema).optional()
}).strict();

export const CloudFileUncheckedCreateWithoutPhotoInputSchema: z.ZodType<Prisma.CloudFileUncheckedCreateWithoutPhotoInput> = z.object({
  id: z.string().optional(),
  resourceType: z.lazy(() => FileResourceTypeSchema),
  filename: z.string(),
  size: z.number(),
  ext: z.string(),
  mime: z.string(),
  metadata: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValue ]).optional(),
  path: z.string(),
  signature: z.string(),
  privacy: z.lazy(() => FilePrivacySchema).optional(),
  createdAt: z.coerce.date().optional(),
  PDF: z.lazy(() => PDFUncheckedCreateNestedOneWithoutFileInputSchema).optional()
}).strict();

export const CloudFileCreateOrConnectWithoutPhotoInputSchema: z.ZodType<Prisma.CloudFileCreateOrConnectWithoutPhotoInput> = z.object({
  where: z.lazy(() => CloudFileWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CloudFileCreateWithoutPhotoInputSchema),z.lazy(() => CloudFileUncheckedCreateWithoutPhotoInputSchema) ]),
}).strict();

export const PageArtworkCreateWithoutPhotoInputSchema: z.ZodType<Prisma.PageArtworkCreateWithoutPhotoInput> = z.object({
  id: z.string().optional(),
  status: z.lazy(() => PageStatusSchema).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  page: z.lazy(() => PageCreateNestedOneWithoutArtworksInputSchema),
  story: z.lazy(() => StoryCreateNestedOneWithoutPageArtworksInputSchema),
  artist: z.lazy(() => ArtistCreateNestedOneWithoutPageArtworksInputSchema)
}).strict();

export const PageArtworkUncheckedCreateWithoutPhotoInputSchema: z.ZodType<Prisma.PageArtworkUncheckedCreateWithoutPhotoInput> = z.object({
  id: z.string().optional(),
  status: z.lazy(() => PageStatusSchema).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  pageId: z.string(),
  storyId: z.string(),
  artistId: z.string()
}).strict();

export const PageArtworkCreateOrConnectWithoutPhotoInputSchema: z.ZodType<Prisma.PageArtworkCreateOrConnectWithoutPhotoInput> = z.object({
  where: z.lazy(() => PageArtworkWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PageArtworkCreateWithoutPhotoInputSchema),z.lazy(() => PageArtworkUncheckedCreateWithoutPhotoInputSchema) ]),
}).strict();

export const PageArtworkCreateManyPhotoInputEnvelopeSchema: z.ZodType<Prisma.PageArtworkCreateManyPhotoInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => PageArtworkCreateManyPhotoInputSchema),z.lazy(() => PageArtworkCreateManyPhotoInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const ConceptCreateWithoutPhotosInputSchema: z.ZodType<Prisma.ConceptCreateWithoutPhotosInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  type: z.lazy(() => ConceptTypeSchema),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutConceptInputSchema).optional()
}).strict();

export const ConceptUncheckedCreateWithoutPhotosInputSchema: z.ZodType<Prisma.ConceptUncheckedCreateWithoutPhotosInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  type: z.lazy(() => ConceptTypeSchema),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  userId: z.string().optional().nullable()
}).strict();

export const ConceptCreateOrConnectWithoutPhotosInputSchema: z.ZodType<Prisma.ConceptCreateOrConnectWithoutPhotosInput> = z.object({
  where: z.lazy(() => ConceptWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ConceptCreateWithoutPhotosInputSchema),z.lazy(() => ConceptUncheckedCreateWithoutPhotosInputSchema) ]),
}).strict();

export const CloudFileUpsertWithoutPhotoInputSchema: z.ZodType<Prisma.CloudFileUpsertWithoutPhotoInput> = z.object({
  update: z.union([ z.lazy(() => CloudFileUpdateWithoutPhotoInputSchema),z.lazy(() => CloudFileUncheckedUpdateWithoutPhotoInputSchema) ]),
  create: z.union([ z.lazy(() => CloudFileCreateWithoutPhotoInputSchema),z.lazy(() => CloudFileUncheckedCreateWithoutPhotoInputSchema) ]),
}).strict();

export const CloudFileUpdateWithoutPhotoInputSchema: z.ZodType<Prisma.CloudFileUpdateWithoutPhotoInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  resourceType: z.union([ z.lazy(() => FileResourceTypeSchema),z.lazy(() => EnumFileResourceTypeFieldUpdateOperationsInputSchema) ]).optional(),
  filename: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  size: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  ext: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  mime: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  metadata: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValue ]).optional(),
  path: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  signature: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  privacy: z.union([ z.lazy(() => FilePrivacySchema),z.lazy(() => EnumFilePrivacyFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  PDF: z.lazy(() => PDFUpdateOneWithoutFileNestedInputSchema).optional()
}).strict();

export const CloudFileUncheckedUpdateWithoutPhotoInputSchema: z.ZodType<Prisma.CloudFileUncheckedUpdateWithoutPhotoInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  resourceType: z.union([ z.lazy(() => FileResourceTypeSchema),z.lazy(() => EnumFileResourceTypeFieldUpdateOperationsInputSchema) ]).optional(),
  filename: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  size: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  ext: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  mime: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  metadata: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValue ]).optional(),
  path: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  signature: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  privacy: z.union([ z.lazy(() => FilePrivacySchema),z.lazy(() => EnumFilePrivacyFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  PDF: z.lazy(() => PDFUncheckedUpdateOneWithoutFileNestedInputSchema).optional()
}).strict();

export const PageArtworkUpsertWithWhereUniqueWithoutPhotoInputSchema: z.ZodType<Prisma.PageArtworkUpsertWithWhereUniqueWithoutPhotoInput> = z.object({
  where: z.lazy(() => PageArtworkWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => PageArtworkUpdateWithoutPhotoInputSchema),z.lazy(() => PageArtworkUncheckedUpdateWithoutPhotoInputSchema) ]),
  create: z.union([ z.lazy(() => PageArtworkCreateWithoutPhotoInputSchema),z.lazy(() => PageArtworkUncheckedCreateWithoutPhotoInputSchema) ]),
}).strict();

export const PageArtworkUpdateWithWhereUniqueWithoutPhotoInputSchema: z.ZodType<Prisma.PageArtworkUpdateWithWhereUniqueWithoutPhotoInput> = z.object({
  where: z.lazy(() => PageArtworkWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => PageArtworkUpdateWithoutPhotoInputSchema),z.lazy(() => PageArtworkUncheckedUpdateWithoutPhotoInputSchema) ]),
}).strict();

export const PageArtworkUpdateManyWithWhereWithoutPhotoInputSchema: z.ZodType<Prisma.PageArtworkUpdateManyWithWhereWithoutPhotoInput> = z.object({
  where: z.lazy(() => PageArtworkScalarWhereInputSchema),
  data: z.union([ z.lazy(() => PageArtworkUpdateManyMutationInputSchema),z.lazy(() => PageArtworkUncheckedUpdateManyWithoutPageArtworksInputSchema) ]),
}).strict();

export const PageArtworkScalarWhereInputSchema: z.ZodType<Prisma.PageArtworkScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => PageArtworkScalarWhereInputSchema),z.lazy(() => PageArtworkScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PageArtworkScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PageArtworkScalarWhereInputSchema),z.lazy(() => PageArtworkScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  status: z.union([ z.lazy(() => EnumPageStatusFilterSchema),z.lazy(() => PageStatusSchema) ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  pageId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  storyId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  artistId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  photoId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export const ConceptUpsertWithWhereUniqueWithoutPhotosInputSchema: z.ZodType<Prisma.ConceptUpsertWithWhereUniqueWithoutPhotosInput> = z.object({
  where: z.lazy(() => ConceptWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ConceptUpdateWithoutPhotosInputSchema),z.lazy(() => ConceptUncheckedUpdateWithoutPhotosInputSchema) ]),
  create: z.union([ z.lazy(() => ConceptCreateWithoutPhotosInputSchema),z.lazy(() => ConceptUncheckedCreateWithoutPhotosInputSchema) ]),
}).strict();

export const ConceptUpdateWithWhereUniqueWithoutPhotosInputSchema: z.ZodType<Prisma.ConceptUpdateWithWhereUniqueWithoutPhotosInput> = z.object({
  where: z.lazy(() => ConceptWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ConceptUpdateWithoutPhotosInputSchema),z.lazy(() => ConceptUncheckedUpdateWithoutPhotosInputSchema) ]),
}).strict();

export const ConceptUpdateManyWithWhereWithoutPhotosInputSchema: z.ZodType<Prisma.ConceptUpdateManyWithWhereWithoutPhotosInput> = z.object({
  where: z.lazy(() => ConceptScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ConceptUpdateManyMutationInputSchema),z.lazy(() => ConceptUncheckedUpdateManyWithoutConceptsInputSchema) ]),
}).strict();

export const ConceptScalarWhereInputSchema: z.ZodType<Prisma.ConceptScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ConceptScalarWhereInputSchema),z.lazy(() => ConceptScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ConceptScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ConceptScalarWhereInputSchema),z.lazy(() => ConceptScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  type: z.union([ z.lazy(() => EnumConceptTypeFilterSchema),z.lazy(() => ConceptTypeSchema) ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  userId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const CloudFileCreateWithoutPDFInputSchema: z.ZodType<Prisma.CloudFileCreateWithoutPDFInput> = z.object({
  id: z.string().optional(),
  resourceType: z.lazy(() => FileResourceTypeSchema),
  filename: z.string(),
  size: z.number(),
  ext: z.string(),
  mime: z.string(),
  metadata: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValue ]).optional(),
  path: z.string(),
  signature: z.string(),
  privacy: z.lazy(() => FilePrivacySchema).optional(),
  createdAt: z.coerce.date().optional(),
  Photo: z.lazy(() => PhotoCreateNestedOneWithoutFileInputSchema).optional()
}).strict();

export const CloudFileUncheckedCreateWithoutPDFInputSchema: z.ZodType<Prisma.CloudFileUncheckedCreateWithoutPDFInput> = z.object({
  id: z.string().optional(),
  resourceType: z.lazy(() => FileResourceTypeSchema),
  filename: z.string(),
  size: z.number(),
  ext: z.string(),
  mime: z.string(),
  metadata: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValue ]).optional(),
  path: z.string(),
  signature: z.string(),
  privacy: z.lazy(() => FilePrivacySchema).optional(),
  createdAt: z.coerce.date().optional(),
  Photo: z.lazy(() => PhotoUncheckedCreateNestedOneWithoutFileInputSchema).optional()
}).strict();

export const CloudFileCreateOrConnectWithoutPDFInputSchema: z.ZodType<Prisma.CloudFileCreateOrConnectWithoutPDFInput> = z.object({
  where: z.lazy(() => CloudFileWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CloudFileCreateWithoutPDFInputSchema),z.lazy(() => CloudFileUncheckedCreateWithoutPDFInputSchema) ]),
}).strict();

export const EditionCreateWithoutPdfInputSchema: z.ZodType<Prisma.EditionCreateWithoutPdfInput> = z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutEditionInputSchema)
}).strict();

export const EditionUncheckedCreateWithoutPdfInputSchema: z.ZodType<Prisma.EditionUncheckedCreateWithoutPdfInput> = z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  userId: z.string()
}).strict();

export const EditionCreateOrConnectWithoutPdfInputSchema: z.ZodType<Prisma.EditionCreateOrConnectWithoutPdfInput> = z.object({
  where: z.lazy(() => EditionWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => EditionCreateWithoutPdfInputSchema),z.lazy(() => EditionUncheckedCreateWithoutPdfInputSchema) ]),
}).strict();

export const CloudFileUpsertWithoutPDFInputSchema: z.ZodType<Prisma.CloudFileUpsertWithoutPDFInput> = z.object({
  update: z.union([ z.lazy(() => CloudFileUpdateWithoutPDFInputSchema),z.lazy(() => CloudFileUncheckedUpdateWithoutPDFInputSchema) ]),
  create: z.union([ z.lazy(() => CloudFileCreateWithoutPDFInputSchema),z.lazy(() => CloudFileUncheckedCreateWithoutPDFInputSchema) ]),
}).strict();

export const CloudFileUpdateWithoutPDFInputSchema: z.ZodType<Prisma.CloudFileUpdateWithoutPDFInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  resourceType: z.union([ z.lazy(() => FileResourceTypeSchema),z.lazy(() => EnumFileResourceTypeFieldUpdateOperationsInputSchema) ]).optional(),
  filename: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  size: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  ext: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  mime: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  metadata: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValue ]).optional(),
  path: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  signature: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  privacy: z.union([ z.lazy(() => FilePrivacySchema),z.lazy(() => EnumFilePrivacyFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  Photo: z.lazy(() => PhotoUpdateOneWithoutFileNestedInputSchema).optional()
}).strict();

export const CloudFileUncheckedUpdateWithoutPDFInputSchema: z.ZodType<Prisma.CloudFileUncheckedUpdateWithoutPDFInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  resourceType: z.union([ z.lazy(() => FileResourceTypeSchema),z.lazy(() => EnumFileResourceTypeFieldUpdateOperationsInputSchema) ]).optional(),
  filename: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  size: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  ext: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  mime: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  metadata: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValue ]).optional(),
  path: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  signature: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  privacy: z.union([ z.lazy(() => FilePrivacySchema),z.lazy(() => EnumFilePrivacyFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  Photo: z.lazy(() => PhotoUncheckedUpdateOneWithoutFileNestedInputSchema).optional()
}).strict();

export const EditionUpsertWithoutPdfInputSchema: z.ZodType<Prisma.EditionUpsertWithoutPdfInput> = z.object({
  update: z.union([ z.lazy(() => EditionUpdateWithoutPdfInputSchema),z.lazy(() => EditionUncheckedUpdateWithoutPdfInputSchema) ]),
  create: z.union([ z.lazy(() => EditionCreateWithoutPdfInputSchema),z.lazy(() => EditionUncheckedCreateWithoutPdfInputSchema) ]),
}).strict();

export const EditionUpdateWithoutPdfInputSchema: z.ZodType<Prisma.EditionUpdateWithoutPdfInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutEditionNestedInputSchema).optional()
}).strict();

export const EditionUncheckedUpdateWithoutPdfInputSchema: z.ZodType<Prisma.EditionUncheckedUpdateWithoutPdfInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const EditionCreateWithoutUserInputSchema: z.ZodType<Prisma.EditionCreateWithoutUserInput> = z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  pdf: z.lazy(() => PDFCreateNestedOneWithoutBookInputSchema)
}).strict();

export const EditionUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.EditionUncheckedCreateWithoutUserInput> = z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  pdfId: z.string()
}).strict();

export const EditionCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.EditionCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => EditionWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => EditionCreateWithoutUserInputSchema),z.lazy(() => EditionUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const EditionCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.EditionCreateManyUserInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => EditionCreateManyUserInputSchema),z.lazy(() => EditionCreateManyUserInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const ConceptCreateWithoutUserInputSchema: z.ZodType<Prisma.ConceptCreateWithoutUserInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  type: z.lazy(() => ConceptTypeSchema),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  photos: z.lazy(() => PhotoCreateNestedManyWithoutConceptsInputSchema).optional()
}).strict();

export const ConceptUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.ConceptUncheckedCreateWithoutUserInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  type: z.lazy(() => ConceptTypeSchema),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  photos: z.lazy(() => PhotoUncheckedCreateNestedManyWithoutConceptsInputSchema).optional()
}).strict();

export const ConceptCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.ConceptCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => ConceptWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ConceptCreateWithoutUserInputSchema),z.lazy(() => ConceptUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const EditionUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.EditionUpsertWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => EditionWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => EditionUpdateWithoutUserInputSchema),z.lazy(() => EditionUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => EditionCreateWithoutUserInputSchema),z.lazy(() => EditionUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const EditionUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.EditionUpdateWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => EditionWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => EditionUpdateWithoutUserInputSchema),z.lazy(() => EditionUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export const EditionUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.EditionUpdateManyWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => EditionScalarWhereInputSchema),
  data: z.union([ z.lazy(() => EditionUpdateManyMutationInputSchema),z.lazy(() => EditionUncheckedUpdateManyWithoutEditionInputSchema) ]),
}).strict();

export const EditionScalarWhereInputSchema: z.ZodType<Prisma.EditionScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => EditionScalarWhereInputSchema),z.lazy(() => EditionScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => EditionScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => EditionScalarWhereInputSchema),z.lazy(() => EditionScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  pdfId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export const ConceptUpsertWithoutUserInputSchema: z.ZodType<Prisma.ConceptUpsertWithoutUserInput> = z.object({
  update: z.union([ z.lazy(() => ConceptUpdateWithoutUserInputSchema),z.lazy(() => ConceptUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => ConceptCreateWithoutUserInputSchema),z.lazy(() => ConceptUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const ConceptUpdateWithoutUserInputSchema: z.ZodType<Prisma.ConceptUpdateWithoutUserInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => ConceptTypeSchema),z.lazy(() => EnumConceptTypeFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  photos: z.lazy(() => PhotoUpdateManyWithoutConceptsNestedInputSchema).optional()
}).strict();

export const ConceptUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.ConceptUncheckedUpdateWithoutUserInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => ConceptTypeSchema),z.lazy(() => EnumConceptTypeFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  photos: z.lazy(() => PhotoUncheckedUpdateManyWithoutConceptsNestedInputSchema).optional()
}).strict();

export const StoryCreateWithoutAuthorInputSchema: z.ZodType<Prisma.StoryCreateWithoutAuthorInput> = z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  artist: z.lazy(() => ArtistCreateNestedOneWithoutStoriesInputSchema).optional(),
  pages: z.lazy(() => PageCreateNestedManyWithoutStoryInputSchema).optional(),
  pageArtworks: z.lazy(() => PageArtworkCreateNestedManyWithoutStoryInputSchema).optional(),
  pageTexts: z.lazy(() => PageTextCreateNestedManyWithoutStoryInputSchema).optional()
}).strict();

export const StoryUncheckedCreateWithoutAuthorInputSchema: z.ZodType<Prisma.StoryUncheckedCreateWithoutAuthorInput> = z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  artistId: z.string().optional().nullable(),
  pages: z.lazy(() => PageUncheckedCreateNestedManyWithoutStoryInputSchema).optional(),
  pageArtworks: z.lazy(() => PageArtworkUncheckedCreateNestedManyWithoutStoryInputSchema).optional(),
  pageTexts: z.lazy(() => PageTextUncheckedCreateNestedManyWithoutStoryInputSchema).optional()
}).strict();

export const StoryCreateOrConnectWithoutAuthorInputSchema: z.ZodType<Prisma.StoryCreateOrConnectWithoutAuthorInput> = z.object({
  where: z.lazy(() => StoryWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => StoryCreateWithoutAuthorInputSchema),z.lazy(() => StoryUncheckedCreateWithoutAuthorInputSchema) ]),
}).strict();

export const StoryCreateManyAuthorInputEnvelopeSchema: z.ZodType<Prisma.StoryCreateManyAuthorInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => StoryCreateManyAuthorInputSchema),z.lazy(() => StoryCreateManyAuthorInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const PageTextCreateWithoutAuthorInputSchema: z.ZodType<Prisma.PageTextCreateWithoutAuthorInput> = z.object({
  id: z.string().optional(),
  status: z.lazy(() => PageStatusSchema).optional(),
  locale: z.lazy(() => LocaleSchema),
  text: z.string(),
  type: z.lazy(() => PageTextTypeSchema),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  page: z.lazy(() => PageCreateNestedOneWithoutTextsInputSchema),
  story: z.lazy(() => StoryCreateNestedOneWithoutPageTextsInputSchema),
  translator: z.lazy(() => TranslatorCreateNestedOneWithoutPageTextsInputSchema).optional()
}).strict();

export const PageTextUncheckedCreateWithoutAuthorInputSchema: z.ZodType<Prisma.PageTextUncheckedCreateWithoutAuthorInput> = z.object({
  id: z.string().optional(),
  status: z.lazy(() => PageStatusSchema).optional(),
  locale: z.lazy(() => LocaleSchema),
  text: z.string(),
  type: z.lazy(() => PageTextTypeSchema),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  pageId: z.string(),
  storyId: z.string(),
  translatorId: z.string().optional().nullable()
}).strict();

export const PageTextCreateOrConnectWithoutAuthorInputSchema: z.ZodType<Prisma.PageTextCreateOrConnectWithoutAuthorInput> = z.object({
  where: z.lazy(() => PageTextWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PageTextCreateWithoutAuthorInputSchema),z.lazy(() => PageTextUncheckedCreateWithoutAuthorInputSchema) ]),
}).strict();

export const PageTextCreateManyAuthorInputEnvelopeSchema: z.ZodType<Prisma.PageTextCreateManyAuthorInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => PageTextCreateManyAuthorInputSchema),z.lazy(() => PageTextCreateManyAuthorInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const StoryUpsertWithWhereUniqueWithoutAuthorInputSchema: z.ZodType<Prisma.StoryUpsertWithWhereUniqueWithoutAuthorInput> = z.object({
  where: z.lazy(() => StoryWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => StoryUpdateWithoutAuthorInputSchema),z.lazy(() => StoryUncheckedUpdateWithoutAuthorInputSchema) ]),
  create: z.union([ z.lazy(() => StoryCreateWithoutAuthorInputSchema),z.lazy(() => StoryUncheckedCreateWithoutAuthorInputSchema) ]),
}).strict();

export const StoryUpdateWithWhereUniqueWithoutAuthorInputSchema: z.ZodType<Prisma.StoryUpdateWithWhereUniqueWithoutAuthorInput> = z.object({
  where: z.lazy(() => StoryWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => StoryUpdateWithoutAuthorInputSchema),z.lazy(() => StoryUncheckedUpdateWithoutAuthorInputSchema) ]),
}).strict();

export const StoryUpdateManyWithWhereWithoutAuthorInputSchema: z.ZodType<Prisma.StoryUpdateManyWithWhereWithoutAuthorInput> = z.object({
  where: z.lazy(() => StoryScalarWhereInputSchema),
  data: z.union([ z.lazy(() => StoryUpdateManyMutationInputSchema),z.lazy(() => StoryUncheckedUpdateManyWithoutStoriesInputSchema) ]),
}).strict();

export const StoryScalarWhereInputSchema: z.ZodType<Prisma.StoryScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => StoryScalarWhereInputSchema),z.lazy(() => StoryScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => StoryScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => StoryScalarWhereInputSchema),z.lazy(() => StoryScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  artistId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  authorId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const PageTextUpsertWithWhereUniqueWithoutAuthorInputSchema: z.ZodType<Prisma.PageTextUpsertWithWhereUniqueWithoutAuthorInput> = z.object({
  where: z.lazy(() => PageTextWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => PageTextUpdateWithoutAuthorInputSchema),z.lazy(() => PageTextUncheckedUpdateWithoutAuthorInputSchema) ]),
  create: z.union([ z.lazy(() => PageTextCreateWithoutAuthorInputSchema),z.lazy(() => PageTextUncheckedCreateWithoutAuthorInputSchema) ]),
}).strict();

export const PageTextUpdateWithWhereUniqueWithoutAuthorInputSchema: z.ZodType<Prisma.PageTextUpdateWithWhereUniqueWithoutAuthorInput> = z.object({
  where: z.lazy(() => PageTextWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => PageTextUpdateWithoutAuthorInputSchema),z.lazy(() => PageTextUncheckedUpdateWithoutAuthorInputSchema) ]),
}).strict();

export const PageTextUpdateManyWithWhereWithoutAuthorInputSchema: z.ZodType<Prisma.PageTextUpdateManyWithWhereWithoutAuthorInput> = z.object({
  where: z.lazy(() => PageTextScalarWhereInputSchema),
  data: z.union([ z.lazy(() => PageTextUpdateManyMutationInputSchema),z.lazy(() => PageTextUncheckedUpdateManyWithoutPageTextsInputSchema) ]),
}).strict();

export const PageTextScalarWhereInputSchema: z.ZodType<Prisma.PageTextScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => PageTextScalarWhereInputSchema),z.lazy(() => PageTextScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PageTextScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PageTextScalarWhereInputSchema),z.lazy(() => PageTextScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  status: z.union([ z.lazy(() => EnumPageStatusFilterSchema),z.lazy(() => PageStatusSchema) ]).optional(),
  locale: z.union([ z.lazy(() => EnumLocaleFilterSchema),z.lazy(() => LocaleSchema) ]).optional(),
  text: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  type: z.union([ z.lazy(() => EnumPageTextTypeFilterSchema),z.lazy(() => PageTextTypeSchema) ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  pageId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  storyId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  authorId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  translatorId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const StoryCreateWithoutArtistInputSchema: z.ZodType<Prisma.StoryCreateWithoutArtistInput> = z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  author: z.lazy(() => AuthorCreateNestedOneWithoutStoriesInputSchema).optional(),
  pages: z.lazy(() => PageCreateNestedManyWithoutStoryInputSchema).optional(),
  pageArtworks: z.lazy(() => PageArtworkCreateNestedManyWithoutStoryInputSchema).optional(),
  pageTexts: z.lazy(() => PageTextCreateNestedManyWithoutStoryInputSchema).optional()
}).strict();

export const StoryUncheckedCreateWithoutArtistInputSchema: z.ZodType<Prisma.StoryUncheckedCreateWithoutArtistInput> = z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  authorId: z.string().optional().nullable(),
  pages: z.lazy(() => PageUncheckedCreateNestedManyWithoutStoryInputSchema).optional(),
  pageArtworks: z.lazy(() => PageArtworkUncheckedCreateNestedManyWithoutStoryInputSchema).optional(),
  pageTexts: z.lazy(() => PageTextUncheckedCreateNestedManyWithoutStoryInputSchema).optional()
}).strict();

export const StoryCreateOrConnectWithoutArtistInputSchema: z.ZodType<Prisma.StoryCreateOrConnectWithoutArtistInput> = z.object({
  where: z.lazy(() => StoryWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => StoryCreateWithoutArtistInputSchema),z.lazy(() => StoryUncheckedCreateWithoutArtistInputSchema) ]),
}).strict();

export const StoryCreateManyArtistInputEnvelopeSchema: z.ZodType<Prisma.StoryCreateManyArtistInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => StoryCreateManyArtistInputSchema),z.lazy(() => StoryCreateManyArtistInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const PageArtworkCreateWithoutArtistInputSchema: z.ZodType<Prisma.PageArtworkCreateWithoutArtistInput> = z.object({
  id: z.string().optional(),
  status: z.lazy(() => PageStatusSchema).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  page: z.lazy(() => PageCreateNestedOneWithoutArtworksInputSchema),
  story: z.lazy(() => StoryCreateNestedOneWithoutPageArtworksInputSchema),
  photo: z.lazy(() => PhotoCreateNestedOneWithoutPageArtworksInputSchema)
}).strict();

export const PageArtworkUncheckedCreateWithoutArtistInputSchema: z.ZodType<Prisma.PageArtworkUncheckedCreateWithoutArtistInput> = z.object({
  id: z.string().optional(),
  status: z.lazy(() => PageStatusSchema).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  pageId: z.string(),
  storyId: z.string(),
  photoId: z.string()
}).strict();

export const PageArtworkCreateOrConnectWithoutArtistInputSchema: z.ZodType<Prisma.PageArtworkCreateOrConnectWithoutArtistInput> = z.object({
  where: z.lazy(() => PageArtworkWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PageArtworkCreateWithoutArtistInputSchema),z.lazy(() => PageArtworkUncheckedCreateWithoutArtistInputSchema) ]),
}).strict();

export const PageArtworkCreateManyArtistInputEnvelopeSchema: z.ZodType<Prisma.PageArtworkCreateManyArtistInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => PageArtworkCreateManyArtistInputSchema),z.lazy(() => PageArtworkCreateManyArtistInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const StoryUpsertWithWhereUniqueWithoutArtistInputSchema: z.ZodType<Prisma.StoryUpsertWithWhereUniqueWithoutArtistInput> = z.object({
  where: z.lazy(() => StoryWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => StoryUpdateWithoutArtistInputSchema),z.lazy(() => StoryUncheckedUpdateWithoutArtistInputSchema) ]),
  create: z.union([ z.lazy(() => StoryCreateWithoutArtistInputSchema),z.lazy(() => StoryUncheckedCreateWithoutArtistInputSchema) ]),
}).strict();

export const StoryUpdateWithWhereUniqueWithoutArtistInputSchema: z.ZodType<Prisma.StoryUpdateWithWhereUniqueWithoutArtistInput> = z.object({
  where: z.lazy(() => StoryWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => StoryUpdateWithoutArtistInputSchema),z.lazy(() => StoryUncheckedUpdateWithoutArtistInputSchema) ]),
}).strict();

export const StoryUpdateManyWithWhereWithoutArtistInputSchema: z.ZodType<Prisma.StoryUpdateManyWithWhereWithoutArtistInput> = z.object({
  where: z.lazy(() => StoryScalarWhereInputSchema),
  data: z.union([ z.lazy(() => StoryUpdateManyMutationInputSchema),z.lazy(() => StoryUncheckedUpdateManyWithoutStoriesInputSchema) ]),
}).strict();

export const PageArtworkUpsertWithWhereUniqueWithoutArtistInputSchema: z.ZodType<Prisma.PageArtworkUpsertWithWhereUniqueWithoutArtistInput> = z.object({
  where: z.lazy(() => PageArtworkWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => PageArtworkUpdateWithoutArtistInputSchema),z.lazy(() => PageArtworkUncheckedUpdateWithoutArtistInputSchema) ]),
  create: z.union([ z.lazy(() => PageArtworkCreateWithoutArtistInputSchema),z.lazy(() => PageArtworkUncheckedCreateWithoutArtistInputSchema) ]),
}).strict();

export const PageArtworkUpdateWithWhereUniqueWithoutArtistInputSchema: z.ZodType<Prisma.PageArtworkUpdateWithWhereUniqueWithoutArtistInput> = z.object({
  where: z.lazy(() => PageArtworkWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => PageArtworkUpdateWithoutArtistInputSchema),z.lazy(() => PageArtworkUncheckedUpdateWithoutArtistInputSchema) ]),
}).strict();

export const PageArtworkUpdateManyWithWhereWithoutArtistInputSchema: z.ZodType<Prisma.PageArtworkUpdateManyWithWhereWithoutArtistInput> = z.object({
  where: z.lazy(() => PageArtworkScalarWhereInputSchema),
  data: z.union([ z.lazy(() => PageArtworkUpdateManyMutationInputSchema),z.lazy(() => PageArtworkUncheckedUpdateManyWithoutPageArtworksInputSchema) ]),
}).strict();

export const PageTextCreateWithoutTranslatorInputSchema: z.ZodType<Prisma.PageTextCreateWithoutTranslatorInput> = z.object({
  id: z.string().optional(),
  status: z.lazy(() => PageStatusSchema).optional(),
  locale: z.lazy(() => LocaleSchema),
  text: z.string(),
  type: z.lazy(() => PageTextTypeSchema),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  page: z.lazy(() => PageCreateNestedOneWithoutTextsInputSchema),
  story: z.lazy(() => StoryCreateNestedOneWithoutPageTextsInputSchema),
  author: z.lazy(() => AuthorCreateNestedOneWithoutPageTextsInputSchema).optional()
}).strict();

export const PageTextUncheckedCreateWithoutTranslatorInputSchema: z.ZodType<Prisma.PageTextUncheckedCreateWithoutTranslatorInput> = z.object({
  id: z.string().optional(),
  status: z.lazy(() => PageStatusSchema).optional(),
  locale: z.lazy(() => LocaleSchema),
  text: z.string(),
  type: z.lazy(() => PageTextTypeSchema),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  pageId: z.string(),
  storyId: z.string(),
  authorId: z.string().optional().nullable()
}).strict();

export const PageTextCreateOrConnectWithoutTranslatorInputSchema: z.ZodType<Prisma.PageTextCreateOrConnectWithoutTranslatorInput> = z.object({
  where: z.lazy(() => PageTextWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PageTextCreateWithoutTranslatorInputSchema),z.lazy(() => PageTextUncheckedCreateWithoutTranslatorInputSchema) ]),
}).strict();

export const PageTextCreateManyTranslatorInputEnvelopeSchema: z.ZodType<Prisma.PageTextCreateManyTranslatorInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => PageTextCreateManyTranslatorInputSchema),z.lazy(() => PageTextCreateManyTranslatorInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const PageTextUpsertWithWhereUniqueWithoutTranslatorInputSchema: z.ZodType<Prisma.PageTextUpsertWithWhereUniqueWithoutTranslatorInput> = z.object({
  where: z.lazy(() => PageTextWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => PageTextUpdateWithoutTranslatorInputSchema),z.lazy(() => PageTextUncheckedUpdateWithoutTranslatorInputSchema) ]),
  create: z.union([ z.lazy(() => PageTextCreateWithoutTranslatorInputSchema),z.lazy(() => PageTextUncheckedCreateWithoutTranslatorInputSchema) ]),
}).strict();

export const PageTextUpdateWithWhereUniqueWithoutTranslatorInputSchema: z.ZodType<Prisma.PageTextUpdateWithWhereUniqueWithoutTranslatorInput> = z.object({
  where: z.lazy(() => PageTextWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => PageTextUpdateWithoutTranslatorInputSchema),z.lazy(() => PageTextUncheckedUpdateWithoutTranslatorInputSchema) ]),
}).strict();

export const PageTextUpdateManyWithWhereWithoutTranslatorInputSchema: z.ZodType<Prisma.PageTextUpdateManyWithWhereWithoutTranslatorInput> = z.object({
  where: z.lazy(() => PageTextScalarWhereInputSchema),
  data: z.union([ z.lazy(() => PageTextUpdateManyMutationInputSchema),z.lazy(() => PageTextUncheckedUpdateManyWithoutPageTextsInputSchema) ]),
}).strict();

export const ArtistCreateWithoutStoriesInputSchema: z.ZodType<Prisma.ArtistCreateWithoutStoriesInput> = z.object({
  id: z.string().optional(),
  pageArtworks: z.lazy(() => PageArtworkCreateNestedManyWithoutArtistInputSchema).optional()
}).strict();

export const ArtistUncheckedCreateWithoutStoriesInputSchema: z.ZodType<Prisma.ArtistUncheckedCreateWithoutStoriesInput> = z.object({
  id: z.string().optional(),
  pageArtworks: z.lazy(() => PageArtworkUncheckedCreateNestedManyWithoutArtistInputSchema).optional()
}).strict();

export const ArtistCreateOrConnectWithoutStoriesInputSchema: z.ZodType<Prisma.ArtistCreateOrConnectWithoutStoriesInput> = z.object({
  where: z.lazy(() => ArtistWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ArtistCreateWithoutStoriesInputSchema),z.lazy(() => ArtistUncheckedCreateWithoutStoriesInputSchema) ]),
}).strict();

export const AuthorCreateWithoutStoriesInputSchema: z.ZodType<Prisma.AuthorCreateWithoutStoriesInput> = z.object({
  id: z.string().optional(),
  pageTexts: z.lazy(() => PageTextCreateNestedManyWithoutAuthorInputSchema).optional()
}).strict();

export const AuthorUncheckedCreateWithoutStoriesInputSchema: z.ZodType<Prisma.AuthorUncheckedCreateWithoutStoriesInput> = z.object({
  id: z.string().optional(),
  pageTexts: z.lazy(() => PageTextUncheckedCreateNestedManyWithoutAuthorInputSchema).optional()
}).strict();

export const AuthorCreateOrConnectWithoutStoriesInputSchema: z.ZodType<Prisma.AuthorCreateOrConnectWithoutStoriesInput> = z.object({
  where: z.lazy(() => AuthorWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => AuthorCreateWithoutStoriesInputSchema),z.lazy(() => AuthorUncheckedCreateWithoutStoriesInputSchema) ]),
}).strict();

export const PageCreateWithoutStoryInputSchema: z.ZodType<Prisma.PageCreateWithoutStoryInput> = z.object({
  id: z.string().optional(),
  status: z.lazy(() => PageStatusSchema).optional(),
  type: z.lazy(() => PageTypeSchema),
  pageNumber: z.number(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  artworks: z.lazy(() => PageArtworkCreateNestedManyWithoutPageInputSchema).optional(),
  texts: z.lazy(() => PageTextCreateNestedManyWithoutPageInputSchema).optional()
}).strict();

export const PageUncheckedCreateWithoutStoryInputSchema: z.ZodType<Prisma.PageUncheckedCreateWithoutStoryInput> = z.object({
  id: z.string().optional(),
  status: z.lazy(() => PageStatusSchema).optional(),
  type: z.lazy(() => PageTypeSchema),
  pageNumber: z.number(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  artworks: z.lazy(() => PageArtworkUncheckedCreateNestedManyWithoutPageInputSchema).optional(),
  texts: z.lazy(() => PageTextUncheckedCreateNestedManyWithoutPageInputSchema).optional()
}).strict();

export const PageCreateOrConnectWithoutStoryInputSchema: z.ZodType<Prisma.PageCreateOrConnectWithoutStoryInput> = z.object({
  where: z.lazy(() => PageWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PageCreateWithoutStoryInputSchema),z.lazy(() => PageUncheckedCreateWithoutStoryInputSchema) ]),
}).strict();

export const PageCreateManyStoryInputEnvelopeSchema: z.ZodType<Prisma.PageCreateManyStoryInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => PageCreateManyStoryInputSchema),z.lazy(() => PageCreateManyStoryInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const PageArtworkCreateWithoutStoryInputSchema: z.ZodType<Prisma.PageArtworkCreateWithoutStoryInput> = z.object({
  id: z.string().optional(),
  status: z.lazy(() => PageStatusSchema).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  page: z.lazy(() => PageCreateNestedOneWithoutArtworksInputSchema),
  artist: z.lazy(() => ArtistCreateNestedOneWithoutPageArtworksInputSchema),
  photo: z.lazy(() => PhotoCreateNestedOneWithoutPageArtworksInputSchema)
}).strict();

export const PageArtworkUncheckedCreateWithoutStoryInputSchema: z.ZodType<Prisma.PageArtworkUncheckedCreateWithoutStoryInput> = z.object({
  id: z.string().optional(),
  status: z.lazy(() => PageStatusSchema).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  pageId: z.string(),
  artistId: z.string(),
  photoId: z.string()
}).strict();

export const PageArtworkCreateOrConnectWithoutStoryInputSchema: z.ZodType<Prisma.PageArtworkCreateOrConnectWithoutStoryInput> = z.object({
  where: z.lazy(() => PageArtworkWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PageArtworkCreateWithoutStoryInputSchema),z.lazy(() => PageArtworkUncheckedCreateWithoutStoryInputSchema) ]),
}).strict();

export const PageArtworkCreateManyStoryInputEnvelopeSchema: z.ZodType<Prisma.PageArtworkCreateManyStoryInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => PageArtworkCreateManyStoryInputSchema),z.lazy(() => PageArtworkCreateManyStoryInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const PageTextCreateWithoutStoryInputSchema: z.ZodType<Prisma.PageTextCreateWithoutStoryInput> = z.object({
  id: z.string().optional(),
  status: z.lazy(() => PageStatusSchema).optional(),
  locale: z.lazy(() => LocaleSchema),
  text: z.string(),
  type: z.lazy(() => PageTextTypeSchema),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  page: z.lazy(() => PageCreateNestedOneWithoutTextsInputSchema),
  author: z.lazy(() => AuthorCreateNestedOneWithoutPageTextsInputSchema).optional(),
  translator: z.lazy(() => TranslatorCreateNestedOneWithoutPageTextsInputSchema).optional()
}).strict();

export const PageTextUncheckedCreateWithoutStoryInputSchema: z.ZodType<Prisma.PageTextUncheckedCreateWithoutStoryInput> = z.object({
  id: z.string().optional(),
  status: z.lazy(() => PageStatusSchema).optional(),
  locale: z.lazy(() => LocaleSchema),
  text: z.string(),
  type: z.lazy(() => PageTextTypeSchema),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  pageId: z.string(),
  authorId: z.string().optional().nullable(),
  translatorId: z.string().optional().nullable()
}).strict();

export const PageTextCreateOrConnectWithoutStoryInputSchema: z.ZodType<Prisma.PageTextCreateOrConnectWithoutStoryInput> = z.object({
  where: z.lazy(() => PageTextWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PageTextCreateWithoutStoryInputSchema),z.lazy(() => PageTextUncheckedCreateWithoutStoryInputSchema) ]),
}).strict();

export const PageTextCreateManyStoryInputEnvelopeSchema: z.ZodType<Prisma.PageTextCreateManyStoryInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => PageTextCreateManyStoryInputSchema),z.lazy(() => PageTextCreateManyStoryInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const ArtistUpsertWithoutStoriesInputSchema: z.ZodType<Prisma.ArtistUpsertWithoutStoriesInput> = z.object({
  update: z.union([ z.lazy(() => ArtistUpdateWithoutStoriesInputSchema),z.lazy(() => ArtistUncheckedUpdateWithoutStoriesInputSchema) ]),
  create: z.union([ z.lazy(() => ArtistCreateWithoutStoriesInputSchema),z.lazy(() => ArtistUncheckedCreateWithoutStoriesInputSchema) ]),
}).strict();

export const ArtistUpdateWithoutStoriesInputSchema: z.ZodType<Prisma.ArtistUpdateWithoutStoriesInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  pageArtworks: z.lazy(() => PageArtworkUpdateManyWithoutArtistNestedInputSchema).optional()
}).strict();

export const ArtistUncheckedUpdateWithoutStoriesInputSchema: z.ZodType<Prisma.ArtistUncheckedUpdateWithoutStoriesInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  pageArtworks: z.lazy(() => PageArtworkUncheckedUpdateManyWithoutArtistNestedInputSchema).optional()
}).strict();

export const AuthorUpsertWithoutStoriesInputSchema: z.ZodType<Prisma.AuthorUpsertWithoutStoriesInput> = z.object({
  update: z.union([ z.lazy(() => AuthorUpdateWithoutStoriesInputSchema),z.lazy(() => AuthorUncheckedUpdateWithoutStoriesInputSchema) ]),
  create: z.union([ z.lazy(() => AuthorCreateWithoutStoriesInputSchema),z.lazy(() => AuthorUncheckedCreateWithoutStoriesInputSchema) ]),
}).strict();

export const AuthorUpdateWithoutStoriesInputSchema: z.ZodType<Prisma.AuthorUpdateWithoutStoriesInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  pageTexts: z.lazy(() => PageTextUpdateManyWithoutAuthorNestedInputSchema).optional()
}).strict();

export const AuthorUncheckedUpdateWithoutStoriesInputSchema: z.ZodType<Prisma.AuthorUncheckedUpdateWithoutStoriesInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  pageTexts: z.lazy(() => PageTextUncheckedUpdateManyWithoutAuthorNestedInputSchema).optional()
}).strict();

export const PageUpsertWithWhereUniqueWithoutStoryInputSchema: z.ZodType<Prisma.PageUpsertWithWhereUniqueWithoutStoryInput> = z.object({
  where: z.lazy(() => PageWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => PageUpdateWithoutStoryInputSchema),z.lazy(() => PageUncheckedUpdateWithoutStoryInputSchema) ]),
  create: z.union([ z.lazy(() => PageCreateWithoutStoryInputSchema),z.lazy(() => PageUncheckedCreateWithoutStoryInputSchema) ]),
}).strict();

export const PageUpdateWithWhereUniqueWithoutStoryInputSchema: z.ZodType<Prisma.PageUpdateWithWhereUniqueWithoutStoryInput> = z.object({
  where: z.lazy(() => PageWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => PageUpdateWithoutStoryInputSchema),z.lazy(() => PageUncheckedUpdateWithoutStoryInputSchema) ]),
}).strict();

export const PageUpdateManyWithWhereWithoutStoryInputSchema: z.ZodType<Prisma.PageUpdateManyWithWhereWithoutStoryInput> = z.object({
  where: z.lazy(() => PageScalarWhereInputSchema),
  data: z.union([ z.lazy(() => PageUpdateManyMutationInputSchema),z.lazy(() => PageUncheckedUpdateManyWithoutPagesInputSchema) ]),
}).strict();

export const PageScalarWhereInputSchema: z.ZodType<Prisma.PageScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => PageScalarWhereInputSchema),z.lazy(() => PageScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PageScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PageScalarWhereInputSchema),z.lazy(() => PageScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  status: z.union([ z.lazy(() => EnumPageStatusFilterSchema),z.lazy(() => PageStatusSchema) ]).optional(),
  type: z.union([ z.lazy(() => EnumPageTypeFilterSchema),z.lazy(() => PageTypeSchema) ]).optional(),
  pageNumber: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  storyId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export const PageArtworkUpsertWithWhereUniqueWithoutStoryInputSchema: z.ZodType<Prisma.PageArtworkUpsertWithWhereUniqueWithoutStoryInput> = z.object({
  where: z.lazy(() => PageArtworkWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => PageArtworkUpdateWithoutStoryInputSchema),z.lazy(() => PageArtworkUncheckedUpdateWithoutStoryInputSchema) ]),
  create: z.union([ z.lazy(() => PageArtworkCreateWithoutStoryInputSchema),z.lazy(() => PageArtworkUncheckedCreateWithoutStoryInputSchema) ]),
}).strict();

export const PageArtworkUpdateWithWhereUniqueWithoutStoryInputSchema: z.ZodType<Prisma.PageArtworkUpdateWithWhereUniqueWithoutStoryInput> = z.object({
  where: z.lazy(() => PageArtworkWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => PageArtworkUpdateWithoutStoryInputSchema),z.lazy(() => PageArtworkUncheckedUpdateWithoutStoryInputSchema) ]),
}).strict();

export const PageArtworkUpdateManyWithWhereWithoutStoryInputSchema: z.ZodType<Prisma.PageArtworkUpdateManyWithWhereWithoutStoryInput> = z.object({
  where: z.lazy(() => PageArtworkScalarWhereInputSchema),
  data: z.union([ z.lazy(() => PageArtworkUpdateManyMutationInputSchema),z.lazy(() => PageArtworkUncheckedUpdateManyWithoutPageArtworksInputSchema) ]),
}).strict();

export const PageTextUpsertWithWhereUniqueWithoutStoryInputSchema: z.ZodType<Prisma.PageTextUpsertWithWhereUniqueWithoutStoryInput> = z.object({
  where: z.lazy(() => PageTextWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => PageTextUpdateWithoutStoryInputSchema),z.lazy(() => PageTextUncheckedUpdateWithoutStoryInputSchema) ]),
  create: z.union([ z.lazy(() => PageTextCreateWithoutStoryInputSchema),z.lazy(() => PageTextUncheckedCreateWithoutStoryInputSchema) ]),
}).strict();

export const PageTextUpdateWithWhereUniqueWithoutStoryInputSchema: z.ZodType<Prisma.PageTextUpdateWithWhereUniqueWithoutStoryInput> = z.object({
  where: z.lazy(() => PageTextWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => PageTextUpdateWithoutStoryInputSchema),z.lazy(() => PageTextUncheckedUpdateWithoutStoryInputSchema) ]),
}).strict();

export const PageTextUpdateManyWithWhereWithoutStoryInputSchema: z.ZodType<Prisma.PageTextUpdateManyWithWhereWithoutStoryInput> = z.object({
  where: z.lazy(() => PageTextScalarWhereInputSchema),
  data: z.union([ z.lazy(() => PageTextUpdateManyMutationInputSchema),z.lazy(() => PageTextUncheckedUpdateManyWithoutPageTextsInputSchema) ]),
}).strict();

export const PageCreateWithoutArtworksInputSchema: z.ZodType<Prisma.PageCreateWithoutArtworksInput> = z.object({
  id: z.string().optional(),
  status: z.lazy(() => PageStatusSchema).optional(),
  type: z.lazy(() => PageTypeSchema),
  pageNumber: z.number(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  story: z.lazy(() => StoryCreateNestedOneWithoutPagesInputSchema),
  texts: z.lazy(() => PageTextCreateNestedManyWithoutPageInputSchema).optional()
}).strict();

export const PageUncheckedCreateWithoutArtworksInputSchema: z.ZodType<Prisma.PageUncheckedCreateWithoutArtworksInput> = z.object({
  id: z.string().optional(),
  status: z.lazy(() => PageStatusSchema).optional(),
  type: z.lazy(() => PageTypeSchema),
  pageNumber: z.number(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  storyId: z.string(),
  texts: z.lazy(() => PageTextUncheckedCreateNestedManyWithoutPageInputSchema).optional()
}).strict();

export const PageCreateOrConnectWithoutArtworksInputSchema: z.ZodType<Prisma.PageCreateOrConnectWithoutArtworksInput> = z.object({
  where: z.lazy(() => PageWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PageCreateWithoutArtworksInputSchema),z.lazy(() => PageUncheckedCreateWithoutArtworksInputSchema) ]),
}).strict();

export const StoryCreateWithoutPageArtworksInputSchema: z.ZodType<Prisma.StoryCreateWithoutPageArtworksInput> = z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  artist: z.lazy(() => ArtistCreateNestedOneWithoutStoriesInputSchema).optional(),
  author: z.lazy(() => AuthorCreateNestedOneWithoutStoriesInputSchema).optional(),
  pages: z.lazy(() => PageCreateNestedManyWithoutStoryInputSchema).optional(),
  pageTexts: z.lazy(() => PageTextCreateNestedManyWithoutStoryInputSchema).optional()
}).strict();

export const StoryUncheckedCreateWithoutPageArtworksInputSchema: z.ZodType<Prisma.StoryUncheckedCreateWithoutPageArtworksInput> = z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  artistId: z.string().optional().nullable(),
  authorId: z.string().optional().nullable(),
  pages: z.lazy(() => PageUncheckedCreateNestedManyWithoutStoryInputSchema).optional(),
  pageTexts: z.lazy(() => PageTextUncheckedCreateNestedManyWithoutStoryInputSchema).optional()
}).strict();

export const StoryCreateOrConnectWithoutPageArtworksInputSchema: z.ZodType<Prisma.StoryCreateOrConnectWithoutPageArtworksInput> = z.object({
  where: z.lazy(() => StoryWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => StoryCreateWithoutPageArtworksInputSchema),z.lazy(() => StoryUncheckedCreateWithoutPageArtworksInputSchema) ]),
}).strict();

export const ArtistCreateWithoutPageArtworksInputSchema: z.ZodType<Prisma.ArtistCreateWithoutPageArtworksInput> = z.object({
  id: z.string().optional(),
  stories: z.lazy(() => StoryCreateNestedManyWithoutArtistInputSchema).optional()
}).strict();

export const ArtistUncheckedCreateWithoutPageArtworksInputSchema: z.ZodType<Prisma.ArtistUncheckedCreateWithoutPageArtworksInput> = z.object({
  id: z.string().optional(),
  stories: z.lazy(() => StoryUncheckedCreateNestedManyWithoutArtistInputSchema).optional()
}).strict();

export const ArtistCreateOrConnectWithoutPageArtworksInputSchema: z.ZodType<Prisma.ArtistCreateOrConnectWithoutPageArtworksInput> = z.object({
  where: z.lazy(() => ArtistWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ArtistCreateWithoutPageArtworksInputSchema),z.lazy(() => ArtistUncheckedCreateWithoutPageArtworksInputSchema) ]),
}).strict();

export const PhotoCreateWithoutPageArtworksInputSchema: z.ZodType<Prisma.PhotoCreateWithoutPageArtworksInput> = z.object({
  id: z.string().optional(),
  height: z.number(),
  width: z.number(),
  tags: z.union([ z.lazy(() => PhotoCreatetagsInputSchema),z.string().array() ]).optional(),
  createdAt: z.coerce.date().optional(),
  file: z.lazy(() => CloudFileCreateNestedOneWithoutPhotoInputSchema),
  concepts: z.lazy(() => ConceptCreateNestedManyWithoutPhotosInputSchema).optional()
}).strict();

export const PhotoUncheckedCreateWithoutPageArtworksInputSchema: z.ZodType<Prisma.PhotoUncheckedCreateWithoutPageArtworksInput> = z.object({
  id: z.string().optional(),
  height: z.number(),
  width: z.number(),
  tags: z.union([ z.lazy(() => PhotoCreatetagsInputSchema),z.string().array() ]).optional(),
  createdAt: z.coerce.date().optional(),
  fileId: z.string(),
  concepts: z.lazy(() => ConceptUncheckedCreateNestedManyWithoutPhotosInputSchema).optional()
}).strict();

export const PhotoCreateOrConnectWithoutPageArtworksInputSchema: z.ZodType<Prisma.PhotoCreateOrConnectWithoutPageArtworksInput> = z.object({
  where: z.lazy(() => PhotoWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PhotoCreateWithoutPageArtworksInputSchema),z.lazy(() => PhotoUncheckedCreateWithoutPageArtworksInputSchema) ]),
}).strict();

export const PageUpsertWithoutArtworksInputSchema: z.ZodType<Prisma.PageUpsertWithoutArtworksInput> = z.object({
  update: z.union([ z.lazy(() => PageUpdateWithoutArtworksInputSchema),z.lazy(() => PageUncheckedUpdateWithoutArtworksInputSchema) ]),
  create: z.union([ z.lazy(() => PageCreateWithoutArtworksInputSchema),z.lazy(() => PageUncheckedCreateWithoutArtworksInputSchema) ]),
}).strict();

export const PageUpdateWithoutArtworksInputSchema: z.ZodType<Prisma.PageUpdateWithoutArtworksInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => PageStatusSchema),z.lazy(() => EnumPageStatusFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => PageTypeSchema),z.lazy(() => EnumPageTypeFieldUpdateOperationsInputSchema) ]).optional(),
  pageNumber: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  story: z.lazy(() => StoryUpdateOneRequiredWithoutPagesNestedInputSchema).optional(),
  texts: z.lazy(() => PageTextUpdateManyWithoutPageNestedInputSchema).optional()
}).strict();

export const PageUncheckedUpdateWithoutArtworksInputSchema: z.ZodType<Prisma.PageUncheckedUpdateWithoutArtworksInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => PageStatusSchema),z.lazy(() => EnumPageStatusFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => PageTypeSchema),z.lazy(() => EnumPageTypeFieldUpdateOperationsInputSchema) ]).optional(),
  pageNumber: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  storyId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  texts: z.lazy(() => PageTextUncheckedUpdateManyWithoutPageNestedInputSchema).optional()
}).strict();

export const StoryUpsertWithoutPageArtworksInputSchema: z.ZodType<Prisma.StoryUpsertWithoutPageArtworksInput> = z.object({
  update: z.union([ z.lazy(() => StoryUpdateWithoutPageArtworksInputSchema),z.lazy(() => StoryUncheckedUpdateWithoutPageArtworksInputSchema) ]),
  create: z.union([ z.lazy(() => StoryCreateWithoutPageArtworksInputSchema),z.lazy(() => StoryUncheckedCreateWithoutPageArtworksInputSchema) ]),
}).strict();

export const StoryUpdateWithoutPageArtworksInputSchema: z.ZodType<Prisma.StoryUpdateWithoutPageArtworksInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  artist: z.lazy(() => ArtistUpdateOneWithoutStoriesNestedInputSchema).optional(),
  author: z.lazy(() => AuthorUpdateOneWithoutStoriesNestedInputSchema).optional(),
  pages: z.lazy(() => PageUpdateManyWithoutStoryNestedInputSchema).optional(),
  pageTexts: z.lazy(() => PageTextUpdateManyWithoutStoryNestedInputSchema).optional()
}).strict();

export const StoryUncheckedUpdateWithoutPageArtworksInputSchema: z.ZodType<Prisma.StoryUncheckedUpdateWithoutPageArtworksInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  artistId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  authorId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  pages: z.lazy(() => PageUncheckedUpdateManyWithoutStoryNestedInputSchema).optional(),
  pageTexts: z.lazy(() => PageTextUncheckedUpdateManyWithoutStoryNestedInputSchema).optional()
}).strict();

export const ArtistUpsertWithoutPageArtworksInputSchema: z.ZodType<Prisma.ArtistUpsertWithoutPageArtworksInput> = z.object({
  update: z.union([ z.lazy(() => ArtistUpdateWithoutPageArtworksInputSchema),z.lazy(() => ArtistUncheckedUpdateWithoutPageArtworksInputSchema) ]),
  create: z.union([ z.lazy(() => ArtistCreateWithoutPageArtworksInputSchema),z.lazy(() => ArtistUncheckedCreateWithoutPageArtworksInputSchema) ]),
}).strict();

export const ArtistUpdateWithoutPageArtworksInputSchema: z.ZodType<Prisma.ArtistUpdateWithoutPageArtworksInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  stories: z.lazy(() => StoryUpdateManyWithoutArtistNestedInputSchema).optional()
}).strict();

export const ArtistUncheckedUpdateWithoutPageArtworksInputSchema: z.ZodType<Prisma.ArtistUncheckedUpdateWithoutPageArtworksInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  stories: z.lazy(() => StoryUncheckedUpdateManyWithoutArtistNestedInputSchema).optional()
}).strict();

export const PhotoUpsertWithoutPageArtworksInputSchema: z.ZodType<Prisma.PhotoUpsertWithoutPageArtworksInput> = z.object({
  update: z.union([ z.lazy(() => PhotoUpdateWithoutPageArtworksInputSchema),z.lazy(() => PhotoUncheckedUpdateWithoutPageArtworksInputSchema) ]),
  create: z.union([ z.lazy(() => PhotoCreateWithoutPageArtworksInputSchema),z.lazy(() => PhotoUncheckedCreateWithoutPageArtworksInputSchema) ]),
}).strict();

export const PhotoUpdateWithoutPageArtworksInputSchema: z.ZodType<Prisma.PhotoUpdateWithoutPageArtworksInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  height: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  width: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  tags: z.union([ z.lazy(() => PhotoUpdatetagsInputSchema),z.string().array() ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  file: z.lazy(() => CloudFileUpdateOneRequiredWithoutPhotoNestedInputSchema).optional(),
  concepts: z.lazy(() => ConceptUpdateManyWithoutPhotosNestedInputSchema).optional()
}).strict();

export const PhotoUncheckedUpdateWithoutPageArtworksInputSchema: z.ZodType<Prisma.PhotoUncheckedUpdateWithoutPageArtworksInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  height: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  width: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  tags: z.union([ z.lazy(() => PhotoUpdatetagsInputSchema),z.string().array() ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  fileId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  concepts: z.lazy(() => ConceptUncheckedUpdateManyWithoutPhotosNestedInputSchema).optional()
}).strict();

export const PageCreateWithoutTextsInputSchema: z.ZodType<Prisma.PageCreateWithoutTextsInput> = z.object({
  id: z.string().optional(),
  status: z.lazy(() => PageStatusSchema).optional(),
  type: z.lazy(() => PageTypeSchema),
  pageNumber: z.number(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  story: z.lazy(() => StoryCreateNestedOneWithoutPagesInputSchema),
  artworks: z.lazy(() => PageArtworkCreateNestedManyWithoutPageInputSchema).optional()
}).strict();

export const PageUncheckedCreateWithoutTextsInputSchema: z.ZodType<Prisma.PageUncheckedCreateWithoutTextsInput> = z.object({
  id: z.string().optional(),
  status: z.lazy(() => PageStatusSchema).optional(),
  type: z.lazy(() => PageTypeSchema),
  pageNumber: z.number(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  storyId: z.string(),
  artworks: z.lazy(() => PageArtworkUncheckedCreateNestedManyWithoutPageInputSchema).optional()
}).strict();

export const PageCreateOrConnectWithoutTextsInputSchema: z.ZodType<Prisma.PageCreateOrConnectWithoutTextsInput> = z.object({
  where: z.lazy(() => PageWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PageCreateWithoutTextsInputSchema),z.lazy(() => PageUncheckedCreateWithoutTextsInputSchema) ]),
}).strict();

export const StoryCreateWithoutPageTextsInputSchema: z.ZodType<Prisma.StoryCreateWithoutPageTextsInput> = z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  artist: z.lazy(() => ArtistCreateNestedOneWithoutStoriesInputSchema).optional(),
  author: z.lazy(() => AuthorCreateNestedOneWithoutStoriesInputSchema).optional(),
  pages: z.lazy(() => PageCreateNestedManyWithoutStoryInputSchema).optional(),
  pageArtworks: z.lazy(() => PageArtworkCreateNestedManyWithoutStoryInputSchema).optional()
}).strict();

export const StoryUncheckedCreateWithoutPageTextsInputSchema: z.ZodType<Prisma.StoryUncheckedCreateWithoutPageTextsInput> = z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  artistId: z.string().optional().nullable(),
  authorId: z.string().optional().nullable(),
  pages: z.lazy(() => PageUncheckedCreateNestedManyWithoutStoryInputSchema).optional(),
  pageArtworks: z.lazy(() => PageArtworkUncheckedCreateNestedManyWithoutStoryInputSchema).optional()
}).strict();

export const StoryCreateOrConnectWithoutPageTextsInputSchema: z.ZodType<Prisma.StoryCreateOrConnectWithoutPageTextsInput> = z.object({
  where: z.lazy(() => StoryWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => StoryCreateWithoutPageTextsInputSchema),z.lazy(() => StoryUncheckedCreateWithoutPageTextsInputSchema) ]),
}).strict();

export const AuthorCreateWithoutPageTextsInputSchema: z.ZodType<Prisma.AuthorCreateWithoutPageTextsInput> = z.object({
  id: z.string().optional(),
  stories: z.lazy(() => StoryCreateNestedManyWithoutAuthorInputSchema).optional()
}).strict();

export const AuthorUncheckedCreateWithoutPageTextsInputSchema: z.ZodType<Prisma.AuthorUncheckedCreateWithoutPageTextsInput> = z.object({
  id: z.string().optional(),
  stories: z.lazy(() => StoryUncheckedCreateNestedManyWithoutAuthorInputSchema).optional()
}).strict();

export const AuthorCreateOrConnectWithoutPageTextsInputSchema: z.ZodType<Prisma.AuthorCreateOrConnectWithoutPageTextsInput> = z.object({
  where: z.lazy(() => AuthorWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => AuthorCreateWithoutPageTextsInputSchema),z.lazy(() => AuthorUncheckedCreateWithoutPageTextsInputSchema) ]),
}).strict();

export const TranslatorCreateWithoutPageTextsInputSchema: z.ZodType<Prisma.TranslatorCreateWithoutPageTextsInput> = z.object({
  id: z.string().optional()
}).strict();

export const TranslatorUncheckedCreateWithoutPageTextsInputSchema: z.ZodType<Prisma.TranslatorUncheckedCreateWithoutPageTextsInput> = z.object({
  id: z.string().optional()
}).strict();

export const TranslatorCreateOrConnectWithoutPageTextsInputSchema: z.ZodType<Prisma.TranslatorCreateOrConnectWithoutPageTextsInput> = z.object({
  where: z.lazy(() => TranslatorWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TranslatorCreateWithoutPageTextsInputSchema),z.lazy(() => TranslatorUncheckedCreateWithoutPageTextsInputSchema) ]),
}).strict();

export const PageUpsertWithoutTextsInputSchema: z.ZodType<Prisma.PageUpsertWithoutTextsInput> = z.object({
  update: z.union([ z.lazy(() => PageUpdateWithoutTextsInputSchema),z.lazy(() => PageUncheckedUpdateWithoutTextsInputSchema) ]),
  create: z.union([ z.lazy(() => PageCreateWithoutTextsInputSchema),z.lazy(() => PageUncheckedCreateWithoutTextsInputSchema) ]),
}).strict();

export const PageUpdateWithoutTextsInputSchema: z.ZodType<Prisma.PageUpdateWithoutTextsInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => PageStatusSchema),z.lazy(() => EnumPageStatusFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => PageTypeSchema),z.lazy(() => EnumPageTypeFieldUpdateOperationsInputSchema) ]).optional(),
  pageNumber: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  story: z.lazy(() => StoryUpdateOneRequiredWithoutPagesNestedInputSchema).optional(),
  artworks: z.lazy(() => PageArtworkUpdateManyWithoutPageNestedInputSchema).optional()
}).strict();

export const PageUncheckedUpdateWithoutTextsInputSchema: z.ZodType<Prisma.PageUncheckedUpdateWithoutTextsInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => PageStatusSchema),z.lazy(() => EnumPageStatusFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => PageTypeSchema),z.lazy(() => EnumPageTypeFieldUpdateOperationsInputSchema) ]).optional(),
  pageNumber: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  storyId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  artworks: z.lazy(() => PageArtworkUncheckedUpdateManyWithoutPageNestedInputSchema).optional()
}).strict();

export const StoryUpsertWithoutPageTextsInputSchema: z.ZodType<Prisma.StoryUpsertWithoutPageTextsInput> = z.object({
  update: z.union([ z.lazy(() => StoryUpdateWithoutPageTextsInputSchema),z.lazy(() => StoryUncheckedUpdateWithoutPageTextsInputSchema) ]),
  create: z.union([ z.lazy(() => StoryCreateWithoutPageTextsInputSchema),z.lazy(() => StoryUncheckedCreateWithoutPageTextsInputSchema) ]),
}).strict();

export const StoryUpdateWithoutPageTextsInputSchema: z.ZodType<Prisma.StoryUpdateWithoutPageTextsInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  artist: z.lazy(() => ArtistUpdateOneWithoutStoriesNestedInputSchema).optional(),
  author: z.lazy(() => AuthorUpdateOneWithoutStoriesNestedInputSchema).optional(),
  pages: z.lazy(() => PageUpdateManyWithoutStoryNestedInputSchema).optional(),
  pageArtworks: z.lazy(() => PageArtworkUpdateManyWithoutStoryNestedInputSchema).optional()
}).strict();

export const StoryUncheckedUpdateWithoutPageTextsInputSchema: z.ZodType<Prisma.StoryUncheckedUpdateWithoutPageTextsInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  artistId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  authorId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  pages: z.lazy(() => PageUncheckedUpdateManyWithoutStoryNestedInputSchema).optional(),
  pageArtworks: z.lazy(() => PageArtworkUncheckedUpdateManyWithoutStoryNestedInputSchema).optional()
}).strict();

export const AuthorUpsertWithoutPageTextsInputSchema: z.ZodType<Prisma.AuthorUpsertWithoutPageTextsInput> = z.object({
  update: z.union([ z.lazy(() => AuthorUpdateWithoutPageTextsInputSchema),z.lazy(() => AuthorUncheckedUpdateWithoutPageTextsInputSchema) ]),
  create: z.union([ z.lazy(() => AuthorCreateWithoutPageTextsInputSchema),z.lazy(() => AuthorUncheckedCreateWithoutPageTextsInputSchema) ]),
}).strict();

export const AuthorUpdateWithoutPageTextsInputSchema: z.ZodType<Prisma.AuthorUpdateWithoutPageTextsInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  stories: z.lazy(() => StoryUpdateManyWithoutAuthorNestedInputSchema).optional()
}).strict();

export const AuthorUncheckedUpdateWithoutPageTextsInputSchema: z.ZodType<Prisma.AuthorUncheckedUpdateWithoutPageTextsInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  stories: z.lazy(() => StoryUncheckedUpdateManyWithoutAuthorNestedInputSchema).optional()
}).strict();

export const TranslatorUpsertWithoutPageTextsInputSchema: z.ZodType<Prisma.TranslatorUpsertWithoutPageTextsInput> = z.object({
  update: z.union([ z.lazy(() => TranslatorUpdateWithoutPageTextsInputSchema),z.lazy(() => TranslatorUncheckedUpdateWithoutPageTextsInputSchema) ]),
  create: z.union([ z.lazy(() => TranslatorCreateWithoutPageTextsInputSchema),z.lazy(() => TranslatorUncheckedCreateWithoutPageTextsInputSchema) ]),
}).strict();

export const TranslatorUpdateWithoutPageTextsInputSchema: z.ZodType<Prisma.TranslatorUpdateWithoutPageTextsInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TranslatorUncheckedUpdateWithoutPageTextsInputSchema: z.ZodType<Prisma.TranslatorUncheckedUpdateWithoutPageTextsInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const StoryCreateWithoutPagesInputSchema: z.ZodType<Prisma.StoryCreateWithoutPagesInput> = z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  artist: z.lazy(() => ArtistCreateNestedOneWithoutStoriesInputSchema).optional(),
  author: z.lazy(() => AuthorCreateNestedOneWithoutStoriesInputSchema).optional(),
  pageArtworks: z.lazy(() => PageArtworkCreateNestedManyWithoutStoryInputSchema).optional(),
  pageTexts: z.lazy(() => PageTextCreateNestedManyWithoutStoryInputSchema).optional()
}).strict();

export const StoryUncheckedCreateWithoutPagesInputSchema: z.ZodType<Prisma.StoryUncheckedCreateWithoutPagesInput> = z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  artistId: z.string().optional().nullable(),
  authorId: z.string().optional().nullable(),
  pageArtworks: z.lazy(() => PageArtworkUncheckedCreateNestedManyWithoutStoryInputSchema).optional(),
  pageTexts: z.lazy(() => PageTextUncheckedCreateNestedManyWithoutStoryInputSchema).optional()
}).strict();

export const StoryCreateOrConnectWithoutPagesInputSchema: z.ZodType<Prisma.StoryCreateOrConnectWithoutPagesInput> = z.object({
  where: z.lazy(() => StoryWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => StoryCreateWithoutPagesInputSchema),z.lazy(() => StoryUncheckedCreateWithoutPagesInputSchema) ]),
}).strict();

export const PageArtworkCreateWithoutPageInputSchema: z.ZodType<Prisma.PageArtworkCreateWithoutPageInput> = z.object({
  id: z.string().optional(),
  status: z.lazy(() => PageStatusSchema).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  story: z.lazy(() => StoryCreateNestedOneWithoutPageArtworksInputSchema),
  artist: z.lazy(() => ArtistCreateNestedOneWithoutPageArtworksInputSchema),
  photo: z.lazy(() => PhotoCreateNestedOneWithoutPageArtworksInputSchema)
}).strict();

export const PageArtworkUncheckedCreateWithoutPageInputSchema: z.ZodType<Prisma.PageArtworkUncheckedCreateWithoutPageInput> = z.object({
  id: z.string().optional(),
  status: z.lazy(() => PageStatusSchema).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  storyId: z.string(),
  artistId: z.string(),
  photoId: z.string()
}).strict();

export const PageArtworkCreateOrConnectWithoutPageInputSchema: z.ZodType<Prisma.PageArtworkCreateOrConnectWithoutPageInput> = z.object({
  where: z.lazy(() => PageArtworkWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PageArtworkCreateWithoutPageInputSchema),z.lazy(() => PageArtworkUncheckedCreateWithoutPageInputSchema) ]),
}).strict();

export const PageArtworkCreateManyPageInputEnvelopeSchema: z.ZodType<Prisma.PageArtworkCreateManyPageInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => PageArtworkCreateManyPageInputSchema),z.lazy(() => PageArtworkCreateManyPageInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const PageTextCreateWithoutPageInputSchema: z.ZodType<Prisma.PageTextCreateWithoutPageInput> = z.object({
  id: z.string().optional(),
  status: z.lazy(() => PageStatusSchema).optional(),
  locale: z.lazy(() => LocaleSchema),
  text: z.string(),
  type: z.lazy(() => PageTextTypeSchema),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  story: z.lazy(() => StoryCreateNestedOneWithoutPageTextsInputSchema),
  author: z.lazy(() => AuthorCreateNestedOneWithoutPageTextsInputSchema).optional(),
  translator: z.lazy(() => TranslatorCreateNestedOneWithoutPageTextsInputSchema).optional()
}).strict();

export const PageTextUncheckedCreateWithoutPageInputSchema: z.ZodType<Prisma.PageTextUncheckedCreateWithoutPageInput> = z.object({
  id: z.string().optional(),
  status: z.lazy(() => PageStatusSchema).optional(),
  locale: z.lazy(() => LocaleSchema),
  text: z.string(),
  type: z.lazy(() => PageTextTypeSchema),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  storyId: z.string(),
  authorId: z.string().optional().nullable(),
  translatorId: z.string().optional().nullable()
}).strict();

export const PageTextCreateOrConnectWithoutPageInputSchema: z.ZodType<Prisma.PageTextCreateOrConnectWithoutPageInput> = z.object({
  where: z.lazy(() => PageTextWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PageTextCreateWithoutPageInputSchema),z.lazy(() => PageTextUncheckedCreateWithoutPageInputSchema) ]),
}).strict();

export const PageTextCreateManyPageInputEnvelopeSchema: z.ZodType<Prisma.PageTextCreateManyPageInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => PageTextCreateManyPageInputSchema),z.lazy(() => PageTextCreateManyPageInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const StoryUpsertWithoutPagesInputSchema: z.ZodType<Prisma.StoryUpsertWithoutPagesInput> = z.object({
  update: z.union([ z.lazy(() => StoryUpdateWithoutPagesInputSchema),z.lazy(() => StoryUncheckedUpdateWithoutPagesInputSchema) ]),
  create: z.union([ z.lazy(() => StoryCreateWithoutPagesInputSchema),z.lazy(() => StoryUncheckedCreateWithoutPagesInputSchema) ]),
}).strict();

export const StoryUpdateWithoutPagesInputSchema: z.ZodType<Prisma.StoryUpdateWithoutPagesInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  artist: z.lazy(() => ArtistUpdateOneWithoutStoriesNestedInputSchema).optional(),
  author: z.lazy(() => AuthorUpdateOneWithoutStoriesNestedInputSchema).optional(),
  pageArtworks: z.lazy(() => PageArtworkUpdateManyWithoutStoryNestedInputSchema).optional(),
  pageTexts: z.lazy(() => PageTextUpdateManyWithoutStoryNestedInputSchema).optional()
}).strict();

export const StoryUncheckedUpdateWithoutPagesInputSchema: z.ZodType<Prisma.StoryUncheckedUpdateWithoutPagesInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  artistId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  authorId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  pageArtworks: z.lazy(() => PageArtworkUncheckedUpdateManyWithoutStoryNestedInputSchema).optional(),
  pageTexts: z.lazy(() => PageTextUncheckedUpdateManyWithoutStoryNestedInputSchema).optional()
}).strict();

export const PageArtworkUpsertWithWhereUniqueWithoutPageInputSchema: z.ZodType<Prisma.PageArtworkUpsertWithWhereUniqueWithoutPageInput> = z.object({
  where: z.lazy(() => PageArtworkWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => PageArtworkUpdateWithoutPageInputSchema),z.lazy(() => PageArtworkUncheckedUpdateWithoutPageInputSchema) ]),
  create: z.union([ z.lazy(() => PageArtworkCreateWithoutPageInputSchema),z.lazy(() => PageArtworkUncheckedCreateWithoutPageInputSchema) ]),
}).strict();

export const PageArtworkUpdateWithWhereUniqueWithoutPageInputSchema: z.ZodType<Prisma.PageArtworkUpdateWithWhereUniqueWithoutPageInput> = z.object({
  where: z.lazy(() => PageArtworkWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => PageArtworkUpdateWithoutPageInputSchema),z.lazy(() => PageArtworkUncheckedUpdateWithoutPageInputSchema) ]),
}).strict();

export const PageArtworkUpdateManyWithWhereWithoutPageInputSchema: z.ZodType<Prisma.PageArtworkUpdateManyWithWhereWithoutPageInput> = z.object({
  where: z.lazy(() => PageArtworkScalarWhereInputSchema),
  data: z.union([ z.lazy(() => PageArtworkUpdateManyMutationInputSchema),z.lazy(() => PageArtworkUncheckedUpdateManyWithoutArtworksInputSchema) ]),
}).strict();

export const PageTextUpsertWithWhereUniqueWithoutPageInputSchema: z.ZodType<Prisma.PageTextUpsertWithWhereUniqueWithoutPageInput> = z.object({
  where: z.lazy(() => PageTextWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => PageTextUpdateWithoutPageInputSchema),z.lazy(() => PageTextUncheckedUpdateWithoutPageInputSchema) ]),
  create: z.union([ z.lazy(() => PageTextCreateWithoutPageInputSchema),z.lazy(() => PageTextUncheckedCreateWithoutPageInputSchema) ]),
}).strict();

export const PageTextUpdateWithWhereUniqueWithoutPageInputSchema: z.ZodType<Prisma.PageTextUpdateWithWhereUniqueWithoutPageInput> = z.object({
  where: z.lazy(() => PageTextWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => PageTextUpdateWithoutPageInputSchema),z.lazy(() => PageTextUncheckedUpdateWithoutPageInputSchema) ]),
}).strict();

export const PageTextUpdateManyWithWhereWithoutPageInputSchema: z.ZodType<Prisma.PageTextUpdateManyWithWhereWithoutPageInput> = z.object({
  where: z.lazy(() => PageTextScalarWhereInputSchema),
  data: z.union([ z.lazy(() => PageTextUpdateManyMutationInputSchema),z.lazy(() => PageTextUncheckedUpdateManyWithoutTextsInputSchema) ]),
}).strict();

export const UserCreateWithoutEditionInputSchema: z.ZodType<Prisma.UserCreateWithoutEditionInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  email: z.string(),
  updatedAt: z.coerce.date().optional(),
  createdAt: z.coerce.date().optional(),
  Concept: z.lazy(() => ConceptCreateNestedOneWithoutUserInputSchema).optional()
}).strict();

export const UserUncheckedCreateWithoutEditionInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutEditionInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  email: z.string(),
  updatedAt: z.coerce.date().optional(),
  createdAt: z.coerce.date().optional(),
  Concept: z.lazy(() => ConceptUncheckedCreateNestedOneWithoutUserInputSchema).optional()
}).strict();

export const UserCreateOrConnectWithoutEditionInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutEditionInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutEditionInputSchema),z.lazy(() => UserUncheckedCreateWithoutEditionInputSchema) ]),
}).strict();

export const PDFCreateWithoutBookInputSchema: z.ZodType<Prisma.PDFCreateWithoutBookInput> = z.object({
  id: z.string().optional(),
  height: z.number(),
  width: z.number(),
  pages: z.number(),
  tags: z.union([ z.lazy(() => PDFCreatetagsInputSchema),z.string().array() ]).optional(),
  createdAt: z.coerce.date().optional(),
  file: z.lazy(() => CloudFileCreateNestedOneWithoutPDFInputSchema)
}).strict();

export const PDFUncheckedCreateWithoutBookInputSchema: z.ZodType<Prisma.PDFUncheckedCreateWithoutBookInput> = z.object({
  id: z.string().optional(),
  height: z.number(),
  width: z.number(),
  pages: z.number(),
  tags: z.union([ z.lazy(() => PDFCreatetagsInputSchema),z.string().array() ]).optional(),
  createdAt: z.coerce.date().optional(),
  fileId: z.string()
}).strict();

export const PDFCreateOrConnectWithoutBookInputSchema: z.ZodType<Prisma.PDFCreateOrConnectWithoutBookInput> = z.object({
  where: z.lazy(() => PDFWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PDFCreateWithoutBookInputSchema),z.lazy(() => PDFUncheckedCreateWithoutBookInputSchema) ]),
}).strict();

export const UserUpsertWithoutEditionInputSchema: z.ZodType<Prisma.UserUpsertWithoutEditionInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutEditionInputSchema),z.lazy(() => UserUncheckedUpdateWithoutEditionInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutEditionInputSchema),z.lazy(() => UserUncheckedCreateWithoutEditionInputSchema) ]),
}).strict();

export const UserUpdateWithoutEditionInputSchema: z.ZodType<Prisma.UserUpdateWithoutEditionInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  Concept: z.lazy(() => ConceptUpdateOneWithoutUserNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateWithoutEditionInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutEditionInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  Concept: z.lazy(() => ConceptUncheckedUpdateOneWithoutUserNestedInputSchema).optional()
}).strict();

export const PDFUpsertWithoutBookInputSchema: z.ZodType<Prisma.PDFUpsertWithoutBookInput> = z.object({
  update: z.union([ z.lazy(() => PDFUpdateWithoutBookInputSchema),z.lazy(() => PDFUncheckedUpdateWithoutBookInputSchema) ]),
  create: z.union([ z.lazy(() => PDFCreateWithoutBookInputSchema),z.lazy(() => PDFUncheckedCreateWithoutBookInputSchema) ]),
}).strict();

export const PDFUpdateWithoutBookInputSchema: z.ZodType<Prisma.PDFUpdateWithoutBookInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  height: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  width: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  pages: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  tags: z.union([ z.lazy(() => PDFUpdatetagsInputSchema),z.string().array() ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  file: z.lazy(() => CloudFileUpdateOneRequiredWithoutPDFNestedInputSchema).optional()
}).strict();

export const PDFUncheckedUpdateWithoutBookInputSchema: z.ZodType<Prisma.PDFUncheckedUpdateWithoutBookInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  height: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  width: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  pages: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  tags: z.union([ z.lazy(() => PDFUpdatetagsInputSchema),z.string().array() ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  fileId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UserCreateWithoutConceptInputSchema: z.ZodType<Prisma.UserCreateWithoutConceptInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  email: z.string(),
  updatedAt: z.coerce.date().optional(),
  createdAt: z.coerce.date().optional(),
  Edition: z.lazy(() => EditionCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserUncheckedCreateWithoutConceptInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutConceptInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  email: z.string(),
  updatedAt: z.coerce.date().optional(),
  createdAt: z.coerce.date().optional(),
  Edition: z.lazy(() => EditionUncheckedCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserCreateOrConnectWithoutConceptInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutConceptInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutConceptInputSchema),z.lazy(() => UserUncheckedCreateWithoutConceptInputSchema) ]),
}).strict();

export const PhotoCreateWithoutConceptsInputSchema: z.ZodType<Prisma.PhotoCreateWithoutConceptsInput> = z.object({
  id: z.string().optional(),
  height: z.number(),
  width: z.number(),
  tags: z.union([ z.lazy(() => PhotoCreatetagsInputSchema),z.string().array() ]).optional(),
  createdAt: z.coerce.date().optional(),
  file: z.lazy(() => CloudFileCreateNestedOneWithoutPhotoInputSchema),
  pageArtworks: z.lazy(() => PageArtworkCreateNestedManyWithoutPhotoInputSchema).optional()
}).strict();

export const PhotoUncheckedCreateWithoutConceptsInputSchema: z.ZodType<Prisma.PhotoUncheckedCreateWithoutConceptsInput> = z.object({
  id: z.string().optional(),
  height: z.number(),
  width: z.number(),
  tags: z.union([ z.lazy(() => PhotoCreatetagsInputSchema),z.string().array() ]).optional(),
  createdAt: z.coerce.date().optional(),
  fileId: z.string(),
  pageArtworks: z.lazy(() => PageArtworkUncheckedCreateNestedManyWithoutPhotoInputSchema).optional()
}).strict();

export const PhotoCreateOrConnectWithoutConceptsInputSchema: z.ZodType<Prisma.PhotoCreateOrConnectWithoutConceptsInput> = z.object({
  where: z.lazy(() => PhotoWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PhotoCreateWithoutConceptsInputSchema),z.lazy(() => PhotoUncheckedCreateWithoutConceptsInputSchema) ]),
}).strict();

export const UserUpsertWithoutConceptInputSchema: z.ZodType<Prisma.UserUpsertWithoutConceptInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutConceptInputSchema),z.lazy(() => UserUncheckedUpdateWithoutConceptInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutConceptInputSchema),z.lazy(() => UserUncheckedCreateWithoutConceptInputSchema) ]),
}).strict();

export const UserUpdateWithoutConceptInputSchema: z.ZodType<Prisma.UserUpdateWithoutConceptInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  Edition: z.lazy(() => EditionUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateWithoutConceptInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutConceptInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  Edition: z.lazy(() => EditionUncheckedUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const PhotoUpsertWithWhereUniqueWithoutConceptsInputSchema: z.ZodType<Prisma.PhotoUpsertWithWhereUniqueWithoutConceptsInput> = z.object({
  where: z.lazy(() => PhotoWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => PhotoUpdateWithoutConceptsInputSchema),z.lazy(() => PhotoUncheckedUpdateWithoutConceptsInputSchema) ]),
  create: z.union([ z.lazy(() => PhotoCreateWithoutConceptsInputSchema),z.lazy(() => PhotoUncheckedCreateWithoutConceptsInputSchema) ]),
}).strict();

export const PhotoUpdateWithWhereUniqueWithoutConceptsInputSchema: z.ZodType<Prisma.PhotoUpdateWithWhereUniqueWithoutConceptsInput> = z.object({
  where: z.lazy(() => PhotoWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => PhotoUpdateWithoutConceptsInputSchema),z.lazy(() => PhotoUncheckedUpdateWithoutConceptsInputSchema) ]),
}).strict();

export const PhotoUpdateManyWithWhereWithoutConceptsInputSchema: z.ZodType<Prisma.PhotoUpdateManyWithWhereWithoutConceptsInput> = z.object({
  where: z.lazy(() => PhotoScalarWhereInputSchema),
  data: z.union([ z.lazy(() => PhotoUpdateManyMutationInputSchema),z.lazy(() => PhotoUncheckedUpdateManyWithoutPhotosInputSchema) ]),
}).strict();

export const PhotoScalarWhereInputSchema: z.ZodType<Prisma.PhotoScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => PhotoScalarWhereInputSchema),z.lazy(() => PhotoScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PhotoScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PhotoScalarWhereInputSchema),z.lazy(() => PhotoScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  height: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  width: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  tags: z.lazy(() => StringNullableListFilterSchema).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  fileId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export const PageArtworkCreateManyPhotoInputSchema: z.ZodType<Prisma.PageArtworkCreateManyPhotoInput> = z.object({
  id: z.string().cuid().optional(),
  status: z.lazy(() => PageStatusSchema).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  pageId: z.string().cuid(),
  storyId: z.string().cuid(),
  artistId: z.string().cuid()
}).strict();

export const PageArtworkUpdateWithoutPhotoInputSchema: z.ZodType<Prisma.PageArtworkUpdateWithoutPhotoInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => PageStatusSchema),z.lazy(() => EnumPageStatusFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  page: z.lazy(() => PageUpdateOneRequiredWithoutArtworksNestedInputSchema).optional(),
  story: z.lazy(() => StoryUpdateOneRequiredWithoutPageArtworksNestedInputSchema).optional(),
  artist: z.lazy(() => ArtistUpdateOneRequiredWithoutPageArtworksNestedInputSchema).optional()
}).strict();

export const PageArtworkUncheckedUpdateWithoutPhotoInputSchema: z.ZodType<Prisma.PageArtworkUncheckedUpdateWithoutPhotoInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => PageStatusSchema),z.lazy(() => EnumPageStatusFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  pageId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  storyId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  artistId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const PageArtworkUncheckedUpdateManyWithoutPageArtworksInputSchema: z.ZodType<Prisma.PageArtworkUncheckedUpdateManyWithoutPageArtworksInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => PageStatusSchema),z.lazy(() => EnumPageStatusFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  pageId: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  storyId: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  artistId: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ConceptUpdateWithoutPhotosInputSchema: z.ZodType<Prisma.ConceptUpdateWithoutPhotosInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => ConceptTypeSchema),z.lazy(() => EnumConceptTypeFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneWithoutConceptNestedInputSchema).optional()
}).strict();

export const ConceptUncheckedUpdateWithoutPhotosInputSchema: z.ZodType<Prisma.ConceptUncheckedUpdateWithoutPhotosInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => ConceptTypeSchema),z.lazy(() => EnumConceptTypeFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const ConceptUncheckedUpdateManyWithoutConceptsInputSchema: z.ZodType<Prisma.ConceptUncheckedUpdateManyWithoutConceptsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string().min(1),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => ConceptTypeSchema),z.lazy(() => EnumConceptTypeFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string().cuid(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const EditionCreateManyUserInputSchema: z.ZodType<Prisma.EditionCreateManyUserInput> = z.object({
  id: z.string().cuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  pdfId: z.string().cuid()
}).strict();

export const EditionUpdateWithoutUserInputSchema: z.ZodType<Prisma.EditionUpdateWithoutUserInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  pdf: z.lazy(() => PDFUpdateOneRequiredWithoutBookNestedInputSchema).optional()
}).strict();

export const EditionUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.EditionUncheckedUpdateWithoutUserInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  pdfId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const EditionUncheckedUpdateManyWithoutEditionInputSchema: z.ZodType<Prisma.EditionUncheckedUpdateManyWithoutEditionInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  pdfId: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const StoryCreateManyAuthorInputSchema: z.ZodType<Prisma.StoryCreateManyAuthorInput> = z.object({
  id: z.string().cuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  artistId: z.string().cuid().optional().nullable()
}).strict();

export const PageTextCreateManyAuthorInputSchema: z.ZodType<Prisma.PageTextCreateManyAuthorInput> = z.object({
  id: z.string().cuid().optional(),
  status: z.lazy(() => PageStatusSchema).optional(),
  locale: z.lazy(() => LocaleSchema),
  text: z.string().min(1).max(5000),
  type: z.lazy(() => PageTextTypeSchema),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  pageId: z.string().cuid(),
  storyId: z.string().cuid(),
  translatorId: z.string().cuid().optional().nullable()
}).strict();

export const StoryUpdateWithoutAuthorInputSchema: z.ZodType<Prisma.StoryUpdateWithoutAuthorInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  artist: z.lazy(() => ArtistUpdateOneWithoutStoriesNestedInputSchema).optional(),
  pages: z.lazy(() => PageUpdateManyWithoutStoryNestedInputSchema).optional(),
  pageArtworks: z.lazy(() => PageArtworkUpdateManyWithoutStoryNestedInputSchema).optional(),
  pageTexts: z.lazy(() => PageTextUpdateManyWithoutStoryNestedInputSchema).optional()
}).strict();

export const StoryUncheckedUpdateWithoutAuthorInputSchema: z.ZodType<Prisma.StoryUncheckedUpdateWithoutAuthorInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  artistId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  pages: z.lazy(() => PageUncheckedUpdateManyWithoutStoryNestedInputSchema).optional(),
  pageArtworks: z.lazy(() => PageArtworkUncheckedUpdateManyWithoutStoryNestedInputSchema).optional(),
  pageTexts: z.lazy(() => PageTextUncheckedUpdateManyWithoutStoryNestedInputSchema).optional()
}).strict();

export const StoryUncheckedUpdateManyWithoutStoriesInputSchema: z.ZodType<Prisma.StoryUncheckedUpdateManyWithoutStoriesInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  artistId: z.union([ z.string().cuid(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const PageTextUpdateWithoutAuthorInputSchema: z.ZodType<Prisma.PageTextUpdateWithoutAuthorInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => PageStatusSchema),z.lazy(() => EnumPageStatusFieldUpdateOperationsInputSchema) ]).optional(),
  locale: z.union([ z.lazy(() => LocaleSchema),z.lazy(() => EnumLocaleFieldUpdateOperationsInputSchema) ]).optional(),
  text: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => PageTextTypeSchema),z.lazy(() => EnumPageTextTypeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  page: z.lazy(() => PageUpdateOneRequiredWithoutTextsNestedInputSchema).optional(),
  story: z.lazy(() => StoryUpdateOneRequiredWithoutPageTextsNestedInputSchema).optional(),
  translator: z.lazy(() => TranslatorUpdateOneWithoutPageTextsNestedInputSchema).optional()
}).strict();

export const PageTextUncheckedUpdateWithoutAuthorInputSchema: z.ZodType<Prisma.PageTextUncheckedUpdateWithoutAuthorInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => PageStatusSchema),z.lazy(() => EnumPageStatusFieldUpdateOperationsInputSchema) ]).optional(),
  locale: z.union([ z.lazy(() => LocaleSchema),z.lazy(() => EnumLocaleFieldUpdateOperationsInputSchema) ]).optional(),
  text: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => PageTextTypeSchema),z.lazy(() => EnumPageTextTypeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  pageId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  storyId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  translatorId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const PageTextUncheckedUpdateManyWithoutPageTextsInputSchema: z.ZodType<Prisma.PageTextUncheckedUpdateManyWithoutPageTextsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => PageStatusSchema),z.lazy(() => EnumPageStatusFieldUpdateOperationsInputSchema) ]).optional(),
  locale: z.union([ z.lazy(() => LocaleSchema),z.lazy(() => EnumLocaleFieldUpdateOperationsInputSchema) ]).optional(),
  text: z.union([ z.string().min(1).max(5000),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => PageTextTypeSchema),z.lazy(() => EnumPageTextTypeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  pageId: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  storyId: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  translatorId: z.union([ z.string().cuid(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const StoryCreateManyArtistInputSchema: z.ZodType<Prisma.StoryCreateManyArtistInput> = z.object({
  id: z.string().cuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  authorId: z.string().cuid().optional().nullable()
}).strict();

export const PageArtworkCreateManyArtistInputSchema: z.ZodType<Prisma.PageArtworkCreateManyArtistInput> = z.object({
  id: z.string().cuid().optional(),
  status: z.lazy(() => PageStatusSchema).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  pageId: z.string().cuid(),
  storyId: z.string().cuid(),
  photoId: z.string().cuid()
}).strict();

export const StoryUpdateWithoutArtistInputSchema: z.ZodType<Prisma.StoryUpdateWithoutArtistInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  author: z.lazy(() => AuthorUpdateOneWithoutStoriesNestedInputSchema).optional(),
  pages: z.lazy(() => PageUpdateManyWithoutStoryNestedInputSchema).optional(),
  pageArtworks: z.lazy(() => PageArtworkUpdateManyWithoutStoryNestedInputSchema).optional(),
  pageTexts: z.lazy(() => PageTextUpdateManyWithoutStoryNestedInputSchema).optional()
}).strict();

export const StoryUncheckedUpdateWithoutArtistInputSchema: z.ZodType<Prisma.StoryUncheckedUpdateWithoutArtistInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  authorId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  pages: z.lazy(() => PageUncheckedUpdateManyWithoutStoryNestedInputSchema).optional(),
  pageArtworks: z.lazy(() => PageArtworkUncheckedUpdateManyWithoutStoryNestedInputSchema).optional(),
  pageTexts: z.lazy(() => PageTextUncheckedUpdateManyWithoutStoryNestedInputSchema).optional()
}).strict();

export const PageArtworkUpdateWithoutArtistInputSchema: z.ZodType<Prisma.PageArtworkUpdateWithoutArtistInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => PageStatusSchema),z.lazy(() => EnumPageStatusFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  page: z.lazy(() => PageUpdateOneRequiredWithoutArtworksNestedInputSchema).optional(),
  story: z.lazy(() => StoryUpdateOneRequiredWithoutPageArtworksNestedInputSchema).optional(),
  photo: z.lazy(() => PhotoUpdateOneRequiredWithoutPageArtworksNestedInputSchema).optional()
}).strict();

export const PageArtworkUncheckedUpdateWithoutArtistInputSchema: z.ZodType<Prisma.PageArtworkUncheckedUpdateWithoutArtistInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => PageStatusSchema),z.lazy(() => EnumPageStatusFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  pageId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  storyId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  photoId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const PageTextCreateManyTranslatorInputSchema: z.ZodType<Prisma.PageTextCreateManyTranslatorInput> = z.object({
  id: z.string().cuid().optional(),
  status: z.lazy(() => PageStatusSchema).optional(),
  locale: z.lazy(() => LocaleSchema),
  text: z.string().min(1).max(5000),
  type: z.lazy(() => PageTextTypeSchema),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  pageId: z.string().cuid(),
  storyId: z.string().cuid(),
  authorId: z.string().cuid().optional().nullable()
}).strict();

export const PageTextUpdateWithoutTranslatorInputSchema: z.ZodType<Prisma.PageTextUpdateWithoutTranslatorInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => PageStatusSchema),z.lazy(() => EnumPageStatusFieldUpdateOperationsInputSchema) ]).optional(),
  locale: z.union([ z.lazy(() => LocaleSchema),z.lazy(() => EnumLocaleFieldUpdateOperationsInputSchema) ]).optional(),
  text: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => PageTextTypeSchema),z.lazy(() => EnumPageTextTypeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  page: z.lazy(() => PageUpdateOneRequiredWithoutTextsNestedInputSchema).optional(),
  story: z.lazy(() => StoryUpdateOneRequiredWithoutPageTextsNestedInputSchema).optional(),
  author: z.lazy(() => AuthorUpdateOneWithoutPageTextsNestedInputSchema).optional()
}).strict();

export const PageTextUncheckedUpdateWithoutTranslatorInputSchema: z.ZodType<Prisma.PageTextUncheckedUpdateWithoutTranslatorInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => PageStatusSchema),z.lazy(() => EnumPageStatusFieldUpdateOperationsInputSchema) ]).optional(),
  locale: z.union([ z.lazy(() => LocaleSchema),z.lazy(() => EnumLocaleFieldUpdateOperationsInputSchema) ]).optional(),
  text: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => PageTextTypeSchema),z.lazy(() => EnumPageTextTypeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  pageId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  storyId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  authorId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const PageCreateManyStoryInputSchema: z.ZodType<Prisma.PageCreateManyStoryInput> = z.object({
  id: z.string().cuid().optional(),
  status: z.lazy(() => PageStatusSchema).optional(),
  type: z.lazy(() => PageTypeSchema),
  pageNumber: z.number().gte(1).lte(100),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const PageArtworkCreateManyStoryInputSchema: z.ZodType<Prisma.PageArtworkCreateManyStoryInput> = z.object({
  id: z.string().cuid().optional(),
  status: z.lazy(() => PageStatusSchema).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  pageId: z.string().cuid(),
  artistId: z.string().cuid(),
  photoId: z.string().cuid()
}).strict();

export const PageTextCreateManyStoryInputSchema: z.ZodType<Prisma.PageTextCreateManyStoryInput> = z.object({
  id: z.string().cuid().optional(),
  status: z.lazy(() => PageStatusSchema).optional(),
  locale: z.lazy(() => LocaleSchema),
  text: z.string().min(1).max(5000),
  type: z.lazy(() => PageTextTypeSchema),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  pageId: z.string().cuid(),
  authorId: z.string().cuid().optional().nullable(),
  translatorId: z.string().cuid().optional().nullable()
}).strict();

export const PageUpdateWithoutStoryInputSchema: z.ZodType<Prisma.PageUpdateWithoutStoryInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => PageStatusSchema),z.lazy(() => EnumPageStatusFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => PageTypeSchema),z.lazy(() => EnumPageTypeFieldUpdateOperationsInputSchema) ]).optional(),
  pageNumber: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  artworks: z.lazy(() => PageArtworkUpdateManyWithoutPageNestedInputSchema).optional(),
  texts: z.lazy(() => PageTextUpdateManyWithoutPageNestedInputSchema).optional()
}).strict();

export const PageUncheckedUpdateWithoutStoryInputSchema: z.ZodType<Prisma.PageUncheckedUpdateWithoutStoryInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => PageStatusSchema),z.lazy(() => EnumPageStatusFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => PageTypeSchema),z.lazy(() => EnumPageTypeFieldUpdateOperationsInputSchema) ]).optional(),
  pageNumber: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  artworks: z.lazy(() => PageArtworkUncheckedUpdateManyWithoutPageNestedInputSchema).optional(),
  texts: z.lazy(() => PageTextUncheckedUpdateManyWithoutPageNestedInputSchema).optional()
}).strict();

export const PageUncheckedUpdateManyWithoutPagesInputSchema: z.ZodType<Prisma.PageUncheckedUpdateManyWithoutPagesInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => PageStatusSchema),z.lazy(() => EnumPageStatusFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => PageTypeSchema),z.lazy(() => EnumPageTypeFieldUpdateOperationsInputSchema) ]).optional(),
  pageNumber: z.union([ z.number().gte(1).lte(100),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const PageArtworkUpdateWithoutStoryInputSchema: z.ZodType<Prisma.PageArtworkUpdateWithoutStoryInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => PageStatusSchema),z.lazy(() => EnumPageStatusFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  page: z.lazy(() => PageUpdateOneRequiredWithoutArtworksNestedInputSchema).optional(),
  artist: z.lazy(() => ArtistUpdateOneRequiredWithoutPageArtworksNestedInputSchema).optional(),
  photo: z.lazy(() => PhotoUpdateOneRequiredWithoutPageArtworksNestedInputSchema).optional()
}).strict();

export const PageArtworkUncheckedUpdateWithoutStoryInputSchema: z.ZodType<Prisma.PageArtworkUncheckedUpdateWithoutStoryInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => PageStatusSchema),z.lazy(() => EnumPageStatusFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  pageId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  artistId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  photoId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const PageTextUpdateWithoutStoryInputSchema: z.ZodType<Prisma.PageTextUpdateWithoutStoryInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => PageStatusSchema),z.lazy(() => EnumPageStatusFieldUpdateOperationsInputSchema) ]).optional(),
  locale: z.union([ z.lazy(() => LocaleSchema),z.lazy(() => EnumLocaleFieldUpdateOperationsInputSchema) ]).optional(),
  text: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => PageTextTypeSchema),z.lazy(() => EnumPageTextTypeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  page: z.lazy(() => PageUpdateOneRequiredWithoutTextsNestedInputSchema).optional(),
  author: z.lazy(() => AuthorUpdateOneWithoutPageTextsNestedInputSchema).optional(),
  translator: z.lazy(() => TranslatorUpdateOneWithoutPageTextsNestedInputSchema).optional()
}).strict();

export const PageTextUncheckedUpdateWithoutStoryInputSchema: z.ZodType<Prisma.PageTextUncheckedUpdateWithoutStoryInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => PageStatusSchema),z.lazy(() => EnumPageStatusFieldUpdateOperationsInputSchema) ]).optional(),
  locale: z.union([ z.lazy(() => LocaleSchema),z.lazy(() => EnumLocaleFieldUpdateOperationsInputSchema) ]).optional(),
  text: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => PageTextTypeSchema),z.lazy(() => EnumPageTextTypeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  pageId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  authorId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  translatorId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const PageArtworkCreateManyPageInputSchema: z.ZodType<Prisma.PageArtworkCreateManyPageInput> = z.object({
  id: z.string().cuid().optional(),
  status: z.lazy(() => PageStatusSchema).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  storyId: z.string().cuid(),
  artistId: z.string().cuid(),
  photoId: z.string().cuid()
}).strict();

export const PageTextCreateManyPageInputSchema: z.ZodType<Prisma.PageTextCreateManyPageInput> = z.object({
  id: z.string().cuid().optional(),
  status: z.lazy(() => PageStatusSchema).optional(),
  locale: z.lazy(() => LocaleSchema),
  text: z.string().min(1).max(5000),
  type: z.lazy(() => PageTextTypeSchema),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  storyId: z.string().cuid(),
  authorId: z.string().cuid().optional().nullable(),
  translatorId: z.string().cuid().optional().nullable()
}).strict();

export const PageArtworkUpdateWithoutPageInputSchema: z.ZodType<Prisma.PageArtworkUpdateWithoutPageInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => PageStatusSchema),z.lazy(() => EnumPageStatusFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  story: z.lazy(() => StoryUpdateOneRequiredWithoutPageArtworksNestedInputSchema).optional(),
  artist: z.lazy(() => ArtistUpdateOneRequiredWithoutPageArtworksNestedInputSchema).optional(),
  photo: z.lazy(() => PhotoUpdateOneRequiredWithoutPageArtworksNestedInputSchema).optional()
}).strict();

export const PageArtworkUncheckedUpdateWithoutPageInputSchema: z.ZodType<Prisma.PageArtworkUncheckedUpdateWithoutPageInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => PageStatusSchema),z.lazy(() => EnumPageStatusFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  storyId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  artistId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  photoId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const PageArtworkUncheckedUpdateManyWithoutArtworksInputSchema: z.ZodType<Prisma.PageArtworkUncheckedUpdateManyWithoutArtworksInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => PageStatusSchema),z.lazy(() => EnumPageStatusFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  storyId: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  artistId: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  photoId: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const PageTextUpdateWithoutPageInputSchema: z.ZodType<Prisma.PageTextUpdateWithoutPageInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => PageStatusSchema),z.lazy(() => EnumPageStatusFieldUpdateOperationsInputSchema) ]).optional(),
  locale: z.union([ z.lazy(() => LocaleSchema),z.lazy(() => EnumLocaleFieldUpdateOperationsInputSchema) ]).optional(),
  text: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => PageTextTypeSchema),z.lazy(() => EnumPageTextTypeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  story: z.lazy(() => StoryUpdateOneRequiredWithoutPageTextsNestedInputSchema).optional(),
  author: z.lazy(() => AuthorUpdateOneWithoutPageTextsNestedInputSchema).optional(),
  translator: z.lazy(() => TranslatorUpdateOneWithoutPageTextsNestedInputSchema).optional()
}).strict();

export const PageTextUncheckedUpdateWithoutPageInputSchema: z.ZodType<Prisma.PageTextUncheckedUpdateWithoutPageInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => PageStatusSchema),z.lazy(() => EnumPageStatusFieldUpdateOperationsInputSchema) ]).optional(),
  locale: z.union([ z.lazy(() => LocaleSchema),z.lazy(() => EnumLocaleFieldUpdateOperationsInputSchema) ]).optional(),
  text: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => PageTextTypeSchema),z.lazy(() => EnumPageTextTypeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  storyId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  authorId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  translatorId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const PageTextUncheckedUpdateManyWithoutTextsInputSchema: z.ZodType<Prisma.PageTextUncheckedUpdateManyWithoutTextsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => PageStatusSchema),z.lazy(() => EnumPageStatusFieldUpdateOperationsInputSchema) ]).optional(),
  locale: z.union([ z.lazy(() => LocaleSchema),z.lazy(() => EnumLocaleFieldUpdateOperationsInputSchema) ]).optional(),
  text: z.union([ z.string().min(1).max(5000),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => PageTextTypeSchema),z.lazy(() => EnumPageTextTypeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  storyId: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  authorId: z.union([ z.string().cuid(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  translatorId: z.union([ z.string().cuid(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const PhotoUpdateWithoutConceptsInputSchema: z.ZodType<Prisma.PhotoUpdateWithoutConceptsInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  height: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  width: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  tags: z.union([ z.lazy(() => PhotoUpdatetagsInputSchema),z.string().array() ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  file: z.lazy(() => CloudFileUpdateOneRequiredWithoutPhotoNestedInputSchema).optional(),
  pageArtworks: z.lazy(() => PageArtworkUpdateManyWithoutPhotoNestedInputSchema).optional()
}).strict();

export const PhotoUncheckedUpdateWithoutConceptsInputSchema: z.ZodType<Prisma.PhotoUncheckedUpdateWithoutConceptsInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  height: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  width: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  tags: z.union([ z.lazy(() => PhotoUpdatetagsInputSchema),z.string().array() ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  fileId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  pageArtworks: z.lazy(() => PageArtworkUncheckedUpdateManyWithoutPhotoNestedInputSchema).optional()
}).strict();

export const PhotoUncheckedUpdateManyWithoutPhotosInputSchema: z.ZodType<Prisma.PhotoUncheckedUpdateManyWithoutPhotosInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  height: z.union([ z.number().positive(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  width: z.union([ z.number().positive(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  tags: z.union([ z.lazy(() => PhotoUpdatetagsInputSchema),z.string().array() ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  fileId: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

/////////////////////////////////////////
// ARGS
/////////////////////////////////////////

export const CloudFileFindFirstArgsSchema: z.ZodType<Prisma.CloudFileFindFirstArgs> = z.object({
  select: CloudFileSelectSchema.optional(),
  include: CloudFileIncludeSchema.optional(),
  where: CloudFileWhereInputSchema.optional(),
  orderBy: z.union([ CloudFileOrderByWithRelationInputSchema.array(),CloudFileOrderByWithRelationInputSchema ]).optional(),
  cursor: CloudFileWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: CloudFileScalarFieldEnumSchema.array().optional(),
}).strict()

export const CloudFileFindFirstOrThrowArgsSchema: z.ZodType<Prisma.CloudFileFindFirstOrThrowArgs> = z.object({
  select: CloudFileSelectSchema.optional(),
  include: CloudFileIncludeSchema.optional(),
  where: CloudFileWhereInputSchema.optional(),
  orderBy: z.union([ CloudFileOrderByWithRelationInputSchema.array(),CloudFileOrderByWithRelationInputSchema ]).optional(),
  cursor: CloudFileWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: CloudFileScalarFieldEnumSchema.array().optional(),
}).strict()

export const CloudFileFindManyArgsSchema: z.ZodType<Prisma.CloudFileFindManyArgs> = z.object({
  select: CloudFileSelectSchema.optional(),
  include: CloudFileIncludeSchema.optional(),
  where: CloudFileWhereInputSchema.optional(),
  orderBy: z.union([ CloudFileOrderByWithRelationInputSchema.array(),CloudFileOrderByWithRelationInputSchema ]).optional(),
  cursor: CloudFileWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: CloudFileScalarFieldEnumSchema.array().optional(),
}).strict()

export const CloudFileAggregateArgsSchema: z.ZodType<Prisma.CloudFileAggregateArgs> = z.object({
  where: CloudFileWhereInputSchema.optional(),
  orderBy: z.union([ CloudFileOrderByWithRelationInputSchema.array(),CloudFileOrderByWithRelationInputSchema ]).optional(),
  cursor: CloudFileWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const CloudFileGroupByArgsSchema: z.ZodType<Prisma.CloudFileGroupByArgs> = z.object({
  where: CloudFileWhereInputSchema.optional(),
  orderBy: z.union([ CloudFileOrderByWithAggregationInputSchema.array(),CloudFileOrderByWithAggregationInputSchema ]).optional(),
  by: CloudFileScalarFieldEnumSchema.array(),
  having: CloudFileScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const CloudFileFindUniqueArgsSchema: z.ZodType<Prisma.CloudFileFindUniqueArgs> = z.object({
  select: CloudFileSelectSchema.optional(),
  include: CloudFileIncludeSchema.optional(),
  where: CloudFileWhereUniqueInputSchema,
}).strict()

export const CloudFileFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.CloudFileFindUniqueOrThrowArgs> = z.object({
  select: CloudFileSelectSchema.optional(),
  include: CloudFileIncludeSchema.optional(),
  where: CloudFileWhereUniqueInputSchema,
}).strict()

export const PhotoFindFirstArgsSchema: z.ZodType<Prisma.PhotoFindFirstArgs> = z.object({
  select: PhotoSelectSchema.optional(),
  include: PhotoIncludeSchema.optional(),
  where: PhotoWhereInputSchema.optional(),
  orderBy: z.union([ PhotoOrderByWithRelationInputSchema.array(),PhotoOrderByWithRelationInputSchema ]).optional(),
  cursor: PhotoWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: PhotoScalarFieldEnumSchema.array().optional(),
}).strict()

export const PhotoFindFirstOrThrowArgsSchema: z.ZodType<Prisma.PhotoFindFirstOrThrowArgs> = z.object({
  select: PhotoSelectSchema.optional(),
  include: PhotoIncludeSchema.optional(),
  where: PhotoWhereInputSchema.optional(),
  orderBy: z.union([ PhotoOrderByWithRelationInputSchema.array(),PhotoOrderByWithRelationInputSchema ]).optional(),
  cursor: PhotoWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: PhotoScalarFieldEnumSchema.array().optional(),
}).strict()

export const PhotoFindManyArgsSchema: z.ZodType<Prisma.PhotoFindManyArgs> = z.object({
  select: PhotoSelectSchema.optional(),
  include: PhotoIncludeSchema.optional(),
  where: PhotoWhereInputSchema.optional(),
  orderBy: z.union([ PhotoOrderByWithRelationInputSchema.array(),PhotoOrderByWithRelationInputSchema ]).optional(),
  cursor: PhotoWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: PhotoScalarFieldEnumSchema.array().optional(),
}).strict()

export const PhotoAggregateArgsSchema: z.ZodType<Prisma.PhotoAggregateArgs> = z.object({
  where: PhotoWhereInputSchema.optional(),
  orderBy: z.union([ PhotoOrderByWithRelationInputSchema.array(),PhotoOrderByWithRelationInputSchema ]).optional(),
  cursor: PhotoWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const PhotoGroupByArgsSchema: z.ZodType<Prisma.PhotoGroupByArgs> = z.object({
  where: PhotoWhereInputSchema.optional(),
  orderBy: z.union([ PhotoOrderByWithAggregationInputSchema.array(),PhotoOrderByWithAggregationInputSchema ]).optional(),
  by: PhotoScalarFieldEnumSchema.array(),
  having: PhotoScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const PhotoFindUniqueArgsSchema: z.ZodType<Prisma.PhotoFindUniqueArgs> = z.object({
  select: PhotoSelectSchema.optional(),
  include: PhotoIncludeSchema.optional(),
  where: PhotoWhereUniqueInputSchema,
}).strict()

export const PhotoFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.PhotoFindUniqueOrThrowArgs> = z.object({
  select: PhotoSelectSchema.optional(),
  include: PhotoIncludeSchema.optional(),
  where: PhotoWhereUniqueInputSchema,
}).strict()

export const PDFFindFirstArgsSchema: z.ZodType<Prisma.PDFFindFirstArgs> = z.object({
  select: PDFSelectSchema.optional(),
  include: PDFIncludeSchema.optional(),
  where: PDFWhereInputSchema.optional(),
  orderBy: z.union([ PDFOrderByWithRelationInputSchema.array(),PDFOrderByWithRelationInputSchema ]).optional(),
  cursor: PDFWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: PDFScalarFieldEnumSchema.array().optional(),
}).strict()

export const PDFFindFirstOrThrowArgsSchema: z.ZodType<Prisma.PDFFindFirstOrThrowArgs> = z.object({
  select: PDFSelectSchema.optional(),
  include: PDFIncludeSchema.optional(),
  where: PDFWhereInputSchema.optional(),
  orderBy: z.union([ PDFOrderByWithRelationInputSchema.array(),PDFOrderByWithRelationInputSchema ]).optional(),
  cursor: PDFWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: PDFScalarFieldEnumSchema.array().optional(),
}).strict()

export const PDFFindManyArgsSchema: z.ZodType<Prisma.PDFFindManyArgs> = z.object({
  select: PDFSelectSchema.optional(),
  include: PDFIncludeSchema.optional(),
  where: PDFWhereInputSchema.optional(),
  orderBy: z.union([ PDFOrderByWithRelationInputSchema.array(),PDFOrderByWithRelationInputSchema ]).optional(),
  cursor: PDFWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: PDFScalarFieldEnumSchema.array().optional(),
}).strict()

export const PDFAggregateArgsSchema: z.ZodType<Prisma.PDFAggregateArgs> = z.object({
  where: PDFWhereInputSchema.optional(),
  orderBy: z.union([ PDFOrderByWithRelationInputSchema.array(),PDFOrderByWithRelationInputSchema ]).optional(),
  cursor: PDFWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const PDFGroupByArgsSchema: z.ZodType<Prisma.PDFGroupByArgs> = z.object({
  where: PDFWhereInputSchema.optional(),
  orderBy: z.union([ PDFOrderByWithAggregationInputSchema.array(),PDFOrderByWithAggregationInputSchema ]).optional(),
  by: PDFScalarFieldEnumSchema.array(),
  having: PDFScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const PDFFindUniqueArgsSchema: z.ZodType<Prisma.PDFFindUniqueArgs> = z.object({
  select: PDFSelectSchema.optional(),
  include: PDFIncludeSchema.optional(),
  where: PDFWhereUniqueInputSchema,
}).strict()

export const PDFFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.PDFFindUniqueOrThrowArgs> = z.object({
  select: PDFSelectSchema.optional(),
  include: PDFIncludeSchema.optional(),
  where: PDFWhereUniqueInputSchema,
}).strict()

export const UserFindFirstArgsSchema: z.ZodType<Prisma.UserFindFirstArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: UserScalarFieldEnumSchema.array().optional(),
}).strict()

export const UserFindFirstOrThrowArgsSchema: z.ZodType<Prisma.UserFindFirstOrThrowArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: UserScalarFieldEnumSchema.array().optional(),
}).strict()

export const UserFindManyArgsSchema: z.ZodType<Prisma.UserFindManyArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: UserScalarFieldEnumSchema.array().optional(),
}).strict()

export const UserAggregateArgsSchema: z.ZodType<Prisma.UserAggregateArgs> = z.object({
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const UserGroupByArgsSchema: z.ZodType<Prisma.UserGroupByArgs> = z.object({
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithAggregationInputSchema.array(),UserOrderByWithAggregationInputSchema ]).optional(),
  by: UserScalarFieldEnumSchema.array(),
  having: UserScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const UserFindUniqueArgsSchema: z.ZodType<Prisma.UserFindUniqueArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
}).strict()

export const UserFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.UserFindUniqueOrThrowArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
}).strict()

export const AuthorFindFirstArgsSchema: z.ZodType<Prisma.AuthorFindFirstArgs> = z.object({
  select: AuthorSelectSchema.optional(),
  include: AuthorIncludeSchema.optional(),
  where: AuthorWhereInputSchema.optional(),
  orderBy: z.union([ AuthorOrderByWithRelationInputSchema.array(),AuthorOrderByWithRelationInputSchema ]).optional(),
  cursor: AuthorWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: AuthorScalarFieldEnumSchema.array().optional(),
}).strict()

export const AuthorFindFirstOrThrowArgsSchema: z.ZodType<Prisma.AuthorFindFirstOrThrowArgs> = z.object({
  select: AuthorSelectSchema.optional(),
  include: AuthorIncludeSchema.optional(),
  where: AuthorWhereInputSchema.optional(),
  orderBy: z.union([ AuthorOrderByWithRelationInputSchema.array(),AuthorOrderByWithRelationInputSchema ]).optional(),
  cursor: AuthorWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: AuthorScalarFieldEnumSchema.array().optional(),
}).strict()

export const AuthorFindManyArgsSchema: z.ZodType<Prisma.AuthorFindManyArgs> = z.object({
  select: AuthorSelectSchema.optional(),
  include: AuthorIncludeSchema.optional(),
  where: AuthorWhereInputSchema.optional(),
  orderBy: z.union([ AuthorOrderByWithRelationInputSchema.array(),AuthorOrderByWithRelationInputSchema ]).optional(),
  cursor: AuthorWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: AuthorScalarFieldEnumSchema.array().optional(),
}).strict()

export const AuthorAggregateArgsSchema: z.ZodType<Prisma.AuthorAggregateArgs> = z.object({
  where: AuthorWhereInputSchema.optional(),
  orderBy: z.union([ AuthorOrderByWithRelationInputSchema.array(),AuthorOrderByWithRelationInputSchema ]).optional(),
  cursor: AuthorWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const AuthorGroupByArgsSchema: z.ZodType<Prisma.AuthorGroupByArgs> = z.object({
  where: AuthorWhereInputSchema.optional(),
  orderBy: z.union([ AuthorOrderByWithAggregationInputSchema.array(),AuthorOrderByWithAggregationInputSchema ]).optional(),
  by: AuthorScalarFieldEnumSchema.array(),
  having: AuthorScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const AuthorFindUniqueArgsSchema: z.ZodType<Prisma.AuthorFindUniqueArgs> = z.object({
  select: AuthorSelectSchema.optional(),
  include: AuthorIncludeSchema.optional(),
  where: AuthorWhereUniqueInputSchema,
}).strict()

export const AuthorFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.AuthorFindUniqueOrThrowArgs> = z.object({
  select: AuthorSelectSchema.optional(),
  include: AuthorIncludeSchema.optional(),
  where: AuthorWhereUniqueInputSchema,
}).strict()

export const ArtistFindFirstArgsSchema: z.ZodType<Prisma.ArtistFindFirstArgs> = z.object({
  select: ArtistSelectSchema.optional(),
  include: ArtistIncludeSchema.optional(),
  where: ArtistWhereInputSchema.optional(),
  orderBy: z.union([ ArtistOrderByWithRelationInputSchema.array(),ArtistOrderByWithRelationInputSchema ]).optional(),
  cursor: ArtistWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: ArtistScalarFieldEnumSchema.array().optional(),
}).strict()

export const ArtistFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ArtistFindFirstOrThrowArgs> = z.object({
  select: ArtistSelectSchema.optional(),
  include: ArtistIncludeSchema.optional(),
  where: ArtistWhereInputSchema.optional(),
  orderBy: z.union([ ArtistOrderByWithRelationInputSchema.array(),ArtistOrderByWithRelationInputSchema ]).optional(),
  cursor: ArtistWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: ArtistScalarFieldEnumSchema.array().optional(),
}).strict()

export const ArtistFindManyArgsSchema: z.ZodType<Prisma.ArtistFindManyArgs> = z.object({
  select: ArtistSelectSchema.optional(),
  include: ArtistIncludeSchema.optional(),
  where: ArtistWhereInputSchema.optional(),
  orderBy: z.union([ ArtistOrderByWithRelationInputSchema.array(),ArtistOrderByWithRelationInputSchema ]).optional(),
  cursor: ArtistWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: ArtistScalarFieldEnumSchema.array().optional(),
}).strict()

export const ArtistAggregateArgsSchema: z.ZodType<Prisma.ArtistAggregateArgs> = z.object({
  where: ArtistWhereInputSchema.optional(),
  orderBy: z.union([ ArtistOrderByWithRelationInputSchema.array(),ArtistOrderByWithRelationInputSchema ]).optional(),
  cursor: ArtistWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const ArtistGroupByArgsSchema: z.ZodType<Prisma.ArtistGroupByArgs> = z.object({
  where: ArtistWhereInputSchema.optional(),
  orderBy: z.union([ ArtistOrderByWithAggregationInputSchema.array(),ArtistOrderByWithAggregationInputSchema ]).optional(),
  by: ArtistScalarFieldEnumSchema.array(),
  having: ArtistScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const ArtistFindUniqueArgsSchema: z.ZodType<Prisma.ArtistFindUniqueArgs> = z.object({
  select: ArtistSelectSchema.optional(),
  include: ArtistIncludeSchema.optional(),
  where: ArtistWhereUniqueInputSchema,
}).strict()

export const ArtistFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.ArtistFindUniqueOrThrowArgs> = z.object({
  select: ArtistSelectSchema.optional(),
  include: ArtistIncludeSchema.optional(),
  where: ArtistWhereUniqueInputSchema,
}).strict()

export const TranslatorFindFirstArgsSchema: z.ZodType<Prisma.TranslatorFindFirstArgs> = z.object({
  select: TranslatorSelectSchema.optional(),
  include: TranslatorIncludeSchema.optional(),
  where: TranslatorWhereInputSchema.optional(),
  orderBy: z.union([ TranslatorOrderByWithRelationInputSchema.array(),TranslatorOrderByWithRelationInputSchema ]).optional(),
  cursor: TranslatorWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: TranslatorScalarFieldEnumSchema.array().optional(),
}).strict()

export const TranslatorFindFirstOrThrowArgsSchema: z.ZodType<Prisma.TranslatorFindFirstOrThrowArgs> = z.object({
  select: TranslatorSelectSchema.optional(),
  include: TranslatorIncludeSchema.optional(),
  where: TranslatorWhereInputSchema.optional(),
  orderBy: z.union([ TranslatorOrderByWithRelationInputSchema.array(),TranslatorOrderByWithRelationInputSchema ]).optional(),
  cursor: TranslatorWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: TranslatorScalarFieldEnumSchema.array().optional(),
}).strict()

export const TranslatorFindManyArgsSchema: z.ZodType<Prisma.TranslatorFindManyArgs> = z.object({
  select: TranslatorSelectSchema.optional(),
  include: TranslatorIncludeSchema.optional(),
  where: TranslatorWhereInputSchema.optional(),
  orderBy: z.union([ TranslatorOrderByWithRelationInputSchema.array(),TranslatorOrderByWithRelationInputSchema ]).optional(),
  cursor: TranslatorWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: TranslatorScalarFieldEnumSchema.array().optional(),
}).strict()

export const TranslatorAggregateArgsSchema: z.ZodType<Prisma.TranslatorAggregateArgs> = z.object({
  where: TranslatorWhereInputSchema.optional(),
  orderBy: z.union([ TranslatorOrderByWithRelationInputSchema.array(),TranslatorOrderByWithRelationInputSchema ]).optional(),
  cursor: TranslatorWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const TranslatorGroupByArgsSchema: z.ZodType<Prisma.TranslatorGroupByArgs> = z.object({
  where: TranslatorWhereInputSchema.optional(),
  orderBy: z.union([ TranslatorOrderByWithAggregationInputSchema.array(),TranslatorOrderByWithAggregationInputSchema ]).optional(),
  by: TranslatorScalarFieldEnumSchema.array(),
  having: TranslatorScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const TranslatorFindUniqueArgsSchema: z.ZodType<Prisma.TranslatorFindUniqueArgs> = z.object({
  select: TranslatorSelectSchema.optional(),
  include: TranslatorIncludeSchema.optional(),
  where: TranslatorWhereUniqueInputSchema,
}).strict()

export const TranslatorFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.TranslatorFindUniqueOrThrowArgs> = z.object({
  select: TranslatorSelectSchema.optional(),
  include: TranslatorIncludeSchema.optional(),
  where: TranslatorWhereUniqueInputSchema,
}).strict()

export const StoryFindFirstArgsSchema: z.ZodType<Prisma.StoryFindFirstArgs> = z.object({
  select: StorySelectSchema.optional(),
  include: StoryIncludeSchema.optional(),
  where: StoryWhereInputSchema.optional(),
  orderBy: z.union([ StoryOrderByWithRelationInputSchema.array(),StoryOrderByWithRelationInputSchema ]).optional(),
  cursor: StoryWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: StoryScalarFieldEnumSchema.array().optional(),
}).strict()

export const StoryFindFirstOrThrowArgsSchema: z.ZodType<Prisma.StoryFindFirstOrThrowArgs> = z.object({
  select: StorySelectSchema.optional(),
  include: StoryIncludeSchema.optional(),
  where: StoryWhereInputSchema.optional(),
  orderBy: z.union([ StoryOrderByWithRelationInputSchema.array(),StoryOrderByWithRelationInputSchema ]).optional(),
  cursor: StoryWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: StoryScalarFieldEnumSchema.array().optional(),
}).strict()

export const StoryFindManyArgsSchema: z.ZodType<Prisma.StoryFindManyArgs> = z.object({
  select: StorySelectSchema.optional(),
  include: StoryIncludeSchema.optional(),
  where: StoryWhereInputSchema.optional(),
  orderBy: z.union([ StoryOrderByWithRelationInputSchema.array(),StoryOrderByWithRelationInputSchema ]).optional(),
  cursor: StoryWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: StoryScalarFieldEnumSchema.array().optional(),
}).strict()

export const StoryAggregateArgsSchema: z.ZodType<Prisma.StoryAggregateArgs> = z.object({
  where: StoryWhereInputSchema.optional(),
  orderBy: z.union([ StoryOrderByWithRelationInputSchema.array(),StoryOrderByWithRelationInputSchema ]).optional(),
  cursor: StoryWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const StoryGroupByArgsSchema: z.ZodType<Prisma.StoryGroupByArgs> = z.object({
  where: StoryWhereInputSchema.optional(),
  orderBy: z.union([ StoryOrderByWithAggregationInputSchema.array(),StoryOrderByWithAggregationInputSchema ]).optional(),
  by: StoryScalarFieldEnumSchema.array(),
  having: StoryScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const StoryFindUniqueArgsSchema: z.ZodType<Prisma.StoryFindUniqueArgs> = z.object({
  select: StorySelectSchema.optional(),
  include: StoryIncludeSchema.optional(),
  where: StoryWhereUniqueInputSchema,
}).strict()

export const StoryFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.StoryFindUniqueOrThrowArgs> = z.object({
  select: StorySelectSchema.optional(),
  include: StoryIncludeSchema.optional(),
  where: StoryWhereUniqueInputSchema,
}).strict()

export const PageArtworkFindFirstArgsSchema: z.ZodType<Prisma.PageArtworkFindFirstArgs> = z.object({
  select: PageArtworkSelectSchema.optional(),
  include: PageArtworkIncludeSchema.optional(),
  where: PageArtworkWhereInputSchema.optional(),
  orderBy: z.union([ PageArtworkOrderByWithRelationInputSchema.array(),PageArtworkOrderByWithRelationInputSchema ]).optional(),
  cursor: PageArtworkWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: PageArtworkScalarFieldEnumSchema.array().optional(),
}).strict()

export const PageArtworkFindFirstOrThrowArgsSchema: z.ZodType<Prisma.PageArtworkFindFirstOrThrowArgs> = z.object({
  select: PageArtworkSelectSchema.optional(),
  include: PageArtworkIncludeSchema.optional(),
  where: PageArtworkWhereInputSchema.optional(),
  orderBy: z.union([ PageArtworkOrderByWithRelationInputSchema.array(),PageArtworkOrderByWithRelationInputSchema ]).optional(),
  cursor: PageArtworkWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: PageArtworkScalarFieldEnumSchema.array().optional(),
}).strict()

export const PageArtworkFindManyArgsSchema: z.ZodType<Prisma.PageArtworkFindManyArgs> = z.object({
  select: PageArtworkSelectSchema.optional(),
  include: PageArtworkIncludeSchema.optional(),
  where: PageArtworkWhereInputSchema.optional(),
  orderBy: z.union([ PageArtworkOrderByWithRelationInputSchema.array(),PageArtworkOrderByWithRelationInputSchema ]).optional(),
  cursor: PageArtworkWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: PageArtworkScalarFieldEnumSchema.array().optional(),
}).strict()

export const PageArtworkAggregateArgsSchema: z.ZodType<Prisma.PageArtworkAggregateArgs> = z.object({
  where: PageArtworkWhereInputSchema.optional(),
  orderBy: z.union([ PageArtworkOrderByWithRelationInputSchema.array(),PageArtworkOrderByWithRelationInputSchema ]).optional(),
  cursor: PageArtworkWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const PageArtworkGroupByArgsSchema: z.ZodType<Prisma.PageArtworkGroupByArgs> = z.object({
  where: PageArtworkWhereInputSchema.optional(),
  orderBy: z.union([ PageArtworkOrderByWithAggregationInputSchema.array(),PageArtworkOrderByWithAggregationInputSchema ]).optional(),
  by: PageArtworkScalarFieldEnumSchema.array(),
  having: PageArtworkScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const PageArtworkFindUniqueArgsSchema: z.ZodType<Prisma.PageArtworkFindUniqueArgs> = z.object({
  select: PageArtworkSelectSchema.optional(),
  include: PageArtworkIncludeSchema.optional(),
  where: PageArtworkWhereUniqueInputSchema,
}).strict()

export const PageArtworkFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.PageArtworkFindUniqueOrThrowArgs> = z.object({
  select: PageArtworkSelectSchema.optional(),
  include: PageArtworkIncludeSchema.optional(),
  where: PageArtworkWhereUniqueInputSchema,
}).strict()

export const PageTextFindFirstArgsSchema: z.ZodType<Prisma.PageTextFindFirstArgs> = z.object({
  select: PageTextSelectSchema.optional(),
  include: PageTextIncludeSchema.optional(),
  where: PageTextWhereInputSchema.optional(),
  orderBy: z.union([ PageTextOrderByWithRelationInputSchema.array(),PageTextOrderByWithRelationInputSchema ]).optional(),
  cursor: PageTextWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: PageTextScalarFieldEnumSchema.array().optional(),
}).strict()

export const PageTextFindFirstOrThrowArgsSchema: z.ZodType<Prisma.PageTextFindFirstOrThrowArgs> = z.object({
  select: PageTextSelectSchema.optional(),
  include: PageTextIncludeSchema.optional(),
  where: PageTextWhereInputSchema.optional(),
  orderBy: z.union([ PageTextOrderByWithRelationInputSchema.array(),PageTextOrderByWithRelationInputSchema ]).optional(),
  cursor: PageTextWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: PageTextScalarFieldEnumSchema.array().optional(),
}).strict()

export const PageTextFindManyArgsSchema: z.ZodType<Prisma.PageTextFindManyArgs> = z.object({
  select: PageTextSelectSchema.optional(),
  include: PageTextIncludeSchema.optional(),
  where: PageTextWhereInputSchema.optional(),
  orderBy: z.union([ PageTextOrderByWithRelationInputSchema.array(),PageTextOrderByWithRelationInputSchema ]).optional(),
  cursor: PageTextWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: PageTextScalarFieldEnumSchema.array().optional(),
}).strict()

export const PageTextAggregateArgsSchema: z.ZodType<Prisma.PageTextAggregateArgs> = z.object({
  where: PageTextWhereInputSchema.optional(),
  orderBy: z.union([ PageTextOrderByWithRelationInputSchema.array(),PageTextOrderByWithRelationInputSchema ]).optional(),
  cursor: PageTextWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const PageTextGroupByArgsSchema: z.ZodType<Prisma.PageTextGroupByArgs> = z.object({
  where: PageTextWhereInputSchema.optional(),
  orderBy: z.union([ PageTextOrderByWithAggregationInputSchema.array(),PageTextOrderByWithAggregationInputSchema ]).optional(),
  by: PageTextScalarFieldEnumSchema.array(),
  having: PageTextScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const PageTextFindUniqueArgsSchema: z.ZodType<Prisma.PageTextFindUniqueArgs> = z.object({
  select: PageTextSelectSchema.optional(),
  include: PageTextIncludeSchema.optional(),
  where: PageTextWhereUniqueInputSchema,
}).strict()

export const PageTextFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.PageTextFindUniqueOrThrowArgs> = z.object({
  select: PageTextSelectSchema.optional(),
  include: PageTextIncludeSchema.optional(),
  where: PageTextWhereUniqueInputSchema,
}).strict()

export const PageFindFirstArgsSchema: z.ZodType<Prisma.PageFindFirstArgs> = z.object({
  select: PageSelectSchema.optional(),
  include: PageIncludeSchema.optional(),
  where: PageWhereInputSchema.optional(),
  orderBy: z.union([ PageOrderByWithRelationInputSchema.array(),PageOrderByWithRelationInputSchema ]).optional(),
  cursor: PageWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: PageScalarFieldEnumSchema.array().optional(),
}).strict()

export const PageFindFirstOrThrowArgsSchema: z.ZodType<Prisma.PageFindFirstOrThrowArgs> = z.object({
  select: PageSelectSchema.optional(),
  include: PageIncludeSchema.optional(),
  where: PageWhereInputSchema.optional(),
  orderBy: z.union([ PageOrderByWithRelationInputSchema.array(),PageOrderByWithRelationInputSchema ]).optional(),
  cursor: PageWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: PageScalarFieldEnumSchema.array().optional(),
}).strict()

export const PageFindManyArgsSchema: z.ZodType<Prisma.PageFindManyArgs> = z.object({
  select: PageSelectSchema.optional(),
  include: PageIncludeSchema.optional(),
  where: PageWhereInputSchema.optional(),
  orderBy: z.union([ PageOrderByWithRelationInputSchema.array(),PageOrderByWithRelationInputSchema ]).optional(),
  cursor: PageWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: PageScalarFieldEnumSchema.array().optional(),
}).strict()

export const PageAggregateArgsSchema: z.ZodType<Prisma.PageAggregateArgs> = z.object({
  where: PageWhereInputSchema.optional(),
  orderBy: z.union([ PageOrderByWithRelationInputSchema.array(),PageOrderByWithRelationInputSchema ]).optional(),
  cursor: PageWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const PageGroupByArgsSchema: z.ZodType<Prisma.PageGroupByArgs> = z.object({
  where: PageWhereInputSchema.optional(),
  orderBy: z.union([ PageOrderByWithAggregationInputSchema.array(),PageOrderByWithAggregationInputSchema ]).optional(),
  by: PageScalarFieldEnumSchema.array(),
  having: PageScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const PageFindUniqueArgsSchema: z.ZodType<Prisma.PageFindUniqueArgs> = z.object({
  select: PageSelectSchema.optional(),
  include: PageIncludeSchema.optional(),
  where: PageWhereUniqueInputSchema,
}).strict()

export const PageFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.PageFindUniqueOrThrowArgs> = z.object({
  select: PageSelectSchema.optional(),
  include: PageIncludeSchema.optional(),
  where: PageWhereUniqueInputSchema,
}).strict()

export const EditionFindFirstArgsSchema: z.ZodType<Prisma.EditionFindFirstArgs> = z.object({
  select: EditionSelectSchema.optional(),
  include: EditionIncludeSchema.optional(),
  where: EditionWhereInputSchema.optional(),
  orderBy: z.union([ EditionOrderByWithRelationInputSchema.array(),EditionOrderByWithRelationInputSchema ]).optional(),
  cursor: EditionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: EditionScalarFieldEnumSchema.array().optional(),
}).strict()

export const EditionFindFirstOrThrowArgsSchema: z.ZodType<Prisma.EditionFindFirstOrThrowArgs> = z.object({
  select: EditionSelectSchema.optional(),
  include: EditionIncludeSchema.optional(),
  where: EditionWhereInputSchema.optional(),
  orderBy: z.union([ EditionOrderByWithRelationInputSchema.array(),EditionOrderByWithRelationInputSchema ]).optional(),
  cursor: EditionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: EditionScalarFieldEnumSchema.array().optional(),
}).strict()

export const EditionFindManyArgsSchema: z.ZodType<Prisma.EditionFindManyArgs> = z.object({
  select: EditionSelectSchema.optional(),
  include: EditionIncludeSchema.optional(),
  where: EditionWhereInputSchema.optional(),
  orderBy: z.union([ EditionOrderByWithRelationInputSchema.array(),EditionOrderByWithRelationInputSchema ]).optional(),
  cursor: EditionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: EditionScalarFieldEnumSchema.array().optional(),
}).strict()

export const EditionAggregateArgsSchema: z.ZodType<Prisma.EditionAggregateArgs> = z.object({
  where: EditionWhereInputSchema.optional(),
  orderBy: z.union([ EditionOrderByWithRelationInputSchema.array(),EditionOrderByWithRelationInputSchema ]).optional(),
  cursor: EditionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const EditionGroupByArgsSchema: z.ZodType<Prisma.EditionGroupByArgs> = z.object({
  where: EditionWhereInputSchema.optional(),
  orderBy: z.union([ EditionOrderByWithAggregationInputSchema.array(),EditionOrderByWithAggregationInputSchema ]).optional(),
  by: EditionScalarFieldEnumSchema.array(),
  having: EditionScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const EditionFindUniqueArgsSchema: z.ZodType<Prisma.EditionFindUniqueArgs> = z.object({
  select: EditionSelectSchema.optional(),
  include: EditionIncludeSchema.optional(),
  where: EditionWhereUniqueInputSchema,
}).strict()

export const EditionFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.EditionFindUniqueOrThrowArgs> = z.object({
  select: EditionSelectSchema.optional(),
  include: EditionIncludeSchema.optional(),
  where: EditionWhereUniqueInputSchema,
}).strict()

export const ConceptFindFirstArgsSchema: z.ZodType<Prisma.ConceptFindFirstArgs> = z.object({
  select: ConceptSelectSchema.optional(),
  include: ConceptIncludeSchema.optional(),
  where: ConceptWhereInputSchema.optional(),
  orderBy: z.union([ ConceptOrderByWithRelationInputSchema.array(),ConceptOrderByWithRelationInputSchema ]).optional(),
  cursor: ConceptWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: ConceptScalarFieldEnumSchema.array().optional(),
}).strict()

export const ConceptFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ConceptFindFirstOrThrowArgs> = z.object({
  select: ConceptSelectSchema.optional(),
  include: ConceptIncludeSchema.optional(),
  where: ConceptWhereInputSchema.optional(),
  orderBy: z.union([ ConceptOrderByWithRelationInputSchema.array(),ConceptOrderByWithRelationInputSchema ]).optional(),
  cursor: ConceptWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: ConceptScalarFieldEnumSchema.array().optional(),
}).strict()

export const ConceptFindManyArgsSchema: z.ZodType<Prisma.ConceptFindManyArgs> = z.object({
  select: ConceptSelectSchema.optional(),
  include: ConceptIncludeSchema.optional(),
  where: ConceptWhereInputSchema.optional(),
  orderBy: z.union([ ConceptOrderByWithRelationInputSchema.array(),ConceptOrderByWithRelationInputSchema ]).optional(),
  cursor: ConceptWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: ConceptScalarFieldEnumSchema.array().optional(),
}).strict()

export const ConceptAggregateArgsSchema: z.ZodType<Prisma.ConceptAggregateArgs> = z.object({
  where: ConceptWhereInputSchema.optional(),
  orderBy: z.union([ ConceptOrderByWithRelationInputSchema.array(),ConceptOrderByWithRelationInputSchema ]).optional(),
  cursor: ConceptWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const ConceptGroupByArgsSchema: z.ZodType<Prisma.ConceptGroupByArgs> = z.object({
  where: ConceptWhereInputSchema.optional(),
  orderBy: z.union([ ConceptOrderByWithAggregationInputSchema.array(),ConceptOrderByWithAggregationInputSchema ]).optional(),
  by: ConceptScalarFieldEnumSchema.array(),
  having: ConceptScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const ConceptFindUniqueArgsSchema: z.ZodType<Prisma.ConceptFindUniqueArgs> = z.object({
  select: ConceptSelectSchema.optional(),
  include: ConceptIncludeSchema.optional(),
  where: ConceptWhereUniqueInputSchema,
}).strict()

export const ConceptFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.ConceptFindUniqueOrThrowArgs> = z.object({
  select: ConceptSelectSchema.optional(),
  include: ConceptIncludeSchema.optional(),
  where: ConceptWhereUniqueInputSchema,
}).strict()

export const PredictionFindFirstArgsSchema: z.ZodType<Prisma.PredictionFindFirstArgs> = z.object({
  select: PredictionSelectSchema.optional(),
  where: PredictionWhereInputSchema.optional(),
  orderBy: z.union([ PredictionOrderByWithRelationInputSchema.array(),PredictionOrderByWithRelationInputSchema ]).optional(),
  cursor: PredictionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: PredictionScalarFieldEnumSchema.array().optional(),
}).strict()

export const PredictionFindFirstOrThrowArgsSchema: z.ZodType<Prisma.PredictionFindFirstOrThrowArgs> = z.object({
  select: PredictionSelectSchema.optional(),
  where: PredictionWhereInputSchema.optional(),
  orderBy: z.union([ PredictionOrderByWithRelationInputSchema.array(),PredictionOrderByWithRelationInputSchema ]).optional(),
  cursor: PredictionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: PredictionScalarFieldEnumSchema.array().optional(),
}).strict()

export const PredictionFindManyArgsSchema: z.ZodType<Prisma.PredictionFindManyArgs> = z.object({
  select: PredictionSelectSchema.optional(),
  where: PredictionWhereInputSchema.optional(),
  orderBy: z.union([ PredictionOrderByWithRelationInputSchema.array(),PredictionOrderByWithRelationInputSchema ]).optional(),
  cursor: PredictionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: PredictionScalarFieldEnumSchema.array().optional(),
}).strict()

export const PredictionAggregateArgsSchema: z.ZodType<Prisma.PredictionAggregateArgs> = z.object({
  where: PredictionWhereInputSchema.optional(),
  orderBy: z.union([ PredictionOrderByWithRelationInputSchema.array(),PredictionOrderByWithRelationInputSchema ]).optional(),
  cursor: PredictionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const PredictionGroupByArgsSchema: z.ZodType<Prisma.PredictionGroupByArgs> = z.object({
  where: PredictionWhereInputSchema.optional(),
  orderBy: z.union([ PredictionOrderByWithAggregationInputSchema.array(),PredictionOrderByWithAggregationInputSchema ]).optional(),
  by: PredictionScalarFieldEnumSchema.array(),
  having: PredictionScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const PredictionFindUniqueArgsSchema: z.ZodType<Prisma.PredictionFindUniqueArgs> = z.object({
  select: PredictionSelectSchema.optional(),
  where: PredictionWhereUniqueInputSchema,
}).strict()

export const PredictionFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.PredictionFindUniqueOrThrowArgs> = z.object({
  select: PredictionSelectSchema.optional(),
  where: PredictionWhereUniqueInputSchema,
}).strict()

export const CloudFileCreateArgsSchema: z.ZodType<Prisma.CloudFileCreateArgs> = z.object({
  select: CloudFileSelectSchema.optional(),
  include: CloudFileIncludeSchema.optional(),
  data: z.union([ CloudFileCreateInputSchema,CloudFileUncheckedCreateInputSchema ]),
}).strict()

export const CloudFileUpsertArgsSchema: z.ZodType<Prisma.CloudFileUpsertArgs> = z.object({
  select: CloudFileSelectSchema.optional(),
  include: CloudFileIncludeSchema.optional(),
  where: CloudFileWhereUniqueInputSchema,
  create: z.union([ CloudFileCreateInputSchema,CloudFileUncheckedCreateInputSchema ]),
  update: z.union([ CloudFileUpdateInputSchema,CloudFileUncheckedUpdateInputSchema ]),
}).strict()

export const CloudFileCreateManyArgsSchema: z.ZodType<Prisma.CloudFileCreateManyArgs> = z.object({
  data: z.union([ CloudFileCreateManyInputSchema,CloudFileCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export const CloudFileDeleteArgsSchema: z.ZodType<Prisma.CloudFileDeleteArgs> = z.object({
  select: CloudFileSelectSchema.optional(),
  include: CloudFileIncludeSchema.optional(),
  where: CloudFileWhereUniqueInputSchema,
}).strict()

export const CloudFileUpdateArgsSchema: z.ZodType<Prisma.CloudFileUpdateArgs> = z.object({
  select: CloudFileSelectSchema.optional(),
  include: CloudFileIncludeSchema.optional(),
  data: z.union([ CloudFileUpdateInputSchema,CloudFileUncheckedUpdateInputSchema ]),
  where: CloudFileWhereUniqueInputSchema,
}).strict()

export const CloudFileUpdateManyArgsSchema: z.ZodType<Prisma.CloudFileUpdateManyArgs> = z.object({
  data: z.union([ CloudFileUpdateManyMutationInputSchema,CloudFileUncheckedUpdateManyInputSchema ]),
  where: CloudFileWhereInputSchema.optional(),
}).strict()

export const CloudFileDeleteManyArgsSchema: z.ZodType<Prisma.CloudFileDeleteManyArgs> = z.object({
  where: CloudFileWhereInputSchema.optional(),
}).strict()

export const PhotoCreateArgsSchema: z.ZodType<Prisma.PhotoCreateArgs> = z.object({
  select: PhotoSelectSchema.optional(),
  include: PhotoIncludeSchema.optional(),
  data: z.union([ PhotoCreateInputSchema,PhotoUncheckedCreateInputSchema ]),
}).strict()

export const PhotoUpsertArgsSchema: z.ZodType<Prisma.PhotoUpsertArgs> = z.object({
  select: PhotoSelectSchema.optional(),
  include: PhotoIncludeSchema.optional(),
  where: PhotoWhereUniqueInputSchema,
  create: z.union([ PhotoCreateInputSchema,PhotoUncheckedCreateInputSchema ]),
  update: z.union([ PhotoUpdateInputSchema,PhotoUncheckedUpdateInputSchema ]),
}).strict()

export const PhotoCreateManyArgsSchema: z.ZodType<Prisma.PhotoCreateManyArgs> = z.object({
  data: z.union([ PhotoCreateManyInputSchema,PhotoCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export const PhotoDeleteArgsSchema: z.ZodType<Prisma.PhotoDeleteArgs> = z.object({
  select: PhotoSelectSchema.optional(),
  include: PhotoIncludeSchema.optional(),
  where: PhotoWhereUniqueInputSchema,
}).strict()

export const PhotoUpdateArgsSchema: z.ZodType<Prisma.PhotoUpdateArgs> = z.object({
  select: PhotoSelectSchema.optional(),
  include: PhotoIncludeSchema.optional(),
  data: z.union([ PhotoUpdateInputSchema,PhotoUncheckedUpdateInputSchema ]),
  where: PhotoWhereUniqueInputSchema,
}).strict()

export const PhotoUpdateManyArgsSchema: z.ZodType<Prisma.PhotoUpdateManyArgs> = z.object({
  data: z.union([ PhotoUpdateManyMutationInputSchema,PhotoUncheckedUpdateManyInputSchema ]),
  where: PhotoWhereInputSchema.optional(),
}).strict()

export const PhotoDeleteManyArgsSchema: z.ZodType<Prisma.PhotoDeleteManyArgs> = z.object({
  where: PhotoWhereInputSchema.optional(),
}).strict()

export const PDFCreateArgsSchema: z.ZodType<Prisma.PDFCreateArgs> = z.object({
  select: PDFSelectSchema.optional(),
  include: PDFIncludeSchema.optional(),
  data: z.union([ PDFCreateInputSchema,PDFUncheckedCreateInputSchema ]),
}).strict()

export const PDFUpsertArgsSchema: z.ZodType<Prisma.PDFUpsertArgs> = z.object({
  select: PDFSelectSchema.optional(),
  include: PDFIncludeSchema.optional(),
  where: PDFWhereUniqueInputSchema,
  create: z.union([ PDFCreateInputSchema,PDFUncheckedCreateInputSchema ]),
  update: z.union([ PDFUpdateInputSchema,PDFUncheckedUpdateInputSchema ]),
}).strict()

export const PDFCreateManyArgsSchema: z.ZodType<Prisma.PDFCreateManyArgs> = z.object({
  data: z.union([ PDFCreateManyInputSchema,PDFCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export const PDFDeleteArgsSchema: z.ZodType<Prisma.PDFDeleteArgs> = z.object({
  select: PDFSelectSchema.optional(),
  include: PDFIncludeSchema.optional(),
  where: PDFWhereUniqueInputSchema,
}).strict()

export const PDFUpdateArgsSchema: z.ZodType<Prisma.PDFUpdateArgs> = z.object({
  select: PDFSelectSchema.optional(),
  include: PDFIncludeSchema.optional(),
  data: z.union([ PDFUpdateInputSchema,PDFUncheckedUpdateInputSchema ]),
  where: PDFWhereUniqueInputSchema,
}).strict()

export const PDFUpdateManyArgsSchema: z.ZodType<Prisma.PDFUpdateManyArgs> = z.object({
  data: z.union([ PDFUpdateManyMutationInputSchema,PDFUncheckedUpdateManyInputSchema ]),
  where: PDFWhereInputSchema.optional(),
}).strict()

export const PDFDeleteManyArgsSchema: z.ZodType<Prisma.PDFDeleteManyArgs> = z.object({
  where: PDFWhereInputSchema.optional(),
}).strict()

export const UserCreateArgsSchema: z.ZodType<Prisma.UserCreateArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  data: z.union([ UserCreateInputSchema,UserUncheckedCreateInputSchema ]),
}).strict()

export const UserUpsertArgsSchema: z.ZodType<Prisma.UserUpsertArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
  create: z.union([ UserCreateInputSchema,UserUncheckedCreateInputSchema ]),
  update: z.union([ UserUpdateInputSchema,UserUncheckedUpdateInputSchema ]),
}).strict()

export const UserCreateManyArgsSchema: z.ZodType<Prisma.UserCreateManyArgs> = z.object({
  data: z.union([ UserCreateManyInputSchema,UserCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export const UserDeleteArgsSchema: z.ZodType<Prisma.UserDeleteArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
}).strict()

export const UserUpdateArgsSchema: z.ZodType<Prisma.UserUpdateArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  data: z.union([ UserUpdateInputSchema,UserUncheckedUpdateInputSchema ]),
  where: UserWhereUniqueInputSchema,
}).strict()

export const UserUpdateManyArgsSchema: z.ZodType<Prisma.UserUpdateManyArgs> = z.object({
  data: z.union([ UserUpdateManyMutationInputSchema,UserUncheckedUpdateManyInputSchema ]),
  where: UserWhereInputSchema.optional(),
}).strict()

export const UserDeleteManyArgsSchema: z.ZodType<Prisma.UserDeleteManyArgs> = z.object({
  where: UserWhereInputSchema.optional(),
}).strict()

export const AuthorCreateArgsSchema: z.ZodType<Prisma.AuthorCreateArgs> = z.object({
  select: AuthorSelectSchema.optional(),
  include: AuthorIncludeSchema.optional(),
  data: z.union([ AuthorCreateInputSchema,AuthorUncheckedCreateInputSchema ]),
}).strict()

export const AuthorUpsertArgsSchema: z.ZodType<Prisma.AuthorUpsertArgs> = z.object({
  select: AuthorSelectSchema.optional(),
  include: AuthorIncludeSchema.optional(),
  where: AuthorWhereUniqueInputSchema,
  create: z.union([ AuthorCreateInputSchema,AuthorUncheckedCreateInputSchema ]),
  update: z.union([ AuthorUpdateInputSchema,AuthorUncheckedUpdateInputSchema ]),
}).strict()

export const AuthorCreateManyArgsSchema: z.ZodType<Prisma.AuthorCreateManyArgs> = z.object({
  data: z.union([ AuthorCreateManyInputSchema,AuthorCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export const AuthorDeleteArgsSchema: z.ZodType<Prisma.AuthorDeleteArgs> = z.object({
  select: AuthorSelectSchema.optional(),
  include: AuthorIncludeSchema.optional(),
  where: AuthorWhereUniqueInputSchema,
}).strict()

export const AuthorUpdateArgsSchema: z.ZodType<Prisma.AuthorUpdateArgs> = z.object({
  select: AuthorSelectSchema.optional(),
  include: AuthorIncludeSchema.optional(),
  data: z.union([ AuthorUpdateInputSchema,AuthorUncheckedUpdateInputSchema ]),
  where: AuthorWhereUniqueInputSchema,
}).strict()

export const AuthorUpdateManyArgsSchema: z.ZodType<Prisma.AuthorUpdateManyArgs> = z.object({
  data: z.union([ AuthorUpdateManyMutationInputSchema,AuthorUncheckedUpdateManyInputSchema ]),
  where: AuthorWhereInputSchema.optional(),
}).strict()

export const AuthorDeleteManyArgsSchema: z.ZodType<Prisma.AuthorDeleteManyArgs> = z.object({
  where: AuthorWhereInputSchema.optional(),
}).strict()

export const ArtistCreateArgsSchema: z.ZodType<Prisma.ArtistCreateArgs> = z.object({
  select: ArtistSelectSchema.optional(),
  include: ArtistIncludeSchema.optional(),
  data: z.union([ ArtistCreateInputSchema,ArtistUncheckedCreateInputSchema ]),
}).strict()

export const ArtistUpsertArgsSchema: z.ZodType<Prisma.ArtistUpsertArgs> = z.object({
  select: ArtistSelectSchema.optional(),
  include: ArtistIncludeSchema.optional(),
  where: ArtistWhereUniqueInputSchema,
  create: z.union([ ArtistCreateInputSchema,ArtistUncheckedCreateInputSchema ]),
  update: z.union([ ArtistUpdateInputSchema,ArtistUncheckedUpdateInputSchema ]),
}).strict()

export const ArtistCreateManyArgsSchema: z.ZodType<Prisma.ArtistCreateManyArgs> = z.object({
  data: z.union([ ArtistCreateManyInputSchema,ArtistCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export const ArtistDeleteArgsSchema: z.ZodType<Prisma.ArtistDeleteArgs> = z.object({
  select: ArtistSelectSchema.optional(),
  include: ArtistIncludeSchema.optional(),
  where: ArtistWhereUniqueInputSchema,
}).strict()

export const ArtistUpdateArgsSchema: z.ZodType<Prisma.ArtistUpdateArgs> = z.object({
  select: ArtistSelectSchema.optional(),
  include: ArtistIncludeSchema.optional(),
  data: z.union([ ArtistUpdateInputSchema,ArtistUncheckedUpdateInputSchema ]),
  where: ArtistWhereUniqueInputSchema,
}).strict()

export const ArtistUpdateManyArgsSchema: z.ZodType<Prisma.ArtistUpdateManyArgs> = z.object({
  data: z.union([ ArtistUpdateManyMutationInputSchema,ArtistUncheckedUpdateManyInputSchema ]),
  where: ArtistWhereInputSchema.optional(),
}).strict()

export const ArtistDeleteManyArgsSchema: z.ZodType<Prisma.ArtistDeleteManyArgs> = z.object({
  where: ArtistWhereInputSchema.optional(),
}).strict()

export const TranslatorCreateArgsSchema: z.ZodType<Prisma.TranslatorCreateArgs> = z.object({
  select: TranslatorSelectSchema.optional(),
  include: TranslatorIncludeSchema.optional(),
  data: z.union([ TranslatorCreateInputSchema,TranslatorUncheckedCreateInputSchema ]),
}).strict()

export const TranslatorUpsertArgsSchema: z.ZodType<Prisma.TranslatorUpsertArgs> = z.object({
  select: TranslatorSelectSchema.optional(),
  include: TranslatorIncludeSchema.optional(),
  where: TranslatorWhereUniqueInputSchema,
  create: z.union([ TranslatorCreateInputSchema,TranslatorUncheckedCreateInputSchema ]),
  update: z.union([ TranslatorUpdateInputSchema,TranslatorUncheckedUpdateInputSchema ]),
}).strict()

export const TranslatorCreateManyArgsSchema: z.ZodType<Prisma.TranslatorCreateManyArgs> = z.object({
  data: z.union([ TranslatorCreateManyInputSchema,TranslatorCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export const TranslatorDeleteArgsSchema: z.ZodType<Prisma.TranslatorDeleteArgs> = z.object({
  select: TranslatorSelectSchema.optional(),
  include: TranslatorIncludeSchema.optional(),
  where: TranslatorWhereUniqueInputSchema,
}).strict()

export const TranslatorUpdateArgsSchema: z.ZodType<Prisma.TranslatorUpdateArgs> = z.object({
  select: TranslatorSelectSchema.optional(),
  include: TranslatorIncludeSchema.optional(),
  data: z.union([ TranslatorUpdateInputSchema,TranslatorUncheckedUpdateInputSchema ]),
  where: TranslatorWhereUniqueInputSchema,
}).strict()

export const TranslatorUpdateManyArgsSchema: z.ZodType<Prisma.TranslatorUpdateManyArgs> = z.object({
  data: z.union([ TranslatorUpdateManyMutationInputSchema,TranslatorUncheckedUpdateManyInputSchema ]),
  where: TranslatorWhereInputSchema.optional(),
}).strict()

export const TranslatorDeleteManyArgsSchema: z.ZodType<Prisma.TranslatorDeleteManyArgs> = z.object({
  where: TranslatorWhereInputSchema.optional(),
}).strict()

export const StoryCreateArgsSchema: z.ZodType<Prisma.StoryCreateArgs> = z.object({
  select: StorySelectSchema.optional(),
  include: StoryIncludeSchema.optional(),
  data: z.union([ StoryCreateInputSchema,StoryUncheckedCreateInputSchema ]),
}).strict()

export const StoryUpsertArgsSchema: z.ZodType<Prisma.StoryUpsertArgs> = z.object({
  select: StorySelectSchema.optional(),
  include: StoryIncludeSchema.optional(),
  where: StoryWhereUniqueInputSchema,
  create: z.union([ StoryCreateInputSchema,StoryUncheckedCreateInputSchema ]),
  update: z.union([ StoryUpdateInputSchema,StoryUncheckedUpdateInputSchema ]),
}).strict()

export const StoryCreateManyArgsSchema: z.ZodType<Prisma.StoryCreateManyArgs> = z.object({
  data: z.union([ StoryCreateManyInputSchema,StoryCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export const StoryDeleteArgsSchema: z.ZodType<Prisma.StoryDeleteArgs> = z.object({
  select: StorySelectSchema.optional(),
  include: StoryIncludeSchema.optional(),
  where: StoryWhereUniqueInputSchema,
}).strict()

export const StoryUpdateArgsSchema: z.ZodType<Prisma.StoryUpdateArgs> = z.object({
  select: StorySelectSchema.optional(),
  include: StoryIncludeSchema.optional(),
  data: z.union([ StoryUpdateInputSchema,StoryUncheckedUpdateInputSchema ]),
  where: StoryWhereUniqueInputSchema,
}).strict()

export const StoryUpdateManyArgsSchema: z.ZodType<Prisma.StoryUpdateManyArgs> = z.object({
  data: z.union([ StoryUpdateManyMutationInputSchema,StoryUncheckedUpdateManyInputSchema ]),
  where: StoryWhereInputSchema.optional(),
}).strict()

export const StoryDeleteManyArgsSchema: z.ZodType<Prisma.StoryDeleteManyArgs> = z.object({
  where: StoryWhereInputSchema.optional(),
}).strict()

export const PageArtworkCreateArgsSchema: z.ZodType<Prisma.PageArtworkCreateArgs> = z.object({
  select: PageArtworkSelectSchema.optional(),
  include: PageArtworkIncludeSchema.optional(),
  data: z.union([ PageArtworkCreateInputSchema,PageArtworkUncheckedCreateInputSchema ]),
}).strict()

export const PageArtworkUpsertArgsSchema: z.ZodType<Prisma.PageArtworkUpsertArgs> = z.object({
  select: PageArtworkSelectSchema.optional(),
  include: PageArtworkIncludeSchema.optional(),
  where: PageArtworkWhereUniqueInputSchema,
  create: z.union([ PageArtworkCreateInputSchema,PageArtworkUncheckedCreateInputSchema ]),
  update: z.union([ PageArtworkUpdateInputSchema,PageArtworkUncheckedUpdateInputSchema ]),
}).strict()

export const PageArtworkCreateManyArgsSchema: z.ZodType<Prisma.PageArtworkCreateManyArgs> = z.object({
  data: z.union([ PageArtworkCreateManyInputSchema,PageArtworkCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export const PageArtworkDeleteArgsSchema: z.ZodType<Prisma.PageArtworkDeleteArgs> = z.object({
  select: PageArtworkSelectSchema.optional(),
  include: PageArtworkIncludeSchema.optional(),
  where: PageArtworkWhereUniqueInputSchema,
}).strict()

export const PageArtworkUpdateArgsSchema: z.ZodType<Prisma.PageArtworkUpdateArgs> = z.object({
  select: PageArtworkSelectSchema.optional(),
  include: PageArtworkIncludeSchema.optional(),
  data: z.union([ PageArtworkUpdateInputSchema,PageArtworkUncheckedUpdateInputSchema ]),
  where: PageArtworkWhereUniqueInputSchema,
}).strict()

export const PageArtworkUpdateManyArgsSchema: z.ZodType<Prisma.PageArtworkUpdateManyArgs> = z.object({
  data: z.union([ PageArtworkUpdateManyMutationInputSchema,PageArtworkUncheckedUpdateManyInputSchema ]),
  where: PageArtworkWhereInputSchema.optional(),
}).strict()

export const PageArtworkDeleteManyArgsSchema: z.ZodType<Prisma.PageArtworkDeleteManyArgs> = z.object({
  where: PageArtworkWhereInputSchema.optional(),
}).strict()

export const PageTextCreateArgsSchema: z.ZodType<Prisma.PageTextCreateArgs> = z.object({
  select: PageTextSelectSchema.optional(),
  include: PageTextIncludeSchema.optional(),
  data: z.union([ PageTextCreateInputSchema,PageTextUncheckedCreateInputSchema ]),
}).strict()

export const PageTextUpsertArgsSchema: z.ZodType<Prisma.PageTextUpsertArgs> = z.object({
  select: PageTextSelectSchema.optional(),
  include: PageTextIncludeSchema.optional(),
  where: PageTextWhereUniqueInputSchema,
  create: z.union([ PageTextCreateInputSchema,PageTextUncheckedCreateInputSchema ]),
  update: z.union([ PageTextUpdateInputSchema,PageTextUncheckedUpdateInputSchema ]),
}).strict()

export const PageTextCreateManyArgsSchema: z.ZodType<Prisma.PageTextCreateManyArgs> = z.object({
  data: z.union([ PageTextCreateManyInputSchema,PageTextCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export const PageTextDeleteArgsSchema: z.ZodType<Prisma.PageTextDeleteArgs> = z.object({
  select: PageTextSelectSchema.optional(),
  include: PageTextIncludeSchema.optional(),
  where: PageTextWhereUniqueInputSchema,
}).strict()

export const PageTextUpdateArgsSchema: z.ZodType<Prisma.PageTextUpdateArgs> = z.object({
  select: PageTextSelectSchema.optional(),
  include: PageTextIncludeSchema.optional(),
  data: z.union([ PageTextUpdateInputSchema,PageTextUncheckedUpdateInputSchema ]),
  where: PageTextWhereUniqueInputSchema,
}).strict()

export const PageTextUpdateManyArgsSchema: z.ZodType<Prisma.PageTextUpdateManyArgs> = z.object({
  data: z.union([ PageTextUpdateManyMutationInputSchema,PageTextUncheckedUpdateManyInputSchema ]),
  where: PageTextWhereInputSchema.optional(),
}).strict()

export const PageTextDeleteManyArgsSchema: z.ZodType<Prisma.PageTextDeleteManyArgs> = z.object({
  where: PageTextWhereInputSchema.optional(),
}).strict()

export const PageCreateArgsSchema: z.ZodType<Prisma.PageCreateArgs> = z.object({
  select: PageSelectSchema.optional(),
  include: PageIncludeSchema.optional(),
  data: z.union([ PageCreateInputSchema,PageUncheckedCreateInputSchema ]),
}).strict()

export const PageUpsertArgsSchema: z.ZodType<Prisma.PageUpsertArgs> = z.object({
  select: PageSelectSchema.optional(),
  include: PageIncludeSchema.optional(),
  where: PageWhereUniqueInputSchema,
  create: z.union([ PageCreateInputSchema,PageUncheckedCreateInputSchema ]),
  update: z.union([ PageUpdateInputSchema,PageUncheckedUpdateInputSchema ]),
}).strict()

export const PageCreateManyArgsSchema: z.ZodType<Prisma.PageCreateManyArgs> = z.object({
  data: z.union([ PageCreateManyInputSchema,PageCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export const PageDeleteArgsSchema: z.ZodType<Prisma.PageDeleteArgs> = z.object({
  select: PageSelectSchema.optional(),
  include: PageIncludeSchema.optional(),
  where: PageWhereUniqueInputSchema,
}).strict()

export const PageUpdateArgsSchema: z.ZodType<Prisma.PageUpdateArgs> = z.object({
  select: PageSelectSchema.optional(),
  include: PageIncludeSchema.optional(),
  data: z.union([ PageUpdateInputSchema,PageUncheckedUpdateInputSchema ]),
  where: PageWhereUniqueInputSchema,
}).strict()

export const PageUpdateManyArgsSchema: z.ZodType<Prisma.PageUpdateManyArgs> = z.object({
  data: z.union([ PageUpdateManyMutationInputSchema,PageUncheckedUpdateManyInputSchema ]),
  where: PageWhereInputSchema.optional(),
}).strict()

export const PageDeleteManyArgsSchema: z.ZodType<Prisma.PageDeleteManyArgs> = z.object({
  where: PageWhereInputSchema.optional(),
}).strict()

export const EditionCreateArgsSchema: z.ZodType<Prisma.EditionCreateArgs> = z.object({
  select: EditionSelectSchema.optional(),
  include: EditionIncludeSchema.optional(),
  data: z.union([ EditionCreateInputSchema,EditionUncheckedCreateInputSchema ]),
}).strict()

export const EditionUpsertArgsSchema: z.ZodType<Prisma.EditionUpsertArgs> = z.object({
  select: EditionSelectSchema.optional(),
  include: EditionIncludeSchema.optional(),
  where: EditionWhereUniqueInputSchema,
  create: z.union([ EditionCreateInputSchema,EditionUncheckedCreateInputSchema ]),
  update: z.union([ EditionUpdateInputSchema,EditionUncheckedUpdateInputSchema ]),
}).strict()

export const EditionCreateManyArgsSchema: z.ZodType<Prisma.EditionCreateManyArgs> = z.object({
  data: z.union([ EditionCreateManyInputSchema,EditionCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export const EditionDeleteArgsSchema: z.ZodType<Prisma.EditionDeleteArgs> = z.object({
  select: EditionSelectSchema.optional(),
  include: EditionIncludeSchema.optional(),
  where: EditionWhereUniqueInputSchema,
}).strict()

export const EditionUpdateArgsSchema: z.ZodType<Prisma.EditionUpdateArgs> = z.object({
  select: EditionSelectSchema.optional(),
  include: EditionIncludeSchema.optional(),
  data: z.union([ EditionUpdateInputSchema,EditionUncheckedUpdateInputSchema ]),
  where: EditionWhereUniqueInputSchema,
}).strict()

export const EditionUpdateManyArgsSchema: z.ZodType<Prisma.EditionUpdateManyArgs> = z.object({
  data: z.union([ EditionUpdateManyMutationInputSchema,EditionUncheckedUpdateManyInputSchema ]),
  where: EditionWhereInputSchema.optional(),
}).strict()

export const EditionDeleteManyArgsSchema: z.ZodType<Prisma.EditionDeleteManyArgs> = z.object({
  where: EditionWhereInputSchema.optional(),
}).strict()

export const ConceptCreateArgsSchema: z.ZodType<Prisma.ConceptCreateArgs> = z.object({
  select: ConceptSelectSchema.optional(),
  include: ConceptIncludeSchema.optional(),
  data: z.union([ ConceptCreateInputSchema,ConceptUncheckedCreateInputSchema ]),
}).strict()

export const ConceptUpsertArgsSchema: z.ZodType<Prisma.ConceptUpsertArgs> = z.object({
  select: ConceptSelectSchema.optional(),
  include: ConceptIncludeSchema.optional(),
  where: ConceptWhereUniqueInputSchema,
  create: z.union([ ConceptCreateInputSchema,ConceptUncheckedCreateInputSchema ]),
  update: z.union([ ConceptUpdateInputSchema,ConceptUncheckedUpdateInputSchema ]),
}).strict()

export const ConceptCreateManyArgsSchema: z.ZodType<Prisma.ConceptCreateManyArgs> = z.object({
  data: z.union([ ConceptCreateManyInputSchema,ConceptCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export const ConceptDeleteArgsSchema: z.ZodType<Prisma.ConceptDeleteArgs> = z.object({
  select: ConceptSelectSchema.optional(),
  include: ConceptIncludeSchema.optional(),
  where: ConceptWhereUniqueInputSchema,
}).strict()

export const ConceptUpdateArgsSchema: z.ZodType<Prisma.ConceptUpdateArgs> = z.object({
  select: ConceptSelectSchema.optional(),
  include: ConceptIncludeSchema.optional(),
  data: z.union([ ConceptUpdateInputSchema,ConceptUncheckedUpdateInputSchema ]),
  where: ConceptWhereUniqueInputSchema,
}).strict()

export const ConceptUpdateManyArgsSchema: z.ZodType<Prisma.ConceptUpdateManyArgs> = z.object({
  data: z.union([ ConceptUpdateManyMutationInputSchema,ConceptUncheckedUpdateManyInputSchema ]),
  where: ConceptWhereInputSchema.optional(),
}).strict()

export const ConceptDeleteManyArgsSchema: z.ZodType<Prisma.ConceptDeleteManyArgs> = z.object({
  where: ConceptWhereInputSchema.optional(),
}).strict()

export const PredictionCreateArgsSchema: z.ZodType<Prisma.PredictionCreateArgs> = z.object({
  select: PredictionSelectSchema.optional(),
  data: z.union([ PredictionCreateInputSchema,PredictionUncheckedCreateInputSchema ]),
}).strict()

export const PredictionUpsertArgsSchema: z.ZodType<Prisma.PredictionUpsertArgs> = z.object({
  select: PredictionSelectSchema.optional(),
  where: PredictionWhereUniqueInputSchema,
  create: z.union([ PredictionCreateInputSchema,PredictionUncheckedCreateInputSchema ]),
  update: z.union([ PredictionUpdateInputSchema,PredictionUncheckedUpdateInputSchema ]),
}).strict()

export const PredictionCreateManyArgsSchema: z.ZodType<Prisma.PredictionCreateManyArgs> = z.object({
  data: z.union([ PredictionCreateManyInputSchema,PredictionCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export const PredictionDeleteArgsSchema: z.ZodType<Prisma.PredictionDeleteArgs> = z.object({
  select: PredictionSelectSchema.optional(),
  where: PredictionWhereUniqueInputSchema,
}).strict()

export const PredictionUpdateArgsSchema: z.ZodType<Prisma.PredictionUpdateArgs> = z.object({
  select: PredictionSelectSchema.optional(),
  data: z.union([ PredictionUpdateInputSchema,PredictionUncheckedUpdateInputSchema ]),
  where: PredictionWhereUniqueInputSchema,
}).strict()

export const PredictionUpdateManyArgsSchema: z.ZodType<Prisma.PredictionUpdateManyArgs> = z.object({
  data: z.union([ PredictionUpdateManyMutationInputSchema,PredictionUncheckedUpdateManyInputSchema ]),
  where: PredictionWhereInputSchema.optional(),
}).strict()

export const PredictionDeleteManyArgsSchema: z.ZodType<Prisma.PredictionDeleteManyArgs> = z.object({
  where: PredictionWhereInputSchema.optional(),
}).strict()