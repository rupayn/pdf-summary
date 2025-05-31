"use client";
import React, { useState } from "react";
import { FileUpload } from "../ui/file-upload";

export function FileUploadDemo() {
  const [file, setFile] = useState<File | undefined>(undefined);

  const handleFileUpload = (uploadedFile: File | undefined) => {
    setFile(uploadedFile);
    console.log("Uploaded file: ", typeof(uploadedFile));
  };

  return (
    <div className="w-full max-w-4xl mx-auto min-h-96 border border-dashed bg-white dark:bg-black border-neutral-200 dark:border-neutral-800 rounded-lg">
      <FileUpload onChange={handleFileUpload} />
      {file && (
        <div className="mt-4 text-sm text-neutral-700 dark:text-neutral-300 px-4">
          <p><strong>File Name:</strong> {file.name}</p>
          <p><strong>Type:</strong> {file.type}</p>
          <p><strong>Size:</strong> {(file.size / (1024 * 1024)).toFixed(2)} MB</p>
          <p><strong>Last Modified:</strong> {new Date(file.lastModified).toLocaleDateString()}</p>
          <div className="w-full flex items-center justify-center font-bold h-10 mt-6">
            <button className="px-12 py-4 rounded-full bg-[#1ED760] font-bold text-white tracking-widest uppercase transform hover:scale-105 hover:bg-[#21e065] transition-colors duration-200">
                Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
