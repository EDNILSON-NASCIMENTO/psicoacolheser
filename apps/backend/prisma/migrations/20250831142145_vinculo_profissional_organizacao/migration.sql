-- CreateTable
CREATE TABLE `vinculo_profissional_organizacao` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `organization_id` INTEGER NOT NULL,
    `admin_id` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `vinculo_profissional_organizacao_admin_id_key`(`admin_id`),
    INDEX `vinculo_profissional_organizacao_organization_id_idx`(`organization_id`),
    UNIQUE INDEX `vinculo_profissional_organizacao_user_id_organization_id_key`(`user_id`, `organization_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `vinculo_profissional_organizacao` ADD CONSTRAINT `vinculo_profissional_organizacao_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `vinculo_profissional_organizacao` ADD CONSTRAINT `vinculo_profissional_organizacao_organization_id_fkey` FOREIGN KEY (`organization_id`) REFERENCES `organizacao`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `vinculo_profissional_organizacao` ADD CONSTRAINT `vinculo_profissional_organizacao_admin_id_fkey` FOREIGN KEY (`admin_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
