import { Controller, Get, Query, Res } from '@nestjs/common';
import { KakaoService } from './kakao.service';
import { Response } from 'express';

@Controller('kakao')
export class KakaoController {
  constructor(private readonly kakaoServies: KakaoService) {}

  @Get('callback')
  kakaoSuccess(@Query('code') authCode: string, @Res() res: Response) {
    res.redirect(`loveseek://kakaoSuccess?code=${authCode}`);
  }

  @Get('test')
  test() {
    return 'test';
  }
}
