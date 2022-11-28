export type QueueItemType = {
  file: string,
  title: string,
  user: string,
}

export type AppStateType = {
  admin: boolean,
  cpu_usage: string,
  disk_free_gb: number,
  disk_total_gb: number,
  is_paused: boolean,
  is_pi: boolean,
  logo_path: string,
  memory_available_mb: number,
  memory_total_mb: number,
  next_user: string,
  now_playing_user: string,
  now_playing: string,
  page_title: string,
  pikaraoke_version: string,
  platform: string,
  qrcode_path: string,
  queue: QueueItemType[],
  show_transpose: boolean,
  site_title: string,
  transpose_value: number,
  up_next: string,
  url: string,
  youtube_dl_version: string,
}

export type SongType = {
  fullPath: string,
  title: string,
}
