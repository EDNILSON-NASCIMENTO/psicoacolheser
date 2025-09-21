
import z from "zod";

export const scheduleDto = z.object({
    id: z.number().int().optional(),
    profissional_id: z.number().int(),
    paciente_id: z.number().int().optional().nullable(),
    horario: z.coerce.date(),
    status: z.enum(['LIVRE', 'OCUPADO']).optional().default('LIVRE'),
})

export type ScheduleDto = z.infer<typeof scheduleDto>
export type CreateScheduleDto = Omit<ScheduleDto, 'id'>