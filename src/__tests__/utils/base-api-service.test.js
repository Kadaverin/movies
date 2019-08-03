import { BaseApiService } from '../../utils/api/base-api-service';

describe('BaseApiService', () => {
  const mockApiCallerRes = {
    data: [{ id: 1, name: 'uhu' }],
  };

  const mockRequest = jest.fn().mockResolvedValue(mockApiCallerRes);

  const mockApiCaller = {
    request: mockRequest,
  };

  const serviceConstructorConfigs = {
    baseUrl: '/base',
    apiCaller: mockApiCaller,
  };

  const Service = new BaseApiService(serviceConstructorConfigs);

  describe('#request()', () => {
    test('calls apiCaller#request()', async () => {
      await Service.request({});
      expect(mockApiCaller.request).toHaveBeenCalledTimes(1);
    });

    test('takes configs object and passes to apiCaller#request()', async () => {
      const arg = {
        url: 'url',
        method: 'method',
        body: 'body',
        params: {},
        ignored: 'foo',
      };

      const expectedApiCallerRequestArg = {
        url: 'url',
        method: 'method',
        body: 'body',
        params: {},
      };

      await Service.request(arg);
      expect(mockApiCaller.request).toHaveBeenCalledWith(
        expectedApiCallerRequestArg,
      );
    });

    describe('formatResponse prop present is present in argument', () => {
      test('calls formatValue with data prop from obj returned from apiCaller.request', async () => {
        const formatResponse = jest.fn();

        await Service.request({ formatResponse });

        expect(formatResponse).toHaveBeenCalledWith(mockApiCallerRes.data);
      });

      test('returns formated response data', async () => {
        const MOK_FORMATED_RES = 2;

        const formatResponse = jest.fn().mockReturnValue(MOK_FORMATED_RES);

        const res = await Service.request({ formatResponse });

        expect(res).toEqual(MOK_FORMATED_RES);
      });
    });

    describe('formatResponse prop is absent in argument', () => {
      test('returns data prop from object returned by apiCaller.request method', async () => {
        const res = await Service.request({});

        expect(res).toEqual(mockApiCallerRes.data);
      });
    });
  });

  describe('#get()', () => {
    const spy = jest.spyOn(Service, 'request');

    beforeEach(() => {
      spy.mockClear();
    });

    test('calls BaseApiService#request()', async () => {
      await Service.get({});

      expect(spy).toHaveBeenCalledTimes(1);
    });

    test('passes to BaseApiService#request() right configs', async () => {
      const formatResponse = () => null;
      const params = {};
      const url = 'url';

      await Service.get();

      await Service.get({ url });

      await Service.get({
        url,
        method: 'ingored',
        params,
        formatResponse,
      });

      expect(spy).toHaveBeenNthCalledWith(1, {
        url: serviceConstructorConfigs.baseUrl,
        method: 'GET',
        params: undefined,
        formatResponse: undefined,
      });

      expect(spy).toHaveBeenNthCalledWith(2, {
        url,
        method: 'GET',
        params: undefined,
        formatResponse: undefined,
      });

      expect(spy).toHaveBeenNthCalledWith(3, {
        url,
        method: 'GET',
        params,
        formatResponse,
      });
    });

    test('returns BaseApiService#request()', async () => {
      const MOCK_RETURNED_VALUE = [{ id: 1, name: 'mock ' }];

      spy.mockReturnValue(MOCK_RETURNED_VALUE);

      const res = await Service.get({});

      expect(res).toEqual(MOCK_RETURNED_VALUE);
    });
  });

  describe('#getOne', () => {
    const spy = jest.spyOn(Service, 'get');

    beforeEach(() => {
      spy.mockClear();
    });

    test('calls BaseApiService#get()', async () => {
      await Service.getOne();
      expect(spy).toHaveBeenCalledTimes(1);
    });

    test('passes right params to BaseApiService#get()', async () => {
      const FIRST_ID = 1;
      const SECOND_ID = 131;
      const formatResponse = () => null;

      await Service.getOne(FIRST_ID);
      await Service.getOne(SECOND_ID, formatResponse);

      expect(spy).toHaveBeenNthCalledWith(1, {
        url: `${serviceConstructorConfigs.baseUrl}/${FIRST_ID}`,
        formatResponse: undefined,
      });

      expect(spy).toHaveBeenNthCalledWith(2, {
        url: `${serviceConstructorConfigs.baseUrl}/${SECOND_ID}`,
        formatResponse,
      });
    });
  });
});
