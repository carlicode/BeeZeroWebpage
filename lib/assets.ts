import { existsSync } from "fs";
import path from "path";

/**
 * Checks if a public asset exists at build/runtime (server-side).
 * For client components, use AssetImage which handles fallbacks gracefully.
 */
export function publicAssetExists(assetPath: string): boolean {
  const normalized = assetPath.startsWith("/") ? assetPath.slice(1) : assetPath;
  return existsSync(path.join(process.cwd(), "public", normalized));
}
