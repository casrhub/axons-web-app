import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ['/api/process_transcript' , '/api/product', '/api/getFeedbacks'], // Makes /api/hello accessible to everyone
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
