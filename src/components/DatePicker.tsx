import { LegacyRef, forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import DatePickerReact, {
  ReactDatePickerProps,
  registerLocale,
} from "react-datepicker";
import ptBR from "date-fns/locale/pt-BR";

import "react-datepicker/dist/react-datepicker.css";

registerLocale("pt-BR", ptBR);

interface InputProps extends ReactDatePickerProps {
  error?: boolean;
  errorMessage?: string;
}

function DatePicker(
  { className, error, errorMessage, ...props }: InputProps,
  ref: LegacyRef<HTMLInputElement> | undefined
) {
  return (
    <div className="flex w-full flex-col">
      <DatePickerReact
        locale="pt-BR"
        dateFormat="dd/MM/yyyy"
        wrapperClassName="w-full"
        className={twMerge(
          className,
          "rounded-lg border border-gray-300 bg-white p-2 text-sm font-normal text-dark placeholder-black placeholder-opacity-20 outline-none transition-all focus:ring-1 focus:ring-primary",
          error ? "border-red-500" : ""
        )}
        enableTabLoop={false}
        {...props}
      />
      {error && errorMessage && (
        <div className="mt-1 text-xs text-red-500">{errorMessage}</div>
      )}
    </div>
  );
}

export default forwardRef(DatePicker);
