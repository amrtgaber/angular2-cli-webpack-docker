import { Angular2CliWebpackDockerPage } from './app.po';

describe('angular2-cli-webpack-docker App', function() {
  let page: Angular2CliWebpackDockerPage;

  beforeEach(() => {
    page = new Angular2CliWebpackDockerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
