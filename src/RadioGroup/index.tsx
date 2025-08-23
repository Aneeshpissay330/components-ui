// components/RadioGroup.tsx
import * as React from "react";
import type { RadioGroupProps } from "./index.types";

/** injects the component's CSS once into <head> */
function useInjectStyles(id: string, css: string) {
  React.useEffect(() => {
    if (typeof document === "undefined") return;
    if (document.getElementById(id)) return;
    const tag = document.createElement("style");
    tag.id = id;
    tag.appendChild(document.createTextNode(css));
    document.head.appendChild(tag);
  }, [id, css]);
}

const CSS = `
.rg {
  --rg-bg: #ffffff;
  --rg-text: #374151;
  --rg-muted: #6b7280;
  --rg-border: #e5e7eb;
  --rg-active-bg: #000000;
  --rg-active-text: #ffffff;
  --rg-focus: #000000;

  --rg-radius: 12px;
  --rg-item-radius: 12px;
  --rg-gap: 0.5rem;
  --rg-padding-y: 0.5rem;
  --rg-padding-x: 1rem;

  --rg-control-size: 18px;
  --rg-control-border: 2px;
  --rg-control-gap: 0.5rem;

  --rg-transition: 150ms ease;
}

.rg {
  display: flex;
  align-items: center;
  gap: var(--rg-gap);
  background-color: var(--rg-bg);
  border-width: 1px;
  border-style: solid;
  border-color: var(--rg-border);
  border-radius: var(--rg-radius);
  padding: 0.5rem;
}

.rg__item {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: var(--rg-control-gap);
  padding: var(--rg-padding-y) var(--rg-padding-x);
  border-width: 1px;
  border-style: solid;
  border-color: transparent;
  border-radius: var(--rg-item-radius);
  color: var(--rg-text);
  background-color: transparent;
  cursor: pointer;
  user-select: none;
  transition:
    background-color var(--rg-transition),
    color var(--rg-transition),
    border-color var(--rg-transition),
    box-shadow var(--rg-transition);
}
.rg__item:hover:not(.rg__item--disabled) {
  border-color: var(--rg-border);
}
.rg__item--checked {
  background-color: var(--rg-active-bg);
  color: var(--rg-active-text);
  border-color: var(--rg-active-bg);
}
.rg__item--disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.rg__input {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}

.rg__control {
  width: var(--rg-control-size);
  height: var(--rg-control-size);
  border-width: var(--rg-control-border);
  border-style: solid;
  border-color: currentColor;
  border-radius: 9999px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.rg__dot {
  width: calc(var(--rg-control-size) - (var(--rg-control-border) * 4));
  height: calc(var(--rg-control-size) - (var(--rg-control-border) * 4));
  border-radius: 9999px;
  background-color: currentColor;
  opacity: 0;
  transition: opacity var(--rg-transition);
}
.rg__item--checked .rg__dot {
  opacity: 1;
}

.rg__label {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  line-height: 1;
}
.rg__icon { display: inline-flex; align-items: center; }
.rg__text { white-space: nowrap; }

.rg__item:has(.rg__input:focus-visible) {
  box-shadow: 0 0 0 2px var(--rg-focus);
  border-color: transparent;
}
`;

export const RadioGroup: React.FC<RadioGroupProps> = ({
  name,
  value,
  options,
  onChange,
  className,
  style,
}) => {
  useInjectStyles("rg-styles", CSS);

  return (
    <div
      className={`rg ${className || ""}`}
      role="radiogroup"
      aria-labelledby={`${name}-label`}
      style={style}
    >
      {options.map((opt) => {
        const id = `${name}-${opt.value}`;
        const checked = value === opt.value;

        return (
          <label
            key={opt.value}
            htmlFor={id}
            className={`rg__item${checked ? " rg__item--checked" : ""}${
              opt.disabled ? " rg__item--disabled" : ""
            }`}
            aria-checked={checked}
          >
            <input
              id={id}
              className="rg__input"
              type="radio"
              name={name}
              value={opt.value}
              checked={checked}
              disabled={opt.disabled}
              onChange={() => onChange(opt.value)}
            />
            <span className="rg__control" aria-hidden="true">
              <span className="rg__dot" />
            </span>
            <span className="rg__label">
              {opt.icon && <span className="rg__icon">{opt.icon}</span>}
              <span className="rg__text">{opt.label}</span>
            </span>
          </label>
        );
      })}
    </div>
  );
};
