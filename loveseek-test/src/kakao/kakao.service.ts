import { Injectable } from '@nestjs/common';

@Injectable()
export class KakaoService {
  getKakaoCallback(authCode: string): string {
    console.log(authCode);
    return '인가완료';
  }
}
