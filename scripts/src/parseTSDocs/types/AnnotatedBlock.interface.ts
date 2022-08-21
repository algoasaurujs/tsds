export interface AnnotatedParam {
  name: string;
  content: string;
  type: string;
}

export interface AnnotatedReturns {
  type: string;
  content: string;
}

export interface AnnotatedTypeParam {
  name: string;
  content: string;
}

export interface AnnotatedBlock {
  summary?: string;
  type?: string;
  typeParams?: AnnotatedTypeParam[];
  params?: AnnotatedParam[];
  returns?: AnnotatedReturns;
  overload: string | null;
  name?: string;
  memberof?: string;
  isMethod?: boolean;
  isPrivate?: boolean;
  isClass?: boolean;
  isProperty?: boolean;
  example?: string;
  remarks?: string;
}
