import React, { FC } from "react";

interface IFieldEditProfile {
  type: string;
  placeholder: string;
  onChange: React.ChangeEventHandler;
  value: string;
}

const FieldEditProfile: FC<IFieldEditProfile> = ({
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

export default FieldEditProfile;
