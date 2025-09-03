// src/components/ui/label.tsx
import * as react from "react";

export const Label = ({ children, htmlFor, ...props }) => (
  <label htmlFor={htmlFor} {...props} className="block text-sm font-medium text-gray-700">
    {children}
  </label>
);