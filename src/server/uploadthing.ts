/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/** server/uploadthing.ts */
import { createUploadthing, type FileRouter } from "uploadthing/next-legacy";

const f = createUploadthing();

//const auth = (req: NextApiRequest, res: NextApiResponse) => ({ id: "fakeId" }); // Fake auth function

// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
    // Define as many FileRoutes as you like, each with a unique routeSlug
    imageUploader: f({ blob: { maxFileSize: "4MB" } })
        
        .onUploadComplete( ({ metadata, file }) => {
            // This code RUNS ON YOUR SERVER after upload
            console.log("Upload complete for userId:");

            console.log("file url", file.url);
        }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;