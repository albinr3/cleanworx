export interface ContentSubsection {
  title: string;
  paragraphs: string[];
}

export interface ContentSection {
  title: string;
  paragraphs: string[];
  subsections?: ContentSubsection[];
}
