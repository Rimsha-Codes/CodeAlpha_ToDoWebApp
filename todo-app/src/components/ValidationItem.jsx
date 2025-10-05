
import { CheckCircle, XCircle } from "lucide-react";

export default function ValidationItem({ met, text }) {
  return (
    <div className="flex items-center space-x-2">
      {met ? (
        <CheckCircle className="w-4 h-4 text-green-500" />
      ) : (
        <XCircle className="w-4 h-4 text-gray-300" />
      )}
      <span className={`text-xs ${met ? "text-green-600 font-semibold" : "text-gray-500"}`}>
        {text}
      </span>
    </div>
  );
}
