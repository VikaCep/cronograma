import Cookies from 'universal-cookie';

class UserParameters {
  public days: string[];
  public week: number;
  public porosity: string;
  public weekDays: string[];
  private cookies: Cookies;

  private static _instance: UserParameters = new UserParameters();

  private constructor() {
    this.weekDays = ['sun', 'mon', 'tue', 'wed', 'thur', 'fri', 'sat'];
    this.cookies = new Cookies();
    this.porosity = this.cookies.get('porosity') || '';
    this.days = this.cookies.get('days') || [];
    this.week = +this.cookies.get('week') || 1;
  }

  private getMonday(today: Date) {
    const day = today.getDay();
    const diff = today.getDate() - day + (day == 0 ? -6 : 1); // adjust when day is sunday
    return new Date(today.setDate(diff));
  }

  private sortDays(days: string[]) {
    return days.sort(
      (a, b) => this.weekDays.indexOf(a) - this.weekDays.indexOf(b)
    );
  }

  public static get Instance() {
    return this._instance || (this._instance = new this());
  }

  public get hasSavedParameters() {
    return (
      this.cookies.get('porosity') &&
      this.cookies.get('days') &&
      this.cookies.get('week')
    );
  }

  /**
   * The hair's porosity
   */
  public setPorosity(porosity: string) {
    this.porosity = porosity;
    this.cookies.set('porosity', porosity);
  }

  /**
   * The days of the week that the hairwash will be made
   */
  public setDays(days: string[]) {
    this.days = this.sortDays(days);
    this.cookies.set('days', this.days);
  }

  /**
   * The schedule starting week
   */
  public setWeek(week: number) {
    this.week = +week;
    this.cookies.set('week', this.week);
    // set the first day of the week as starting date
    this.cookies.set('startingDate', this.getMonday(new Date()));
  }

  public get currentWeek() {
    const today = new Date();
    const startingDate = new Date(this.cookies.get('startingDate'));
    const totalDays =
      Math.abs(startingDate.getTime() - today.getTime()) /
      (1000 * 60 * 60 * 24);
    let currentWeek = Math.floor(totalDays / 7);
    currentWeek = currentWeek + this.week;
    //start again
    if (currentWeek > 4) {
      currentWeek = currentWeek % 4 || 4;
    }
    return currentWeek;
  }

  /**
   * Reset saved values
   */
  public reset() {
    this.setWeek(1);
    this.setPorosity('');
    this.setDays([]);
  }
}

export default UserParameters;
