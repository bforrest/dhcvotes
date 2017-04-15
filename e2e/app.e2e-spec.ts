import { DhcVotesPage } from './app.po';

describe('dhc-votes App', function() {
  let page: DhcVotesPage;

  beforeEach(() => {
    page = new DhcVotesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
