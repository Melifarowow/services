import { JsCalcPage } from './app.po';

describe('js-calc App', () => {
  let page: JsCalcPage;

  beforeEach(() => {
    page = new JsCalcPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
