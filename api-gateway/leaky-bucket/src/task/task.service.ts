import { LeakyBucketMiddleware } from '../middleware/leaky-bucket.middleware';
import { Interval } from '@nestjs/schedule';
import { Injectable, Logger } from '@nestjs/common';
@Injectable()
export class TaskService {
  private readonly logger = new Logger(TaskService.name);
  private static readonly rate = LeakyBucketMiddleware.rate;

  @Interval(TaskService.rate.interval)
  private consume() {
    this.logger.log('leak..' + LeakyBucketMiddleware.requestQueue.length);
    for (let i = 0; i < TaskService.rate.size; i++) {
      const job = LeakyBucketMiddleware.requestQueue.shift();
      job?.next();
    }
  }
}
