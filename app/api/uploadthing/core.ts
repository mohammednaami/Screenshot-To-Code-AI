/* import { createUploadthing, type FileRouter } from "uploadthing/next";

const f = createUploadthing();

export const ourFileRouter = {
  imageUploader: f({
    image: {
      maxFileSize: "4MB",
      maxFileCount: 1,
    },
  })
    .middleware(async () => {
      return {}; // Ensure this runs correctly
    })
    .onUploadComplete(async ({ file }) => {
      console.log("Upload complete:", file.ufsUrl);
      return { uploadedBy: "test-user" };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
 */