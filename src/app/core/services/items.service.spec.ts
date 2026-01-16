import { ItemsService } from './items.service';
import { mockData } from 'src/app/types';

describe('ItemsService', () => {
  let service: ItemsService;

  beforeEach(() => {
    service = new ItemsService();
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('should return items when state is success', () => {
    const nextSpy = jest.fn();

    service.getItems('success').subscribe(nextSpy);

    jest.advanceTimersByTime(1000);

    expect(nextSpy).toHaveBeenCalledWith(mockData);
  });

  it('should return empty array when state is empty', () => {
    const nextSpy = jest.fn();

    service.getItems('empty').subscribe(nextSpy);

    jest.advanceTimersByTime(1000);

    expect(nextSpy).toHaveBeenCalledWith([]);
  });

  it('should throw error when state is error', () => {
    const errorSpy = jest.fn();

    service.getItems('error').subscribe({
      error: errorSpy,
    });

    jest.advanceTimersByTime(1000);

    expect(errorSpy).toHaveBeenCalled();
    expect(errorSpy.mock.calls[0][0]).toBeInstanceOf(Error);
    expect(errorSpy.mock.calls[0][0].message).toBe('Server error');
  });
});
