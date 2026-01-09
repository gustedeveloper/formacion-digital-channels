export type ViewState = 'loading' | 'success' | 'empty' | 'error';

type Status = 'pending' | 'in progress' | 'completed';

export interface Item {
  id: number;
  title: string;
  status: Status;
}

export const mockData: Item[] = [
  {
    id: 1,
    title: 'Create new Angular project and set basic configuration',
    status: 'completed',
  },
  {
    id: 2,
    title: 'Learn about Web Components and their advantages',
    status: 'pending',
  },
  {
    id: 3,
    title: 'Start onboarding in NTT Data',
    status: 'completed',
  },
  {
    id: 4,
    title: 'Master RxJS operators like swtichMap and debounceTime',
    status: 'in progress',
  },
  {
    id: 5,
    title: 'Review the project architecture and Microfrontend strategy',
    status: 'pending',
  },
  {
    id: 6,
    title: 'Implement the first practical exercise with Angular',
    status: 'in progress',
  },
  {
    id: 7,
    title: 'Write a clear documentation for each exercise',
    status: 'pending',
  },
  {
    id: 8,
    title: 'Create the simulated backend service for the project',
    status: 'pending',
  },
];
