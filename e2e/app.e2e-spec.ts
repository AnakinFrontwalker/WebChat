import { WebChatPage } from './app.po';

describe('WebChat App', function() {
  let page: WebChatPage;

  beforeEach(() => {
    page = new WebChatPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
