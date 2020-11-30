import { NextFunction, Request as ExpressRequest, Response as ExpressResponse } from "express";


export type PageHandler = (req: ExpressRequest, res: ExpressResponse) => Promise<any> | any;
export const render_page = (page:any , handler?: PageHandler) => {
  return async (req: ExpressRequest, res: ExpressResponse, next: NextFunction) => {
    let result: any = undefined;
    
    if (handler)
    result = await handler(req, res);
    console.log(page,"hiiiiiiiiiiiiiiiiiiiiiii")
    res.render(page, result);
  };
};