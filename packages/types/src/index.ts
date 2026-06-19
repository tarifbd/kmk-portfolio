export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  organization?: string;
  service?: string;
  message: string;
  read: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateContactDto {
  name: string;
  email: string;
  organization?: string;
  service?: string;
  message: string;
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  message: string;
  data?: T;
}
