-- CreateEnum
CREATE TYPE "FileResourceType" AS ENUM ('ckpt', 'image', 'model', 'pdf', 'safetensor', 'video');

-- CreateEnum
CREATE TYPE "FilePrivacy" AS ENUM ('public-read', 'private');

-- CreateEnum
CREATE TYPE "CloudFileRegion" AS ENUM ('us-east-1');

-- CreateEnum
CREATE TYPE "Locale" AS ENUM ('en_US', 'en');

-- CreateEnum
CREATE TYPE "PageStatus" AS ENUM ('DRAFT', 'PUBLISHED');

-- CreateEnum
CREATE TYPE "PageType" AS ENUM ('FrontCover', 'Body', 'BackCover');

-- CreateEnum
CREATE TYPE "PageArtworkType" AS ENUM ('machine_generated', 'user_creative_work', 'user_scribble');

-- CreateEnum
CREATE TYPE "PageTextType" AS ENUM ('machine_generated', 'machine_translated', 'user_creative_work', 'user_translated');

-- CreateEnum
CREATE TYPE "ConceptType" AS ENUM ('person', 'place', 'thing');

-- CreateEnum
CREATE TYPE "ConceptStatus" AS ENUM ('CREATED', 'TRAINING', 'TRAINED');

-- CreateEnum
CREATE TYPE "LRScheduler" AS ENUM ('linear', 'cosine', 'cosine_with_restarts', 'polynomial', 'constant', 'constant_with_warmup');

-- CreateTable
CREATE TABLE "cloud_files" (
    "id" TEXT NOT NULL,
    "filename" TEXT NOT NULL,
    "stem" TEXT NOT NULL,
    "extension" TEXT NOT NULL,
    "size" INTEGER NOT NULL,
    "mime" TEXT NOT NULL,
    "resource_type" "FileResourceType" NOT NULL,
    "metadata" JSONB,
    "key" TEXT NOT NULL,
    "bucket" TEXT NOT NULL,
    "region" "CloudFileRegion" NOT NULL,
    "publicUrl" TEXT,
    "privacy" "FilePrivacy" NOT NULL DEFAULT 'private',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "cloud_files_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "photos" (
    "id" TEXT NOT NULL,
    "height" SMALLINT NOT NULL,
    "width" SMALLINT NOT NULL,
    "tags" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "file_id" TEXT NOT NULL,

    CONSTRAINT "photos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pdfs" (
    "id" TEXT NOT NULL,
    "height" SMALLINT NOT NULL,
    "width" SMALLINT NOT NULL,
    "pages" SMALLINT NOT NULL,
    "tags" TEXT[],
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "file_id" TEXT NOT NULL,

    CONSTRAINT "pdfs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Author" (
    "id" TEXT NOT NULL,

    CONSTRAINT "Author_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Artist" (
    "id" TEXT NOT NULL,

    CONSTRAINT "Artist_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Translator" (
    "id" TEXT NOT NULL,

    CONSTRAINT "Translator_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "stories" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "artist_id" TEXT,
    "author_id" TEXT,

    CONSTRAINT "stories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "page_artworks" (
    "id" TEXT NOT NULL,
    "status" "PageStatus" NOT NULL DEFAULT 'DRAFT',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "page_id" TEXT NOT NULL,
    "story_id" TEXT NOT NULL,
    "artist_id" TEXT NOT NULL,
    "photo_id" TEXT NOT NULL,

    CONSTRAINT "page_artworks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "page_texts" (
    "id" TEXT NOT NULL,
    "status" "PageStatus" NOT NULL DEFAULT 'DRAFT',
    "locale" "Locale" NOT NULL,
    "text" TEXT NOT NULL,
    "type" "PageTextType" NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "page_id" TEXT NOT NULL,
    "story_id" TEXT NOT NULL,
    "author_id" TEXT,
    "translator_id" TEXT,

    CONSTRAINT "page_texts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pages" (
    "id" TEXT NOT NULL,
    "status" "PageStatus" NOT NULL DEFAULT 'DRAFT',
    "type" "PageType" NOT NULL,
    "page_number" SMALLINT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "story_id" TEXT NOT NULL,

    CONSTRAINT "pages_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "editions" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "user_id" TEXT NOT NULL,
    "pdf_id" TEXT NOT NULL,

    CONSTRAINT "editions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "concepts" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" "ConceptType" NOT NULL,
    "status" "ConceptStatus" NOT NULL DEFAULT 'CREATED',
    "description" TEXT,
    "prompt" TEXT NOT NULL,
    "identifier" TEXT NOT NULL,
    "class_noun" TEXT NOT NULL,
    "negative_prompt" TEXT NOT NULL,
    "instance_prompt" TEXT NOT NULL,
    "class_prompt" TEXT NOT NULL,
    "positive_prompts" TEXT[],
    "negative_prompts" TEXT[],
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "dreambooth_training_id" TEXT,
    "dreambooth_model_uri" TEXT,

    CONSTRAINT "concepts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "predictions" (
    "id" TEXT NOT NULL,
    "uuid" TEXT NOT NULL,
    "input" JSONB,
    "output" JSONB,
    "status" TEXT,
    "created_at" TIMESTAMP(3),
    "started_at" TIMESTAMP(3),
    "completed_at" TIMESTAMP(3),
    "version" TEXT,
    "metrics" JSONB,
    "error" TEXT,
    "logs" TEXT,

    CONSTRAINT "predictions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DreamBoothTraining" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "instance_prompt" TEXT NOT NULL,
    "class_prompt" TEXT NOT NULL,
    "instance_data" TEXT NOT NULL,
    "class_data" TEXT NOT NULL,
    "num_class_images" INTEGER NOT NULL DEFAULT 50,
    "save_sample_prompt" TEXT,
    "save_sample_negative_prompt" TEXT,
    "n_save_sample" INTEGER NOT NULL DEFAULT 4,
    "save_guidance_scale" DOUBLE PRECISION NOT NULL DEFAULT 7.5,
    "save_infer_steps" INTEGER NOT NULL DEFAULT 50,
    "pad_tokens" BOOLEAN NOT NULL DEFAULT false,
    "with_prior_preservation" BOOLEAN NOT NULL DEFAULT true,
    "prior_loss_weight" DOUBLE PRECISION NOT NULL DEFAULT 1.0,
    "seed" INTEGER NOT NULL DEFAULT 1337,
    "resolution" INTEGER NOT NULL DEFAULT 512,
    "center_crop" BOOLEAN NOT NULL DEFAULT false,
    "train_text_encoder" BOOLEAN NOT NULL DEFAULT true,
    "train_batch_size" INTEGER NOT NULL DEFAULT 1,
    "sample_batch_size" INTEGER NOT NULL DEFAULT 4,
    "num_train_epochs" INTEGER NOT NULL DEFAULT 1,
    "max_train_steps" INTEGER NOT NULL DEFAULT 2000,
    "gradient_accumulation_steps" INTEGER NOT NULL DEFAULT 1,
    "gradient_checkpointing" BOOLEAN NOT NULL DEFAULT false,
    "learning_rate" DOUBLE PRECISION NOT NULL DEFAULT 0.000001,
    "scale_lr" BOOLEAN NOT NULL DEFAULT false,
    "lr_scheduler" "LRScheduler" NOT NULL DEFAULT 'constant',
    "lr_warmup_steps" INTEGER NOT NULL DEFAULT 0,
    "use_8bit_adam" BOOLEAN NOT NULL DEFAULT false,
    "adam_beta1" DOUBLE PRECISION NOT NULL DEFAULT 0.9,
    "adam_beta2" DOUBLE PRECISION NOT NULL DEFAULT 0.999,
    "adam_weight_decay" DOUBLE PRECISION NOT NULL DEFAULT 0.01,
    "adam_epsilon" DOUBLE PRECISION NOT NULL DEFAULT 0.00000001,
    "max_grad_norm" DOUBLE PRECISION NOT NULL DEFAULT 1.0,

    CONSTRAINT "DreamBoothTraining_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ConceptToPhoto" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "cloud_files_publicUrl_key" ON "cloud_files"("publicUrl");

-- CreateIndex
CREATE UNIQUE INDEX "cloud_files_region_bucket_key_key" ON "cloud_files"("region", "bucket", "key");

-- CreateIndex
CREATE UNIQUE INDEX "photos_file_id_key" ON "photos"("file_id");

-- CreateIndex
CREATE UNIQUE INDEX "pdfs_file_id_key" ON "pdfs"("file_id");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE INDEX "Story_artistId" ON "stories"("artist_id");

-- CreateIndex
CREATE INDEX "Story_authorId" ON "stories"("author_id");

-- CreateIndex
CREATE INDEX "PageArtwork_pageId" ON "page_artworks"("page_id");

-- CreateIndex
CREATE INDEX "PageText_pageId" ON "page_texts"("page_id");

-- CreateIndex
CREATE INDEX "Page_storyId" ON "pages"("story_id");

-- CreateIndex
CREATE UNIQUE INDEX "editions_user_id_key" ON "editions"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "editions_pdf_id_key" ON "editions"("pdf_id");

-- CreateIndex
CREATE INDEX "Edition_userId" ON "editions"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "predictions_uuid_key" ON "predictions"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "_ConceptToPhoto_AB_unique" ON "_ConceptToPhoto"("A", "B");

-- CreateIndex
CREATE INDEX "_ConceptToPhoto_B_index" ON "_ConceptToPhoto"("B");

-- AddForeignKey
ALTER TABLE "photos" ADD CONSTRAINT "photos_file_id_fkey" FOREIGN KEY ("file_id") REFERENCES "cloud_files"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pdfs" ADD CONSTRAINT "pdfs_file_id_fkey" FOREIGN KEY ("file_id") REFERENCES "cloud_files"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "stories" ADD CONSTRAINT "stories_artist_id_fkey" FOREIGN KEY ("artist_id") REFERENCES "Artist"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "stories" ADD CONSTRAINT "stories_author_id_fkey" FOREIGN KEY ("author_id") REFERENCES "Author"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "page_artworks" ADD CONSTRAINT "page_artworks_page_id_fkey" FOREIGN KEY ("page_id") REFERENCES "pages"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "page_artworks" ADD CONSTRAINT "page_artworks_story_id_fkey" FOREIGN KEY ("story_id") REFERENCES "stories"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "page_artworks" ADD CONSTRAINT "page_artworks_artist_id_fkey" FOREIGN KEY ("artist_id") REFERENCES "Artist"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "page_artworks" ADD CONSTRAINT "page_artworks_photo_id_fkey" FOREIGN KEY ("photo_id") REFERENCES "photos"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "page_texts" ADD CONSTRAINT "page_texts_page_id_fkey" FOREIGN KEY ("page_id") REFERENCES "pages"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "page_texts" ADD CONSTRAINT "page_texts_story_id_fkey" FOREIGN KEY ("story_id") REFERENCES "stories"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "page_texts" ADD CONSTRAINT "page_texts_author_id_fkey" FOREIGN KEY ("author_id") REFERENCES "Author"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "page_texts" ADD CONSTRAINT "page_texts_translator_id_fkey" FOREIGN KEY ("translator_id") REFERENCES "Translator"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pages" ADD CONSTRAINT "pages_story_id_fkey" FOREIGN KEY ("story_id") REFERENCES "stories"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "editions" ADD CONSTRAINT "editions_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "editions" ADD CONSTRAINT "editions_pdf_id_fkey" FOREIGN KEY ("pdf_id") REFERENCES "pdfs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "concepts" ADD CONSTRAINT "concepts_dreambooth_training_id_fkey" FOREIGN KEY ("dreambooth_training_id") REFERENCES "DreamBoothTraining"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ConceptToPhoto" ADD CONSTRAINT "_ConceptToPhoto_A_fkey" FOREIGN KEY ("A") REFERENCES "concepts"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ConceptToPhoto" ADD CONSTRAINT "_ConceptToPhoto_B_fkey" FOREIGN KEY ("B") REFERENCES "photos"("id") ON DELETE CASCADE ON UPDATE CASCADE;
