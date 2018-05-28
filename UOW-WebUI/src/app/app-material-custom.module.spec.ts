import { AppMaterialCustomModule } from './app-material-custom.module';

describe('AppMaterialCustomModule', () => {
  let appMaterialCustomModule: AppMaterialCustomModule;

  beforeEach(() => {
    appMaterialCustomModule = new AppMaterialCustomModule();
  });

  it('should create an instance', () => {
    expect(appMaterialCustomModule).toBeTruthy();
  });
});
