import { NestFactory } from '@nestjs/core';
import { join } from 'path';
import { AppModule } from './app.module';

declare const module: any;

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);

  app.useStaticAssets(join(process.cwd(), 'public'));
  app.setBaseViewsDir(join(process.cwd(), 'views'));
  app.setViewEngine('hbs');

  await app.listen(3000);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
