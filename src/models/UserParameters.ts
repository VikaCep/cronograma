class UserParameters {
  private saved: boolean;
  private days: string[];
  private week: number;
  private porosity: string;

  private static _instance: UserParameters = new UserParameters();

  private constructor() {
    this.porosity = null;
    this.days = null;
    this.week = null;
    this.saved = false;
  }

  public static get Instance() {
    return this._instance || (this._instance = new this());
  }

  areAllParametersSet() {
    return this.porosity && this.days && this.week;
  }

  public get hasSavedParameters() {
    return this.saved;
  }

  /**
   * The hair's porosity
   */
  public setPorosity(porosity: string) {
    this.porosity = porosity;
    if (this.areAllParametersSet()) {
      this.saveInStorage();
    }
  }

  /**
   * The days of the week that the hairwash will be made
   */
  public setDays(days: string[]) {
    this.days = days;
    if (this.areAllParametersSet()) {
      this.saveInStorage();
    }
  }

  /**
   * The schedule starting week
   */
  public setWeek(week: number) {
    this.week = week;
    if (this.areAllParametersSet()) {
      this.saveInStorage();
    }
  }

  public saveInStorage() {
    //save in local storage or db
    this.saved = true;
  }
}

export default UserParameters;
