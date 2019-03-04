import Cookies from 'universal-cookie';

class UserParameters {
  public days: string[];
  public week: number;
  public porosity: string;
  private cookies: Cookies;

  private static _instance: UserParameters = new UserParameters();

  private constructor() {
    this.cookies = new Cookies();
    this.porosity = this.cookies.get('porosity') || '';
    this.days = this.cookies.get('days') || [];
    this.week = +this.cookies.get('week') || 1;
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
    this.days = days;
    this.cookies.set('days', days);
  }

  /**
   * The schedule starting week
   */
  public setWeek(week: number) {
    this.week = +week;
    this.cookies.set('week', this.week);
    this.cookies.set('startingDate', new Date());
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
