import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'

import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  const port = +process.env.PORT || 8080

  app.setGlobalPrefix('/api/v1')

  app.useGlobalPipes(new ValidationPipe())
  await app.listen(port)
}
bootstrap()
