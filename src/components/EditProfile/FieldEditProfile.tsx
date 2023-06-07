import { FC, ChangeEventHandler } from "react";

interface IFieldEditProfile {
  type: string;
  placeholder: string;
  onChange: ChangeEventHandler;
  value: string;
}

export const FieldEditProfile: FC<IFieldEditProfile> = ({
  type,
  placeholder,
  onChange,
  value,
}) => {
  return (
    <input
      className="w-full px-3 py-2 rounded text-sm placeholder:text-sm placeholder:font-light"
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
};
