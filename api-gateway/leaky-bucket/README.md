# Nest.js를 이용한 api-gateway 구현하기 - Throttling using Leaky Bucket

Api Gateway가 지원해야할 다양한 기능 중 Throttling 구현의 첫번째.
Leaky Bucket 알고리즘을 이용한 구현

## 참고 링크

[개념 및 소스코드](https://yozm.wishket.com/magazine/detail/1900/?fbclid=IwAR1474Ab2JJbF9HmXk6IpwhPeiygxLw3PJvPAzW0q4tceNT_4MiH_QC6FnM&mibextid=l066kq)

[API Gateway 패턴](https://learn.microsoft.com/ko-kr/dotnet/architecture/microservices/architect-microservice-container-applications/direct-client-to-microservice-communication-versus-the-api-gateway-pattern)
(위 링크(개념 및 소스코드)에도 추가 자료 존재.)

[Nest.js 폴더구조](https://github.com/CatsMiaow/nestjs-project-structure)

[Nest.js Middleware](https://docs.nestjs.com/middleware#global-middleware)

작동화면  
![작동화면](https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExMTEzN2QxMGRjNzQxNzkyMDc5ZjRlNjNiZWQ5YjMwNDUxMTk4OTcxYyZjdD1n/DKNLm57vhWPU0jQGe1/giphy.gif)
