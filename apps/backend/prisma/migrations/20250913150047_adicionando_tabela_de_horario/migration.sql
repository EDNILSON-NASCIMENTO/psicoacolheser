-- CreateTable
CREATE TABLE `agenda_profissional` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `profissional_id` INTEGER NOT NULL,
    `paciente_id` INTEGER NULL,
    `horario` DATETIME(3) NOT NULL,
    `status` ENUM('LIVRE', 'OCUPADO') NOT NULL DEFAULT 'LIVRE',
    `usersId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `agenda_profissional` ADD CONSTRAINT `agenda_profissional_profissional_id_fkey` FOREIGN KEY (`profissional_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `agenda_profissional` ADD CONSTRAINT `agenda_profissional_paciente_id_fkey` FOREIGN KEY (`paciente_id`) REFERENCES `users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
