type Routine = { [key: string]: string[][] };

class Schedule {
  private static routine: Routine = {
    low: [
      ['Hidratación', 'Hidratación', 'Nutrición'],
      ['Hidratación', 'Nutrición', 'Hidratación'],
      ['Hidratación', 'Hidratación', 'Nutrición'],
      ['Hidratación', 'Nutrición', 'Reconstrucción']
    ],
    medium: [
      ['Hidratación', 'Nutrición', 'Hidratación'],
      ['Hidratación', 'Hidratación', 'Nutrición'],
      ['Hidratación', 'Nutrición', 'Hidratación'],
      ['Hidratación', 'Nutrición', 'Reconstrucción']
    ],
    high: [
      ['Hidratación', 'Nutrición', 'Reconstrucción'],
      ['Nutrición', 'Hidratación', 'Nutrición'],
      ['Hidratación', 'Nutrición', 'Reconstrucción'],
      ['Hidratación', 'Hidratación', 'Nutrición']
    ]
  };

  static getForPorosityAndWeek(porosity: string, week: number) {
    return Schedule.routine[porosity][week - 1];
  }
}

export default Schedule;
