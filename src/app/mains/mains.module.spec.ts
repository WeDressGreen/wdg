import { MainsModule } from './mains.module';

describe('MainsModule', () => {
  let mainsModule: MainsModule;

  beforeEach(() => {
    mainsModule = new MainsModule();
  });

  it('should create an instance', () => {
    expect(mainsModule).toBeTruthy();
  });
});
