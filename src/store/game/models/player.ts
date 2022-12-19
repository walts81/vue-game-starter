export interface Player {
  key: string;
  name: string;
}

export const getDefaultPlayer = (
  name = '',
): Player => ({
  key: '',
  name,
});
