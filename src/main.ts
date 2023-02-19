import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'

import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  const port = +process.env.PORT || 8080

  app.enableCors()
  app.useLogger(['log', 'verbose'])
  app.setGlobalPrefix('/api/v1')
  app.useGlobalPipes(new ValidationPipe())

  await app.listen(port, () =>
    console.log(`🚀server running at http://localhost:${port}`),
  )
}
bootstrap()
