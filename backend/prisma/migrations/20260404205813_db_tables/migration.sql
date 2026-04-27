-- CreateTable
CREATE TABLE "Usuario" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Destinos" (
    "id" SERIAL NOT NULL,
    "nome" TEXT,
    "descricao" TEXT NOT NULL,
    "coordenadas" TEXT NOT NULL,
    "imagem" TEXT NOT NULL,

    CONSTRAINT "Destinos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Comentarios" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "authorId" INTEGER NOT NULL,

    CONSTRAINT "Comentarios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Admin" (
    "id" SERIAL NOT NULL,
    "password" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "Admin_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Destinos_descricao_key" ON "Destinos"("descricao");

-- CreateIndex
CREATE UNIQUE INDEX "Destinos_coordenadas_key" ON "Destinos"("coordenadas");

-- CreateIndex
CREATE UNIQUE INDEX "Destinos_imagem_key" ON "Destinos"("imagem");

-- CreateIndex
CREATE UNIQUE INDEX "Admin_password_key" ON "Admin"("password");

-- CreateIndex
CREATE UNIQUE INDEX "Admin_email_key" ON "Admin"("email");

-- AddForeignKey
ALTER TABLE "Comentarios" ADD CONSTRAINT "Comentarios_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
