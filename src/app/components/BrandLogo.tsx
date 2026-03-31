import { ImageWithFallback } from "./figma/ImageWithFallback";
import { cn } from "./ui/utils";

type BrandLogoProps = {
  className?: string;
  nameClassName?: string;
  logoClassName?: string;
  showName?: boolean;
};

export function BrandLogo({
  className,
  nameClassName,
  logoClassName,
  showName = true,
}: BrandLogoProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div
        className={cn(
          "w-10 h-10 rounded-lg overflow-hidden bg-gradient-to-br from-[#0A1F44] to-[#06b6d4]",
          logoClassName,
        )}
      >
        <ImageWithFallback
          src="/src/assets/unishark-logo.png"
          alt="UniShark logo"
          className="w-full h-full object-cover"
        />
      </div>
      {showName && <span className={cn("text-xl font-bold text-[#0A1F44]", nameClassName)}>UniShark</span>}
    </div>
  );
}