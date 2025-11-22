"use client";

import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Select } from "@/components/ui/Select";
import { Button } from "@/components/ui/Button";
import { useLanguage } from "@/components/lang/LanguageProvider";

export default function FormsPageClient() {
  const { t } = useLanguage();

  return (
    <div className="mx-auto max-w-3xl px-6 py-10 space-y-8">
      <header>
        <h1 className="text-4xl font-heading mb-2">
          {t("forms.title")}
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          {t("forms.subtitle")}
        </p>
      </header>

      <section className="space-y-6">
        <h2 className="text-2xl font-heading">
          {t("forms.example.title")}
        </h2>

        <form className="space-y-4 bg-white dark:bg-nk-charcoal/60 rounded-2xl border p-6">
          <Input
            id="demo-name"
            label={t("forms.example.name.label")}
            placeholder={t("forms.example.name.placeholder")}
            hint={t("forms.example.name.hint")}
          />

          <Input
            id="demo-email"
            label={t("forms.example.email.label")}
            type="email"
            placeholder={t("forms.example.email.placeholder")}
          />

          <Select
            id="demo-role"
            label={t("forms.example.role.label")}
            defaultValue=""
            hint={t("forms.example.role.hint")}
          >
            <option value="" disabled>
              {t("forms.example.role.placeholder")}
            </option>
            <option value="frontend">
              {t("forms.example.role.frontend")}
            </option>
            <option value="fullstack">
              {t("forms.example.role.fullstack")}
            </option>
            <option value="designer">
              {t("forms.example.role.designer")}
            </option>
          </Select>

          <Textarea
            id="demo-message"
            label={t("forms.example.message.label")}
            placeholder={t("forms.example.message.placeholder")}
          />

          <div className="pt-2">
            <Button type="submit">
              {t("forms.example.submit")}
            </Button>
          </div>
        </form>
      </section>
    </div>
  );
}
