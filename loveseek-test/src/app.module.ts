import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { KakaoModule } from './kakao/kakao.module';

@Module({
  imports: [KakaoModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
