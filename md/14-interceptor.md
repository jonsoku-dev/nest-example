# 인터셉터는 다음을 가능하게합니다.
* 메서드 실행 전후에 추가 논리 바인딩
* 메서드에서 반환 된 결과를 변환
* 메서드에서 throw 된 예외를 변환
* 기본 메서드 동작 확장
* 특정 조건에 따라 (예 : 다양한 응답 캐싱과 같은 작업 수행) 메서드를 완전히 재정의하거나

# Generate WrapResponseInterceptor with Nest CLI 
nest g interceptor common/interceptors/wrap-response

# WrapResponseInterceptor FINAL CODE 
data로 wrapping한다.
```ts
import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class WrapResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log('Before...');

    return next.handle().pipe(map(data => ({ data })));
  }
}
```

# Apply Interceptor globally in main.ts file
```
...

app.useGlobalInterceptors(new WrapResponseInterceptor());

...
```