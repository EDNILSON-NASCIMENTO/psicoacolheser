/*
  Warnings:

  - The values [PSICOLOGO] on the enum `users_user_type` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterTable
ALTER TABLE `users` MODIFY `user_type` ENUM('PROFISSIONAL', 'PACIENTE', 'ADMIN', 'VISITANTE') NOT NULL;

-- CreateTable
CREATE TABLE `organizacao` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `identificacao` VARCHAR(191) NOT NULL,
    `razao_social` VARCHAR(191) NOT NULL,
    `cnpj_cpf` VARCHAR(191) NOT NULL,
    `descricao` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `organizacao_cnpj_cpf_key`(`cnpj_cpf`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `endereco` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `cep` VARCHAR(191) NOT NULL,
    `logradouro` VARCHAR(191) NOT NULL,
    `numero` VARCHAR(191) NOT NULL,
    `bairro` VARCHAR(191) NOT NULL,
    `cidade` VARCHAR(191) NOT NULL,
    `tipo` ENUM('USUARIO', 'ORGANIZACAO') NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `vinculo_endereco` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_endereco` INTEGER NOT NULL,
    `id_organizacao` INTEGER NULL,
    `id_user` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `vinculo_endereco` ADD CONSTRAINT `vinculo_endereco_id_endereco_fkey` FOREIGN KEY (`id_endereco`) REFERENCES `endereco`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `vinculo_endereco` ADD CONSTRAINT `vinculo_endereco_id_organizacao_fkey` FOREIGN KEY (`id_organizacao`) REFERENCES `organizacao`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `vinculo_endereco` ADD CONSTRAINT `vinculo_endereco_id_user_fkey` FOREIGN KEY (`id_user`) REFERENCES `users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
