import React from "react";

const FormField = ({ label, type, name, value, onChange }) => {
  return (
    <div>
      <label>
        {label}
        {type === "textarea" ? (
          <textarea
            type={type}
            name={name}
            value={value}
            onChange={(e) => onChange(e)}
          />
        ) : (
          <input
            type={type}
            name={name}
            value={value}
            onChange={(e) => onChange(e)}
          />
        )}
      </label>
    </div>
  );
};

export default FormField;
