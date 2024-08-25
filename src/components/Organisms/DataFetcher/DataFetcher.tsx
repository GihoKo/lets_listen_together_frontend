import { UseQueryResult } from '@tanstack/react-query';

interface DataFetcherProps<T, P> {
  fetchFunction: (params: P) => UseQueryResult<T, Error>;
  params: P;
  render: (data: T | undefined) => JSX.Element;
}

export default function DataFetcher<T, P>({ fetchFunction, params, render }: DataFetcherProps<T, P>) {
  const { data } = fetchFunction(params);

  return render(data);
}

{
  /* # Example
    <DataFetcher<Channel[], string | undefined>
    fetchFunction={useGetMyOwnChannels}
    params={userId}
    render={(data: Channel[] | undefined) => <MyChannelsContainer isOpen={isOpen} data={data} />}
    /> 
*/
}
