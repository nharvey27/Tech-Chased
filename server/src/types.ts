import { Request, Response } from "express";

export type MyContext = {
  req: Request & { session: Request };
  res: Response;
};
