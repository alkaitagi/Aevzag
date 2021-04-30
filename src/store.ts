import { ref } from "vue";

export const lects = ref<string[]>([]);
export const root =
  (process.env.VUE_APP_STORE as string) ??
  "https://raw.githubusercontent.com/alkaitagi/avzag/store/";

export async function loadJSON<T>(path: string, defaultValue?: T) {
  if (!path.endsWith(".json")) path += ".json";
  return await fetch(root + path)
    .then((r) => r.json())
    .then((j) => j as T)
    .catch(() => defaultValue as T);
}
export async function loadLectsJSON<T>(path: string, lects_?: string[]) {
  const files = {} as Record<string, T>;
  for (const lect of lects_ ?? lects.value) {
    const file = await loadJSON<T>(lect + "/" + path);
    if (file) files[lect] = file;
  }
  return files;
}
