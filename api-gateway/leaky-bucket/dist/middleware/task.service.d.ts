import { LeakyBucketMiddleware } from './leaky-bucket.middleware';
export declare class TaskService {
    constructor(leakyBucketMiddleware: LeakyBucketMiddleware);
    private readonly logger;
    private static readonly rate;
    private consume;
}
