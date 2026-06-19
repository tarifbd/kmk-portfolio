export interface ContactFormData {
  name: string;
  email: string;
  organization: string;
  service: string;
  message: string;
}

export interface ApiResponse {
  success: boolean;
  message: string;
}
