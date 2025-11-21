export function createToast(title, description, isError = false) {
  const toast = document.createElement('div');
  const bgClass = isError
    ? 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800'
    : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700';
  const titleClass = isError ? 'text-red-900 dark:text-red-200' : '';
  const descClass = isError ? 'text-red-700 dark:text-red-300' : '';

  toast.className = `fixed bottom-6 right-6 ${bgClass} border rounded-md p-4 shadow-lg z-50 max-w-md`;
  toast.innerHTML = `<strong class="block ${titleClass}">${title}</strong><div class="mt-1 text-sm ${descClass}">${description}</div>`;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 5000);
}
