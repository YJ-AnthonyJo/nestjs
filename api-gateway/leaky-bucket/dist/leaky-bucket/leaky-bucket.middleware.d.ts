import { NestMiddleware } from '@nestjs/common';
import { NextFunction } from 'express';
export declare class LeakyBucketMiddleware implements NestMiddleware {
    static readonly requestQueue: any[];
    static readonly rate: {
        size: number;
        interval: number;
    };
    readonly capacity = 2;
    private readonly logger;
    readonly isFullBucket: () => boolean;
    private add;
    use(req: Request, res: Response, next: NextFunction): any;
}
