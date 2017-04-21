import { CadastroContatosPage } from './app.po';

describe('cadastro-contatos App', () => {
  let page: CadastroContatosPage;

  beforeEach(() => {
    page = new CadastroContatosPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
