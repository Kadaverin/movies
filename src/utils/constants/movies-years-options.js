const PRESENT_YEAR = new Date().getFullYear();
const START_YEAR = 1900;

const length = PRESENT_YEAR - START_YEAR;

export const MOVIES_YEARS_OPTIONS = Array.from({ length }, (_, index) => {
  const year = PRESENT_YEAR - index;

  return {
    value: year,
    label: year,
  };
});
