import { useTranslations } from "next-intl";

interface CtaBtnProps {
  onlyPrimary?: boolean;
}

export default function CTA_BTN({ onlyPrimary = false }: CtaBtnProps) {
  const t = useTranslations("authbtn");

  return (
    <div className="flex flex-col w-full p-4 md:p-0 my-5 md:my-0  md:flex-row md:w-auto gap-6">
      {!onlyPrimary && (
        <button
          type="button"
          className="text-neutral-400  border-neutral-700 rounded-md px-2 cursor-pointer transition-colors hover:text-white"
        >
          {t("login")}
        </button>
      )}

      <button
        type="button"
        className="bg-orange-500 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-orange-600 transition-colors"
      >
        {t("signup")}
      </button>
    </div>
  );
}
