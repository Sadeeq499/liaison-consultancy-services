import { toast } from "react-hot-toast";
import {
  IoCheckmarkCircleOutline,
  IoCloseCircleOutline,
  IoWarningOutline,
  IoInformationCircleOutline,
} from "react-icons/io5";

const toastStyles = {
  style: {
    borderRadius: "12px",
    background: "#fff",
    color: "#1F2937",
    fontSize: "14px",
    padding: "16px",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
    minWidth: "300px",
  },
  duration: 3000,
};

const iconStyles = "text-2xl mr-3 flex-shrink-0";

export const showToast = {
  success: (message) =>
    toast.success(message, {
      ...toastStyles,
      icon: (
        <IoCheckmarkCircleOutline className={`${iconStyles} text-green-700`} />
      ),
      style: {
        ...toastStyles.style,
        border: "1px solid #047857",
        background: "#ECFDF5",
      },
    }),

  error: (message) =>
    toast.error(message, {
      ...toastStyles,
      icon: <IoCloseCircleOutline className={`${iconStyles} text-red-600`} />,
      style: {
        ...toastStyles.style,
        border: "1px solid #DC2626",
        background: "#FEF2F2",
      },
    }),

  warning: (message) =>
    toast.custom(
      (t) => (
        <div
          className={`${
            t.visible ? "animate-enter" : "animate-leave"
          } flex items-center gap-3 bg-amber-50 border border-amber-300 px-4 py-3 rounded-xl shadow-lg min-w-[300px]`}
        >
          <IoWarningOutline className={`${iconStyles} text-amber-600`} />
          <span className="text-amber-800 font-medium">{message}</span>
        </div>
      ),
      toastStyles
    ),

  info: (message) =>
    toast.custom(
      (t) => (
        <div
          className={`${
            t.visible ? "animate-enter" : "animate-leave"
          } flex items-center gap-3 bg-green-50 border border-green-700 px-4 py-3 rounded-xl shadow-lg min-w-[300px]`}
        >
          <IoInformationCircleOutline
            className={`${iconStyles} text-green-700`}
          />
          <span className="text-green-800 font-medium">{message}</span>
        </div>
      ),
      toastStyles
    ),
};

// Add custom animations to tailwind.config.js if not already present
/*
  animation: {
    enter: 'fadeIn 0.3s ease-out',
    leave: 'fadeOut 0.3s ease-in',
  },
  keyframes: {
    fadeIn: {
      '0%': { opacity: 0, transform: 'scale(0.95)' },
      '100%': { opacity: 1, transform: 'scale(1)' },
    },
    fadeOut: {
      '0%': { opacity: 1, transform: 'scale(1)' },
      '100%': { opacity: 0, transform: 'scale(0.95)' },
    },
  },
*/
