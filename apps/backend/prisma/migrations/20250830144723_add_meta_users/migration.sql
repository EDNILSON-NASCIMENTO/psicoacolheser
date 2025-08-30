-- DropForeignKey
ALTER TABLE `vinculo_endereco` DROP FOREIGN KEY `vinculo_endereco_id_endereco_fkey`;

-- DropForeignKey
ALTER TABLE `vinculo_endereco` DROP FOREIGN KEY `vinculo_endereco_id_organizacao_fkey`;

-- DropForeignKey
ALTER TABLE `vinculo_endereco` DROP FOREIGN KEY `vinculo_endereco_id_user_fkey`;

-- DropIndex
DROP INDEX `vinculo_endereco_id_endereco_fkey` ON `vinculo_endereco`;

-- DropIndex
DROP INDEX `vinculo_endereco_id_organizacao_fkey` ON `vinculo_endereco`;

-- DropIndex
DROP INDEX `vinculo_endereco_id_user_fkey` ON `vinculo_endereco`;

-- CreateTable
CREATE TABLE `meta_user` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `meta_key` VARCHAR(191) NOT NULL,
    `meta_value` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL,
    `updated_at` DATETIME(3) NULL,

    INDEX `meta_user_user_id_idx`(`user_id`),
    UNIQUE INDEX `meta_user_user_id_meta_key_key`(`user_id`, `meta_key`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `vinculo_endereco` ADD CONSTRAINT `vinculo_endereco_id_endereco_fkey` FOREIGN KEY (`id_endereco`) REFERENCES `endereco`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `vinculo_endereco` ADD CONSTRAINT `vinculo_endereco_id_organizacao_fkey` FOREIGN KEY (`id_organizacao`) REFERENCES `organizacao`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `vinculo_endereco` ADD CONSTRAINT `vinculo_endereco_id_user_fkey` FOREIGN KEY (`id_user`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `meta_user` ADD CONSTRAINT `meta_user_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
