export interface Task {
  reference: string;
  name: string;
  description: string;
  status: 'pending' | 'completed';
}
