import { UploadButton } from "@uploadthing/react";

import type { OurFileRouter } from "~/server/uploadthing";
// You need to import our styles for the button to look right. Best to import in the root /_app.tsx but this is fine
import "@uploadthing/react/styles.css";
import { useState } from "react";

export default function AddCashRecord() {
    const [docUrl, SetDocUrl] = useState<string | undefined>(undefined);

    console.log(docUrl);
    return (
        <main className="flex flex-col items-center">
            <UploadButton<OurFileRouter>
                endpoint="imageUploader"
                onClientUploadComplete={(res) => {
                    // Do something with the response
                    console.log("Files: ", res);
                    res?.map((r)=>{
                        SetDocUrl(r.fileUrl);
                    })
                    alert("Upload Completed");
                }}
                onUploadError={(error: Error) => {
                    // Do something with the error.
                    alert(`ERROR! ${error.message}`);
                }}
            />
        </main>
    );
}