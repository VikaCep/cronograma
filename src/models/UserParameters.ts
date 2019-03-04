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
    this.week = this.cookies.get('week') || 1;
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
    this.week = week;
    this.cookies.set('week', week);
  }

  /**
   * Reset saved values
   */
  public reset() {
    this.porosity = '';
    this.days = [];
    this.week = 1;
    this.cookies.set('porosity', this.porosity);
    this.cookies.set('days', this.days);
    this.cookies.set('week', this.week);
  }
}

export default UserParameters;
