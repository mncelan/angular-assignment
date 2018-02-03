import { AngularAssessmentPage } from './app.po';

describe('angular-assessment App', () => {
  let page: AngularAssessmentPage;

  beforeEach(() => {
    page = new AngularAssessmentPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
