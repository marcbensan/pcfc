export const APP_STYLES = {
  sectionContainer: "relative mx-auto max-w-7xl px-4 py-16 md:px-8 lg:py-24",
  sectionHeader: "mb-16 text-center lg:mb-20",
  pageTitle:
    "mb-6 font-monaSans text-4xl font-bold text-slate-900 dark:text-white md:text-6xl lg:text-7xl",
  pageSubtitle:
    "mx-auto max-w-3xl text-lg text-slate-600 dark:text-slate-300 md:text-xl",
  bodyText:
    "space-y-4 font-barlow text-lg leading-relaxed text-slate-700 dark:text-slate-300",
  primaryButton:
    "inline-flex items-center justify-center rounded-lg bg-primarypcfc px-6 py-3 text-base font-semibold text-white shadow-lg transition-all duration-200 hover:bg-blue-800",
  secondaryButton:
    "inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-700 shadow-sm transition-all duration-200 hover:bg-slate-50 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700",
  sectionDivider: "relative flex items-center py-5",
  sectionDividerLine:
    "hidden flex-grow border-4 border-t border-zinc-600 md:flex",
  sectionDividerLineAlt:
    "hidden flex-grow border-4 border-t border-zinc-600 md:block",
  sectionDividerTitle:
    "mx-2 flex-shrink text-center font-barlow text-4xl font-semibold lg:mx-8 md:text-6xl",
  cardSurface:
    "rounded-xl border border-slate-200 bg-white/70 p-6 shadow-lg backdrop-blur-sm dark:border-slate-700 dark:bg-slate-800/70",
  cardCaptionWrap: "absolute bottom-4 left-4 right-4",
  cardCaptionSurface:
    "rounded-lg bg-white/95 p-3 backdrop-blur-sm dark:bg-slate-900/95",
  cardCaptionText: "text-sm font-medium text-slate-900 dark:text-white",
  sectionHeading: "font-barlow text-2xl font-bold text-gray-800 md:text-3xl",
  sectionLead:
    "mx-auto max-w-3xl font-barlow text-lg leading-relaxed text-gray-600 md:text-xl",
  ctaRoundedPrimary:
    "rounded-xl bg-primarypcfc px-6 py-3 font-bold text-white transition-colors duration-300 hover:bg-blue-900",
  ctaRoundedOutline:
    "rounded-xl border-2 border-primarypcfc px-6 py-3 font-bold text-primarypcfc transition-colors duration-300 hover:bg-primarypcfc hover:text-white",
} as const;
