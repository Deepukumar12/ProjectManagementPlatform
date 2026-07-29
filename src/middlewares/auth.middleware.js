import cookieParser from "cookie-parser";
import { User } from "../models/user.models.js";
import { ApiError } from "../utils/api-error.js";
import { asyncHandler } from "../utils/async-handler.js";
import jwt from "jsonwebtoken";



// export const verifyJWT = asyncHandler(async (req, res, next) => {
//     const token =
//         req.cookies?.accessToken ||
//         req.header("Authorization")?.replace("Bearer ", "").trim();

//     if (!token) {
//         throw new ApiError(401, "Unauthorized request");
//     }

//     if (!process.env.ACCESS_TOKEN_SECRET) {
//         throw new ApiError(500, "ACCESS_TOKEN_SECRET is missing");
//     }

//     try {
//         const decodedToken = jwt.verify(
//             token,
//             process.env.ACCESS_TOKEN_SECRET
//         );

//         if (!decodedToken?._id) {
//             throw new ApiError(401, "Invalid access token");
//         }

//         const user = await User.findById(decodedToken._id).select(
//             "-password -refreshToken -emailVerificationToken -emailVerificationTokenExpiry"
//         );

//         if (!user) {
//             throw new ApiError(401, "User not found");
//         }

//         req.user = user;

//         next();
//     } catch (error) {
//         if (error.name === "TokenExpiredError") {
//             throw new ApiError(401, "Access token expired");
//         }

//         if (error.name === "JsonWebTokenError") {
//             throw new ApiError(401, "Invalid access token");
//         }

//         throw new ApiError(500, "Error while verifying access token");
//     }
// });







export const verifyJWT = asyncHandler(async (req, res, next) => {
    // console.log("header", req.header);

    const authHeader = req.header("Authorization");

    const token =
    req.cookies?.accessToken ||
    authHeader?.replace("Bearer ", "");
    
    // const token = req.cookies?.accessToken || req.header("Authorization")?.
    // replace("Bearer ", "").trim();
    // console.log("token", token);

    if(!token)
    {
        throw new ApiError(401, "Unauthorized request");
    }

    try {
        const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        const user = await User.findById(decodedToken?._id).select(
            "-password -refreshToken -emailVerificationToken -emailVerificationTokenExpiry"
        );

        if(!user)
        {
            throw new ApiError(401, "Invalid access token");
        }

        req.user = user;
        next();
    } catch (error) {
        throw new ApiError(401, "Invalid access token");
    }
});
