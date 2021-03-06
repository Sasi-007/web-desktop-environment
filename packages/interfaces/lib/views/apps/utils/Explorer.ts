import { ViewInterface } from "@mcesystems/reflow";

export interface File {
  isFolder: boolean;
  name: string;
  size?: number;
  time?: number;
}

export interface Upload {
  data: string;
  path: string;
}

export interface Move {
  originalPath: string;
  newPath: string;
}

export interface Download {
  file: string;
  downloadLink: string;
}

export interface Input {
  currentPath: string;
  platfromPathSperator: "/" | "\\";
  files: File[];
  downloads: Download[];
}

export interface Events {
  upload: Upload;
  createFolder: string; // name
  move: Move;
  copy: Move;
  delete: string; //name
  requestDownload: string; // name
  changeCurrentPath: string; //path
}

export interface Output {}

export default interface Explorer
  extends ViewInterface<Input, Events, Output> {}
