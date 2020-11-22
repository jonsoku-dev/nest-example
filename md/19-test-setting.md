# 단위 테스트
단위 테스트의 경우 NestJS에서 사양 파일을 테스트하는 애플리케이션 소스 코드 파일과 동일한 폴더에 보관하는 것이 일반적입니다. 

각 컨트롤러, 공급자, 서비스 등에는 자체 전용 테스트 파일이 있어야합니다. 테스트 파일 확장자 는 (dot) .spec.ts 여야합니다 (이렇게하면 통합 테스트 도구가 테스트 스위트가있는 테스트 파일로 식별 할 수 있습니다).

# 종단 간 (e2e) 테스트
e2e 테스트의 경우 이러한 파일은 일반적으로 기본적으로 전용`test` 디렉토리에 있습니다. e2e 테스트는 일반적으로 테스트하는 기능에 따라 별도의 파일로 그룹화됩니다. 파일 확장자는 (점) .e2e-spec.ts 여야합니다. 

# 어떻게 다릅니 까?
* 단위 테스트는 개별 클래스와 함수에 중점을 둡니다.

* e2e 테스트는 전체 시스템의 높은 수준의 검증에 적합합니다. e2e 테스트는 최종 사용자가 프로덕션 시스템과의 상호 작용에 더 가깝게 더 종합적인 수준에서 클래스 및 모듈의 상호 작용을 다룹니다.

# test
## cli
```
// Run a unit test for a -specific- file pattern
npm run test:watch -- coffees.service
```

## Basic / empty "Mocks" for Entities in our CoffeesService 
```ts
providers: [
  CoffeesService,
  { provide: Connection, useValue: {} },
  { provide: getRepositoryToken(Flavor), useValue: {} }, // 👈
  { provide: getRepositoryToken(Coffee), useValue: {} }, // 👈
]
```