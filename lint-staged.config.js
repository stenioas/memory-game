export default {
  '*.{js,jsx,ts,tsx,json,md}': ['prettier --write'],
  '*.{js,jsx,ts,tsx}': [
    'eslint --fix --report-unused-disable-directives --no-ignore --max-warnings 0',
  ],
};
