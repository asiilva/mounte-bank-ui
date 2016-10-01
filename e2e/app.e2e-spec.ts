import { MountebankUiPage } from './app.po';

describe('mountebank-ui App', function() {
  let page: MountebankUiPage;

  beforeEach(() => {
    page = new MountebankUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
