"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var TaskService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskService = void 0;
const leaky_bucket_middleware_1 = require("../middleware/leaky-bucket.middleware");
const schedule_1 = require("@nestjs/schedule");
const common_1 = require("@nestjs/common");
let TaskService = TaskService_1 = class TaskService {
    constructor() {
        this.logger = new common_1.Logger(TaskService_1.name);
    }
    consume() {
        this.logger.log('leak..' + leaky_bucket_middleware_1.LeakyBucketMiddleware.requestQueue.length);
        for (let i = 0; i < TaskService_1.rate.size; i++) {
            const job = leaky_bucket_middleware_1.LeakyBucketMiddleware.requestQueue.shift();
            job === null || job === void 0 ? void 0 : job.next();
        }
    }
};
TaskService.rate = leaky_bucket_middleware_1.LeakyBucketMiddleware.rate;
__decorate([
    (0, schedule_1.Interval)(TaskService_1.rate.interval),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TaskService.prototype, "consume", null);
TaskService = TaskService_1 = __decorate([
    (0, common_1.Injectable)()
], TaskService);
exports.TaskService = TaskService;
//# sourceMappingURL=task.service.js.map