import { LucideMessageSquareWarning } from "lucide-react";
import { cloneElement } from "react";
type PlaceholderProps = {
  label: string;
  icon?: React.ReactElement;
  button?: React.ReactElement;
};

const Placeholder = ({
  label,
  icon = <LucideMessageSquareWarning />,
  button = <div />,
}: PlaceholderProps) => {
  return (
    <div className="flex-1 flex flex-col self-center items-center justify-center gap-y-2">
      {/* @ts-expect-error - cloneElement is not typed */}
      {cloneElement(icon, { className: "w-16 h-16" })}
      <h2 className="text-lg text-center">{label}</h2>
      {/* @ts-expect-error - cloneElement is not typed */}
      {cloneElement(button, { className: "h-10" })}
    </div>
  );
};

export { Placeholder };
