import { useState, type ChangeEvent, type UIEvent } from 'react';
import { supabase } from '../utils/supabase';

const UploadComponent: React.FC = () => {
    const [file, setFile] = useState<File | null>(null);
    const [uploading, setUploading] = useState(false);
    const [uploadedUrl, setUploadedUrl] = useState<string | null>(null);

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        const selectedFile = event.target.files?.[0];
        setFile(selectedFile || null);
        console.log(file);
    };

    const handleUpload = async (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        try {
            console.log("startin");
            if (!file) return;
            console.log("uploadin");
            setUploading(true);
            const { data, error } = await supabase.storage
                .from('keepking')
                .upload(`try/${file.name}`, file);

            if (error) {
                throw new Error(error?.message);
            }

            const fileUrl = data?.path ?? "";
            setUploadedUrl(fileUrl);
            console.log('File uploaded successfully:', fileUrl);

        } finally {
            setUploading(false);
        }
    };
    console.log(uploadedUrl);
    return (
        <div>
            <input type="file" onChange={handleFileChange} />
            <button onClick={void handleUpload} disabled={!file || uploading}>
                Upload File
            </button>

            {uploading && <p>Uploading...</p>}
            {uploadedUrl && (
                <p>
                    File uploaded successfully! URL: <a href={uploadedUrl}>{uploadedUrl}</a>
                </p>
            )}
        </div>
    );
};

export default UploadComponent;
