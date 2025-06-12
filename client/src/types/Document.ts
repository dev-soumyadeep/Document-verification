export interface Field {
  name: string;
  value: string;
}

export interface IssueFormData {
  documentName: string;
  description: string;
  recipientEmail: string;
  document: File | null;
  fields: Field[];
}

export interface HolderDocument {
  title: string;
  issuer: string;
  date: string;
  details: {
    description?: string;
    fields: Field[];
  };
}
