import { NextFunction, Request, Response} from "express";

function logger(type: "combined" | "short") {
    if (type === "combined")
        return (req: Request, res: Response, next: NextFunction) => {
          console.log(`${(new Date()).toDateString()} ${req.method} ${req.url}`)
        };
    else {
        return (req: Request, res: Response, next: NextFunction) => {
            console.log(`${(new Date()).toDateString()} ${req.url}`);
          };
    }
}

export default logger;