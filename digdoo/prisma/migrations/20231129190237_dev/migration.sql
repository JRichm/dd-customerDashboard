-- CreateTable
CREATE TABLE "business" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(30) NOT NULL,
    "industry" VARCHAR(30) NOT NULL,
    "location" VARCHAR(50) NOT NULL,
    "created_at" DATE NOT NULL,
    "updated_at" DATE,
    "conversation_id" INTEGER,

    CONSTRAINT "business_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "business_user" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER,
    "business_id" INTEGER,

    CONSTRAINT "business_user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "conversation" (
    "id" SERIAL NOT NULL,
    "participants" VARCHAR NOT NULL,
    "last_message_id" INTEGER,
    "created_at" DATE NOT NULL,
    "updated_at" DATE,
    "related_conversations" VARCHAR,

    CONSTRAINT "conversation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "local_image" (
    "id" SERIAL NOT NULL,
    "ticket_id" INTEGER,
    "created_at" DATE NOT NULL,

    CONSTRAINT "local_image_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "message" (
    "id" SERIAL NOT NULL,
    "data" VARCHAR(255) NOT NULL,
    "from_user_id" INTEGER,
    "conversation_id" INTEGER,
    "previous_message_id" INTEGER,
    "created_at" DATE NOT NULL,

    CONSTRAINT "message_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "status_type" (
    "id" SERIAL NOT NULL,
    "level" VARCHAR(12) NOT NULL,

    CONSTRAINT "status_type_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ticket" (
    "id" SERIAL NOT NULL,
    "business_id" INTEGER,
    "ticket_type_id" INTEGER,
    "urgency_level_id" INTEGER,
    "status_id" INTEGER,
    "assigned_to_user_id" INTEGER,
    "due_date" DATE NOT NULL,
    "created_at" DATE NOT NULL,
    "updated_at" DATE,

    CONSTRAINT "ticket_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ticket_type" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(20) NOT NULL,

    CONSTRAINT "ticket_type_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "urgency_level" (
    "id" SERIAL NOT NULL,
    "level" VARCHAR(12) NOT NULL,

    CONSTRAINT "urgency_level_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "url" (
    "id" SERIAL NOT NULL,
    "ticket_id" INTEGER,
    "created_at" DATE NOT NULL,

    CONSTRAINT "url_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "email" VARCHAR NOT NULL,
    "username" VARCHAR(20) NOT NULL,
    "full_name" VARCHAR(30) NOT NULL,
    "password_hash" VARCHAR(255) NOT NULL,
    "created_at" DATE NOT NULL,
    "updated_at" DATE,
    "last_login" DATE,
    "provider" VARCHAR NOT NULL,
    "provider_identifier" VARCHAR NOT NULL,
    "is_developer" BOOLEAN,
    "is_business_owner" BOOLEAN,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);
