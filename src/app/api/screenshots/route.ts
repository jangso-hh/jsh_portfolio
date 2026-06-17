import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

/**
 * 스크린샷 자동 탐색 API
 *
 * GET /api/screenshots?dir={screenshotDir}
 *  → public/images/projects/screenshots/{dir} 폴더의 이미지/영상을
 *    파일명 알파벳순으로 정렬해 URL 배열로 반환합니다.
 *    (순서를 정하려면 01_, 02_ 같은 접두사를 사용하세요.)
 */

const IMAGE_EXT = [".png", ".jpg", ".jpeg", ".gif", ".webp", ".avif"];
const VIDEO_EXT = [".mp4", ".webm", ".mov"];

export function GET(request: NextRequest) {
  const dir = request.nextUrl.searchParams.get("dir");

  if (!dir) {
    return NextResponse.json(
      { error: "Missing 'dir' query param" },
      { status: 400 },
    );
  }

  // 경로 탈출 방지
  const safeDir = path.basename(dir);
  const baseDir = path.join(
    process.cwd(),
    "public",
    "images",
    "projects",
    "screenshots",
    safeDir,
  );

  if (!fs.existsSync(baseDir) || !fs.statSync(baseDir).isDirectory()) {
    return NextResponse.json({ screenshots: [], videos: [] });
  }

  const entries = fs
    .readdirSync(baseDir)
    .filter((f) => !f.startsWith("."))
    .sort((a, b) => a.localeCompare(b));

  const toUrl = (file: string) =>
    `/images/projects/screenshots/${safeDir}/${file}`;

  const screenshots = entries
    .filter((f) => IMAGE_EXT.includes(path.extname(f).toLowerCase()))
    .map(toUrl);

  const videos = entries
    .filter((f) => VIDEO_EXT.includes(path.extname(f).toLowerCase()))
    .map(toUrl);

  return NextResponse.json({ screenshots, videos });
}
