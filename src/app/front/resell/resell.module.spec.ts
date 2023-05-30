import { ResellModule } from './resell.module';

describe('ResellModule', () => {
  let resellModule: ResellModule;

  beforeEach(() => {
    resellModule = new ResellModule();
  });

  it('should create an instance', () => {
    expect(resellModule).toBeTruthy();
  });
});
