import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
export function cn(...inputs) {
    return twMerge(clsx(inputs));
}
export { clsx } from 'clsx';
export { cva } from 'class-variance-authority';
//# sourceMappingURL=index.js.map