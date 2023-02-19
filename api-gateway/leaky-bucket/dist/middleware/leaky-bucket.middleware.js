"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var LeakyBucketMiddleware_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeakyBucketMiddleware = void 0;
const common_1 = require("@nestjs/common");
let LeakyBucketMiddleware = LeakyBucketMiddleware_1 = class LeakyBucketMiddleware {
    constructor() {
        this.capacity = 2;
        this.logger = new common_1.Logger(LeakyBucketMiddleware_1.name);
        this.isFullBucket = () => LeakyBucketMiddleware_1.requestQueue.length === this.capacity;
    }
    add(req, res, next) {
        if (this.isFullBucket())
            return false;
        LeakyBucketMiddleware_1.requestQueue.push({ req, res, next });
        return true;
    }
    use(req, res, next) {
        if (this.add(req, res, next))
            this.logger.log(`${req.method} ${req.url} - ${new Date()}`);
        else
            throw new common_1.ForbiddenException({
                statusCode: 403,
                message: 'Api Gateway Throttling',
            });
    }
};
LeakyBucketMiddleware.requestQueue = [];
LeakyBucketMiddleware.rate = { size: 2, interval: 5000 };
LeakyBucketMiddleware = LeakyBucketMiddleware_1 = __decorate([
    (0, common_1.Injectable)()
], LeakyBucketMiddleware);
exports.LeakyBucketMiddleware = LeakyBucketMiddleware;
//# sourceMappingURL=leaky-bucket.middleware.js.map