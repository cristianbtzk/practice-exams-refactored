import { renderHook, act } from '@testing-library/react-hooks';
import MockAdapter from 'axios-mock-adapter';
import { AuthProvider, useAuth } from '../../hooks/auth';
import api from '../../services/api';

const apiMock = new MockAdapter(api);

describe('Auth Hook', () => {
  const apiResponse = {
    user: {
      id: 'user_id',
      name: 'Fake Name',
      email: 'email@email.com',
    },
    token: 'fake token',
  };
  it('should be able to sign in', async () => {
    apiMock.onPost('/sessions').reply(200, apiResponse);

    const setItemSpy = jest.spyOn(Storage.prototype, 'setItem');

    const { result, waitForNextUpdate } = renderHook(() => useAuth(), {
      wrapper: AuthProvider,
    });

    result.current.signIn({
      email: 'email@email.com',
      password: 'password',
    });

    await waitForNextUpdate();

    expect(setItemSpy).toHaveBeenCalledWith(
      '@Psycho-tests:user',
      JSON.stringify(apiResponse.user)
    );
    expect(setItemSpy).toHaveBeenCalledWith(
      '@Psycho-tests:token',
      apiResponse.token
    );
    expect(result.current.user.email).toEqual('email@email.com');
  });

  it('should restore saved data from storage', () => {
    jest.spyOn(Storage.prototype, 'getItem').mockImplementation((key) => {
      switch (key) {
        case '@Psycho-tests:token':
          return 'fake token';
        case '@Psycho-tests:user':
          return JSON.stringify({
            id: 'user_id',
            name: 'Fake Name',
            email: 'email@email.com',
          });
        default:
          return null;
      }
    });

    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthProvider,
    });

    expect(result.current.user.email).toEqual('email@email.com');
  });

  it('should be able to sign out', async () => {
    jest.spyOn(Storage.prototype, 'getItem').mockImplementation((key) => {
      switch (key) {
        case '@Psycho-tests:token':
          return 'fake token';
        case '@Psycho-tests:user':
          return JSON.stringify({
            id: 'user_id',
            name: 'Fake Name',
            email: 'email@email.com',
          });
        default:
          return null;
      }
    });

    const removeItemSpy = jest.spyOn(Storage.prototype, 'removeItem');

    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthProvider,
    });

    act(() => {
      result.current.signOut();
    });

    expect(removeItemSpy).toHaveBeenCalledTimes(2);
    expect(result.current.user).toBeUndefined();
  });
});
