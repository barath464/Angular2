import { SimpleLoginPage } from './app.po';

describe('simple-login App', function() {
  let page: SimpleLoginPage;

  beforeEach(() => {
    page = new SimpleLoginPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
