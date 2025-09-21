export class ScheduleAlreadyExistsError extends Error {
  constructor(){
    super('Something went wrong on creating Schedule')
  }
}