export const tlds = ['.com', '.io', '.co', '.dev', '.app'] as const;

export type TLD = (typeof tlds)[number];
