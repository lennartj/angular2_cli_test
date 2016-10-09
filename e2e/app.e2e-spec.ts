import { ScssTestPage } from './app.po';

describe('scss-test App', function() {
  let page: ScssTestPage;

  beforeEach(() => {
    page = new ScssTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
