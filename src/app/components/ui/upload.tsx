// src/components/ui/upload.tsx
import * as React from "react";

export interface UploadProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Upload = React.forwardRef<HTMLInputElement, UploadProps>(
  ({ className, label, ...props }, ref) => {
    return (
      <div className="mt-2">
        {label && (
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {label}
          </label>
        )}
        <input
          type="file"
          className={`block w-full text-sm text-gray-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-md file:border-0
            file:text-sm file:font-semibold
            file:bg-blue-50 file:text-blue-700
            hover:file:bg-blue-100
            ${className}`}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);
Upload.displayName = "Upload";

export { Upload };