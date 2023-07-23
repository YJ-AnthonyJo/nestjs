# nestjs
nestjs 공부용 단위 프로젝트 모음

## 기본
[nestjs 공식 예제](https://github.com/nestjs/nest/tree/master/sample)

[nestjs 폴더 구조 예시](https://github.com/CatsMiaow/nestjs-project-structure)

# 프로젝트 설명
> **Note**  
> yarn berry를 사용하는 경우, 해당 프로젝트에서 vscode를 실행시켜줘야합니다.  
> eg. yarn-berry__with__prisma의 경우, `vscode yarn-berry__with__prisma` 로 vscode를 열어주고,
> 필요시 `yarn dlx @yarnpkg/sdks vscode` 와 typescript version을 workspace로 설정해주는 과정이 필요합니다.  
> 참고: https://yarnpkg.com/getting-started/editor-sdks#vscode

### api-gateway/leaky-bucket
Api Gateway가 지원해야할 다양한 기능 중 Throttling 구현의 첫번째. Leaky Bucket 알고리즘을 이용한 구현


### yarn-berry__with__prisma
yarn berry와 prisma를 사용할 때, boilerplate입니다.
https://pmandocom.tistory.com/149
