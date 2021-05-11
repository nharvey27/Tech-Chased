import { Request, Response } from "express";
import { Redis } from "ioredis";

export type MyContext = {
  req: Request & { session: Request };
  res: Response;
  redis: Redis;
};
