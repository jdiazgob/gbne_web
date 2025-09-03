// src/componentes/ui/textarea.tsx
import * as React from "react";

export const Textarea = ({ ...props }) => (
  <textarea {...props} className="w-full px-4 py-2 border border-gray-300 rounded-md focus: outline-none focus:ring-2 focus:ring-blue-500" />
);