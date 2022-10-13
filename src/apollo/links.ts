import { ApolloLink, HttpLink, Operation } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';

/**
 * 에러 로깅
 */
export const errorLogger = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) => {
      return console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      );
    });
  }

  if (networkError) {
    console.log(`[Network error]: ${networkError}`);
  }
});

/**
 * graphql을 타는 모든 request에 대한 로깅
 */
export const logger = new ApolloLink((operation, forward) => {
  const startTime = Date.now();
  console.log(`Operation ${operation.operationName} starts at ${startTime}`);
  console.log(`context :`, operation.getContext());
  operation.setContext({ start: startTime });

  return forward(operation).map(data => {
    const endTime = Date.now() - operation.getContext().start;
    console.log(
      `Operation ${operation.operationName} took ${endTime} to complete`
    );
    return data;
  });
});

const REISSUE_REQUEST_FLAG = 'reissue_token';

const reissueMock = new Promise(resolve => {
  setTimeout(() => {
    resolve('new token');
  }, 3000);
});

/**
 * token Handler의 방향 결정 함수
 */
const test = (operation: Operation): boolean => {
  return operation.getContext()[REISSUE_REQUEST_FLAG];
};

/**
 * accessToken 재발급
 */
const reissueAccessToken = setContext(async () => {
  /**
   *TODO 여기서의 Request는 에러 핸들링을 어떻게 해야할까...
   */
  return reissueMock.then(token => {
    console.log(token);
    return {
      headers: {
        authorization: token
      }
    };
  });
});

/**
 * 기존에 발급받은 토큰을 Header에 추가
 */
const addAccessToken = setContext(() => {
  const token = localStorage.getItem('token');
  return {
    headers: {
      authorization: token ?? 'fake token'
    }
  };
});

/**
 * header에 토큰 추가 및 token refresh handler
 * */
export const tokenHandler = onError(
  /*
    networkError혹은 graphQLErrors 둘 중 하나를 사용해서 accessToken 만료를 감지해야함
   */
  /* eslint-disable-next-line */
  ({ graphQLErrors, networkError, operation, forward }) => {
    if (graphQLErrors || networkError) {
      operation.setContext({
        [REISSUE_REQUEST_FLAG]: true
      });
      return forward(operation);
    }
  }
).split(test, reissueAccessToken, addAccessToken);

export const httpLink = new HttpLink({
  uri: process.env.NEXT_PUBLIC_URI
});
